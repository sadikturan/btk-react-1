import { useEffect, useState } from "react";
import Pizza from "./Pizza";

export default function PizzaList() {
  const [loadedPizzas, setLoadedPizzas] = useState([]);

  useEffect(() => {
    async function getPizzaList() {
      const response = await fetch("http://localhost:3000/pizzas");

      if (!response.ok) {
        // error log
      }

      const pizzas = await response.json();
      setLoadedPizzas(pizzas);
    }

    getPizzaList();
  }, []);

  return (
    <div className="pizza-list">
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
        {loadedPizzas.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </div>
  );
}
