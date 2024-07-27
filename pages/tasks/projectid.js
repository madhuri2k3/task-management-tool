import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from '../../styles/Tasks.module.css';  

const TaskList = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!projectId) return;

    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `https://osbaseleaf-api.andolasoft.co.in/projectsapi/projects/${projectId}/tasks`,
          {
            headers: {
              Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMDE3MjI3OH0.UFwNO2P-VC6K_ON3hZp3dWpGezV0_R-ySCOrKZ7Hkjo',
              Accept: 'application/json',
              'x-tenant-id': 203,
            },
          }
        );
        setTasks(response.data.items);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [projectId]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Tasks for Project ID: {projectId}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : tasks.length > 0 ? (
            tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.task_name}</td>
                <td>{task.task_description}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No tasks found</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button variant="primary" onClick={() => router.back()}>Back to Projects</Button>
    </div>
  );
};

export default TaskList;
