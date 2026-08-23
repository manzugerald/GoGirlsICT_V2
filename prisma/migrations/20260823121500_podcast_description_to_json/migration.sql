-- Podcast.description moves from plain text to a Tiptap JSON doc, so the
-- admin dashboard can edit it with the rich-text editor and the frontend
-- can render it with the Tiptap viewer.
--
-- Existing rows hold plain text (not valid JSON), so a naive
-- `ALTER COLUMN ... TYPE JSONB USING "description"::jsonb` would fail.
-- Instead, wrap each existing value as a minimal single-paragraph Tiptap
-- doc so no content is lost.

ALTER TABLE "Podcast" ADD COLUMN "description_tmp" JSONB;

UPDATE "Podcast"
SET "description_tmp" = CASE
  WHEN "description" IS NULL OR trim("description") = '' THEN
    jsonb_build_object(
      'type', 'doc',
      'content', jsonb_build_array(
        jsonb_build_object('type', 'paragraph')
      )
    )
  ELSE
    jsonb_build_object(
      'type', 'doc',
      'content', jsonb_build_array(
        jsonb_build_object(
          'type', 'paragraph',
          'content', jsonb_build_array(
            jsonb_build_object('type', 'text', 'text', "description")
          )
        )
      )
    )
END;

ALTER TABLE "Podcast" DROP COLUMN "description";
ALTER TABLE "Podcast" RENAME COLUMN "description_tmp" TO "description";
ALTER TABLE "Podcast" ALTER COLUMN "description" SET NOT NULL;
