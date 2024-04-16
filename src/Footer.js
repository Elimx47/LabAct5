function Footer({ items }) {
  let completedItems = items.filter((item) => item.isChecked).length;
  const itemText = items.length >= 2 ? "items" : "item";
  const percentageCompleted =
    items.length > 0 ? ((completedItems / items.length) * 100).toFixed(2) : 0;

  return (
    <div
      style={{
        backgroundColor: "#000078",
        position: "sticky",
        bottom: 0,
        color: "white",
        textAlign: "center",
        fontFamily: "Century Gothic",
        fontSize: "20px",
      }}
    >
      <p>
        You have {items.length} {itemText} in your list, and you already
        completed {completedItems}
      </p>
      <p>Completion Progress: ({percentageCompleted}%)</p>
    </div>
  );
}
export default Footer;
