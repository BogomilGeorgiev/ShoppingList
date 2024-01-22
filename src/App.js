import { Footer } from "./components/Footer/Footer";
import { AddItem } from "./components/Form/Form";
import { GroceriesList } from "./components/GroceriestList/GroceriesList";
import { Logo } from "./components/Logo";
import Main from "./components/Main";
import { useLocalStorage } from "./components/useLocalStorage";


function App() {

  const [items, setItems] = useLocalStorage([], 'products');

  const handleAddItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  // const handleDeleteItem = (id) => {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }

  // const handleRevertChange = (id) => {
  //   setItems((items) => items
  //     .map((item) =>
  //       item.id === id
  //         ? { ...item, purchased: !item.purchased }
  //         : item))
  // }

  const handleToggle = (id) => {
    setItems((items) => items
      .map((item) =>
        item.id === id
          ? { ...item, purchased: !item.purchased }
          : item))
  };

  const handleClearList = () => {
    setItems([]);
  }


  return (
    <div className="app">
      <Logo />

      <Main>
        <AddItem
          onAddItem={handleAddItem}
        />
        <GroceriesList
          onToggleItem={handleToggle}
          onClearList={handleClearList}
          items={items} />
      </Main>

      <Footer items={items} />
    </div>
  );
}

export default App;
