import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <div className='Nav'>
        <Link to="/">Page 1</Link>

        <Link to="/emergency-contact">Page 2</Link>

        <Link to="/insurance">Page 3</Link>
      </div>
    );
}
