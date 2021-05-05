import { Fragment, useState } from "react";
import "./App.css";
import Films from "./Films";




function App() {


  const [peliculas, setPelicula] = useState([{id:1,title:"Señor de los anillos",vista:false},{id:2,title:"Rey Leon",vista:false}])

  const addFilm = (valor)=>{

    let newFilm = {}

    if(peliculas.length===0){
      newFilm = {
        id:1,
        title:valor,
        vista:false
      }
    } else {
      newFilm = {
        id:peliculas[peliculas.length-1].id+1,
        title:valor,
        vista:false
    }
  }
    

    setPelicula((prevPeliculas) => [...prevPeliculas, newFilm])
  }

  const changeStatus = (id) =>{

    console.log('entra', id);

    const newPelis = [...peliculas]

    let film = newPelis.find( item => item.id===id)

    film.vista = !film.vista;

    setPelicula(newPelis);

  }

  const deleteFilm = (id) =>{
    
    const newPelis = [...peliculas]

    let film = newPelis.filter( item => item.id!==id)

    if(film.length === 0){
      film = [];
    }

    setPelicula(film);
    /*setPelicula(film);*/

  }


  return  <Fragment>
    <div className="App">
  </div>
  <div className="container">
    <Films addNewFilm={addFilm}></Films>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Peliculas</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {peliculas.map((pelicula) =>(
           <tr key={pelicula.id}>
             <td>{pelicula.id}</td>
             <td>{pelicula.title} <span>{pelicula.vista ? '✅' : ''}</span></td>
             <td>
              <button type="button" onClick={()=> changeStatus(pelicula.id)} className="btn btn-success">{pelicula.vista ? 'La he visto' : 'No la he visto'}</button>
              <button type="button" onClick={()=> deleteFilm(pelicula.id)} className="btn btn-danger">Eliminar</button>
             </td>
          </tr>))}
      </tbody>
    </table>
  </div>
 
    
  </Fragment>
      
}

export default App;
