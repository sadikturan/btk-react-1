import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <>
      <Header />
      <ProducList />
    </>
  );
}

function Header() {
  return <h1>Header</h1>;
}

function ProducList() {
  return (
    <>
      <h2>Product List</h2>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </>
  );  
}

function Product() {
  const image = "1.jpg";
  const title = "IPhone 16";
  const description = "Lorem ipsum dolor sit amet.";
  const price = 80000;

  const product_item = {
    "image" :  "1.jpg",
    "title" : "IPhone 16",
    "description" : "Lorem ipsum dolor sit amet.",
    "price": 80000
  };

  return (
    <div>
      <img src={ "/img/" + product_item.image } alt="" />
      <h2>{ product_item.title }</h2>
      <p>{ product_item.description }</p>
      <span>{ product_item.price } TL</span>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
