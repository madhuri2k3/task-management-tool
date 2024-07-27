import instance, { formInstance } from '../lib/api';

import { authHeader } from '../pages/authHeader';
export const signup = async (userData) => {
    try {
      console.log('Signup data:', userData);
      const response = await instance.post('/v1/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error("Error occurred during signup:", error);
      throw error;
    }
  };
   
  export async function login (userData)  {
    const params = new URLSearchParams();
    params.append("username", userData.username);
    params.append("password", userData.password);

    return await formInstance.post(`/v1/auth/jwt/login`,params.toString());
  }

  export const getProjects = async () => {
    try {
      const response = await instance.get(`/projectsapi/projects/?order_by=-id`, {
        headers: authHeader()
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
   }
  };
  export const createProject = async (projectData) => {
    try {
      const response = await instance.post('projectsapi/projects', projectData, { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  };
  
  export const editProject = async (id, projectData) => {
    try {
      const response = await instance.put(`projectsapi/projects/${id}`, projectData, { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.error('Error editing project:', error);
      throw error;
    }
  };
  
  export const deleteProject = async (id) => {
    try {
      await instance.delete(`projectsapi/projects/${id}`, { headers: authHeader() });
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  };
  
  export const updateProject = async (project_template_id, projectData) => {
    try {
      const response = await instance.put(`/projectsapi/projects/${project_template_id}`, projectData, { headers: authHeader() });
      return response.data;
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  };
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  