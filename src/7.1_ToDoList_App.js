import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((curArray) => [...curArray, toDo]);
    setToDo("");
  };

  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));

  const deleteToDo = (event) => {
    const targetIndex = parseInt(event.target.id);

    setToDos(
      toDos.filter((_, index) => {
        return targetIndex !== index;
      })
    );
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            {
              <button id={index} onClick={deleteToDo}>
                ❌
              </button>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;