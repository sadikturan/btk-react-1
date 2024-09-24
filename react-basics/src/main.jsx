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
  ];

  return (
    <>
      <h2>Product List</h2>
      <Product 
          image={ items[0].image } 
          title={items[0].title} 
          description={items[0].description} 
          price={items[0].price}/>

      <Product 
          image={ items[1].image } 
          title={items[1].title} 
          description={items[1].description} 
          price={items[1].price}/>

      <Product 
          image={ items[2].image } 
          title={items[2].title} 
          description={items[2].description} 
          price={items[2].price}/>
            
    </>
  );  
}

function Product(props) {
  console.log(props);
  return (
    <div>
      <img src={ "/img/" + props.image } alt="" />
      <h2>{ props.title }</h2>
      <p>{ props.description }</p>
      <span>{ props.price } TL</span>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
