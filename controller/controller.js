import books from "./books.js"


export const getAllBooks = (req, res)=>{
   res.json(books)
   console.log(books)
}
export const getBookById = (req, res)=>{
   const book = books.find(by=> by.id === parseInt(req.params.id));
   if(!book) return res.status(404).json({message: "Bukunya ga ada"})
   res.json(book)
}
export const createBook = (req, res)=>{
  const book = {
    id: books.length +1,
    title : req.body.title,
    author: req.body.author
  }
  books.push(book)
  res.status(201).json(book)
}

export const updateBook = (req, res)=>{
  const book = books.find(by => by.id === parseInt(req.params.id))
  if (!book) return res.status(404).json({ message: 'Buku yang kau cari gaada' });

  if(req.body.title){
    book.title = req.body.title
  }
  if(req.body.author){
    book.author = req.body.author
  }

  res.status(200).json(book)
}

export const deleteBook = (req, res)=>{
   const bookIndex = books.findIndex(by=> by.id  === parseInt(req.params.id))
   if(bookIndex ===-1) return res.status(404).json({message: "Data ga ada"})

  books.splice(bookIndex, 1)
  res.json({message: "Data sudah berhasil dihapus"})
}