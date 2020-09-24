-- Revert murDesPensees:32_create_functions_article_admin from pg

BEGIN;

DROP FUNCTION "get_pending_articles"();
DROP FUNCTION "validate_article"(INT);
DROP FUNCTION "decline_article"(INT);

COMMIT;
