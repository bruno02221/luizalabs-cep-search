export const search = cep => {
  if (search.impl) {
    return search.impl(cep);
  }
  // TODO: implement search
  return Promise.resolve(null);
};
