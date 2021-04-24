import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    margin: '50px 0',
  },
  title: {
    flexGrow: 1,
    textTransform:"upperCase",
    fontWeight: 700,
    textAlign: 'center',
  },

}));

export default useStyles;