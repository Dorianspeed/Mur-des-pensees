-- Revert murDesPensees:60_create_functions_user_likes_article from pg

BEGIN;

REVOKE EXECUTE ON FUNCTION "insert_like"(INT, INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "insert_like"(INT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "insert_like"(INT, INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "delete_like"(INT, INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "delete_like"(INT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "delete_like"(INT, INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "check_like"(INT, INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "check_like"(INT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "check_like"(INT, INT) FROM "chief_editor";

DROP FUNCTION "insert_like"(INT, INT);
DROP FUNCTION "delete_like"(INT, INT);
DROP FUNCTION "check_like"(INT, INT);
DROP FUNCTION "get_likes_by_article"(INT);

COMMIT;
