import http from './client';

const get = (url) => http.get(url);
const create = (url, book) => http.post(url, book);
const remove = (url, body) => http.delete(url, body);

const BookService = {
  get,
  create,
  remove,
};

export default BookService;
