import { useState } from "react";
import Form from "./components/form";
import Logo from "./components/logo";
import Packaging from "./components/packaging";
import Stats from "./components/stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  function handleAddSubmit(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleitem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddSubmit} />
      <Packaging
        items={items}
        deleteItem={handleDelete}
        toggleItem={handleToggleitem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
