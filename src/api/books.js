import { api } from "./api";

export function createbook(book) {
  return api.post("/books", book);
}

export function updatebook(bookId, book) {
  return api.put(`/books/${bookId}`, book);
}

export function getbooks() {
  return api.get("/books");
}

export function getbookById(bookId) {
  return api.get(`/books/${bookId}`);
}

export function deletebook(bookId, book) {
  return api.delete(`/books/${bookId}`, book)
}
