import List from "./components/List/List ";
import ListClass from "./components/ListClass";

function App() {
    const list =['Kharkiv',"Mykolaiv', 'Lviv', 'Poltava'];
   
    return (
      <>
        <List list={list} />
        <ListClass list={list} color="lightblue" />
      </>
    );
  }
  
  export default App;



