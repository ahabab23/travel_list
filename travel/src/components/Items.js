function Items({ item, deleteItem, toggleItem }) {
  return (
    <li>
      <input
        value={item.packed}
        onChange={() => toggleItem(item.id)}
        type="checkbox"
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}
export default Items;
