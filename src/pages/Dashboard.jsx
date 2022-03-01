import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";


const Dashboard = () => {
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>

         

<section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light nav-color">
                          <i className="fa-solid fa-square"></i>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                            </button>
                          
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                  <a className="nav-link nav-color1" href="#">Dashboard<span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                  <a class="nav-link nav-color" href="#">All Projects</a>
                                </li>
                                <li className="nav-item">
                                  <a class="nav-link nav-color" href="#">members</a>
                                </li>
                                <li className="nav-item">
                                  <a class="nav-link nav-color" href="#">Status</a>
                                </li>
                                <li className="nav-item">
                                  <a class="nav-link nav-color" href="#">Help</a>
                                </li>
                              </ul>
                              <form className="form-inline my-2 my-lg-0">
                                  <p className="profile-name">Goodly <br />Web Developer</p>&nbsp;&nbsp;
                                  <img src="./images/people.png" className="profile-img" />
                                  <button onClick={logoutHandler} className="btn btn-primary text-left"> Logout</button>
                               
                              </form>
                            </div>
                          </nav>
                    </div>
                  
                    
                </div>
            </div>
        </section>

        <section>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-1 side-bar">
                     
                     <ul className="icons">
                       <li><i className="fa-solid fa-house"></i></li>
                       <li><i className="fa-solid fa-calendar"></i></li>
                       <li><i className="fa-solid fa-message"></i></li>
                       <li><i className="fa-solid fa-gear"></i></li>
                     </ul>
                      
                       
                      
                     
                    </div>
                    <div className="col-lg-9 statics">
                        <div className="row todo-list">
                            <div className="col-lg-5 todo-list11">
                              
                              <div className="row ">
                                <div className="col-10">
                                   <p>Today todo-list</p>
                                   <p>
                                     moday
                                   </p>
                                </div>
                                <div className="col-2">
                                  <div className="row">
                                    <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;
                                    <i className="fa-solid fa-ellipsis-vertical bullet"></i>
                                  </div>
                                 
                                </div>
                              </div>
                                  
                              <div className="row list-item">
                                <div className="col-2">
                                  <img src="./images/check-mark.png" className="check-mark" />
                                </div>
                                <div className="col-8">
                                  <div className="row">
                                    <p className="todo-para">
                                     <del>In publishing and graphic design, 
                                      Lorem ipsum is a placeholder</del> 
                                     </p>
                                    
                                   
                                  </div>
                                 
                                </div>
                                <div className="col-2">
                                  <i className="fa-solid fa-exclamation bullet1"></i>
                                  <i className="fa-solid fa-ellipsis-vertical bullet1"></i>
                                </div>
                              
                              </div>
                            
                              <div className="row">
                                <div className="col-2">
                                  <img src="./images/check-mark.png" className="check-mark" />
                                </div>
                                <div className="col-8">
                                  <div className="row">
                                    <p className="todo-para">
                                      In publishing and graphic design, 
                                      Lorem ipsum is a placeHolder
                                     </p>
                                    
                                   
                                  </div>
                                 
                                </div>
                                <div className="col-2">
                                  <i className="fa-solid fa-exclamation bullet1"></i>
                                  <i className="fa-solid fa-ellipsis-vertical bullet1"></i>
                                </div>
                              
                              </div>
                              <div className="row line">

                              </div>
                              <div className="row">
                                <div className="col-2">
                                  <img src="./images/check-mark.png" className="check-mark" />
                                </div>
                                <div className="col-8">
                                  <div className="row">
                                    <p className="todo-para">
                                      <del>
                                        In publishing and graphic design, 
                                        Lorem ipsum is a placeHolder
                                      </del>
                                     
                                     </p>
                                    
                                   
                                  </div>
                                 
                                </div>
                                <div className="col-2">
                                  <i className="fa-solid fa-exclamation bullet1"></i>
                                  <i className="fa-solid fa-ellipsis-vertical bullet1"></i>
                                </div>
                              
                              </div>



                            </div>
                            <div className="col-lg-3 card-one">
                              <img src="./images/angel.png" />
                              
                                <p className="card-para">Team members</p>
                               
                              <div className="row team-member-list">
                                <img src="./images/people.png" className="team-member" />
                                <img src="./images/people.png" className="team-member" />
                                <img src="./images/people.png" className="team-member" />
                                <img src="./images/people.png" className="team-member" />
                              </div>
                              <p className="card-para">Project Completion</p>
                              <div className="progress">
                                <div class="progress-bar" role="progressbar" >25%</div>
                              </div>
                              
                            </div>
                            <div className="col-lg-3 card-two">
                             
                               <img src="./images/credit-cards.png" />
                              
                                <p className="card-para team">Team members</p>
                               
                              <div className="row team-member-list">
                                <img src="./images/people.png" className="team-member" />
                                <img src="./images/people.png" className="team-member" />
                                <img src="./images/people.png" className="team-member" />
                                <img src="./images/people.png" className="team-member" />
                              </div>
                              <p className="card-para team">Project Completion</p>
                              <div className="progress">
                                <div class="progress-bar" role="progressbar" >25%</div>
                              </div>
                            </div>
                        </div>
                        <div className="row project-list">
                          

                          <div className="row pt-5">
                            <table className="table table-striped table-dark">
                              <thead>
                                <tr>
                                  <th scope="col">Recent Projects</th>
                                  <th scope="col">Created</th>
                                  <th scope="col">Reporter</th>
                                  <th scope="col">Due</th>
                                  <th scope="col">Status</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">
                                     <img src="./images/angel.png" className="table-img" />
                                     company name
                                    </th>
                                  <td>creater</td>
                                  <td>Otto</td>
                                  <td>1 march</td>
                                  <td>In Progrss</td>
                                  
                                
                                </tr>
                                <tr>
                                  <th scope="row">  <img src="./images/credit-cards.png" className="table-img" />
                                  credit Card</th>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                  <td>Mark</td>
                                 
                                  
                                </tr>
                                <tr>
                                  <th scope="row"><img src="./images/angel.png" className="table-img" />Target</th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                  <td>@twitter</td>
                                  
                                </tr>
                                <tr>
                                  <th scope="row">  <img src="./images/credit-cards.png" className="table-img" />
                                  Private limited
                                  </th>
                                  <td>Larry</td>
                                  <td>the Bird</td>
                                  <td>@twitter</td>
                                  <td>Mark</td>
                                  
                                  
                                </tr>
                                
                              </tbody>
                            </table>
                          </div>
                         







                        </div>
                      

                      



                    </div>
                    <div className="col-lg-2 calendar">
                      
                      <div className="row">
                        <div className="col-7">
                          <h6>Calendar</h6>
                          <p className="calendar-para">Monday, 28th October</p>
                        </div>
                        <div className="col-5">
                          <img src="./images/calendar.png" className="calendar-img" />
                        </div>
                      </div>
                    
                      <div className="row">
                        <div className="col-3">
                          <h6>6 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>7 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>8 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>9 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>10 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>11 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>12 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>1 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>2 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>3 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>4 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>5 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>
                      <div className="row pt-2">
                        <div className="col-3">
                          <h6>6 AM</h6>
                        </div>
                        <div className="col-8 line-one">
                        
                        </div>
                      </div>

                    </div>
                </div>
            </div>
        </section>






















      
    </>
  );
};

export default Dashboard;
