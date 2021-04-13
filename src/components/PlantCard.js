import React, {useState} from "react";

function PlantCard({plant}) {
const {name, price, image} = plant;
const [stock, setStock] = useState(true);

function handleStockToggle() {
  setStock((stock) => !stock);
}
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={handleStockToggle}>In Stock</button>
      ) : (
        <button onClick={handleStockToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
