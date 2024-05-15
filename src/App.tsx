import { useState } from "react";
import crown from "../public/crown.png";
import games from "../public/games.png";
import alien from "../public/alien.png";
import note from "../public/note.png";
import glasses from "../public/sunglasses.png";
import web from "../public/www.png";

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
  const pictures = [crown, games, alien, note, glasses, web];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`relative z-10 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform duration-300 ${
            open ? "ring-8 ring-black" : ""
          }`}
        >
          X
        </button>
        {open && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute flex items-center justify-center w-64 h-64 rounded-full border-4 bg-green-500">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {pictures.map((el, index) => {
                  const angle = (index / pictures.length) * 360;
                  const transform = `translate(-50%, -50%) rotate(${angle}deg) translate(6vw) rotate(-${angle}deg)`;
                  return (
                    <div
                      key={index}
                      className="absolute w-8 h-8"
                      style={{ transform }}
                    >
                      <img
                        src={el}
                        className="w-full h-full"
                        alt={`icon-${index}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
