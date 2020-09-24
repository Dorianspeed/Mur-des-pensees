-- Revert murDesPensees:31_create_functions_article_bulk from pg

BEGIN;

DROP FUNCTION "get_articles_by_category_bulk"(INT[]);
DROP FUNCTION "get_articles_by_user_bulk"(INT[]);

COMMIT;
