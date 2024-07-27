// import React from 'react';
// import { Nav } from 'react-bootstrap';
// import styles from '../styles/Sidebar.module.css';

// const Sidebar = () => {
//   return (
//     <div className={styles.sidebar}>
//       <Nav defaultActiveKey="/home" className="flex-column">
//         <Nav.Link href="/home">Home</Nav.Link>
//         <Nav.Link eventKey="link-1">Projects Menu</Nav.Link>
//         <Nav.Link eventKey="link-2">Tasks</Nav.Link>
//         <Nav.Link eventKey="link-3">Settings</Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faTasks, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home" className={styles.navLink}>
          <FontAwesomeIcon icon={faHome} className={styles.icon} /> Home
        </Nav.Link>
        <Nav.Link href="/projects" className={styles.navLink}>
          <FontAwesomeIcon icon={faProjectDiagram} className={styles.icon} /> Projects Menu
        </Nav.Link>
        <Nav.Link href="/tasks" className={styles.navLink}>
          <FontAwesomeIcon icon={faTasks} className={styles.icon} /> Tasks
        </Nav.Link>
        <Nav.Link href="/settings" className={styles.navLink}>
          <FontAwesomeIcon icon={faCog} className={styles.icon} /> Settings
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
