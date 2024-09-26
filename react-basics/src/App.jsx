import Header from "./components/Header";
import ProducList from "./components/ProductList";

export default function App() {
    return (
      <>
        <Header />
        <div className='container mt-3'>
          <ProducList />
        </div>
      </>
    );
  }
  