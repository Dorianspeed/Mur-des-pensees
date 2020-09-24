-- Deploy murDesPensees:40_create_functions_category to pg

BEGIN;

-- Fonction de récupération de toutes les catégories
CREATE FUNCTION "get_categories"()
    RETURNS SETOF "app"."category"
AS 
$$
    SELECT *
    FROM "app"."category";
$$
LANGUAGE SQL STABLE STRICT;

COMMIT;
