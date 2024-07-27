// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '../components/Card';
// import ProjectForm from '../components/ProjectForm';
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import styles from '../styles/Home.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import FormModal from './FormModal';
// import { getProjects,createProject, updateProject, deleteProject } from './appService';




// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch projects here
//     // For demonstration purposes, set loading to false after data is fetched
//     setLoading(false);
//   }, []);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const handleShowModal = (project = null) => {
//     setEditingProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingProject(null);
//   };

//   const handleFormSubmit = (values) => {
//     // Handle form submission here
//     handleCloseModal();
//   };

//   const handleDeleteProject = (id) => {
//     // Handle project deletion here
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Container className={`${styles.container} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Row className="justify-content-end mt-3">
//           <Col xs="auto">
//             <CreateButton onClick={() => handleShowModal()} />
//           </Col>
//         </Row>
//         <Row className={styles.cardContainer}>
//           {loading ? (
//             <p>Loading...</p>
//           ) : projects.length > 0 ? (
//             projects.map((project) => (
//               <Col key={project.id} xs={12} md={6} lg={4}>
//                 <Card project={project} onEdit={() => handleShowModal(project)} onDelete={() => handleDeleteProject(project.id)} />
//               </Col>
//             ))
//           ) : (
//             <Col xs={12} md={6} lg={4}>
//               <div className={styles.card}>
//                 <h3>No Projects Found</h3>
//               </div>
//             </Col>
//           )}
//         </Row>
//         <FormModal
//           show={showModal}
//           handleClose={handleCloseModal}
//           handleSubmit={handleFormSubmit}
//           initialValues={editingProject || { project_name: '', project_description: '', priority: '', start_date: null, end_date: null }}
//         />
//       </Container>
//     </div>
//   );
// };

// export default Home;







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import Card from '../components/Card';
// import styles from '../styles/Home.module.css';
// import CreateButton from './CreateButton';
// import FormModal from './FormModal';
// import { getProjects, createProject, updateProject, deleteProject } from '../common/apiService';
// import Header from './header'; 
// import Sidebar from './Sidebar';


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Card from '../components/Card';
// import ProjectForm from '../components/ProjectForm';
// import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';
// import styles from '../styles/Home.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import FormModal from '../components/FormModal'; // Corrected import
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import { getProjects, createProject, updateProject, deleteProject } from '../services/appService'; // Corrected import

// const Home = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showModal, setShowModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const projects = await getProjects();
//         setProjects(projects);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   const handleShowModal = (project = null) => {
//     setEditingProject(project);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setEditingProject(null);
//   };

//   const handleFormSubmit = async (values) => {
//     try {
//       if (editingProject) {
//         console.log('Editing project:', editingProject);
//         const updatedProject = await updateProject(editingProject.id, values);
//         setProjects((prevProjects) =>
//           prevProjects.map((project) =>
//             project.id === updatedProject.id ? updatedProject : project
//           )
//         );
//         console.log('Updated project:', updatedProject);
//       } else {
//         console.log('Creating new project with values:', values);
//         const newProject = await createProject(values);
//         setProjects((prevProjects) => [...prevProjects, newProject]);
//         console.log('New project created:', newProject);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       handleCloseModal();
//     }
//   };

//   const handleDeleteProject = async (projectId) => {
//     try {
//       await deleteProject(projectId);
//       setProjects((prevProjects) =>
//         prevProjects.filter((project) => project.id !== projectId)
//       );
//     } catch (error) {
//       console.error('Error deleting project:', error);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div>
//       <Header toggleSidebar={toggleSidebar} />
//       <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
//         <Sidebar />
//       </div>
//       <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         <Row className="justify-content-end mt-3">
//           <Col xs="auto">
//             <Button onClick={() => handleShowModal()}>Create New Project</Button> {/* Corrected button */}
//           </Col>
//         </Row>
//         <Row className={styles.cardContainer}>
//           {loading ? (
//             <p>Loading...</p>
//           ) : projects.length > 0 ? (
//             projects.map((project) => (
//               <Col key={project.id} xs={12} md={6} lg={4}>
//                 <Card project={project} onEdit={handleShowModal} onDelete={handleDeleteProject} />
//               </Col>
//             ))
//           ) : (
//             <Col xs={12} md={6} lg={4}>
//               <div className={styles.card}>
//                 <h3>No Projects Found</h3>
//               </div>
//             </Col>
//           )}
//         </Row>
//         <FormModal
//           show={showModal}
//           handleClose={handleCloseModal}
//           handleSubmit={handleFormSubmit}
//           initialValues={editingProject || {}} // Ensure initialValues is not null
//         />
//       </Container>
//     </div>
//   );
// }

// export default Home;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Home.module.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getProjects, createProject, updateProject, deleteProject } from '../pages/appService';
import FormModal from '../components/FormModal';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        setProjects(projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleShowModal = (project = null) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProject(null);
  };

  const handleFormSubmit = async (values) => {
    try {
      if (editingProject) {
        const updatedProject = await updateProject(editingProject.id, values);
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === updatedProject.id ? updatedProject : project
          )
        );
      } else {
        const newProject = await createProject(values);
        setProjects((prevProjects) => [...prevProjects, newProject]);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      handleCloseModal();
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
        <Sidebar />
      </div>
      <Container className={`${styles.container} ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Row className="justify-content-end mt-3">
          <Col xs="auto">
            <Button onClick={() => handleShowModal()}>Create New Project</Button>
          </Col>
        </Row>
        <Row className={styles.cardContainer}>
          {loading ? (
            <p>Loading...</p>
          ) : projects.length > 0 ? (
            projects.map((project) => (
              <Col key={project.id} xs={12} md={6} lg={4}>
                <Card project={project} onEdit={handleShowModal} onDelete={handleDeleteProject} />
              </Col>
            ))
          ) : (
            <Col xs={12} md={6} lg={4}>
              <div className={styles.card}>
                <h3>No Projects Found</h3>
              </div>
            </Col>
          )}
        </Row>
        <FormModal
          show={showModal}
          handleClose={handleCloseModal}
          handleSubmit={handleFormSubmit}
          initialValues={editingProject || {}}
        />
      </Container>
    </div>
  );
}

export default Home;










