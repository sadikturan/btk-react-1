import Header from "./components/Header";
import PizzaList from "./components/PizzaList";

export default function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <PizzaList />
      </div>
    </>
  );
}
