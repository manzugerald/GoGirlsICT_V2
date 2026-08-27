-- Podcast.title, Project.title, Event.eventTitle, and Message.title move
-- from plain text to a Tiptap JSON doc, so the admin dashboard's shared
-- rich-text toolbar can format the title itself (bold, italic, colors,
-- etc.), not just the description/content field next to it.
--
-- Existing rows hold plain text (not valid JSON), so a naive
-- `ALTER COLUMN ... TYPE JSONB USING "title"::jsonb` would fail. Instead,
-- wrap each existing value as a minimal single-paragraph Tiptap doc so no
-- content is lost. Message.title is nullable, so NULL stays NULL rather
-- than becoming an empty doc.

-- Podcast.title (NOT NULL)
ALTER TABLE "Podcast" ADD COLUMN "title_tmp" JSONB;

UPDATE "Podcast"
SET "title_tmp" = jsonb_build_object(
  'type', 'doc',
  'content', jsonb_build_array(
    jsonb_build_object(
      'type', 'paragraph',
      'content', jsonb_build_array(
        jsonb_build_object('type', 'text', 'text', "title")
      )
    )
  )
);

ALTER TABLE "Podcast" DROP COLUMN "title";
ALTER TABLE "Podcast" RENAME COLUMN "title_tmp" TO "title";
ALTER TABLE "Podcast" ALTER COLUMN "title" SET NOT NULL;

-- Project.title (NOT NULL)
ALTER TABLE "Project" ADD COLUMN "title_tmp" JSONB;

UPDATE "Project"
SET "title_tmp" = jsonb_build_object(
  'type', 'doc',
  'content', jsonb_build_array(
    jsonb_build_object(
      'type', 'paragraph',
      'content', jsonb_build_array(
        jsonb_build_object('type', 'text', 'text', "title")
      )
    )
  )
);

ALTER TABLE "Project" DROP COLUMN "title";
ALTER TABLE "Project" RENAME COLUMN "title_tmp" TO "title";
ALTER TABLE "Project" ALTER COLUMN "title" SET NOT NULL;

-- Event.eventTitle (NOT NULL)
ALTER TABLE "Event" ADD COLUMN "eventTitle_tmp" JSONB;

UPDATE "Event"
SET "eventTitle_tmp" = jsonb_build_object(
  'type', 'doc',
  'content', jsonb_build_array(
    jsonb_build_object(
      'type', 'paragraph',
      'content', jsonb_build_array(
        jsonb_build_object('type', 'text', 'text', "eventTitle")
      )
    )
  )
);

ALTER TABLE "Event" DROP COLUMN "eventTitle";
ALTER TABLE "Event" RENAME COLUMN "eventTitle_tmp" TO "eventTitle";
ALTER TABLE "Event" ALTER COLUMN "eventTitle" SET NOT NULL;

-- Message.title (nullable — NULL stays NULL)
ALTER TABLE "Message" ADD COLUMN "title_tmp" JSONB;

UPDATE "Message"
SET "title_tmp" = CASE
  WHEN "title" IS NULL OR trim("title") = '' THEN NULL
  ELSE
    jsonb_build_object(
      'type', 'doc',
      'content', jsonb_build_array(
        jsonb_build_object(
          'type', 'paragraph',
          'content', jsonb_build_array(
            jsonb_build_object('type', 'text', 'text', "title")
          )
        )
      )
    )
END;

ALTER TABLE "Message" DROP COLUMN "title";
ALTER TABLE "Message" RENAME COLUMN "title_tmp" TO "title";
