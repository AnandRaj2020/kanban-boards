import React, { useState } from "react";
import { MoreHorizontal , Plus} from "react-feather";

import Card from "../Card/Card";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  console.log(props.board, "*&*&*&");

  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.title}
          <span>{props.board?.length || 0}</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <Plus />
          <MoreHorizontal />
        </div>
      </div>
      <div className="board_cards custom-scroll">
        {props.board?.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            tags={item.tags}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
