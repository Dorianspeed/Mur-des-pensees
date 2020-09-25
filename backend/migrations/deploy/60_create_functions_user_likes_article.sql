-- Deploy murDesPensees:60_create_functions_user_likes_article to pg

BEGIN;

-- Fonction pour liker un article
CREATE FUNCTION "insert_like"("i_user_id" INT, "i_article_id" INT)
    RETURNS "app"."user_likes_article"
AS 
$$
    INSERT INTO "app"."user_likes_article" ("user_id", "article_id")
    VALUES ("i_user_id", "i_article_id")
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "insert_like"(INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "insert_like"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "insert_like"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "insert_like"(INT, INT) TO "chief_editor";


-- Fonction retirer un like d'un article
CREATE FUNCTION "delete_like"("i_user_id" INT, "i_article_id" INT)
    RETURNS "app"."user_likes_article"
AS 
$$
    DELETE FROM "app"."user_likes_article" a
    WHERE a."user_id" = "i_user_id" AND a."article_id" = "i_article_id"
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "delete_like"(INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "delete_like"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "delete_like"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "delete_like"(INT, INT) TO "chief_editor";


-- Fonction pour vérifier si un like existe ou pas
CREATE FUNCTION "check_like"("i_user_id" INT, "i_article_id" INT)
    RETURNS "app"."user_likes_article"
AS
$$
    SELECT *
    FROM "app"."user_likes_article" a
    WHERE a."user_id" = "i_user_id" AND a."article_id" = "i_article_id";
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "check_like"(INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "check_like"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "check_like"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "check_like"(INT, INT) TO "chief_editor";

COMMIT;
