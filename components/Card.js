import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Card = ({ project, onEdit, onDelete }) => {
  return (
    <Link href={`/tasks?projectId=${project.id}`} legacyBehavior>
       <a className={styles.cardLink}>
    <div className={styles.card}>
      <h3>{project.project_name}</h3>
      <p><strong>Description:</strong> {project.project_description}</p>
      <p><strong>Start Date:</strong> {project.start_date}</p>
      <p><strong>End Date:</strong> {project.end_date}</p>
      <p><strong>Status:</strong> {project.project_status}</p>
      <div>
        <h4>Members: {project.members.length}</h4>
        <div className={styles.members}>
          {project.members.map((member, index) => (
            <div key={index} className={styles.member}>
              {member.profile_image ? (
                <img
                  src={member.profile_image}
                  alt={`${member.resource_name}`}
                  className={styles.profileImage}
                />
              ) : (
                <div className={styles.noProfileImage}>
                  <FontAwesomeIcon icon={faUser} className={styles.noProfileIcon} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => onEdit(project)} className={styles.editButton}>Edit</button>
      <button onClick={onDelete} className={styles.deleteButton}>Delete</button>
      </div> </a>
      </Link>
    
  );
};

export default Card;
