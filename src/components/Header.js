import React from 'react'

// const Header = ({ onDarkModeClick, isDarkMode}) => {
//   return (
//     <div>
//      <h1>Shopping List</h1>
//      <button data-testid="mode-toggle" onClick={onDarkModeClick}>
//   {isDarkMode ? "Light Mode" : "Dark Mode"}
// </button>

//       {/* <button onClick={onDarkModeClick}>
//         { isDarkMode? "Light Mode" : "Dark Mode"}
//       </button>  */}
//     </div>
//   )
// }

// export default Header
// Header.js
function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button   data-testid="dark-mode-toggle" onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
 export default Header