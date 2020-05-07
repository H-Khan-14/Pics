import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 39ee2d4e84db407b9f0368b1e179ab3673c8e5d9bcd6136fe39af5a49e4ba538'
  }
});
