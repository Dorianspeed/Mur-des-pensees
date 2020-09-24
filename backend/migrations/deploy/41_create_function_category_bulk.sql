-- Deploy murDesPensees:41_create_function_category_bulk to pg

BEGIN;

-- Fonction de récupération de catégories (bulk)
CREATE FUNCTION "get_categories_bulk"("i_ids" INT[])
    RETURNS SETOF "app"."category"
AS
$$
    SELECT * 
    FROM "app"."category" 
    WHERE "id" = ANY("i_ids");
$$
LANGUAGE SQL STABLE STRICT;

COMMIT;
