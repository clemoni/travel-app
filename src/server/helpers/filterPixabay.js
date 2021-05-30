/**
 * Filter usefull info
 * from response.date Pixabay Api
 * later use for each img in the DOM
 * @param {Array} data
 * @returns  {object} {tags, webformatURL}
 */
const filterPixabay = (data) => {
  return Object.values(data).map((value) => {
    const { tags, webformatURL } = value;
    return { tags, webformatURL };
  });
};

exports.filterPixabay = filterPixabay;
