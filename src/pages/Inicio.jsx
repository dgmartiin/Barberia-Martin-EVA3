import { useEffect, useState } from "react";
import { obtenerServicios } from "../services/serviciosApi";
import TarjetaServicio from "../components/TarjetaServicio";


function Inicio() {


  const [servicios, setServicios] = useState([]);



  useEffect(() => {

    cargarServicios();

  }, []);





  async function cargarServicios() {


    const datos = await obtenerServicios();


    setServicios(datos);


  }







  return (


    <div className="inicio">





      <section className="bienvenida">


        <h1>
          💈 Barbería Martín
        </h1>



        <p>
          Cortes, estilo y cuidado personal
          para cada ocasión.
        </p>



        <p>
          Reserva tu cita y disfruta
          de un servicio profesional.
        </p>



      </section>







      <h2>
        Servicios disponibles
      </h2>








      <div className="contenedor-servicios">



        {servicios.map((servicio)=>(


          <TarjetaServicio

            key={servicio.id}

            servicio={servicio}

          />


        ))}



      </div>








      <section className="info-barberia">



        <h2>
          💈 Sobre la barbería
        </h2>



        <p>
          📍 Coyhaique
        </p>



        <p>
          ✂️ Cortes de pelo, barba y estilos personalizados
        </p>



        <p>
          ⏰ Atención de lunes a sábado
        </p>



      </section>








      <footer className="footer">



        <h3>
          💈 Barbería Martín
        </h3>



        <p>
          © 2026 Todos los derechos reservados
        </p>



        <p>
          📍 Coyhaique | ✂️ Estilo y cuidado personal
        </p>



      </footer>







    </div>


  );


}



export default Inicio;