-- Revert murDesPensees:40_create_functions_category from pg

BEGIN;

DROP FUNCTION "get_categories"();

COMMIT;
