import { useState } from "react";

export default function Form({onAddItem, onClearList}) {
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState(1);
    
  
    function handleFormSubmit(e) {
      e.preventDefault();
      if(title) {
        const item = {id: Date.now(), title, quantity, completed: false};
        onAddItem(item);
        setTitle('');
        setQuantity(1);
      }
    }
    
    return (
      <form className="form" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Ürün adı giriniz" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          { Array.from({length:10}, (v,i) => i + 1).map(num => <option value={num} key={num}>{num}</option>) }
        </select>
        <button type="submit">➕ Ekle</button>
        <button type="button" onClick={onClearList}>🗑️ Temizle</button>
      </form>
    );
  }