# Conception de la base de données

## Analyse des entités

- User
  - id
  - firstname
  - lastname
  - email
  - password
  - avatar_url
  - role
  - created_at
  - updated_at
- Article
  - id
  - title
  - content
  - excerpt
  - image_url
  - state
  - created_at
  - updated_at
- Category
  - id
  - name
  - image_url
  - created_at
  - updated_at
- Application
  - id
  - content
  - state
  - created_at
  - updated_at

## Analyse des relations

### User <--> Article (écrire)

Un User peut écrire un Article.

- Verbe : writes
- Cardinalité :
  - User > Article : un User peut écrire au minimum 0 et au maximum N Article
  - Article > User : un Article peut être écrit par au minimum 1 et au maximum 1 User
- Relation de type : 1:N

### User <--> Article (liker)

Un User peut mettre une mention "j'aime" à un Article.

- Verbe : likes
- Cardinalité :
  - User > Article : un User peut liker au minimum 0 et au maximum N Article
  - Article > User : un Article peut être liké par au minimum 0 et au maximum N User
- Relation de type : N:N

### User <--> Article (adorer)

Un User peut adorer un Article (mettre en favori).

- Verbe : adds to favorites
- Cardinalité :
  - User > Article : un User peut mettre en favoris au minimum 0 et au maximum N Article
  - Article > User : un Article peut être mis en favoris par au minimum 0 et au maximum 0 User
- Relation de type : N:N

### User <--> Application

Un User peut postuler à une Application.

- Verbe : applies
- Cardinalité :
  - User > Application : un User peut postuler au minimum 0 et au maximum 1 Application
  - Application > User : une Application peut être postulée par au minimum 1 et au maximum 1 User
- Relation de type : 1:1

### Article <--> Category

Un Article peut avoir une Category.

- Verbe : has
- Cardinalité :
  - Article > Category : un Article peut avoir au minimum 1 et au maximum 1 Category
  - Category > Article : une Category peut être eue par au minimum 0 et au maximum N Article.
- Relation de type : 1:N

## MCD via MOCODO

```text
writes, 11 ARTICLE, 0N USER
ARTICLE: title, content, excerpt, image_url, state, created_at, updated_at
has, 11 ARTICLE, 0N CATEGORY

USER: firstname, lastname, email, password, avatar_url, role, created_at, updated_at
adds to favorites, 0N USER, 0N ARTICLE
CATEGORY: name, image_url, created_at, updated_at

applies, 01 USER, 11 APPLICATION
APPLICATION: content, state, created_at, updated_at
likes, 0N USER, 0N ARTICLE
```

## MLD qui en découle

```text
user(id, firstname, lastname, email, password, avatar_url, role, created_at, updated_at)
article(id, title, content, excerpt, image_url, state, created_at, updated_at, #category("id"), #user("id))
category(id, name, image_url, created_at, updated_at)
application(id, content, created_at, updated_at, #user("id"))
user_likes_article(id, #user("id"), #article("id"))
user_adds_to_favorites_article(id, #user("id"), #article("id"))
```
