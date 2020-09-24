-- Revert murDesPensees:00_create_tables from pg

BEGIN;

DROP TABLE "user_adds_to_favorites_article";
DROP TABLE "user_likes_article";
DROP TABLE "application";
DROP TABLE "article";
DROP TABLE "category";
DROP TABLE "user";

COMMIT;
