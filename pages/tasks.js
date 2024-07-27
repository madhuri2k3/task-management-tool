import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Tasks.module.css';

const TaskList = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [newTask, setNewTask] = useState({
    task_name: '',
    task_description: '',
  });

  useEffect(() => {
    if (!projectId) return;

    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          `https://osbaseleaf-api.andolasoft.co.in/tasksapi/tasks/?project_id=${projectId}`,
          {
            headers: {
              Authorization:
                'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMTEyMzgzM30.TO0inD5rUqmi7U8fMqBjkytMNDVIq73yiIR43mB2ngU',
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      try {
        const response = await axios.put(
          `https://osbaseleaf-api.andolasoft.co.in/tasksapi/tasks/${editTaskId}`,
          {
            task_title: newTask.task_name,
            task_description: newTask.task_description,
            project_id: projectId,
            task_reference_type: 'H',
            task_priority: 'low',
            parent_task_id: 0,
            start_date: '2024-07-01',
            due_date: '2024-07-01',
            task_state: 'todo',
          },
          {
            headers: {
              Authorization:
                'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMTEyMzgzM30.TO0inD5rUqmi7U8fMqBjkytMNDVIq73yiIR43mB2ngU',
              Accept: 'application/json',
              'x-tenant-id': 203,
            },
          }
        );

        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === editTaskId
              ? { ...task, task_title: newTask.task_name, task_description: newTask.task_description }
              : task
          )
        );
        setIsEditing(false);
        setEditTaskId(null);
      } catch (error) {
        console.error('Error editing task:', error);
      }
    } else {
      try {
        const response = await axios.post(
          'https://osbaseleaf-api.andolasoft.co.in/tasksapi/tasks/',
          {
            project_id: projectId,
            task_type: 'Development',
            task_title: newTask.task_name,
            task_reference_type: 'H',
            task_priority: 'low',
            parent_task_id: 0,
            start_date: '2024-07-01',
            due_date: '2024-07-01',
            task_state: 'todo',
            task_description: newTask.task_description,
          },
          {
            headers: {
              Authorization:
                'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMTEyMzgzM30.TO0inD5rUqmi7U8fMqBjkytMNDVIq73yiIR43mB2ngU',
              Accept: 'application/json',
              'x-tenant-id': 203,
            },
          }
        );

        setTasks([...tasks, response.data]);
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }

    setNewTask({
      task_name: '',
      task_description: '',
    });
    setShowForm(false);
  };

  const addTask = () => {
    setShowForm(true);
    setIsEditing(false);
    setNewTask({
      task_name: '',
      task_description: '',
    });
  };

  const editTask = (task) => {
    setShowForm(true);
    setIsEditing(true);
    setEditTaskId(task.id);
    setNewTask({
      task_name: task.task_title,
      task_description: task.task_description,
    });
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `https://osbaseleaf-api.andolasoft.co.in/tasksapi/tasks/${id}`,
        {
          headers: {
            Authorization:
              'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhMjUxYTYyYS1mZThhLTRkMTctOGY4NC1lODY5N2M2MTAyNTciLCJhdWQiOlsiZmFzdGFwaS11c2VyczphdXRoIl0sImV4cCI6MTcyMTEyMzgzM30.TO0inD5rUqmi7U8fMqBjkytMNDVIq73yiIR43mB2ngU',
            Accept: 'application/json',
            'x-tenant-id': 203,
          },
        }
      );
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div className={styles.container}>
      <button onClick={addTask} className={styles.addButton}>
        Add Task
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Task Name:
            <input
              type="text"
              name="task_name"
              value={newTask.task_name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="task_description"
              value={newTask.task_description}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            {isEditing ? 'Update Task' : 'Add Task'}
          </button>
        </form>
      )}
      {tasks.length === 0 ? (
        <p>No tasks found for this project.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.task_title}</td>
                <td>{task.task_description}</td>
                <td>{task.task_state}</td>
                <td>
                  <button
                    onClick={() => editTask(task)}
                    className={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;






