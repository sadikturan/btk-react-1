export default function cartReducer(state, action) {
  if (action.type == "ADD_ITEM") {
    const index = state.items.findIndex((item) => item.id === action.item.id);

    const updatedItems = [...state.items];

    if (index > -1) {
      const existingItem = state.items[index];

      const updatedItem = {
        ...existingItem, // title, quantity:2
        quantity: existingItem.quantity + 1,
      };

      updatedItems[index] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 }); // title,id,price,quantity
    }

    return { ...state, items: updatedItems };
  }

  if (action.type == "REMOVE_ITEM") {
    const index = state.items.findIndex((item) => item.id === action.id);

    const existingItem = state.items[index];
    const updatedItems = [...state.items];

    if (existingItem.quantity === 1) {
      updatedItems.splice(existingItem, 1);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems[index] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}
