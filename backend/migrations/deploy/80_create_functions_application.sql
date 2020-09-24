-- Deploy murDesPensees:80_create_functions_application to pg

BEGIN;

-- Fonction pour récupérer les candidatures en cours
CREATE FUNCTION "get_pending_applications"()
    RETURNS SETOF "admin"."application"
AS 
$$
    SELECT * 
    FROM "admin"."application" 
    WHERE "state" = 'pending';
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "get_pending_applications"() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "get_pending_applications"() TO "chief_editor";


-- Fonction pour ajouter une candidature
CREATE FUNCTION "insert_application"("i_content" TEXT, "i_user_id" INT)
    RETURNS "admin"."application"
AS 
$$
    INSERT INTO "admin"."application" ("content", "user_id")
    VALUES ("i_content", "i_user_id")
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT SECURITY DEFINER;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "insert_application"(TEXT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "insert_application"(TEXT, INT) TO "reader";


-- Fonction pour valider une candidature
CREATE FUNCTION "validate_application"("i_application_id" INT, "i_user_id" INT)
    RETURNS TABLE ("id" INT, "firstname" TEXT, "lastname" TEXT, "avatar_url" TEXT, "role" TEXT, "created_at" TIMESTAMPTZ, "updated_at" TIMESTAMPTZ)
AS 
$$
    UPDATE "admin"."application"
    SET "state" = 'approved', "updated_at" = NOW()
    WHERE "id" = "i_application_id";

    UPDATE "app"."user"
    SET "role" = 'editor', "updated_at" = NOW()
    WHERE "id" = "i_user_id"
    RETURNING "id", "firstname", "lastname", "avatar_url", "role", "created_at", "updated_at";
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "validate_application"(INT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "validate_application"(INT, INT) TO "chief_editor";


-- Fonction pour décliner une candidature
CREATE FUNCTION "decline_application"("i_application_id" INT)
    RETURNS "admin"."application"
AS 
$$
    UPDATE "admin"."application"
    SET "state" = 'declined', "updated_at" = NOW()
    WHERE "id" = "i_application_id"
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "decline_application"(INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "decline_application"(INT) TO "chief_editor";


-- Fonction pour vérifier si une application en cours existe
CREATE FUNCTION "check_application"("i_user_id" INT)
    RETURNS SETOF "admin"."application"
AS
$$
    SELECT *
    FROM "admin"."application"
    WHERE "user_id" = "i_user_id" AND ("state" = 'approved' OR "state" = 'pending');
$$
LANGUAGE SQL STABLE STRICT SECURITY DEFINER;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "check_application"(INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "check_application"(INT) TO "reader";

COMMIT;
