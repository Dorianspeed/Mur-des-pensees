# Dictionnaire de données

## Entité "user"

| Nom | Description | Type | Contrainte(s) | Commentaires |
|-----|-------------|------|------------|-------------|
| id | Clé primaire de l'utilisateur | INTEGER | GENERATED ALWAYS AS IDENTITY | - |
| firstname | Prénom de l'utilisateur | TEXT | NOT NULL | - |
| lastname | Nom de l'utilisateur | TEXT | NOT NULL | - |
| email | Email de l'utilisateur | TEXT | NOT NULL UNIQUE | - |
| password | Mot de passe de l'utilisateur | TEXT | NOT NULL | Crypté (hashé) avec Bcrypt |
| avatar_url | Avatar de l'utilisateur | TEXT | DEFAULT '' | - |
| role | Rôle de l'utilisateur | TEXT | DEFAULT 'reader' | "reader", "editor" ou "chief_editor" |
| created_at | Date de création de l'utilisateur | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | - |
| updated_at | Date de modification de l'utilisateur | TIMESTAMPTZ | - | - |

## Entité "category"

| Nom | Description | Type | Contrainte(s) | Commentaires |
|-----|-------------|------|------------|-------------|
| id | Clé primaire de la catégorie | INTEGER | GENERATED ALWAYS AS IDENTITY | - |
| name | Nom de la catégorie | TEXT | NOT NULL | - |
| image_url | Image de la catégorie | TEXT | DEFAULT '' | - |
| created_at | Date de création de la catégorie | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | - |
| updated_at | Date de modification de la catégorie | TIMESTAMPTZ | - | - |

## Entité "article"

| Nom | Description | Type | Contrainte(s) | Commentaires |
|-----|-------------|------|------------|-------------|
| id | Clé primaire de l'article | INTEGER | GENERATED ALWAYS AS IDENTITY | - |
| title | Titre de l'article | TEXT | NOT NULL | - |
| excerpt | Extrait de l'article | TEXT | NOT NULL | - |
| content | Contenu de l'article | TEXT | NOT NULL | - |
| image_url | Image de l'article | TEXT | DEFAULT '' | - |
| state | Etat de l'article | TEXT | DEFAULT 'pending' | "pending", "approved" ou "declined" |
| created_at | Date de création de l'article | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | - |
| updated_at | Date de modification de l'article | TIMESTAMPTZ | - | - |
| category_id | Clé étrangère référençant la catégorie | INTEGER | REFERENCES | - |
| user_id | Clé étrangère référençant l'utilisateur | INTEGER | REFERENCES | - |

## Entité "application"

| Nom | Description | Type | Contrainte(s) | Commentaires |
|-----|-------------|------|------------|-------------|
| id | Clé primaire de la candidature | INTEGER | GENERATED ALWAYS AS IDENTITY | - |
| content | Contenu de la candidature | TEXT | NOT NULL | - |
| state | Etat de la candidature | TEXT | DEFAULT 'pending' | "pending", "approved" ou "declined" |
| created_at | Date de création de la candidature | TIMESTAMPTZ | NOT NULL DEFAULT NOW() | - |
| updated_at | Date de modification de la candidature | TIMESTAMPTZ | - | - |
| user_id | Clé étrangère référençant l'utilisateur | INTEGER | REFERENCES | - |

## Entité "user_likes_article"

| Nom | Description | Type | Contrainte(s) | Commentaires |
|-----|-------------|------|------------|-------------|
| id | Clé primaire de user_likes_article | INTEGER | GENERATED ALWAYS AS IDENTITY | - |
| user_id | Clé étrangère référençant l'utilisateur | INTEGER | REFERENCES | UNIQUE ("user_id", "article_id") |
| article_id | Clé étrangère référençant l'article | INTEGER | REFERENCES | UNIQUE ("user_id", "article_id" ) |

## Entité "user_adds_to_favorite_article"

| Nom | Description | Type | Contrainte(s) | Commentaires |
|-----|-------------|------|------------|-------------|
| id | Clé primaire de user_adds_to_favorites_article | INTEGER | GENERATED ALWAYS AS IDENTITY | - |
| user_id | Clé étrangère référençant l'utilisateur | INTEGER | REFERENCES | UNIQUE ("user_id", "article_id") |
| article_id | Clé étrangère référençant l'article | INTEGER | REFERENCES | UNIQUE ("user_id", "article_id") |
