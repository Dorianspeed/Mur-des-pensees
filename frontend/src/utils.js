// == Import : npm
import parse from 'html-react-parser';
import slugify from 'slugify';
import pluralize from 'pluralize';

// fonction permettant de slugifier une string
export const stringSlugify = (string) => slugify(string, {
  strict: true,
  lower: true,
  locale: 'fr',
});

// fonction permettant de mettre en majuscule la première lettre du slug
export const capitalizeSlugFirstLetter = (slug) => {
  if (slug === 'faits-divers') {
    const cleanedSlug = slug.replace('-', ' ');
    return cleanedSlug.charAt(0).toUpperCase() + cleanedSlug.slice(1);
  }

  return slug.charAt(0).toUpperCase() + slug.slice(1);
};

// fonction permettant de gérer la mise au pluriel d'un mot
export const stringPluralize = (string, value) => {
  if (value === 0) {
    return pluralize.singular(string);
  }

  return pluralize(string, value);
};

// fonction permettant de formater une date
export const formattingDate = (receivedDate) => {
  const date = new Date(receivedDate);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};

// fonction permettant de parser une string
export const parsingData = (data) => (parse(data));
