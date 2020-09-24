-- Revert murDesPensees:70_create_functions_user_adds_to_favorites_article from pg

BEGIN;

REVOKE EXECUTE ON FUNCTION "insert_favorite"(INT, INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "insert_favorite"(INT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "insert_favorite"(INT, INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "delete_favorite"(INT, INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "delete_favorite"(INT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "delete_favorite"(INT, INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "check_favorite"(INT, INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "check_favorite"(INT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "check_favorite"(INT, INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "get_favorites_by_user"(INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "get_favorites_by_user"(INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "get_favorites_by_user"(INT) FROM "chief_editor";

DROP FUNCTION "insert_favorite"(INT, INT);
DROP FUNCTION "delete_favorite"(INT, INT);
DROP FUNCTION "check_favorite"(INT, INT);
DROP FUNCTION "get_favorites_by_user"(INT);

COMMIT;
