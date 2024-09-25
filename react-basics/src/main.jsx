import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className='container mt-3'>
        <ProducList />
      </div>
    </>
  );
}

function Header() {
  return (
    <header>
      <nav className='navbar navbar-expand bg-dark border-bottom border-body' data-bs-theme="dark">
        <div className='container'>
          <a href="#" className='navbar-brand'>Store App</a>
        </div>
      </nav>
    </header>
  );
}

function ProducList() {
  const items = [
    {
      "image" :  "1.jpg",
      "title" : "IPhone 16",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 80000,
      "is_active": true
    },
    {
      "image" :  "2.jpg",
      "title" : "IPhone 17",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 90000,
      "is_active": true
    },
    {
      "image" :  "3.jpg",
      "title" : "IPhone 18",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 100000,
      "is_active": true
    }
    ,
    {
      "image" :  "4.jpg",
      "title" : "IPhone 19",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 110000,
      "is_active": true
    },
    {
      "image" :  "4.jpg",
      "title" : "IPhone 19",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 110000,
      "is_active": true
    },
    {
      "image" :  "4.jpg",
      "title" : "IPhone 19",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 110000,
      "is_active": true
    },
    {
      "image" :  "4.jpg",
      "title" : "IPhone 19",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 110000,
      "is_active": true
    },
    {
      "image" :  "4.jpg",
      "title" : "IPhone 19",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 110000,
      "is_active": true
    },
    {
      "image" :  "4.jpg",
      "title" : "IPhone 19",
      "description" : "Lorem ipsum dolor sit amet.",
      "price": 110000,
      "is_active": true
    }
  ];

  return (
    <>
      {
        items.length > 0 ? (
          <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id='product-list'>
          {
            items.map((item, index) => (
              <div className='col'>
                <Product key={ index } productObj = { item } />
              </div>
            ))
          }  
        </div>
        ) : (
          <p>Şu anda satışta olan ürünümüz yok.</p>
        )
      }
    </>
  );  
}

function Product({ productObj }) {

  if(!productObj.is_active) return null;

  return (
    <div className='card shadow-sm'>
      <img className='card-img-top p-2 p-md-3 border-bottom' src={ "/img/" + productObj.image } alt="" />
      <div className='card-body'>
        <h2 className='card-title'>{ productObj.title }</h2>
        <p className='card-text'>{ productObj.description }</p>
        <span className='badge text-bg-success' >{ productObj.price } TL</span>
      </div>

    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer>
      {
        isOpen ? (
          <p>Akşam {closeHour}' e kadar sipariş verebilirsiniz.</p>
        ) : 
        (
          <p>Şu an kapalıyız. Açılış saatimiz {openHour}.</p>
        )
      }
    </footer>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
