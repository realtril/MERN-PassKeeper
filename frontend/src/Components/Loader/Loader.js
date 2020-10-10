import React from 'react';
import Spinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <Spinner
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default Loader;
