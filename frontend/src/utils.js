import parse from 'html-react-parser';

// fonction permettant de formater une date
// eslint-disable-next-line import/prefer-default-export
export const formattingDate = (receivedDate) => {
  const date = new Date(receivedDate);
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};

// fonction permettant de parser une string
export const parsingData = (data) => (parse(data));
