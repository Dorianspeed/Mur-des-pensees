-- Revert murDesPensees:41_create_function_category_bulk from pg

BEGIN;

DROP FUNCTION "get_categories_bulk"(INT[]);

COMMIT;
