import React from 'react';
import '../Dashboard/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <h3 href="#">
                        User Dashboard
                    </h3>
                </li>
                <div className="profile-sidebar">
                    <div className="profile-userpic">
                        <img src="http://bit.ly/389HU5D" className="img-responsive" alt=""/>
                    </div>
                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            Akash Bagchi
                        </div>
                        <div className="profile-usertitle-job">
                            Developer
                        </div>
                    </div>
                    <div className="profile-userbuttons">
                        <button type="button" className="btn btn-danger btn-xs">Log Out</button>
                    </div>
                </div>
            </ul>
        </div>

        <div id="page-content-wrapper">
 
        </div>
    </div>
  );
};

export default Dashboard;
