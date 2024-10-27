import { useEffect, useState } from "react";

export default function useLocalStorage(initialData, key) {
  const [value, setValue] = useState(function () {
    const obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj) : initialData;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
