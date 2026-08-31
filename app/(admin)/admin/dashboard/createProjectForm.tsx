"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import "@/assets/styles/tiptap-editor.css";
import { EMPTY_TIPTAP_DOC, isTiptapDocEmpty, normalizeTiptapDoc } from "@/lib/tiptap";
import { RichTextEditorProvider } from "@/components/editor/rich-text-context";
import RichTextToolbar from "@/components/editor/rich-text-toolbar";
import RichTextField from "@/components/editor/rich-text-field";

const projectStatusOptions = ["active", "completed", "paused"] as const;
const publishOptions = ["draft", "published"] as const;

type ProjectStatus = (typeof projectStatusOptions)[number];
type PublishStatus = (typeof publishOptions)[number];

type ProjectFormProps = {
  mode?: "create" | "edit";
  initialData?: {
    id?: string;
    title: object; // Tiptap JSON doc
    content: object;
    projectStatus: ProjectStatus;
    publishStatus: PublishStatus;
    images?: string[];
  };
  onSuccess?: () => void;
  onCancel?: () => void;
};

export default function CreateProjectForm({
  mode = "create",
  initialData,
  onSuccess,
  onCancel,
}: ProjectFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: EMPTY_TIPTAP_DOC as object,
    content: EMPTY_TIPTAP_DOC as object,
    files: null as FileList | null,
    projectStatus: "active" as ProjectStatus,
    publishStatus: "draft" as PublishStatus,
    images: [] as string[],
  });
  const [imagesToRemove, setImagesToRemove] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setForm((prev) => ({
        ...prev,
        title: initialData.title ? normalizeTiptapDoc(initialData.title) : EMPTY_TIPTAP_DOC,
        content: initialData.content ? normalizeTiptapDoc(initialData.content) : EMPTY_TIPTAP_DOC,
        projectStatus: initialData.projectStatus || "active",
        publishStatus: initialData.publishStatus || "draft",
        images: initialData.images || [],
      }));
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as (HTMLInputElement & HTMLSelectElement);
    if (name === "files" && files) {
      setForm((prev) => ({ ...prev, files }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTitleChange = (json: object) => {
    setForm((prev) => ({ ...prev, title: json }));
  };

  const handleEditorChange = (json: object) => {
    setForm((prev) => ({ ...prev, content: json }));
  };

  const handleRemoveImage = (url: string) => {
    setImagesToRemove((prev) => [...prev, url]);
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((img) => img !== url),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (mode === "create" && (!form.files || form.files.length === 0)) {
      alert("Please upload at least one image.");
      setLoading(false);
      return;
    }

    if (isTiptapDocEmpty(form.title)) {
      alert("Please give this project a title.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", JSON.stringify(form.title));
    formData.append("content", JSON.stringify(form.content));
    formData.append("projectStatus", form.projectStatus);
    formData.append("publishStatus", form.publishStatus);

    if (mode === "edit") {
      formData.append("images", JSON.stringify(form.images));
      formData.append("imagesToRemove", JSON.stringify(imagesToRemove));
    }

    if (form.files && form.files.length > 0) {
      Array.from(form.files).forEach((file) => {
        formData.append("files", file);
      });
    }

    try {
      let res;
      if (mode === "edit" && initialData?.id) {
        res = await fetch(`/api/projects/${initialData.id}`, {
          method: "PATCH",
          body: formData,
        });
      } else {
        res = await fetch("/api/projects/upload", {
          method: "POST",
          body: formData,
        });
      }

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const errorMessage = errorData?.error || `Failed to ${mode} project`;
        throw new Error(errorMessage);
      }

      if (onSuccess) onSuccess();
      router.refresh();
      router.push("/admin/dashboard");

    } catch {
      alert(`There was an error ${mode === "edit" ? "updating" : "creating"} the project. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto mt-4 space-y-6 p-6 bg-background rounded-xl shadow"
      encType="multipart/form-data"
    >
      <div className="text-2xl font-bold mb-4 text-center">
        {mode === "edit" ? "Edit Project" : "Create New Project"}
      </div>
      {/*
        Shared toolbar sits on top of the form: it acts on whichever
        rich-text field below (Title or Content) is currently (or was
        last) focused.
      */}
      <RichTextEditorProvider key={initialData?.id ?? "new-project"}>
        <div className="tiptap-wrapper">
          <RichTextToolbar showLinkUnlink />
          <div className="space-y-2 p-3">
            <Label htmlFor="title">Title</Label>
            <RichTextField
              content={form.title}
              onChange={handleTitleChange}
              placeholder="Project title..."
            />
          </div>
          <div className="space-y-2 border-t border-gray-200 p-3 dark:border-gray-800">
            <Label htmlFor="content">Content</Label>
            <RichTextField content={form.content} onChange={handleEditorChange} />
          </div>
        </div>
      </RichTextEditorProvider>
      {/* Existing Images (edit mode) */}
      {mode === "edit" && form.images && form.images.length > 0 && (
        <div className="space-y-2">
          <Label>Current Images</Label>
          <div className="flex flex-wrap gap-4">
            {form.images.map((img) => (
              <div key={img} className="relative">
                <img
                  src={img}
                  alt="Project"
                  className="w-24 h-24 object-cover rounded border"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  onClick={() => handleRemoveImage(img)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Image Upload */}
      <div className="space-y-2">
        <Label htmlFor="files">
          {mode === "edit"
            ? "Image Upload (optional, will replace/add to current images)"
            : "Image Upload (required)"}
        </Label>
        <Input
          id="files"
          name="files"
          type="file"
          accept="image/png,image/jpeg"
          multiple
          onChange={handleChange}
          required={mode === "create"}
        />
      </div>
      {/* Publish Status */}
      <div className="space-y-2">
        <Label htmlFor="publishStatus">Publish Status</Label>
        <select
          id="publishStatus"
          name="publishStatus"
          value={form.publishStatus}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {publishOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      {/* Project Status */}
      <div className="space-y-2">
        <Label htmlFor="projectStatus">Project Status</Label>
        <select
          id="projectStatus"
          name="projectStatus"
          value={form.projectStatus}
          onChange={handleChange}
          className="w-full border border-input rounded-md p-2 text-sm bg-background text-foreground"
        >
          {projectStatusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-4 w-full">
        <Button
          type="submit"
          disabled={loading}
          className="w-1/2 bg-[#9f004d]">
          {loading
            ? mode === "edit"
              ? "Updating..."
              : "Creating..."
            : mode === "edit"
              ? "Update Project"
              : "Create Project"}
        </Button>
        <Button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="w-1/2 bg-black">
          Cancel
        </Button>
       
      </div>
    </form>
  );
}