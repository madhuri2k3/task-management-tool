
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProjectForm from './ProjectForm';

const FormModal = ({ show, handleClose, handleSubmit, initialValues }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{initialValues.id ? 'Edit Project' : 'Create Project'}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ProjectForm
        initialValues={initialValues}
        onSubmit={(values) => {
          handleSubmit(values);
          handleClose();
        }}
        onCancel={handleClose}
      />
    </Modal.Body>
  </Modal>
);

export default FormModal;
