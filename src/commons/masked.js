const masked = (inputPattern, outputPattern) => {
  return value => {
    const searchResults = inputPattern.exec(value);
    if (searchResults) {
      return outputPattern(searchResults);
    }
    return value;
  };
};

export default masked;
