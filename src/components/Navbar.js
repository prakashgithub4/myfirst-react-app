import './style.css';
import '../../src/App.css'
var string = "";
export default function Navbar(props) {
  console.log(string)
   
  return (
    <div >
    <nav  className="container   navbar text-success navbar-expand-lg navbar-light bg-light " >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="../images/neosoft.svg" height="30" width="200"/>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               {props.name}
              </a>
            </li>
            <li className="nav-item dropdown">
              {/* <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown{" "}
              </a> */}
              {/* <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul> */}
            </li>
            {/* <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyPress={getText}
            />
             <label>{string}</label>
            <button className="btn btn-outline-success" type="button" onClick={()=>_searchEvent()}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </div>
  );
}


function getText(event){
  console.log(event.target.value)
 string = event.target.value
  
}
function _searchEvent(){
  alert("ok")
//  getText()
}