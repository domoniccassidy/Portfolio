import axios from "axios";

const link = "https://portfolioner.herokuapp.com";

export const signIn = async (userData) =>
  axios.post(`${link}/users/login`, userData);

export const getProjects = async () => axios.get(`${link}/projects/get`);
export const addProject = async (projectData) =>
  axios.post(`${link}/projects/add`, projectData);
export const sendContact = async (contactData) =>
  axios.post(
    "https://formsubmit.co/ajax/af8b197f9449a222f084eab012f08edb",
    contactData
  );
