import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const CssTextField = withStyles(() => ({
  root: {
    width: '250px',
    margin: '0 auto 40px',
    '& label.Mui-focused': {
      color: '#00BFA6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00BFA6',
    },
    '& .MuiFormLabel-root ': {
      fontFamily: 'Poppins',
    },
    display: 'flex',
  },
}))(TextField);

export default CssTextField;