/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const Cart = ({ selectActors, remaining, totalCost }) => {
  // const { name } = selectActors;
  return (
    <div>
      <h3 className="text-3xl font-semibold my-4">
        Total Actors: {selectActors.length}
      </h3>
      <h3 className="text-3xl font-semibold my-4">Remaining: {remaining}</h3>
      <h3 className="text-3xl font-semibold my-4">Total Cost: {totalCost}</h3>
      {selectActors.map((actor) => (
        <li key={actor.id} className="text-xl ml-7">
          {actor.country}
        </li>
      ))}
    </div>
  );
};

export default Cart;
