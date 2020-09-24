-- Revert murDesPensees:51_create_function_user_bulk from pg

BEGIN;

DROP FUNCTION "get_users_bulk"(INT[]);

COMMIT;
