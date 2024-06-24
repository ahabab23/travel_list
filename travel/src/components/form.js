import { useState } from "react";

function Form({ addItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (description === "") return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    addItems(newItem);
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(20).keys()].map((num) => (
          <option key={num} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="item..."
      />
      <button>ADD</button>
    </form>
  );
}
export default Form;
