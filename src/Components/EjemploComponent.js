import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

  const [mostrar, setMostrar] = useState(false)
  const caja = useRef("")
  const boton = useRef()
    
    useLayoutEffect(() => {
      console.log("useLayoutEffect xD")
    }, [])
    
    useEffect(()=>{
      console.log("useEffect xD")
      if(caja.current == null) return
      const {bottom} = boton.current.getBoundingClientRect()
      //caja.current.style.rigth = `${bottom + 45}px`
      console.log(bottom)

    }, [mostrar])

  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <button ref={boton} onClick={()=> setMostrar(prev => !prev)}>{(mostrar) ? "Ocultar mensaje": "Mostrar mensaje"}</button>
        {mostrar && (
          <div id="caja" ref={caja}>
            Hola soy un mensaje
          </div>
        )}
    </div>
  )
}
