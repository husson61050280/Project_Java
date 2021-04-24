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
  CardGroup: {
    margin: '50px 0',
  },
  infected:{
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
  },
  recovered:{
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  deaths:{
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
  Hospitalized:{
    borderBottom: '10px solid rgba(80, 20, 100, 0.5)',
  },
  NewConfirmed:{
    borderBottom: '10px solid rgba(150, 100, 50, 0.5)',
  },
  NewRecovered:{
    borderBottom: '10px solid rgba(255, 155, 40, 0.5)',
  },
  NewDeaths:{
    borderBottom: '10px solid rgba(255, 87, 255, 0.5)',
  },
  NewHospitalized:{
    borderBottom: '10px solid rgba(240, 120, 153, 0.5)',
  },
  
}));

export default useStyles;