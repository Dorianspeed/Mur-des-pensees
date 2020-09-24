-- Deploy murDesPensees:50_create_functions_user to pg

BEGIN;

-- Fonction pour récupérer un utilisateur par son email (pour l'authentification)
CREATE FUNCTION "check_user"("i_email" TEXT)
    RETURNS "app"."user"
AS
$$
    SELECT *
    FROM "app"."user" u
    WHERE u.email = "i_email";
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "check_user"(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "check_user"(TEXT) TO "visitor";


-- Fonction pour créer un nouvel utilisateur
CREATE FUNCTION "insert_user"("i_firstname" TEXT, "i_lastname" TEXT, "i_email" TEXT, "i_password" TEXT, "i_avatar_url" TEXT)
    RETURNS TABLE ("id" INT, "firstname" TEXT, "lastname" TEXT, "avatar_url" TEXT, "created_at" TIMESTAMPTZ)
AS 
$$
    INSERT INTO "app"."user" ("firstname", "lastname", "email", "password", "avatar_url")
    VALUES ("i_firstname", "i_lastname", "i_email", "i_password", "i_avatar_url")
    RETURNING "id", "firstname", "lastname", "avatar_url", "created_at";
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "insert_user"(TEXT, TEXT, TEXT, TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "insert_user"(TEXT, TEXT, TEXT, TEXT, TEXT) TO "visitor";


-- Fonction pour modifier le profil d'un utilisateur par son id
CREATE FUNCTION "update_user" ("i_firstname" TEXT, "i_lastname" TEXT, "i_email" TEXT, "i_avatar_url" TEXT, "i_user_id" INT)
    RETURNS TABLE ("id" INT, "firstname" TEXT, "lastname" TEXT, "email" TEXT, "avatar_url" TEXT, "role" TEXT, "created_at" TIMESTAMPTZ, "updated_at" TIMESTAMPTZ)
AS
$$
    UPDATE "app"."user" u
    SET "firstname" = "i_firstname", "lastname" = "i_lastname", "email" = "i_email", "avatar_url" = "i_avatar_url", "updated_at" = NOW()
    WHERE u."id" = "i_user_id"
    RETURNING "id", "firstname", "lastname", "email", "avatar_url", "role", "created_at", "updated_at";
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT) TO "reader";
GRANT EXECUTE ON FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT) TO "editor";
GRANT EXECUTE ON FUNCTION "update_user"(TEXT, TEXT, TEXT, TEXT, INT) TO "chief_editor";

COMMIT;
