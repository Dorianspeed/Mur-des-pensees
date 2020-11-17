-- Revert murDesPensees:61_create_function_user_likes_article_bulk from pg

BEGIN;

DROP FUNCTION "get_likes_by_article_bulk"(INT[]);
DROP FUNCTION "get_likes_by_user"(INT);

COMMIT;
