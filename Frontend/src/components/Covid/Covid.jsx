import React from 'react'
import {Container , Grid , Typography} from '@material-ui/core';
import useStyles from './styles';
import CardComponent from './Card/Card';

const Covid = ({covid_data: {Confirmed , Recovered, Hospitalized, Deaths , NewConfirmed , NewRecovered,NewHospitalized, NewDeaths ,UpdateDate , Source , DevBy , ServerBy }}) => {
    const classes = useStyles();
    if (!Confirmed) {
        return 'Loading...';
    }
    return (
        <div className={classes.main}>
            <Container maxWidth="lg" >
                <Typography variant="h3" color="primary" className={classes.title}>Covid Tracker Thailand</Typography>
                <Grid container spacing={3} justify="center" className={classes.CardGroup}>
                    <CardComponent
                        className={classes.infected}
                        cardTitle="Infected"
                        value={Confirmed}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of active cases from COVID-19 in Thailand."
                    />
                    <CardComponent
                        className={classes.recovered}
                        cardTitle="Recovered"
                        value={Recovered}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of recoveries from COVID-19 in Thailand."
                    />
                    <CardComponent
                        className={classes.deaths}
                        cardTitle="Deaths"
                        value={Deaths}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of Deaths caused by COVID-19 in Thailand."
                    />
                    <CardComponent
                        className={classes.Hospitalized}
                        cardTitle="Hospitalized"
                        value={Hospitalized}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of People in Hospital COVID-19 in Thailand."
                    />
                    <CardComponent
                        className={classes.NewConfirmed}
                        cardTitle="NewInfected"
                        value={NewConfirmed}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of New cases Today from COVID-19 in Thailand."
                    />
                    <CardComponent
                        className={classes.NewRecovered}
                        cardTitle="NewRecovered"
                        value={NewRecovered}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of NewRecovered cases Today from COVID-19 in Thailand."
                    />
                    <CardComponent
                        className={classes.NewDeaths}
                        cardTitle="NewDeaths"
                        value={NewDeaths}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of NewDeaths Today from COVID-19 in Thailand."
                    />
                    <CardComponent
                        className={classes.NewHospitalized}
                        cardTitle="NewHospitalized"
                        value={NewHospitalized}
                        lastUpdate={UpdateDate}
                        cardSubtitle="Number of NewHospitalized Today from COVID-19 in Thailand."
                    />
                </Grid>
            </Container>
        </div>
    )
}

export default Covid
