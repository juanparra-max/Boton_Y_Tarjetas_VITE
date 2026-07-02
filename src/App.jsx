// App.jsx es el componente que se utiliza en main.jsx el cual es el padre de los demas componentes
import { useState } from 'react'
import './App.css' // estilos
import Card from './Card'

function App() {

  const [tema, setTema] = useState('claro')

  // Funcion para cambiar de tema claro a oscuro y viceversa
  function alternarTema() {
    setTema(tema==='claro'?'oscuro':'claro')
  }

  return (
    // el className cambia solo el apartado ${tema} para definir si es claro u oscuro

    <div className={`app app--${tema}`}>

      <header className="app__header">

        <h1 className="app__titulo">Tarjeta de ejemplo</h1>

        {/* boton para cambiar tema */}
        <button className="app__boton-tema" onClick={alternarTema}>
          {tema === 'claro' ? 'Modo claro' : 'Modo oscuro'}
        </button>
        
      </header>

      <main>
        <section className="cards">
          <Card
            title="Lugar agradable"
            image="https://campingss.cl/wp-content/uploads/2024/08/AF1QipP5hEEaJJKcnAvMnvFi8u2n1XRoijF-3ny4errjw408-h544-k-no.jpeg"
            description="Esta tarjeta muestra una imagen, texto y un botón que incrementa un contador de 'me gusta'."
          />
          <Card
            title="Otro lugar agradable"
            image="https://m.ahstatic.com/is/image/accorhotels/que-hacer-en-cajon-del-maipo-2024-2?fmt=webp&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.3&wid=1459&qlt=80"
            description="Esta es otra tarjeta de ejemplo con diferentes contenidos."
          />
          <Card
            title="Desierto de Atacama"
            image="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGbL-8R6iWr8sLCpAcoJDCFMQpkMx1EZWYh4-FD7J29SiD9tkgVje7ocBmeIWiLLnThyA8mAjSO7-qCV21YRHWD5A1d8TbWijR7GP1qxM9unvOmeLAs8TzBmwdOAZ0lvk_lEgfZ=w1080-h624-n-k-no"
            description="Esta tarjeta también tiene una imagen, texto y un botón de 'me gusta'."
          />
        </section>
      </main>

    </div>
  )
}

export default App