-- Revert murDesPensees:80_create_functions_application from pg

BEGIN;

REVOKE EXECUTE ON FUNCTION "get_pending_applications"() FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "insert_application"(TEXT, INT) FROM "reader";

REVOKE EXECUTE ON FUNCTION "validate_application"(INT, INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "decline_application"(INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "check_application"(INT) FROM "reader";

DROP FUNCTION "get_pending_applications"();
DROP FUNCTION "insert_application"(TEXT, INT);
DROP FUNCTION "validate_application"(INT, INT);
DROP FUNCTION "decline_application"(INT);
DROP FUNCTION "check_application"(INT);

COMMIT;
