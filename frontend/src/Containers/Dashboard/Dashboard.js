import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../Redux/operations/auth';
import { getCurrentUser } from '../../Redux/operations/auth';
import Avatar from '../../icons/undraw_male_avatar_323b.svg';
import PasswordList from '../../Components/PasswordList/PasswordList';
import Button from '../../Components/Button/Button'
import css from './Dashboard.module.css';

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
    <div className={css["wrapper"]}>
      <div className={css["sidebar-wrapper"]}>
        <div className={css["profile-sidebar"]}>
          <div className={css["profile-userpic"]}>
            <img src={Avatar} className={css["img-responsive"]} alt="avatar" />
          </div>
          <div className={css["profile-usertitle"]}>
            <h3 className={css["profile-usertitle-name"]}>
              {user.name && user.name.toUpperCase()}
            </h3>
            <h4 className={css["profile-usertitle-job"]}>
              {user.email && user.email.toUpperCase()}
            </h4>
          </div>
          <div className={css["profile-userbuttons"]}>
            <button
              type="button"
              className={css["profile-logout-btn"]}
              onClick={onLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div className={css["page-content-wrapper"]}>
        <PasswordList />
      </div>
<Button/>
    </div>
  );
};

export default Dashboard;
