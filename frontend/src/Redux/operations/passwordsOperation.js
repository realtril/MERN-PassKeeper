import axios from 'axios';
import { loaderOff, loaderOn } from '../actions/loaderActions';
import passActions from '../actions/passwordActions';


const magicToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    console.log('chimichango');
    axios.defaults.headers.common.Authorization = '';
  },
};
export const passwordSetOperation = userData => async (dispatch,getState) => {
  try {
    dispatch(loaderOn());
    const {token}=getState().auth;
    magicToken.set(token)
    const result = await axios.post('/passwords', userData);
    dispatch(passActions.passwordSetSuccess(result.data));
  } catch (error) {
    dispatch(passActions.passwordSetError(error));
  } finally {
    dispatch(loaderOff());
  }
};

export const passwordGetOperation = () => async (dispatch,getState) => {
  dispatch(loaderOn());
try{
      const {token}=getState().auth;
    magicToken.set(token)
    const res = await axios.get('/passwords');

    dispatch(passActions.passwordsGetSuccess(res.data))
}catch(error){
dispatch(passActions.passwordsGetError())
}finally{
loaderOff()
}
};

export const passwordDeleteOperation = (_id) => async (dispatch,getState) => {
  dispatch(loaderOn());
const {token}=getState().auth;
magicToken.set(token)
try{
await axios.delete(`/passwords/${_id}`)
dispatch(passActions.passwordDeleteSuccess(_id))
}catch(error){
dispatch(passActions.passwordDeleteError(error))
}finally{
loaderOff()
}
};

export const passwordUpdateOperation = (updatedPassword)=>async(dispatch,getState)=>{
    dispatch(loaderOn())
    const {passwordId} = getState().passwords;
    const {token}=getState().auth;
    magicToken.set(token)
    try{
    const res = await axios.patch(`/passwords/${passwordId}`,{...updatedPassword})
    dispatch(passActions.passwordChangeSuccess({updatedPassword,passwordId}))
    }catch(error){
    dispatch(passActions.passwordChangeError(error))
    }finally{
    dispatch(loaderOff())
    }
}
