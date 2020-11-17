-- Deploy murDesPensees:20_create_roles to pg

BEGIN;

-- Création des rôles
CREATE ROLE "visitor" WITH LOGIN ENCRYPTED PASSWORD 'wall';
CREATE ROLE "reader" WITH LOGIN ENCRYPTED PASSWORD 'wall';
CREATE ROLE "editor" WITH LOGIN ENCRYPTED PASSWORD 'wall';
CREATE ROLE "chief_editor" WITH LOGIN ENCRYPTED PASSWORD 'wall';

-- Droits pour un visiteur
GRANT USAGE ON SCHEMA "app" TO "visitor";
GRANT SELECT ON ALL TABLES IN SCHEMA "app" TO "visitor";
GRANT INSERT ON TABLE "app"."user" TO "visitor";

-- Droits pour un lecteur
GRANT USAGE ON SCHEMA "app" TO "reader";
GRANT SELECT ON ALL TABLES IN SCHEMA "app" TO "reader";
GRANT UPDATE ON TABLE "app"."user" TO "reader";
GRANT INSERT, DELETE ON TABLE "app"."user_likes_article" TO "reader";
GRANT INSERT, DELETE ON TABLE "app"."user_adds_to_favorites_article" TO "reader";

-- Droits pour un rédacteur
GRANT USAGE ON SCHEMA "app" TO "editor";
GRANT SELECT ON ALL TABLES IN SCHEMA "app" TO "editor";
GRANT UPDATE ON TABLE "app"."user" TO "editor";
GRANT INSERT, UPDATE ON TABLE "app"."article" TO "editor";
GRANT INSERT, DELETE ON TABLE "app"."user_likes_article" TO "editor";
GRANT INSERT, DELETE ON TABLE "app"."user_adds_to_favorites_article" TO "editor";

-- Droits pour un chief_editor
GRANT USAGE ON SCHEMA "admin" TO "chief_editor";
GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA "admin" TO "chief_editor";

GRANT USAGE ON SCHEMA "app" TO "chief_editor";
GRANT SELECT, INSERT, DELETE, UPDATE ON ALL TABLES IN SCHEMA "app" TO "chief_editor";

COMMIT;
