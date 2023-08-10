// import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { Stats } from "./Stats";
import FlashCards from "./FlashCards";
import Accordion from "./Accordion";
import Calculator from "./Calculator";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems(items => [...items, item])
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleClearList() {
    const confirmed = window.confirm('Are You sure You want to delete all items?')
    if (confirmed) setItems([]);
  }

  //how we render lists in React? - we simply use the map method

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />
      <FlashCards />
      <Accordion />
      <Calculator />
    </div>
  )
}


