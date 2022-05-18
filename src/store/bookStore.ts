import type { Book } from '~/types/index'
import booksJson from '~/db/books.json'

export const bookList: Book[] = booksJson.data as Book[]
