import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = withStyles(() => ({
  root: {
        '& label.Mui-focused': {
      color: '#00BFA6',
    },
    '& .MuiFormControl-root': {
      display: 'flex',
      padding: '10px',
    },
    '& .MuiInputBase-root': {
      marginBottom: '50px',
    },
    '& .MuiInputBase-root.Mui-error': {
      marginBottom: '0px',
    },
    '& label.Mui-focused': {
      color: '##00BFA6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00BFA6',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginBottom: '50px',
      fontFamily: 'Poppins',
      color: 'red',
      fontSize: '12px',
    },
        '& label.Mui-focused': {
      color: '#00BFA6',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#00BFA6',
    },
    '& > *': {
      width: '100%',
      fontFamily: 'Poppins',
      fontWeight: 'normal',
      fontSize: '1.5rem',
      lineHeight: '22px',
    },

    '& .MuiInputBase-input': {
      padding: '6px',
    },
  },
}))(TextField);

export default CssTextField;