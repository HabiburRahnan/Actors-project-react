/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectActors, setSelectActors] = useState([]);
  useEffect(() => {
    fetch(`./Card.json`)
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    setSelectActors([...selectActors, actor]);
    // console.log(actor);
  };
  // console.log(allActors);
  return (
    // container
    <div>
      {/* home  container */}
      <div className="flex">
        {/* card container */}
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allActors.map((actor) => (
            <div
              key={actor.id}
              className="w-72 h-80 border-2 border-stone-300 bg-orange-500">
              <div className=" ">
                <img
                  className="w-36 h-20 rounded mt-2 ml-12 "
                  src={actor.image}
                  alt=""
                />
              </div>
              <div className=" text-center">
                <h2 className="text-2xl font-bold">{actor.country}</h2>
                <p className="text-xl font-semibold">
                  <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae, voluptatum.
                  </small>
                </p>
                <div className="flex justify-evenly font-bold ">
                  <p>Salary: ${actor.salary}</p>
                  <p>{actor.role}</p>
                </div>
                <button
                  onClick={() => handleSelectActor(actor)}
                  className="btn btn-info mt-4">
                  select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* cart section  */}
        <div>
          <Cart selectActors={selectActors}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
