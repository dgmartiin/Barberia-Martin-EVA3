import { useNavigate } from "react-router-dom";


function TarjetaServicio({ servicio }) {


  const navegar = useNavigate();




  function agendarCita() {


    const servicioCodificado = encodeURIComponent(
      servicio.nombre
    );


    navegar(`/citas?servicio=${servicioCodificado}`);


  }






  return (


    <div className="tarjeta-servicio">



      <img

        src={servicio.imagen}

        alt={servicio.nombre}

      />






      <h3>

        {servicio.nombre}

      </h3>





      <p>

        {servicio.descripcion}

      </p>






      <p className="categoria">

        ✂️ {servicio.categoria}

      </p>







      <p className="precio">

        💰 ${servicio.precio}

      </p>








      {servicio.disponible ? (


        <p className="disponible">

          ✅ Disponible

        </p>



      ) : (


        <p className="no-disponible">

          ❌ No disponible

        </p>



      )}









      {servicio.disponible ? (


        <button onClick={agendarCita}>

          📅 Agendar cita

        </button>



      ) : (


        <button disabled>

          No disponible

        </button>



      )}





    </div>


  );


}



export default TarjetaServicio;