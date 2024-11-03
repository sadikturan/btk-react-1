import Header from "./components/Header";
import PizzaList from "./components/PizzaList";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <div className="container my-4">
        <PizzaList />
      </div>
    </ThemeProvider>
  );
}
