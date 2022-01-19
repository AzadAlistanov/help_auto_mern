import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer fixed-bottom">
      <footer className="footer page-footer font-small navbar-dark default-color">
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
          <Link to={''} className="text-decoration-none">
            HELP <i className="fas fa-car"></i> auto.com
          </Link>
        </div>
      </footer>
    </div>
  );
}


// <div classNameName="navbar fixed-bottom bg-dark row">
//   <div classNameName="col"></div>
//   <div classNameName="col"></div>
//   <div classNameName="col"></div>
// </div>
