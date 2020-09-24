-- Deploy murDesPensees:00_create_tables to pg

BEGIN;

CREATE TABLE "user" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT DEFAULT '/avatar/avatar10.svg',
    "role" TEXT DEFAULT 'reader',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "category" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image_url" TEXT DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "article" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image_url" TEXT DEFAULT '/images/other.jpg',
    "state" TEXT DEFAULT 'pending',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ,
    "category_id" INTEGER REFERENCES "category"("id"),
    "user_id" INTEGER REFERENCES "user"("id")
);

CREATE TABLE "application" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "state" TEXT DEFAULT 'pending',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ,
    "user_id" INTEGER REFERENCES "user"("id")
);

CREATE TABLE "user_likes_article" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id"),
    "article_id" INTEGER REFERENCES "article"("id"),
    UNIQUE ("user_id", "article_id")
);

CREATE TABLE "user_adds_to_favorites_article" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INTEGER REFERENCES "user"("id"),
    "article_id" INTEGER REFERENCES "article"("id"),
    UNIQUE ("user_id", "article_id")        
);

COMMIT;
