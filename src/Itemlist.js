import Item from "./Item";
function Itemlist({ items, onDelete, onToggleChecked }) {
  //   const items = [
  //     { id: 1, quantity: 1, name: "Milk", isChecked: false },
  //     { id: 2, quantity: 2, name: "Coffee", isChecked: false },
  //     { id: 3, quantity: 3, name: "Sugar", isChecked: false },
  //   ];

  return (
    <div id="myUnOrdList">
      <ul className="list-group">
        {items.map((item) => (
          <Item
            itemList={item}
            key={item.id}
            onDelete={() => onDelete(item.id)}
            onToggleChecked={() => onToggleChecked(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Itemlist;
