-- Deploy murDesPensees:31_create_functions_article_bulk to pg

BEGIN;

-- Fonction de récupération d'articles par leur catégorie (bulk)
CREATE FUNCTION "get_articles_by_category_bulk"("i_ids" INT[])
    RETURNS SETOF "app"."article"
AS
$$
    SELECT * 
    FROM "app"."article" 
    WHERE "category_id" = ANY("i_ids") AND "state" = 'approved';
$$
LANGUAGE SQL STABLE STRICT;


-- Fonction de récupération d'articles par leur auteur (bulk)
CREATE FUNCTION "get_articles_by_user_bulk"("i_ids" INT[])
    RETURNS SETOF "app"."article"
AS
$$
    SELECT * 
    FROM "app"."article" 
    WHERE "user_id" = ANY("i_ids");
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "get_articles_by_user_bulk"(INT[]) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "get_articles_by_user_bulk"(INT[]) TO "editor";
GRANT EXECUTE ON FUNCTION "get_articles_by_user_bulk"(INT[]) TO "chief_editor";

COMMIT;
