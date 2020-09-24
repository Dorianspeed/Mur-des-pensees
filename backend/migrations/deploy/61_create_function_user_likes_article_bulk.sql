-- Deploy murDesPensees:61_create_function_user_likes_article_bulk to pg

BEGIN;

-- Fonction de récupération des likes par leur article (bulk)
CREATE FUNCTION "get_likes_by_article_bulk"("i_ids" INT[])
    RETURNS TABLE ("article_id" INT, "likes" BIGINT)
AS
$$
    SELECT "article_id", COUNT (*) AS "likes"
    FROM "app"."user_likes_article"
    WHERE "article_id" = ANY("i_ids")
    GROUP BY "article_id";
$$
LANGUAGE SQL STABLE STRICT;

COMMIT;
