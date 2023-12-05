import { useEffect, useState } from "react";
import { pagnationLogic } from "../utils/pagination";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { pages, residentsIncurrentPage } = pagnationLogic(
    currentPage,
    residents
  );

  const handleNewPage = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <section className=" max-w-[1200px] mx-auto">
      <section className="grid gap-8 grid-cols-[repeat(auto-fill,_250px)] justify-center">
        {residentsIncurrentPage.map((resident) => (
          <ResidentCard key={resident} residentURL={resident} />
        ))}
      </section>
      <ul className="flex justify-center p-4 gap-6 flex-wrap pb-10">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`${
                currentPage === page && "bg-green-500 p-2 text-white rounded-md"
              }`}
              onClick={() => handleNewPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ResidentList;
<li></li>;
("bg-green-800 p-2 text-white rounded-md");
