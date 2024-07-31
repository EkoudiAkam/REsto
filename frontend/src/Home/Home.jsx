import React from 'react'
import Navbar from '../Components/Navbar'

function Home() {
    return (
    <div>
        <div><Navbar/></div>
        <div class="container-xxl py-5">
            </div><div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-user-tie custom-text-color mb-4"></i>
                                    <h5>Particulier</h5>
                                    <p>Inscrivez-vous sur nos plate-forme et bénéficiez de nos services</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils custom-text-color mb-4"></i>
                                    <h5>Restaurants</h5>
                                    <p>Découvrez tous nos restaurants et choisissez celui qui vous convient le mieux</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-cart-plus custom-text-color mb-4"></i>
                                    <h5>Livraison</h5>
                                    <p>Bénéficiez de notre service de livraison afin de ne plus avoir à vous déplacer</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-headset custom-text-color mb-4"></i>
                                    <h5>Réservation</h5>
                                    <p>Réservez des tables dans tous vos restaurants préférés</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service end */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6">
                            <div class="row g-3">
                                <div class="col-6 text-start">
                                    <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s"src="assets/img/about-1.jpg"/>
                                </div>
                                <div class="col-6 text-start">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s"src="assets/img/about-2.jpg" style={{ marginTop: '25%' }}/>
                                </div>
                                <div class="col-6 text-end">
                                    <img class="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s"src="assets/img/about-3.jpg"/>
                                </div>
                                <div class="col-6 text-end">
                                    <img class="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s"src="assets/img/about-4.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h5 class="section-title ff-secondary text-start custom-text-color fw-normal">à Propos de nous</h5>
                            <h1 class="mb-4">Bienvenu sur <i class="fa fa-utensils custom-text-color me-2"></i>RESTo</h1>
                            <p class="mb-4">En partenariat avec de nombreux restaurants de vos villes préférées</p>
                            <p class="mb-4">Plus besoin de cherchez, ici nous vous proposons une grande panoplie de restaurants où que vous soyez</p>
                            <div class="row g-4 mb-4">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center border-start border-5 custom-text-color px-3">
                                        <h1>+</h1><h1 class="flex-shrink-0 display-5 custom-text-color mb-0" data-toggle="counter-up">100</h1>
                                        <div class="ps-4">
                                            <p class="mb-0">Restaurants</p>
                                            <h6 class="text-uppercase mb-0">Camerounais</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center border-start border-5 custom-text-color px-3">
                                        <h1>+</h1><h1 class="flex-shrink-0 display-5 custom-text-color mb-0" data-toggle="counter-up">10</h1>
                                        <div class="ps-4">
                                            <p class="mb-0">Années</p>
                                            <h6 class="text-uppercase mb-0">D'Expérience</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About end  */}

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center custom-text-color fw-normal">Food Menu</h5>
                        <h1 class="mb-5">Les Meilleurs Menu</h1>
                    </div>
                    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                        <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li class="nav-item">
                                <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                    <i class="fa fa-coffee fa-2x custom-text-color"></i>
                                    <div class="ps-3">
                                        <small class="text-body">Popular</small>
                                        <h6 class="mt-n1 mb-0">Breakfast</h6>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                    <i class="fa fa-hamburger fa-2x custom-text-color"></i>
                                    <div class="ps-3">
                                        <small class="text-body">Special</small>
                                        <h6 class="mt-n1 mb-0">Launch</h6>
                                    </div>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                    <i class="fa fa-utensils fa-2x custom-text-color"></i>
                                    <div class="ps-3">
                                        <small class="text-body">Lovely</small>
                                        <h6 class="mt-n1 mb-0">Dinner</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade show p-0 active">
                                <div class="row g-4">
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-1.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Café / Jus de fruit / Croissant</span>
                                                    <span class="custom-text-color">4000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Café Vienna</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-2.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Salade / Jus de fruit / Pain</span>
                                                    <span class="custom-text-color">7000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Le Moulin de France</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-3.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Sandwich Café</span>
                                                    <span class="custom-text-color">2500Frs</span>
                                                </h5>
                                                <small class="fst-italic">DUFOUR</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-4.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Salade Belle Dame</span>
                                                    <span class="custom-text-color">2000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Grooftop</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-5.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Pancake Omelette</span>
                                                    <span class="custom-text-color">1500Frs</span>
                                                </h5>
                                                <small class="fst-italic">KM Restaurant</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-6.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Crudité</span>
                                                    <span class="custom-text-color">1500Frs</span>
                                                </h5>
                                                <small class="fst-italic">Le Belafoukou</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-7.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Gauffres aux Miel</span>
                                                    <span class="custom-text-color">1500Frs</span>
                                                </h5>
                                                <small class="fst-italic">Le Glacier Moderne Akwa</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-8.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Lait Chaud</span>
                                                    <span class="custom-text-color">1500Frs</span>
                                                </h5>
                                                <small class="fst-italic">Le Keurtis</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" class="tab-pane fade show p-0">
                                <div class="row g-4">
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-9.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Quiche Lauraine</span>
                                                    <span class="custom-text-color">7500Frs</span>
                                                </h5>
                                                <small class="fst-italic">Paul Cameroun</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-10.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Pizza</span>
                                                    <span class="custom-text-color">4000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Target Restaurant pizzeria</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-11.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Chicken Burger Gauffres</span>
                                                    <span class="custom-text-color">2500Frs</span>
                                                </h5>
                                                <small class="fst-italic">Auntie Rose</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-12.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Viande Grill </span>
                                                    <span class="custom-text-color">3000Frs</span>
                                                </h5>
                                                <small class="fst-italic">African Grill by Emy</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-13.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Buffet</span>
                                                    <span class="custom-text-color">8000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Le Grilladin</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-14.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Poulet Braisé</span>
                                                    <span class="custom-text-color">8000Frs</span>
                                                </h5>
                                                <small class="fst-italic">O'dibo Restaurant</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-15.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Amuse-Bouche</span>
                                                    <span class="custom-text-color">3000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Restaurant Bantou</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-16.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Poulet Plantain</span>
                                                    <span class="custom-text-color">2500Frs</span>
                                                </h5>
                                                <small class="fst-italic">Desiré Afro Soul Food</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" class="tab-pane fade show p-0">
                                <div class="row g-4">
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-17.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Riz Marin</span>
                                                    <span class="custom-text-color">2000Frs</span>
                                                </h5>
                                                <small class="fst-italic">La Petite Villageoise</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-18.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Taro Sauce Jaune</span>
                                                    <span class="custom-text-color">2000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Restaurant Bantou</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-19.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Seared Prawns</span>
                                                    <span class="custom-text-color">9000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Lynk Cave</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-20.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Buffet</span>
                                                    <span class="custom-text-color">6000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Les Perroquets</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-21.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Ndole Crevette</span>
                                                    <span class="custom-text-color">5500Frs</span>
                                                </h5>
                                                <small class="fst-italic">Saga Africa</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-22.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Nouilles Sauté au Boeuf</span>
                                                    <span class="custom-text-color">6000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Naga Lounge</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-23.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Tajne aux Pruneaux</span>
                                                    <span class="custom-text-color">15000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Bistro Latin</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded" src="assets/img/menu-24.jpg" alt="" style={{width: '80px'}}/>
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Taro sauce Jaune</span>
                                                    <span class="custom-text-color">6000Frs</span>
                                                </h5>
                                                <small class="fst-italic">Harrods Lounge</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* menu end  */}

            <div class="container-xxl pt-5 pb-3">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center custom-text-color fw-normal">Group Members</h5>
                        <h1 class="mb-5">Our Members</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item text-center rounded overflow-hidden">
                                <div class="rounded-circle overflow-hidden m-4">
                                    <img class="img-fluid" src="assets/img/team-1.jpg" alt=""/>
                                </div>
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div class="d-flex justify-content-center mt-3">
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item text-center rounded overflow-hidden">
                                <div class="rounded-circle overflow-hidden m-4">
                                    <img class="img-fluid" src="assets/img/team-2.jpg" alt=""/>
                                </div>
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div class="d-flex justify-content-center mt-3">
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item text-center rounded overflow-hidden">
                                <div class="rounded-circle overflow-hidden m-4">
                                    <img class="img-fluid" src="assets/img/team-3.jpg" alt=""/>
                                </div>
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div class="d-flex justify-content-center mt-3">
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="team-item text-center rounded overflow-hidden">
                                <div class="rounded-circle overflow-hidden m-4">
                                    <img class="img-fluid" src="assets/img/team-4.jpg" alt=""/>
                                </div>
                                <h5 class="mb-0">Full Name</h5>
                                <small>Designation</small>
                                <div class="d-flex justify-content-center mt-3">
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square custom-text-color mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </div>
)
}

export default Home
