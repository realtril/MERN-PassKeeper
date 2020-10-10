import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../../Redux/selectors/authSelectors';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button">Logout</button>
  </div>
);

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: '../../icons/undraw_male_avatar_323b.svg',
});

export default connect(mapStateToProps, null)(UserMenu);
