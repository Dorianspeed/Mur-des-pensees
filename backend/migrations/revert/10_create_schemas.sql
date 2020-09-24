-- Revert murDesPensees:10_create_schemas from pg

BEGIN;

ALTER TABLE "app"."user_adds_to_favorites_article" SET SCHEMA "public";
ALTER TABLE "app"."user_likes_article" SET SCHEMA "public";
ALTER TABLE "admin"."application" SET SCHEMA "public";
ALTER TABLE "app"."article" SET SCHEMA "public";
ALTER TABLE "app"."category" SET SCHEMA "public";
ALTER TABLE "app"."user" SET SCHEMA "public";

DROP SCHEMA "admin";
DROP SCHEMA "app";

COMMIT;
