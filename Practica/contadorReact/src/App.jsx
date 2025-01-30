import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Informacion from './Components/Informacion';//importamos el componente de informacion y lo usamos 
import Contador from "./Components/Contador";

function App() {
  

  return (
    <main className="container my-4" >
      <h1>hola omero</h1>
      <Informacion comision="c89i"></Informacion>
      {/*  aca se usa el props, el props que se envia a informacion */}
      <Contador></Contador>
    </main>
    
  )
}

export default App
