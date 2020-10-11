import React, { useEffect } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/operations/auth';
import Modal from '../../Components/Modal/Modal';
import { getCurrentUser } from '../../Redux/operations/auth';
import Avatar from '../../icons/undraw_male_avatar_323b.svg';
import PasswordList from '../../Components/PasswordList/PasswordList';
import Button from '../../Components/Button/Button'
import '../Dashboard/Dashboard.css';

const Dashboard = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
        <div className="profile-sidebar">
          <div className="profile-userpic">
            <img src={Avatar} className="img-responsive" alt="" />
          </div>
          <div className="profile-usertitle">
            <h3 className="profile-usertitle-name">
              {user.name && user.name.toUpperCase()}
            </h3>
            <h4 className="profile-usertitle-job">
              {user.email && user.email.toUpperCase()}
            </h4>
          </div>
          <div className="profile-userbuttons">
            <button
              type="button"
              className="btn btn-danger btn-xs"
              onClick={onLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className="page-content-wrapper">
        <PasswordList />
      </div>
<Button/>
    </div>
  );
};

export default Dashboard;
