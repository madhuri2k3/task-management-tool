// import { useState } from 'react';
// import styles from '../styles/TaskForm.module.css';

// const TaskForm = ({ initialValues, onSubmit, onCancel }) => {
//   const [formValues, setFormValues] = useState(initialValues);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formValues);
//   };

//   return (
//     <form className={styles.taskForm} onSubmit={handleSubmit}>
//       <label>
//         Task Name:
//         <input
//           type="text"
//           name="task_name"
//           value={formValues.task_name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Start Date:
//         <input
//           type="date"
//           name="start_date"
//           value={formValues.start_date}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         End Date:
//         <input
//           type="date"
//           name="end_date"
//           value={formValues.end_date}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Status:
//         <select
//           name="status"
//           value={formValues.status}
//           onChange={handleChange}
//         >
//           <option value="Pending">Pending</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </label>
//       <button type="submit">Save</button>
//       <button type="button" onClick={onCancel}>Cancel</button>
//     </form>
//   );
// };

// export default TaskForm;
