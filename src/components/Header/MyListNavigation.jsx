import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeNavigation(props) {
  return (
    <div id="navigation" className="navigation">
      <nav>
        <ul>
          <li>
            <Link to="/myList">My List</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}