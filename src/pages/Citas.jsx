import { useEffect, useState } from "react";
import { obtenerServicios } from "../services/serviciosApi";
import { useNavigate, useSearchParams } from "react-router-dom";


function Citas() {


  const navegar = useNavigate();
  const [searchParams] = useSearchParams();


  const [servicios, setServicios] = useState([]);
  const [citas, setCitas] = useState([]);


  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [color, setColor] = useState("");
  const [fecha, setFecha] = useState("");


  const [editando, setEditando] = useState(null);



  useEffect(() => {

    cargarServicios();


    const citasGuardadas = JSON.parse(
      localStorage.getItem("citas")
    ) || [];


    setCitas(citasGuardadas);



    const servicioSeleccionado = searchParams.get("servicio");


    if (servicioSeleccionado) {

      setServicio(servicioSeleccionado);

    }


  }, []);





  async function cargarServicios() {


    const datos = await obtenerServicios();


    const disponibles = datos.filter(
      (item) => item.disponible === true
    );


    setServicios(disponibles);


  }






  function guardarCita(e) {


    e.preventDefault();



    if (!nombre || !servicio || !fecha) {

      alert("Completa todos los datos");

      return;

    }



    const nuevaCita = {


      id: editando ?? Date.now(),

      nombre,

      servicio,

      color: servicio === "Tinte" ? color : "",

      fecha


    };




    let nuevasCitas;



    if (editando !== null) {


      nuevasCitas = citas.map((cita) =>

        cita.id === editando
          ? nuevaCita
          : cita

      );


    } else {


      nuevasCitas = [

        ...citas,

        nuevaCita

      ];


    }





    setCitas(nuevasCitas);



    localStorage.setItem(

      "citas",

      JSON.stringify(nuevasCitas)

    );




    setNombre("");

    setServicio("");

    setColor("");

    setFecha("");

    setEditando(null);


  }







  function editarCita(cita) {


    setNombre(cita.nombre);

    setServicio(cita.servicio);

    setColor(cita.color);

    setFecha(cita.fecha);

    setEditando(cita.id);


  }







  function eliminarCita(id) {


    const nuevasCitas = citas.filter(

      (cita) => cita.id !== id

    );



    setCitas(nuevasCitas);



    localStorage.setItem(

      "citas",

      JSON.stringify(nuevasCitas)

    );


  }







  return (


    <div className="pagina-citas">


      <button onClick={() => navegar("/")}>
        🏠 Volver al inicio
      </button>



      <h1>
        📅 Agenda tu cita
      </h1>




      <form

        className="formulario-cita"

        onSubmit={guardarCita}

      >



        <input

          type="text"

          placeholder="Nombre del cliente"

          value={nombre}

          onChange={(e)=>setNombre(e.target.value)}

        />





        <select

          value={servicio}

          onChange={(e)=>{

            setServicio(e.target.value);

            setColor("");

          }}

        >


          <option value="">
            Seleccione servicio
          </option>




          {servicios.map((item)=>(

            <option

              key={item.id}

              value={item.nombre}

            >

              {item.nombre}

            </option>


          ))}



        </select>






        {servicio === "Tinte" && (


          <select

            value={color}

            onChange={(e)=>setColor(e.target.value)}

          >


            <option value="">
              Seleccione color
            </option>


            <option>
              Negro
            </option>


            <option>
              Rubio
            </option>


            <option>
              Castaño
            </option>


            <option>
              Rojo
            </option>


            <option>
              Fantasía
            </option>


          </select>


        )}







        <input

          type="date"

          value={fecha}

          onChange={(e)=>setFecha(e.target.value)}

        />






        <button>

          {editando
            ? "Actualizar cita"
            : "Guardar cita"}

        </button>



      </form>






      <h2>
        Citas agendadas
      </h2>







      <div className="lista-citas">



        {citas.length === 0 ? (


          <p className="sin-citas">

            📅 Aún no hay citas registradas

          </p>



        ) : (



          citas.map((cita)=>(



            <div

              className="cita"

              key={cita.id}

            >



              <p>
                👤 Cliente: {cita.nombre}
              </p>



              <p>
                💈 Servicio: {cita.servicio}
              </p>




              {cita.color && (

                <p>
                  🎨 Color: {cita.color}
                </p>

              )}




              <p>
                📅 Fecha: {cita.fecha}
              </p>






              <button

                onClick={()=>editarCita(cita)}

              >

                ✏️ Editar

              </button>





              <button

                onClick={()=>eliminarCita(cita.id)}

              >

                🗑️ Eliminar

              </button>





            </div>



          ))



        )}



      </div>




    </div>


  );


}



export default Citas;