-- Revert murDesPensees:60_create_functions_user_likes_article from pg

BEGIN;

GRANT EXECUTE ON FUNCTION "insert_like"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "insert_like"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "insert_like"(INT, INT) TO "chief_editor";

GRANT EXECUTE ON FUNCTION "delete_like"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "delete_like"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "delete_like"(INT, INT) TO "chief_editor";

GRANT EXECUTE ON FUNCTION "check_like"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "check_like"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "check_like"(INT, INT) TO "chief_editor";

DROP FUNCTION "insert_like"(INT, INT);
DROP FUNCTION "delete_like"(INT, INT);
DROP FUNCTION "check_like"(INT, INT);
DROP FUNCTIOn "get_likes_by_article"(INT);

COMMIT;
