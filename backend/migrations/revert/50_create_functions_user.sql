-- Revert murDesPensees:50_create_functions_user from pg

BEGIN;

REVOKE EXECUTE ON FUNCTION "check_user"(TEXT) FROM "visitor";

REVOKE EXECUTE ON FUNCTION "insert_user"(TEXT, TEXT, TEXT, TEXT, TEXT) FROM "visitor";

REVOKE EXECUTE ON FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT) FROM "reader";
REVOKE EXECUTE ON FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT) FROM "editor";
REVOKE EXECUTE ON FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT) FROM "chief_editor";

DROP FUNCTION "check_user"(TEXT);
DROP FUNCTION "insert_user"(TEXT, TEXT, TEXT, TEXT, TEXT);
DROP FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT);

COMMIT;
