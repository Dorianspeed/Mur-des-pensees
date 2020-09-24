-- Revert murDesPensees:80_create_functions_application from pg

BEGIN;

DROP FUNCTION "get_pending_applications"();
DROP FUNCTION "insert_application"(TEXT, INT);
DROP FUNCTION "validate_application"(INT, INT);
DROP FUNCTION "decline_application"(INT);
DROP FUNCTION "check_application"(INT);

COMMIT;
