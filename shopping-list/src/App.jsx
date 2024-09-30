const items = [
  { id:1, title: "Yumurta", quantity: 10, completed: true },
  { id:1, title: "Ekmek", quantity: 2, completed: true },
  { id:1, title: "Süt", quantity: 1, completed: false },
  { id:1, title: "Et", quantity: 1, completed: true },
  { id:1, title: "Zeytin", quantity: 1, completed: false }
];

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <List />
      <Summary />
    </div>
  );
}

function Header() {
  return (
    <h1>🛒 Shopping List</h1>
  );
}

function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Ürün adı giriniz" />
      <select>
        {
          Array.from({length:10}, (v,i) => i + 1)
            .map(num => <option value={num}>{num}</option>)
        }
       
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        { items.map((i, index) => (<Item item={i} key={index} />)) }
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.completed ? {textDecoration:"line-through"}: {}}>{item.quantity} { item.title }</span>
      <button>X</button>
    </li>
  );
}

function Summary() {
  return (
    <footer className="summary">Alışveriş sepetinizde 10 ürün bulunmaktadır.</footer>
  );
}

export default App
