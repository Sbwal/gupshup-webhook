const debug = require('debug')('webhook:externals');
const axios = require("axios").default;

const options = {
  method: 'POST',
  url: 'https://bots.kore.ai/chatbot/hooks/st-dd9323e7-7886-511b-b363-a0c764f5bcb5',
  headers: {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNzLWJmODI1ZTEwLTgzZjAtNWY5Mi1hZWU3LTljOWU0NjExMTU1YiJ9.XRWSeoIjke_lVyDffxOxyEntIGfISapY6KTpuIO303M'
  },
  data: {message: {text: 'EMP001'}, from: {id: '8507967113'}}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
