const Servicio = ({servicio}) => {

    return (
        <div className="card" style={{ width: '18rem' }}>
        <img src={servicio.imagen} className="card-img-top" alt="Descripción de la imagen" />
        <div className="card-body">
          <h5 className="card-title">{servicio.servicio}</h5>
          <p className="card-text">
            {servicio.descripcion}
          </p>
          <a href="#" className="btn btn-primary">Leer más</a>
        </div>
      </div>
    );

}

export default Servicio;