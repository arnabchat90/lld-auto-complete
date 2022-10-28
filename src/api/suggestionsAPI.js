import suggestions from "../data/suggestions";

export async function getSuggestions(searchTerm) {
  return new Promise((resolve, reject) => {
    // simulate a delay so as to mimic the real world api
    setTimeout(() => {
      try {
        const filteredSuggestions = suggestions.filter((item) => {
          return item.text.toLocaleLowerCase().indexOf(searchTerm) > -1;
        });
        resolve(filteredSuggestions);
      } catch (ex) {
        reject(ex);
      }
    }, 1000);
  });
}

export default {
  getSuggestions
};
