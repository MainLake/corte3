import Servicio from "./Servicio";
import imgServicio from "../images/servicio.jpg";

const servicios = [
  {
    id: 1,
    imagen: imgServicio,
    servicio: "Servicio 1",
    descripcion: "Descripción del servicio 1",
  },
  {
    id: 2,
    imagen: imgServicio,
    servicio: "Servicio 2",
    descripcion: "Descripción del servicio 2",
  },
  {
    id: 3,
    imagen: imgServicio,
    servicio: "Servicio 3",
    descripcion: "Descripción del servicio 3",
  },
  {
    id: 4,
    imagen: imgServicio,
    servicio: "Servicio 4",
    descripcion: "Descripción del servicio 4",
  },
];

const Servicios = () => {
  return (
    <section className="mt-4">
      <h2>Servicios</h2>
      <p>Servicios que ofrecemos</p>
      <div className="row">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="col-md-4 mb-4">
            <Servicio servicio={servicio} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
