-- Revert murDesPensees:60_create_functions_user_likes_article from pg

BEGIN;

DROP FUNCTION "insert_like"(INT, INT);
DROP FUNCTION "delete_like"(INT, INT);
DROP FUNCTION "check_like"(INT, INT);
DROP FUNCTION "get_likes_by_article"(INT);

COMMIT;
