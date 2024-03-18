
import React, { useRef } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar_container from '../../nav/navbar_container';
const MainContent = () => {
    const containerRef = useRef(null);

    function handleWheel(event) {
      const container = containerRef.current;
      const delta = Math.max(-1, Math.min(1, event.deltaY));
      container.scrollLeft -= delta * 30; // adjust scrolling speed here
    }
  return (
    <> 
       
       <Navbar_container />
    </>
  )
}

export default MainContent