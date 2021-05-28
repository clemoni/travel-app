const filterPixabay = (data) => {
  return Object.values(data).map((value) => {
    // console.log(value);
    const { tags, webformatURL } = value;
    return { tags, webformatURL };
  });
};

exports.filterPixabay = filterPixabay;
