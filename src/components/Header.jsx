import {Link} from 'react-router-dom'
let Header = ()=>{
    return(
        <header>
 
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/Home">List Of Product</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/add">Add Product</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/phones">Phones</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tv">TV</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      </header>
    );
}
export default  Header;