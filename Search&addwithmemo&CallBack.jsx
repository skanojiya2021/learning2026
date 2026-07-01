import "./styles.css";
import { useState, useMemo, useCallback } from "react";

function useSearchList(initialItems = []) {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState("");

  const addItem = useCallback((newItem) => {
    setItems((prev) => [...prev, newItem]);
  }, []);
  const updateQuery = useCallback((newQuery) => {
    setQuery(newQuery);
  }, []);

  const filterItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);
  return { query, filterItems, updateQuery, addItem };
}
export default function App() {
  const { query, updateQuery, filterItems, addItem } = useSearchList([
    "apple",
    "banana",
    "chhiku",
    "cheery",
  ]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <h1>search function</h1>

      <div>
        <p>this is search functionality</p>
        <input
          type="text"
          placeholder="search here.."
          value={query}
          onChange={(e) => updateQuery(e.target.value)}
        />

        <ul>
          {filterItems.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>this is add item functionality</p>
        <input
          type="text"
          placeholder="add newItem ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
            addItem(inputValue);
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
