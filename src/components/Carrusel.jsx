import imagen1 from "../images/01_imagen.jpg";
import imagen2 from "../images/02_imagen.jpg";
import imagen3 from "../images/03_imagen.jpg";

const Carrusel = () => {
  return (
    <div
      id="carouselExample"
      class="carousel slide"
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={imagen1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagen2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={imagen3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carrusel;
