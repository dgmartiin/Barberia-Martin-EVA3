const API_URL = "http://127.0.0.1:8000/api/servicios";

export async function obtenerServicios() {
  const respuesta = await fetch(API_URL);
  const datos = await respuesta.json();

  return datos.servicios;
}