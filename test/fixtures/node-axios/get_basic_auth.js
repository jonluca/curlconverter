const axios = require('axios');

const response = await axios.get('https://localhost:28139/', {
    auth: {
        username: 'some_username',
        password: 'some_password'
    }
});
