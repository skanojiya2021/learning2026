import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await data.json();
    setItems(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteLogic = (id) => {
    const deleteData = items.filter((user) => user.id !== id);
    setItems(deleteData);
  };
  return (
    <div className="App">
      <h1>Display data in tabularformat</h1>
      <div>
        <ul>
          {items.map((item) => (
            <table>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.address.city}</td>
                <td>
                  <button onClick={() => handleDeleteLogic(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>

              <tr></tr>
            </table>
          ))}
        </ul>
      </div>
    </div>
  );
}
