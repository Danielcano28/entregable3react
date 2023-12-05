const pagnationLogic = (currentPage, residents) => {
  const RESIDENTS_PER_PAGE = 20;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceEnd = currentPage * RESIDENTS_PER_PAGE;
  const sliceStart = sliceEnd - RESIDENTS_PER_PAGE;
  const residentsIncurrentPage = residents.slice(sliceStart, sliceEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return { pages, residentsIncurrentPage };
};

export { pagnationLogic };
