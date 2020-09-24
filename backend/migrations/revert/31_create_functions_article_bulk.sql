-- Revert murDesPensees:31_create_functions_article_bulk from pg

BEGIN;

REVOKE EXECUTE ON FUNCTION "get_articles_by_user_bulk"(INT[]) FROM "editor";
REVOKE EXECUTE ON FUNCTION "get_articles_by_user_bulk"(INT[]) FROM "chief_editor";

DROP FUNCTION "get_articles_by_category_bulk"(INT[]);
DROP FUNCTION "get_articles_by_user_bulk"(INT[]);

COMMIT;
