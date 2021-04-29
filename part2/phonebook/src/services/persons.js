import axios from 'axios';

const url = '/api/persons';

const getAll = () => {
  try {
    const request = axios.get(url);
    return request.then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
};

const create = (nameObject) => {
  try {
    const request = axios.post(url, nameObject);
    return request.then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
};

const updatePerson = (id, nameObject) => {
  try {
    const request = axios.put(`${url}/${id}`, nameObject);
    return request.then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
};

const deletePerson = (id) => {
  try {
    const request = axios.delete(`${url}/${id}`);
    console.log(request);
    return request.then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll: getAll,
  create: create,
  deletePerson: deletePerson,
  updatePerson: updatePerson,
};
