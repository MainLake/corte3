import Carrusel from "./Carrusel";
import Servicios from "./Servicios";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Carrusel />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <Servicios />
        </div>
      </div>
    </div>
  );
};

export default Home;
