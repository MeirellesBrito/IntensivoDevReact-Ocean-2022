import './App.css'
import Foonter from './components/Foonter/Foonter'
import Header from "./components/Header/Header"
import ItemList from "./components/itemList/ItemList"
import Cadastro from "./components/Cadastro/Cadastro"
import { Routes , Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<ItemList />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>
        

        <div className="content"></div>
      <Foonter/>
      
    </div>
    
  );
  
}

export default App
