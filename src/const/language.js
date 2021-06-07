export const LANGUAGES = [
  'javascript',
  'C++',
  'PHP',
  'Ruby',
  'Python'
];

export const getLanguages = () => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    },1000);
  });
};
