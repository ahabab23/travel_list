function Stats({ items }) {
  console.log(items.length);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const packedItems = items.filter((item) => item.packed).length;
  const totalItems = items.length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);
  console.log(packedItems);
  console.log(totalItems);

  console.log(packedPercentage);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${totalItems} items on your list, and you already packed
        ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
export default Stats;
