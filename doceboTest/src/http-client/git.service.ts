import axiosRequest from './axios.config';
import {GitHubUserInfo, GitHubUserRepo, IRequestGetUsers, IResponseGetUsers} from 'model/gitApi.model';

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

/*
    Api to retrieve repos of a single user
 */

export type SortBy = 'created' | 'updated' | 'full_name';
export type OrderBy = 'asc' | 'desc';

const getRepos = async (username: string, sortBy = 'full_name', orderBy = 'asc'): Promise<GitHubUserRepo[]> => {
    const response: any = await axiosRequest()
        .get('/users/'+username+'/repos?sort=' + sortBy + '&direction=' + orderBy)
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
    getUser,
    getRepos
};

export default gitServices;
