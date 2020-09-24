-- Deploy murDesPensees:32_create_functions_article_admin to pg

BEGIN;

-- Fonction pour récupérer les articles en cours de validation
CREATE FUNCTION "get_pending_articles"()
    RETURNS SETOF "app"."article"
AS 
$$
    SELECT * 
    FROM "app"."article" 
    WHERE "state" = 'pending';
$$
LANGUAGE SQL STABLE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "get_pending_articles"() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "get_pending_articles"() TO "chief_editor";


-- Fonction pour valider un article
CREATE FUNCTION "validate_article"("i_article_id" INT)
    RETURNS "app"."article"
AS 
$$
    UPDATE "app"."article"
    SET "state" = 'approved', "updated_at" = NOW()
    WHERE "id" = "i_article_id"
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "validate_article"(INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "validate_article"(INT) TO "chief_editor";


-- Fonction pour refuser un article
CREATE FUNCTION "decline_article"("i_article_id" INT)
    RETURNS "app"."article"
AS 
$$
    UPDATE "app"."article"
    SET "state" = 'declined', "updated_at" = NOW()
    WHERE "id" = "i_article_id"
    RETURNING *;
$$
LANGUAGE SQL VOLATILE STRICT;

-- On donne les accès sur la fonction
REVOKE ALL ON FUNCTION "decline_article"(INT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION "decline_article"(INT) TO "chief_editor";

COMMIT;
