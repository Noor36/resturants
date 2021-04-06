import React from 'react';
import ReactDOM from 'react-dom';

import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div>
         <div id="header" class="container-fluid">
           <nav class="navbar navbar-expand-sm bg-light navbar-light">
             <ul class="mynav navbar-nav col-8">
                <li class="nav-item active"><a class="nav-link" href="index1.html">בית</a></li>
                <li class="nav-item"><a class="nav-link" href="aboutUs.html">אודות</a></li>
                <li class="nav-item"><a class="nav-link" href="tecHelp.html">תמיכה טכנית</a></li>
                <li class="nav-item"><a class="nav-link" href="#">פורום</a></li>
                <li class="nav-item"><a class="nav-link" href="#">אזור אישי</a></li>
             </ul>
             <form class="form-inline mr-5 col-3" action="/action_page.php">
                  <input class="form-control mr-sm-2" type="text" id="keyWord" name="keyWord" placeholder="הכנס מילת מפתח"/>
                  <button class="btn btn-success" type="submit">חיפוש</button>
              </form>
           </nav>
         </div>
         <div id="content" class="container">
           <div id="logo" class="col-12">
             <img class="img-fluid" src="img/logo4.jpg"/>
             <h4 class="text-center mt-5">three input search</h4>
      <h6 class="text-center mb-4">bootstrap 4</h6>
      <section class="search-sec">
         <div class="container">
             <form action="#" method="post" novalidate="novalidate">
                 <div class="row">
                     <div class="col-lg-12">
                         <div class="row">
                             <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                 <input type="text" class="form-control search-slt" placeholder="Enter Pickup City"/>
                             </div>
                              <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                 <input type="text" class="form-control search-slt" placeholder="Enter Drop City"/>
                             </div>
                               <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                 <select class="form-control search-slt" id="exampleFormControlSelect1">
                                     <option>Select Vehicle</option>
                                     <option>Example one</option>
                                     <option>Example one</option>
                                     <option>Example one</option>
                                     <option>Example one</option>
                                     <option>Example one</option>
                                     <option>Example one</option>
                                 </select>
                             </div>
                             <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                 <button type="button" class="btn btn-danger wrn-btn">Search</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </form>
         </div>
         </section>
           </div>

           <div id="demo" class="carousel slide" data-ride="carousel ">
             <ul class="carousel-indicators">
               <li data-target="#demo" data-slide-to="0" class="active"></li>
               <li data-target="#demo" data-slide-to="1"></li>
               <li data-target="#demo" data-slide-to="2"></li>
             </ul>
             <div class="carousel-inner">
               <div class="carousel-item active">
                 <img class="imgCar" src="img/mocram.jpg"/>
               </div>
               <div class="carousel-item">
                 <img class="imgCar" src="img/Cond.jpg"/>
               </div>
               <div class="carousel-item">
                 <img class="imgCar" src="img/aocl.jpg"/>
               </div>
             </div>

             <a class="carousel-control-prev" href="#demo" data-slide="prev">
               <span class="carousel-control-prev-icon"></span>
             </a>
             <a class="carousel-control-next" href="#demo" data-slide="next">
               <span class="carousel-control-next-icon"></span>
             </a>
           </div>

           <div class="row">
             <div class="card1 col-4">
               <img class="card-img-top1" src="img/mecdonalds.jpg" alt="Card image"/>
               <div class="card-body">
                 <h4 class="card-title">מקדונלדס</h4>
                 <p class="card-text">תזמינו עכשיו</p>
                 <a href="#" class="btn btn-primary stretched-link">לסניפי מקדונלדס</a>
               </div>
             </div>
             <div class="card2 col-4">
               <img class="card-img-top2" src="img/cafe.jpg" alt="Card image"/>
               <div class="card-body">
                 <h4 class="card-title">בתי קפה</h4>
                 <p class="card-text">יחעל</p>
                 <a href="#" class="btn btn-primary stretched-link">לבתי קפה</a>
               </div>
             </div>
             <div class="card3 col-4">
               <img class="card-img-top3" src="img/condetorya.jpg" alt="Card image"/>
               <div class="card-body">
                 <h4 class="card-title">קונדיטוריות</h4>
                 <p class="card-text">הקינוח הכי טעים</p>
                 <a href="#" class="btn btn-primary stretched-link">לצפיה בממתקים</a>
               </div>
             </div>
         </div>
         </div>
      </div>
    );
  }
}

export default Home;
