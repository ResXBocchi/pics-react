import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a04I_v3ktYI0bMpDSYdiRxRrerMweE33--FnMqP9TaM'
    }
});