-- Revert murDesPensees:30_create_functions_article from pg

BEGIN;

DROP FUNCTION "get_articles"();
DROP FUNCTION "insert_article"(TEXT, TEXT, TEXT, TEXT, INT, INT);
DROP FUNCTION "get_articles_by_user"(INT);

COMMIT;
