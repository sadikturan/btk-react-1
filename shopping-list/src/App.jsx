import { useState } from "react";

const data = [
  { id:1, title: "Yumurta", quantity: 10, completed: true },
  { id:2, title: "Ekmek", quantity: 2, completed: true },
  { id:3, title: "Süt", quantity: 1, completed: false },
  { id:4, title: "Et", quantity: 1, completed: true },
  { id:5, title: "Zeytin", quantity: 1, completed: false }
];

function App() {
  const [items, setItems] = useState(data);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);  
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems(items => items.map(item => item.id == id ? {...item, completed: !item.completed}: item));
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <List items={items} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem}/>
      <Summary items={items}/>
    </div>
  );
}

function Header() {
  return (
    <h1>🛒 Shopping List</h1>
  );
}

function Form({onAddItem}) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  

  function handleFormSubmit(e) {
    e.preventDefault();
    const item = {id: Date.now(), title, quantity, completed: false};
    console.log(item);

    onAddItem(item);

    setTitle('');
    setQuantity(1);
  }
  
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Ürün adı giriniz" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        { Array.from({length:10}, (v,i) => i + 1).map(num => <option value={num} key={num}>{num}</option>) }
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}

function List({items, onDeleteItem, onUpdateItem}) {
  return <>
    {
      items.length > 0 ? (
        <div className="list">
          <ul>
            { items.map((i, index) => (<Item item={i} key={index} onDeleteItem={onDeleteItem} 
              onUpdateItem={onUpdateItem} />)) }
          </ul>
        </div>
      ): 
      <div className="list">Sepette ürün yok.</div>
  }
  </>;
}

function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li>
      <input type="checkbox" checked={item.completed} onChange={() => onUpdateItem(item.id)} />
      <span style={item.completed ? {textDecoration:"line-through"}: {}}>{item.quantity} { item.title }</span>
      <button onClick={() => onDeleteItem(item.id)}>X</button>
    </li>
  );
}

function Summary({items}) {
  if(items.length === 0) {
    return (
      <footer className="summary">Alışveriş listenizi hazırlamaya başlayabilirsiniz.</footer>
    );
  }
  const itemsCount = items.length;
  const completedItemsCount = items.filter(item => item.completed).length;

  return (
    <footer className="summary">
      {itemsCount === completedItemsCount ? 
      <p>Alışverişi tamamladınız. 😍</p> : 
      <p>Alışveriş sepetinizde {itemsCount} üründen {completedItemsCount} tanesini aldınız.</p>}
    </footer>
  );
}

export default App
