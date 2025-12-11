import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=18`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h1 className="font-bold text-amber-500 absolute text-2xl animate-pulse -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      Loading...
    </h1>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen overflow-auto">
      <div className="flex flex-wrap gap-6 h-[80%] p-6 justify-center">
        {printUserData}
      </div>

      <div className="flex justify-center gap-8 items-center p-6 bg-gray-950/60 backdrop-blur-md shadow-inner border-t border-gray-700">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-500 hover:bg-amber-400 transition-all duration-300 text-sm cursor-pointer active:scale-95 text-black px-5 py-2 rounded-lg font-semibold shadow-md"
        >
          Prev
        </button>

        <h4 className="text-lg font-semibold">Page {index}</h4>

        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-500 hover:bg-amber-400 transition-all duration-300 text-sm cursor-pointer active:scale-95 text-black px-5 py-2 rounded-lg font-semibold shadow-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
