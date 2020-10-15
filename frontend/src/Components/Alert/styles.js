import { Alert, AlertTitle } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';
const AlertCustom = withStyles({
  root: {
    width: '500px',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
})(Alert);

export default AlertCustom;
