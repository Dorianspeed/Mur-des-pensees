-- Revert murDesPensees:32_create_functions_article_admin from pg

BEGIN;

REVOKE EXECUTE ON FUNCTION "get_pending_articles"() FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "validate_article"(INT) FROM "chief_editor";

REVOKE EXECUTE ON FUNCTION "decline_article"(INT) FROM "chief_editor";

DROP FUNCTION "get_pending_articles"();
DROP FUNCTION "validate_article"(INT);
DROP FUNCTION "decline_article"(INT);

COMMIT;
