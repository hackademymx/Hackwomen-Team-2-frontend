import { Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

export default function Notification(props){
    // eslint-disable-next-line
    const { notification, setNotification} = props;

    const closeNotification=()=>
      setNotification({
        open: false,
        message: "",
        severity: "",
      });

      return(
        <Snackbar
            // eslint-disable-next-line
            open={notification.open}
            autoHideDuration={3000}
            onClose={closeNotification}
            anchorOrigin={{vertical: "top", horizontal:"center"}}
        >
            <Alert
                onClose={closeNotification}
                // eslint-disable-next-line
                severity={notification.severity}
                sx={{ width:"100%" }}
            > 
            {/*   eslint-disable-next-line   */}
            {notification.message}
            </Alert>
        </Snackbar>
      )
}

Notification.protoTypes = {
    notification: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired,
        severity: PropTypes.string.isRequired,
    }).isRequired,
    setNotification: PropTypes.func.isRequired,
};