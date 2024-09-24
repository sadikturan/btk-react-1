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
  const items = [
    {
      "image" :  "1.jpg",
      "title" : "IPhone 16",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 80000
    },
    {
      "image" :  "2.jpg",
      "title" : "IPhone 17",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 90000
    },
    {
      "image" :  "3.jpg",
      "title" : "IPhone 18",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 100000
    }
    ,
    {
      "image" :  "4.jpg",
      "title" : "IPhone 19",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 110000
    }
  ];

  return (
    <>
      <h2>Product List</h2>
      {
        items.map((item, index) => (
          <Product key={ index } productObj = { item } />
        ))
      }  
    </>
  );  
}

function Product({ productObj }) {
  return (
    <div>
      <img src={ "/img/" + productObj.image } alt="" />
      <h2>{ productObj.title }</h2>
      <p>{ productObj.description }</p>
      <span>{ productObj.price } TL</span>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
