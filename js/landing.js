const Nav = () => {
    return (
      <nav className="nav">
        <div className="nav-contenedor">
          <div className="logo">
          <img src="/img/logorealm.png" alt="Real Madrid Logo"/>
            <img src="/img/la15.webp" alt="La 15 logo"/>
          </div>
          <ul className="nav-links">
            <li><a href="#">Socios</a></li>
            <li><a href="#">Madridistas</a></li>
            <li><a href="#">Entradas</a></li>
            <li><a href="#">Area VIP</a></li>
            <li><a href="#">Tour</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">RM Play</a></li>
          </ul>
          <div className="busqueda">
            <input type="text" placeholder="Buscar" />
          </div>
        </div>
      </nav>
    );
  };

  const Main = () => {
    return (
      <main className="seccion-principal">
        <section className="seccion-champ">
          <div className="contenido-champ">
            <h1>La Decimoquinta ya está en la Ciudad Real Madrid</h1>
            <p>La Decimoquinta ya está en la Ciudad Real Madrid
            El presidente colocó el trofeo junto a las otras 14 Copas de Europa de fútbol conquistadas por nuestro club.</p>
            <button className="boton-champ">Leer más...</button>
          </div>
          <div className="imagen-champ">
            <img src="/img/florentino15.webp" alt="Real Madrid" />
          </div>
        </section>
  
        <section className="seccion-noticias">
          <h2>Últimas Noticias</h2>
          <div className="grilla-noticias">
            <div className="tarjeta-noticia">
              <h3>COMUNICADO OFICIAL: Mbappé</h3>
              <p>El Real Madrid C. F. y Kylian Mbappé han alcanzado un acuerdo por el que será jugador del Real Madrid las próximas cinco temporadas.</p>
            </div>
            <div className="tarjeta-noticia">
              <h3>El Real Madrid es, por tercer año consecutivo, el club de fútbol más valioso del mundo según 'Forbes'</h3>
              <p>Nuestro club lidera la clasificación con un valor de 6.600 millones de dólares.</p>
            </div>
            <div className="tarjeta-noticia">
              <h3>COMUNICADO OFICIAL: Toni Kroos</h3>
              <p>El Real Madrid C. F. comunica que Toni Kroos ha decidido poner fin a su trayectoria como jugador de fútbol profesional después de la Eurocopa 2024.</p>
            </div>
          </div>
        </section>
      </main>
    );
  };
  

  ReactDOM.render(<Nav/>, document.getElementById('nav'));
  ReactDOM.render(<Main/>, document.getElementById('main'));