import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import styles from '../styles/ProjectForm.module.css'; 

function ProjectForm({ initialValues, onSubmit, onCancel }) {
  const schema = yup.object().shape({
    project_name: yup.string().required('Project name is required'),
    project_description: yup.string(),
    priority: yup.string().required('Priority is required'),
    start_date: yup.date().required('Start date is required').nullable(),
    end_date: yup.date().nullable(),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const formattedValues = {
            ...values,
            start_date: values.start_date ? moment(values.start_date).format('YYYY-MM-DD') : null,
            end_date: values.end_date ? moment(values.end_date).format('YYYY-MM-DD') : null,
          };
          await onSubmit(formattedValues);
        } catch (error) {
          console.error('Error occurred during submission:', error);
        } finally {
          setSubmitting(false);
        }
      }}
      initialValues={initialValues}
    >
      {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => (
        <Form noValidate onSubmit={handleSubmit} className={styles.formContainer}>
          <Form.Group controlId="validationFormik01" className={styles.formGroup}>
            <Form.Label>Project name</Form.Label>
            <Form.Control
              type="text"
              name="project_name"
              value={values.project_name}
              onChange={handleChange}
              isValid={touched.project_name && !errors.project_name}
              isInvalid={!!errors.project_name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.project_name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik02" className={styles.formGroup}>
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              type="text"
              name="project_description"
              value={values.project_description}
              onChange={handleChange}
              isValid={touched.project_description && !errors.project_description}
              isInvalid={!!errors.project_description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.project_description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormik06" className={styles.formGroup}>
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              value={values.priority}
              onChange={handleChange}
              isValid={touched.priority && !errors.priority}
              isInvalid={!!errors.priority}
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.priority}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="validationFormikStartDate" className={styles.formGroup}>
            <Form.Label>Start Date</Form.Label>
            <br />
            <DatePicker
              selected={values.start_date}
              onChange={(date) => setFieldValue('start_date', date)}
              dateFormat="yyyy-MM-dd"
              className={`form-control ${touched.start_date && errors.start_date ? 'is-invalid' : ''}`}
            />
            {touched.start_date && errors.start_date && (
              <div className="invalid-feedback d-block">
                {errors.start_date}
              </div>
            )}
          </Form.Group>

          <Form.Group controlId="validationFormikEndDate" className={styles.formGroup}>
            <Form.Label>End Date</Form.Label>
            <br />
            <DatePicker
              selected={values.end_date}
              onChange={(date) => setFieldValue('end_date', date)}
              dateFormat="yyyy-MM-dd"
              className={`form-control ${touched.end_date && errors.end_date ? 'is-invalid' : ''}`}
            />
            {touched.end_date && errors.end_date && (
              <div className="invalid-feedback d-block">
                {errors.end_date}
              </div>
            )}
          </Form.Group>

          <div className={styles.buttons}>
            <Button type="submit">Save</Button>
            <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ProjectForm;

