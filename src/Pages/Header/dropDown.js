
import * as React from 'react';
import './dropdown.css';
import { Link } from 'react-router-dom';

const DropdownComponent = ()=> {
    




  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>About</button>
      {open ? (
        <ul className="menu">
          <li className="text-black hover:text-purple-700 ">
          <Link to="/contact">Team</Link>
          </li>
          <li className="text-black hover:text-purple-700 ">
            <Link to="/contact">Career</Link>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div></div>}
    </div>
  );
};

export default DropdownComponent;