-- Deploy murDesPensees:51_create_function_user_bulk to pg

BEGIN;

-- Fonction de récupération d'utilisateurs (bulk)
CREATE FUNCTION "get_users_bulk"("i_ids" INT[])
    RETURNS TABLE ("id" INT, "firstname" TEXT, "lastname" TEXT, "avatar_url" TEXT, "created_at" TIMESTAMPTZ, "updated_at" TIMESTAMPTZ)
AS
$$
    SELECT "id", "firstname", "lastname", "avatar_url", "created_at", "updated_at" 
    FROM "app"."user" 
    WHERE "id" = ANY("i_ids");
$$
LANGUAGE SQL STABLE STRICT;

COMMIT;
