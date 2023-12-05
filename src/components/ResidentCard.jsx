import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentURL }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const bgByStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentURL)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <header className="relative border-2 border-green-500">
        <img src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white p-1 px-2">
          <div
            className={`h-3 aspect-square rounded-full ${
              bgByStatus[residentInfo?.status]
            }`}
          ></div>
          <span>{residentInfo?.status}</span>
        </div>
      </header>
      <section className="border-2 border-green-500">
        <h5 className="bg-black text-green-500 flex justify-center">
          {residentInfo?.name}
        </h5>
        <ul className="text-white grid gap-3">
          <li>
            <span>Species: </span>
            {residentInfo?.species}
          </li>
          <li>
            <span>origin: </span>
            {residentInfo?.origin.name}
          </li>
          <li>
            <span>times appear: </span>
            {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCard;
