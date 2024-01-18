import axios from 'axios'

export const apiClient = axios.create(
    {
        //baseURL: 'http://localhost:8080'  when Yoou have to run the application on localhost:3030
       // baseURL: 'http://03-rest-api-env.eba-p4ruunqb.ap-south-1.elasticbeanstalk.com'
       baseURL:'restful-webservices-production.up.railway.app'
       //when you have to run your application on vercel and railways
    }
);