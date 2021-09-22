import React from 'react'; 
// import {MDBCardFooter, MDBFooter, MDBListGroup} from 'mdb-react-ui-kit'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
// import logo from './../images/reactlogo.png';
import {Link} from 'react-router-dom'; 
import './../styles/app.css'; 

export const RFooter = props =>(
    <>
     <div className="cover" id="footer_cover">
      <div className="container">
        <h3>Planetry Coding Challange</h3><br></br>
        <div className="row">
            <div className="col-md-4">
            <h4>Services</h4>
                  <ul>
                    <li  id="footer_textid"><Link to="/shop" class="rlink">Products</Link></li>
                    <li><Link to="/services" class="rlink" >Services</Link></li>
                    <li><Link to="/services" class="rlink">News</Link></li>
                    <li><Link to="/services" class="rlink">Others</Link></li>
                  </ul>
            </div>
            <div className="col-md-4">
            <h4>Clients</h4>
                  <ul>
                    <li><Link to="/Company" class="rlink">Companies</Link></li>
                    <li><Link to="/industry" class="rlink">Industry</Link></li>
                    <li><Link to="/Fabricate" class="rlink">Fabricate</Link></li>
                    <li><Link to="/Other" class="rlink">Other</Link></li>
                  </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact</h4>
                  <p class="footer_contact"><b>Email: </b><Link to="/" class="rlink">info@trustafghan.af</Link></p>
                  <p class="footer_contact"><b>Phone: </b>+93(0)7000 77 100 </p>
                  <p class="footer_contact"><b>Address: </b>Kabul, Afghanistan. </p>
                  <p class="footer_contact">For more info, click <Link to="/contact" class="rlink">here</Link></p>
            </div>
        </div>
        <div><p>Designed by Rasikh</p></div>
      </div>
    </div>
    </>
);