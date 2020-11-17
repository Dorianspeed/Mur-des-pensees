-- Deploy murDesPensees:70_create_functions_user_adds_to_favorites_article to pg

BEGIN;

-- Fonction pour mettre en favoris un article
CREATE FUNCTION "insert_favorite"("i_user_id" INT, "i_article_id" INT)
    RETURNS "app"."user_adds_to_favorites_article"
AS 
$$
    INSERT INTO "app"."user_adds_to_favorites_article" ("user_id", "article_id")
    VALUES ("i_user_id", "i_article_id")
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "insert_favorite"(INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "insert_favorite"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "insert_favorite"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "insert_favorite"(INT, INT) TO "chief_editor";


-- Fonction pour retirer un article de ses favoris
CREATE FUNCTION "delete_favorite"("i_user_id" INT, "i_article_id" INT)
    RETURNS "app"."user_adds_to_favorites_article"
AS 
$$
    DELETE FROM "app"."user_adds_to_favorites_article" a
    WHERE a."user_id" = "i_user_id" AND a."article_id" = "i_article_id"
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "delete_favorite"(INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "delete_favorite"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "delete_favorite"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "delete_favorite"(INT, INT) TO "chief_editor";


-- Fonction pour vérifier si un article est déjà mis en favoris
CREATE FUNCTION "check_favorite"("i_user_id" INT, "i_article_id" INT)
    RETURNS "app"."user_adds_to_favorites_article"
AS
$$
    SELECT *
    FROM "app"."user_adds_to_favorites_article" a
    WHERE a."user_id" = "i_user_id" AND a."article_id" = "i_article_id";
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "check_favorite"(INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "check_favorite"(INT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "check_favorite"(INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "check_favorite"(INT, INT) TO "chief_editor";


-- Fonction pour récupérer les articles mis en favoris
CREATE FUNCTION "get_favorites_by_user"("i_user_id" INT)
    RETURNS SETOF "app"."user_adds_to_favorites_article"
AS
$$
    SELECT *
    FROM "app"."user_adds_to_favorites_article"
    WHERE "user_id" = "i_user_id";
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "get_favorites_by_user"(INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "get_favorites_by_user"(INT) TO "reader";
GRANT EXECUTE ON FUNCTION "get_favorites_by_user"(INT) TO "editor";
GRANT EXECUTE ON FUNCTION "get_favorites_by_user"(INT) TO "chief_editor";

COMMIT;
