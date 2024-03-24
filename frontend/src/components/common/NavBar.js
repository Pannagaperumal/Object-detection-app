// import React from 'react';

// const NavBar = () => {
//   return (
//     <nav>
//       <h1>Vehicle Detection App</h1>
//     </nav>
//   );
// };

// export default NavBar;
import React from 'react';

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <h1 style={headingStyle}>Vehicle Detection App</h1>
      <div style={blackDivStyle}></div>
      {/* <ul style={listStyle}>
        <li style={listItemStyle}><a href="#" style={linkStyle}>Option 1</a></li>
        <li style={listItemStyle}><a href="#" style={linkStyle}>Option 2</a></li>
        <li style={listItemStyle}><a href="#" style={linkStyle}>Option 3</a></li>
      </ul> */}
    </nav>
  );
};

const navStyle = {
  background: '#000',
  color: '#fff',
  textAlign: 'center',
  padding: '8px',
};

const headingStyle = {
  fontSize: '20px',
};

const blackDivStyle = {
//   background: '#000',
  height: '7px',
  width: '100vw', // Set width to 100% of viewport width
};

export default NavBar;
