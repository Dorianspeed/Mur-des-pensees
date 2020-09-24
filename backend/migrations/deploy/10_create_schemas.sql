-- Deploy murDesPensees:10_create_schemas to pg

BEGIN;

CREATE SCHEMA "app";
CREATE SCHEMA "admin";

ALTER TABLE "user_adds_to_favorites_article" SET SCHEMA "app";
ALTER TABLE "user_likes_article" SET SCHEMA "app";
ALTER TABLE "application" SET SCHEMA "admin";
ALTER TABLE "article" SET SCHEMA "app";
ALTER TABLE "category" SET SCHEMA "app";
ALTER TABLE "user" SET SCHEMA "app";

COMMIT;
