import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

const SearchDishes = () => {
  const [input,setInput] = useState("")
  const navigate = useNavigate()

  const submitHandler = (e) =>  {
    e.preventDefault();
    navigate("/searched");
  }
  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <div className="search-container">
        <i className="material-icons search-icon"><FaSearch color="#8e8e8e"/></i>
        <input
        onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search Recipes"
          value={input}
        />
      </div>
    </form>
  )
}

export default SearchDishes