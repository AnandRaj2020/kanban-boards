import React, { useEffect, useState } from "react";

import Board from "./Components/Board/Board";
import Navigation from "./Components/Navigation/Navigation";

import "./App.css";
import GetData from "./apis/get_data";

function App() {
  const [boards, setBoards] = useState(
    JSON.parse(localStorage.getItem("prac-kanban")) || []
  );

  const groupDataBy = (data, groupingKey) => {
    const groupedData = {};
  
    data.forEach(item => {
      const key = item[groupingKey];
  
      if (!groupedData[key]) {
        groupedData[key] = [];
      }
  
      groupedData[key].push(item);
    });
  
    return groupedData;
  }

  let data = groupDataBy(GetData().tickets, "status");


  useEffect(() => {
    localStorage.setItem("prac-kanban", JSON.stringify(boards));
  }, [boards]);


  const tt = Object.keys(data)

  return (
    <div className="app">
      <div className="app_nav">
        <Navigation/>
      </div>
      <div className="app_boards_container">
        <div className="app_boards">
          {tt.map((item) => (
            <Board
              key={item}
              board={data[item]}
              title={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;