import axiosRequest from './axios.config';
import {GitHubUserInfo, IRequestGetUsers, IResponseGetUsers} from 'model/gitApi.model';

/*
    Api to retrieve users by name
 */
const getUsers = async (input: IRequestGetUsers): Promise<IResponseGetUsers> => {
    const response: any = await axiosRequest()
        .get('/search/users?q=' +
            input.searchString +
            '&page=' + input.pageableRequest.page +
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

/*
    Api to retrieve information about a single user
 */
const getUser = async (username: string): Promise<GitHubUserInfo> => {
    const response: any = await axiosRequest()
        .get('/users/'+username)
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
    getUser
};

export default gitServices;
