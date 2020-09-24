-- Revert murDesPensees:70_create_functions_user_adds_to_favorites_article from pg

BEGIN;

DROP FUNCTION "insert_favorite"(INT, INT);
DROP FUNCTION "delete_favorite"(INT, INT);
DROP FUNCTION "check_favorite"(INT, INT);
DROP FUNCTION "get_favorites_by_user"(INT);

COMMIT;
