import { useState } from "react";

function App() {
  return (
    <>
      <RadialMenu />
    </>
  );
}

export default App;

export function RadialMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const liElements = ["a", "b", "c", "d", "e", "f"];
  return (
    <>
      <div className="flex">
        <button onClick={() => setOpen(!open)}>X</button>
        {open ? (
          <div className="flex ml-3">
            {liElements.map((el) => {
              return <div className="ml-1">{el}</div>;
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}
