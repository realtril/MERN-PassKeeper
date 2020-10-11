import axios from 'axios';
import { loaderOff, loaderOn } from '../actions/loaderActions';
import passActions from '../actions/passwordActions';

export const passwordSetOperation = userData => async dispatch => {
  try {
    dispatch(loaderOn());
    const result = await axios.post('/passwords', userData);
    console.log(result.data);
    dispatch(passActions.passwordSetSuccess(result.data));
  } catch (error) {
    dispatch(passActions.passwordSetError(error));
  } finally {
    dispatch(loaderOff());
  }
};

export const passwordGetOperation = () => async (dispatch) => {
  dispatch(loaderOn());
try{
    const res = await axios.get('/passwords');
    dispatch(passActions.passwordsGetSuccess(res.data))
}catch(error){
dispatch(passActions.passwordsGetError())
}finally{
loaderOff()
}
};

export const passwordDeleteOperation = () => async (dispatch,getState) => {
  dispatch(loaderOn());
const {passwordId} = getState().passwords;
try{
await axios.delete(`/passwords/${passwordId}`)
dispatch(passActions.passwordDeleteSuccess(passwordId))
}catch(error){
dispatch(passActions.passwordDeleteError(error))
}finally{
    loaderOff()
}
};

export const passwordUpdateOperation = (updatedPassword)=>async(dispatch,getState)=>{
    dispatch(loaderOn())
    const {passwordId} = getState().passwords;
    try{
    const res = await axios.patch(`/passwords/${passwordId}`,{...updatedPassword})
    dispatch(passActions.passwordChangeSuccess({updatedPassword,passwordId}))
    }catch(error){
    dispatch(passActions.passwordChangeError(error))
    }finally{
    dispatch(loaderOff())
    }
}
