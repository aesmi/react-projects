import React from 'react';

//passing in our categories from our App.js
const Categories = ({ categories, filterItems }) => {
  return (<div className="btn-container">
    {/*iteratively rendering our buttons*/}
    {categories.map((category, index) => {
      return (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      );
    })}
  </div>);
};

export default Categories;
