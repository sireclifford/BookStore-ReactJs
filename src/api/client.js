import axios from 'axios';

export default axios.create({
  baseURL:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/QF5Rq89OzMMBGratdym7/',
  headers: {
    'Content-Type': 'application/json',
  },
});
