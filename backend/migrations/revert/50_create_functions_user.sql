-- Revert murDesPensees:50_create_functions_user from pg

BEGIN;

DROP FUNCTION "check_user"(TEXT);
DROP FUNCTION "insert_user"(TEXT, TEXT, TEXT, TEXT, TEXT);
DROP FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT);

COMMIT;
