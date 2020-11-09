// == Import : npm
import parse from 'html-react-parser';
import slugify from 'slugify';

// fonction permettant de slugifier une string
export const stringSlugify = (string) => slugify(string, {
  strict: true,
  lower: true,
  locale: 'fr',
});

// fonction permettant de formater une date
export const formattingDate = (receivedDate) => {
  const date = new Date(receivedDate);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};

// fonction permettant de parser une string
export const parsingData = (data) => (parse(data));
