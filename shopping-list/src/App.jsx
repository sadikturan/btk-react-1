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
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
}

function Item() {
  return (
    <li>
      <span>Yumurta</span>
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
