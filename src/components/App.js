// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";
// import Header from "./Header"

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function onDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }
// // const appClass = isDarkMode ? "App dark" : "App light";
//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <header>
//         <h2>Shopster</h2>
//         <button data-testid="dark-mode-toggle" onClick={onDarkModeClick}>
//   {isDarkMode ? "Light Mode" : "Dark Mode"}
// </button>

//         {/* <button onClick={onDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"} Mode
//         </button> */}
//       </header>
//       <ShoppingList items={itemData} />
//       <Header/>
      
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import Header from './Header'; // Assuming you have these components
import Filter from './Filter';
import ShoppingList from './ShoppingList';

function App() {
  const [items, setItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All'); // Example state for filter
  const [isDarkMode, setIsDarkMode] = useState(false); // Example state for dark mode

  useEffect(() => {
    fetch('/api/items')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setItems(data))
      .catch(error => console.error("Error fetching items:", error));
  }, []);

  const handleDarkModeClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleFilterChange = (event) => {
    setFilterCategory(event.target.value);
  };

  // Filter items based on selected category
  const filteredItems = items.filter(item =>
    filterCategory === 'All' || item.category === filterCategory
  );

  // --- This is the MISSING RETURN STATEMENT ---
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter filterCategory={filterCategory} onFilterChange={handleFilterChange} items={items} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
