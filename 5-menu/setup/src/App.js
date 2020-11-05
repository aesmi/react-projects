import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//array of all categories within our data array
//we use a set to remove duplicate categories
//refer to: https://alligator.io/js/sets-introduction/#:~:text=Sets%20are%20a%20new%20object,like%20object%20literals%20or%20arrays
const allCategories = ['all', ...new Set(items.map((item) => item.categories))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  //util function for filtering categories
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category == category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        {/*pass in our util function as a prop'*/}
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
