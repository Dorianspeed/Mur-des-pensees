-- Deploy murDesPensees:30_create_functions_article to pg

BEGIN;

-- Fonction de récupération de tous les articles
CREATE FUNCTION "get_articles"()
    RETURNS SETOF "app"."article"
AS 
$$
    SELECT *
    FROM "app"."article"
    WHERE "state" = 'approved';
$$
LANGUAGE SQL STABLE STRICT;


-- Fonction pour insérer un nouvel article
CREATE FUNCTION "insert_article"("i_title" TEXT, "i_excerpt" TEXT, "i_content" TEXT, "i_image_url" TEXT, "i_category_id" INT, "i_user_id" INT)
    RETURNS "app"."article"
AS 
$$
    INSERT INTO "app"."article" ("title", "excerpt", "content", "image_url", "category_id", "user_id")
    VALUES ("i_title", "i_excerpt", "i_content", "i_image_url", "i_category_id", "i_user_id")
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "insert_article"(TEXT, TEXT, TEXT, TEXT, INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "insert_article"(TEXT, TEXT, TEXT, TEXT, INT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "insert_article"(TEXT, TEXT, TEXT, TEXT, INT, INT) TO "chief_editor";

  
-- Fonction pour récupérer les articles rédigés un utilisateur via son id
CREATE FUNCTION "get_articles_by_user"("i_user_id" INT)
    RETURNS SETOF "app"."article"
AS
$$
    SELECT *
    FROM "app"."article" a
    WHERE a.user_id = "i_user_id"; 
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "get_articles_by_user"(INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "get_articles_by_user"(INT) TO "editor";
GRANT EXECUTE ON FUNCTION "get_articles_by_user"(INT) TO "chief_editor";

COMMIT;
