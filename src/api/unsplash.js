import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 5cqamo2XTOr47yKMnfam4aQVnmqGAdXycb_a9n-rDcM'
    }
})