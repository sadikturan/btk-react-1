import { items } from "../data";
import Product from "./Product";

export default function ProducList() {
  
    return (
      <>
        {
          items.length > 0 ? (
            <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id='product-list'>
            {
              items.map((item, index) => (
                <div className='col' key={ index }>
                  <Product  productObj = { item } />
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