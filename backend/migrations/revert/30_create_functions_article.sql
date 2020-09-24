-- Revert murDesPensees:30_create_functions_article from pg

BEGIN;

REVOKE EXECUTE ON FUNCTION "insert_article"(TEXT, TEXT, TEXT, TEXT, INT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "insert_article"(TEXT, TEXT, TEXT, TEXT, INT, INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "get_articles_by_user"(INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "get_articles_by_user"(INT) FROM "chief_editor";

DROP FUNCTION "get_articles"();
DROP FUNCTION "insert_article"(TEXT, TEXT, TEXT, TEXT, INT, INT);
DROP FUNCTION "get_articles_by_user"(INT);

COMMIT;
