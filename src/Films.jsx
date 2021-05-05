import React, {Fragment, useRef} from 'react'

export default function Films({addNewFilm}) {

    const inputFilm = useRef();


    const addFilm = ()=>{
        const newFilm = inputFilm.current.value;
        if(inputFilm.current.value.trim()!=''){
          addNewFilm(newFilm);
        }
        

        inputFilm.current.value=null;
    }

    const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        console.log('enter press here! ')
        addFilm();
      }else{
        console.log('entra')
      }
    }


    return (
        <Fragment>
      <div className="input-group mt-3">
        <input ref={inputFilm} type="text" className="form-control" placeholder="Añadir pelicula" onKeyPress={handleKeyPress}/>
        <button
          onClick={addFilm}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"   
        >
          Agregar pelicula
        </button>
      </div>
    </Fragment>
    )
    
}
