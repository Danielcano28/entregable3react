import { IconUfo } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {
  const handlesubmit = (e) => {
    e.preventDefault();

    const newLocationId = e.target.newLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));
  };
  return (
    <section className="grid justify-center gap-5">
      <div>
        <div className="position: relative   z-10  w-[450px] h-[400px]">
          <img src="/ricky.png" alt="" />
        </div>
        <div className="animate-spin-show w-[500px] h-[550px] overflow-hidden position: absolute -top-20">
          <img src="/vortex.png" alt="" />
        </div>
      </div>
      <form
        className="flex justify-center items-center position relative bottom-16 z-10 "
        onSubmit={handlesubmit}
      >
        <div className="flex">
          <input
            className="text-slate-500 bg-black border-2 border-green-500 top-0  z-20 h-11"
            type="text"
            name="newLocation"
            placeholder="hablame primo"
          />
          <button
            className="flex gap-2 bg-green-500 px-4 h-11 items-center"
            type="submit"
          >
            <IconUfo size={27} />
          </button>
        </div>
      </form>
      <article className="grid justify-center items-center gap-2  py-[15px] px-[30px] border-2 border-green-600 position relative bottom-12">
        <h2 className="justify-center items-start grid text-green-500">
          welcome to{locationInfo?.name}!
        </h2>
        <ul className="flex gap-6 text-white">
          <li>type:{locationInfo?.type}</li>
          <li>Dimension:{locationInfo?.dimension}</li>
          <li>population:{locationInfo?.residents.length}</li>
        </ul>
      </article>
    </section>
  );
};
export default Location;
