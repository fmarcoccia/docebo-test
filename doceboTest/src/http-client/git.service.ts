import axiosRequest from './axios.config';
import {IRequestGetUsers, IResponseGetUsers} from "model/gitApi.model";

/*
    Api to retrieve users by name
 */
const getUsers = async (input: IRequestGetUsers): Promise<IResponseGetUsers> => {
  const response: any = await axiosRequest()
    .get('/search/users?q=' +
        input.searchString +
        '&page=' +
        input.pageableRequest.page +
        '&per_page=' + input.pageableRequest.per_page)
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return Promise.reject({error: true})
      }
    });
  return response.data;
};

const gitServices = {
  getUsers,
};

export default gitServices;
