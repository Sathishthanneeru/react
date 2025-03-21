function Header() {
  //   return  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#">
  //       Navbar
  //     </a>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <a className="nav-link active" aria-current="page" href="#">
  //             Home
  //           </a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">
              
  //           </a>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a
  //             className="nav-link dropdown-toggle"
  //             href="#"
  //             role="button"
  //             data-bs-toggle="dropdown"
  //             aria-expanded="false"
  //           >
  //             Dropdown
  //           </a>
  //           <ul className="dropdown-menu">
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Action
  //               </a>
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Another action
  //               </a>
  //             </li>
  //             <li>
  //               <hr className="dropdown-divider" />
  //             </li>
  //             <li>
  //               <a className="dropdown-item" href="#">
  //                 Something else here
  //               </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link disabled" aria-disabled="true">
  //             Disabled
  //           </a>
  //         </li>
  //       </ul>
  //       <form className="d-flex" role="search">
  //         <input
  //           className="form-control me-2"
  //           type="search"
  //           placeholder="Search"
  //           aria-label="Search"
  //         />
  //         <button className="btn btn-outline-success" type="submit">
  //           Search
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // </nav>;
return    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
    <a class="navbar-brand" href="#">
        <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg" alt="Logo" width="50" height="50" /> MyReactWebsite
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#summary">Summary</a></li>
            <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
            <li class="nav-item"><a class="btn btn-primary" href="#login">Login</a></li>
        </ul>
    </div>
</div>
</nav>

 
}
export default Header;
