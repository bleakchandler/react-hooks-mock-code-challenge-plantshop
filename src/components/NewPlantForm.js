import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  console.log("name is", name)

  console.log("image is", Image)

  console.log("price is", price)

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price
      }),
    })
      .then((r) => r.json())
      .then((newPlantData) => onAddPlant(newPlantData));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name"
          onChange={(e) => setName(e.target.value)}        />
        <input type="text" name="image" placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <input type="number" name="price" step="0.01" placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
