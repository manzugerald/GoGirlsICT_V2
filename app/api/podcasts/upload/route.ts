import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const POST = async (req: Request) => {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Only allow illustration images (png, jpg, jpeg) or mp3 audio
  const allowedImageExts = [".png", ".jpg", ".jpeg"];
  const allowedAudioExts = [".mp3"];
  const ext = path.extname(file.name).toLowerCase();

  let uploadDir = "";
  if (allowedImageExts.includes(ext)) {
    uploadDir = "public/assets/images/podcasts";
  } else if (allowedAudioExts.includes(ext)) {
    uploadDir = "public/assets/audio/podcasts";
  } else {
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
  }

  // Ensure the upload directory exists
  const uploadPath = path.join(process.cwd(), uploadDir);
  await fs.mkdir(uploadPath, { recursive: true });

  // Save the file
  const filename = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
  const filePath = path.join(uploadPath, filename);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filePath, buffer);

  // Public URL (without "public")
  const publicUrl =
    "/" + path.posix.join(uploadDir.replace(/^public\//, ""), filename);

  return NextResponse.json({ path: publicUrl });
};
