import React from 'react'

function Navbar() {
  return (
    <div>
          <div class="container-xxl position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="index" class="navbar-brand p-0">
                <h1 class="custom-text-color m-0"><i class="fa fa-utensils me-3"></i>RESTo</h1>
                {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0 pe-4">
                    <a href="/" class="nav-item nav-link">Home</a>
                    <a href="Restaurant" class="nav-item nav-link ">Restaurants</a>
                    <a href="SignIn" class="nav-item nav-link ">login</a>
                    <a href="Contact" class="nav-item nav-link ">Contact</a>
                </div>
            </div>
        </nav>    

        <div class="container-xxl py-5 bg-dark hero-header mb-5">
            <div class="container my-5 py-5">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6 text-center text-lg-start">
                        <h1 class="display-3 text-white animated slideInLeft">Bienvenue sur<br/>RESTo</h1>
                        <p class="text-white animated slideInLeft mb-4 pb-2">Découvrez ici vos restaurants favoris</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar
