import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, isChecked: false, id: Date.now() };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <div
          className="input-group mb-3 container border-rounded-4"
          style={{ width: "600px" }}
        >
          {/* <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            1
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                2
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                3
              </a>
            </li>
          </ul> */}
          <select
            value={quantity}
            onChange={(f) => setQuantity(+f.target.value)}
          >
            {Array.from({ length: 30 }, (_, n) => n + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Add an item..."
            aria-label="Add an item..."
            aria-describedby="button-addon2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            I Got This
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
