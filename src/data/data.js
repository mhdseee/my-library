const books =[
    {
        name: 'The Great Gatsby',
        price: '87$',
        author: 'F. Scott Fitzgerald',
        Image: '../img/The Great Gatsby.jpg',
        id:"01"
    },
    {
        name: 'Don Quixote ',
        price: '77$',
        author: 'Miguel de Cervantes',
        Image: '../img/don.jpg',
        id:"02"
    },
    {
        name: 'Anna Karenina',
        price: '99$',
        author: 'Leo Tolstoy',
        Image: '../img/Anna Karenina.jpg',
        id:"03"
    },
    {
        name: 'Pride and Prejudice',
        price: '107$',
        author: 'Jane Austen',
        Image: '../img/Pride and Prejudice.jpg',
        id:"04"
    },
    {
        name: 'One Hundred Years of Solitude',
        price: '187$',
        author: 'Gabriel García Márquez',
        Image: '../img/One Hundred Years of Solitude.jpg',
        id:"05"
    }
]
export const getBooks = ()=>{
    return books
} 
export const getBook = (id)=>{
    return books.find(book => book.id === id)
}