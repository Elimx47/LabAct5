import React, { useState } from "react";

function Item({ itemList, onDelete, onToggleChecked }) {
  const handleDeleteItem = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      onDelete(itemList.id);
    }
  };

  // const handleCheckItem = () => {
  //   setIsChecked(!isChecked);
  //   itemList.isChecked = !isChecked;
  // };

  return (
    <div
      className="container rounded-pill text-white py-2 my-2"
      style={{
        width: "400px",
        backgroundColor: "#000078",
        border: "3px solid orange",
      }}
    >
      <div className="row align-items-center">
        <div className="col-auto">{itemList.quantity}</div>
        <div className="col">{itemList.name}</div>
        <div className="col-auto">
          <button
            className="btn text-white rounded-pill me-2"
            style={{ backgroundColor: "orange", border: "2px solid white" }}
            onClick={handleDeleteItem}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            className="btn text-white rounded-pill"
            style={{ backgroundColor: "orange", border: "2px solid white" }}
            onClick={onToggleChecked}
          >
            {itemList.isChecked ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-check"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
