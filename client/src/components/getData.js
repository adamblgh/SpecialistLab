import axios from "axios";

let url = "http://localhost:5000";

export const checkUsername = async (formdata) => {
  const response = await axios.post(url + "/auth/checkUsername", formdata);
  return response;
};

export const checkEmail = async (formdata) => {
  const response = await axios.post(url + "/auth/checkEmail", formdata);
  return response;
};

export const login = async (formdata) => {
  const response = await axios.post(url + "/auth/login", formdata);
  return response;
};

export const register = async (formdata) => {
  const response = await axios.post(url + "/auth/register", formdata);
  return response;
};

export const updateAvatar = async (formdata) => {
  const response = await axios.put(url + "/auth/updateAvatar", formdata, {
    header: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

export const deleteUser = async (formdata) => {
  console.log("getdata: ", formdata);
  const response = await axios.delete(url + "/auth/deleteUser", {
    data: formdata,
  });
  return response;
};

export const changePassword = async (formdata) => {
  const response = await axios.put(url + "/auth/changePassword", formdata);
  return response;
};

/*export const getBooks = async ()=>{
    const response = await axios.get(url+'/admin/books')
    return await response
}*/

export const getCities = async () => {
  const response = await axios.get(url + "/cities");
  return response;
};

export const getCountId = async ({ queryKey }) => {
  const [_, selCity] = queryKey;
  console.log(selCity);
  const response = await axios.get(url + `/cities/countId/${selCity}`);
  return response;
};

export const getCateg = async () => {
  const response = await axios.get(url + `/cities/categ`);
  return response;
};

export const getSubCateg = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const response = await axios.get(url + `/cities/subcateg/${id}`);
  return response;
};

export const getOnclickSubCateg = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const response = await axios.get(url + `/cities/onclicksubcateg/${id}`);
  return response;
};

export const getUsers = async () =>{
  const response = await axios.get(url+'/admin')
  return response;
}

export const delUser = async (id) => {
  const response = await axios.delete(url+'/admin/delete/'+id);
  return response;
};

export const addUser = async (formdata) => {
  const response = await axios.post(url+'/admin/add',formdata);
  return response;
};

export const updateUser = async (formdata) => {
  console.log(formdata)
  const response = await axios.post(url+'/admin/update/',formdata);
  return response;
};
export const adupload = async (formdata) => {
  console.log(formdata)
  const response = await axios.post(url + "/workers/adupload", formdata);
  return response;
};