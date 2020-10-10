import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
const TitleField = withStyles({
  root: {
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
      color: '#303F9F',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#303F9F',
    },
    '& .MuiFormHelperText-root.Mui-error': {
      marginBottom: '50px',
      fontFamily: 'Montserrat',
      color: 'red',
      fontSize: '12px',
    },
    '& > *': {
      width: '100%',
      fontFamily: 'Montserrat',
      fontWeight: 'normal',
      fontSize: '1.5rem',
      lineHeight: '22px',
    },

    '& .MuiInputBase-input': {
      padding: '6px',
    },
  },
})(TextField);

export default TitleField;
