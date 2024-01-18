import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
       // baseURL: 'http://03-rest-api-env.eba-p4ruunqb.ap-south-1.elasticbeanstalk.com'
    }
);