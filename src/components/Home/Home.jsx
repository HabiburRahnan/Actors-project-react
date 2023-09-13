/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [allActors, setAllActors] = useState([]);
  const [selectActors, setSelectActors] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    fetch(`./Card.json`)
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  const handleSelectActor = (actor) => {
    const isExist = selectActors.find((item) => item.id === actor.id);

    let count = actor.salary;
    if (isExist) {
      return alert("already book");
    } else {
      selectActors.forEach((item) => {
        count += item.salary;
      });
      // console.log(count);

      const totalRemaining = 300000 - count;
      // console.log(totalRemaining);
      if (count > 300000) {
        return alert("taka ses e hbe na");
      } else {
        setTotalCost(count);
        setRemaining(totalRemaining);
        setSelectActors([...selectActors, actor]);
      }
    }
    // console.log(actor);
  };
  // console.log(allActors);
  return (
    // container
    <div>
      {/* home  container */}
      <div className="flex justify-around">
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
        <div className="">
          <Cart
            totalCost={totalCost}
            remaining={remaining}
            selectActors={selectActors}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
