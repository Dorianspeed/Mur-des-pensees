-- Revert murDesPensees:20_create_roles from pg

BEGIN;

-- Droits pour un visiteur
REVOKE SELECT ON ALL TABLES IN SCHEMA "app" FROM "visitor";
REVOKE INSERT ON TABLE "app"."user" FROM "visitor";
REVOKE USAGE ON SCHEMA "app" FROM "visitor";

-- Droits pour un lecteur
REVOKE SELECT ON ALL TABLES IN SCHEMA "app" FROM "reader";
REVOKE UPDATE ON TABLE "app"."user" FROM "reader";
REVOKE INSERT, DELETE ON TABLE "app"."user_likes_article" FROM "reader";
REVOKE INSERT, DELETE ON TABLE "app"."user_adds_to_favorites_article" FROM "reader";
REVOKE USAGE ON SCHEMA "app" FROM "reader";

-- Droits pour un rédacteur
REVOKE SELECT ON ALL TABLES IN SCHEMA "app" FROM "editor";
REVOKE UPDATE ON TABLE "app"."user" FROM "editor";
REVOKE INSERT, UPDATE ON TABLE "app"."article" FROM "editor";
REVOKE INSERT, DELETE ON TABLE "app"."user_likes_article" FROM "editor";
REVOKE INSERT, DELETE ON TABLE "app"."user_adds_to_favorites_article" FROM "editor";
REVOKE USAGE ON SCHEMA "app" FROM "editor";

-- Droits pour un chief_editor
REVOKE SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA "app" FROM "chief_editor";
REVOKE USAGE ON SCHEMA "app" FROM "chief_editor";

REVOKE SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA "admin" FROM "chief_editor";
REVOKE USAGE ON SCHEMA "admin" FROM "chief_editor";

DROP ROLE "visitor";
DROP ROLE "reader";
DROP ROLE "editor";
DROP ROLE "chief_editor";

COMMIT;
