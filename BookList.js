import BookListItems from './BookListItems.js'

function BookList () {
    return (
  <>
  <ul>
            <BookListItems autor="Stephan King"
            name = "It"/>
            <BookListItems autor="Gosho Goshev" name = "Preselenieto na narodite" />
            <BookListItems autor="Dragan Draganov" name = "Neznaina zabava"/>
            </ul>
            <button onClick={()=> console.log (`clicked`)}>Modify</button>
            </>    
    )
}
export default BookList
