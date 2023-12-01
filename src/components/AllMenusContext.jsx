import React, { createContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";

export const AllMenuContext = createContext();

export const AllMenus = (props) => {
  const [menu, setMenu] = useState([]);
  const [loading,setLoading] = useState(true)
  const getAllMenus = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    const res = await fetch(API_URL);
    const data = await res.json();
    setMenu(data.meals);
    setLoading(false)
  };

  useEffect(() => {
    getAllMenus();
  }, []);
  return (
    <AllMenuContext.Provider value={menu}>
      {!loading ? props.children : <div className="loading"> <ReactLoading  type="cylon" color="#313131"  width={100}  /> </div>}
    </AllMenuContext.Provider>
  );
};
