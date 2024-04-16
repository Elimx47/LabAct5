import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import Itemlist from "./Itemlist";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear list?");
    if (confirmed) {
      setItems([]);
    }
  }

  function handleToggleChecked(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  return (
    <div className="text-align-center">
      <Header />
      <Form onAddItem={handleAddItems} />
      <div className="button-and-select">
        <button
          onClick={handleClearList}
          className="btn mx2 btn-dark"
          style={{ marginRight: "10px" }}
        >
          Clear
        </button>
        <br />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="form-select"
          style={{
            width: "150px",
            color: "white",
            backgroundImage: "primary",
            backgroundColor: "gray",
          }}
        >
          <option value="input">Sort by Input</option>
          <option value="name">Sort by Name</option>
          <option value="checked">Sort by check status order</option>
        </select>
      </div>
      <Itemlist
        items={sortedItems}
        onDelete={handleDeleteItem}
        onToggleChecked={handleToggleChecked}
      />
      <br />
      <Footer items={sortedItems} />
    </div>
  );
}

export default App;
