const Contacto = () => {
  return (
    <div className="container mt-4">
      <h1>Contacto</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="nombreCompleto" className="form-label">
            Nombre completo
          </label>
          <input
            type="text"
            className="form-control"
            id="nombreCompleto"
            placeholder="Nombre completo"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correoElectronico" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="correoElectronico"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">
            Asunto
          </label>
          <input
            type="text"
            className="form-control"
            id="asunto"
            placeholder="Asunto"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            className="form-control"
            id="mensaje"
            placeholder="Mensaje"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="ubicacion" className="form-label">
            Ubicación
          </label>
          <div className="embed-responsive embed-responsive-4by3">
            <iframe
              title="Ubicación"
              className="embed-responsive-item"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249744.03228368837!2d77.12786525611014!3d12.026267587650159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x14206cb9cc452e4a!2sLima!5e0!3m2!1ses-419!2spe!4v1574809607076!5m2!1ses419!2spe"
            ></iframe>
          </div>
        </div>
        <button className="btn btn-primary" type="button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
