import React from 'react';

const Categories = ({list, shakes, lunch, breakfast}) => {
  return(
    <>
    <div className="btn-container">
      <button className="filter-btn" onClick= {list}><i class="fas fa-utensils"></i>All</button>
      
      <button className="filter-btn" onClick= {breakfast}><i class="fas fa-bread-slice"></i>Breakfast</button>
     
      <button className="filter-btn" onClick= {lunch}><i class="fas fa-cookie-bite"></i>Lunch</button>
     
      <button className="filter-btn" onClick= {shakes}><i class="fas fa-glass-martini-alt"></i>Shakes</button>
    </div>
    </>
  );
};

export default Categories;