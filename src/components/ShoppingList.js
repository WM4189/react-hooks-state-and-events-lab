import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
// console.log(items)
 function handleFilterChange (e){
  setSelectedCategory(e.target.value)
 }
  const [selectedCategory,setSelectedCategory] = useState("All")

  const foodsToDisplay = items.filter(food => {
    if(selectedCategory === "All" ){
      return true;
    } else{
      return food.category === selectedCategory
    }
  })

  const foodList = foodsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodList}
      </ul>
    </div>
  );
}

export default ShoppingList;
