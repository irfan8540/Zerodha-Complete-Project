import React, { useState } from "react";

import { Tooltip, Grow } from "@mui/material";

import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { watchlist } from "../data/data";


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock}) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handlerMouseEnter = (e) => {
    setShowWatchlistActions(true);
  }

  const handlerMouseLeave = (e) => {
    setShowWatchlistActions(false);
  }

  return (
    <li onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up" }>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};



const WatchListActions = ({uid}) => {

  return <span className="actions">
    <span>
      <Tooltip title= "Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy">Buy</button>
      </Tooltip>

      <Tooltip title= "Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip title= "Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
        
        {/* <button className="chart">Analytics</button> */}
      </Tooltip>

      <Tooltip title= "More " placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
        {/* <button className="btn">More</button> */}
      </Tooltip>
    </span>
  </span>  
}




