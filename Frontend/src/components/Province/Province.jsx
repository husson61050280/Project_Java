import React , {useState , useEffect} from 'react'
import {Container , Typography} from '@material-ui/core';
import useStyles from './styles'
import Map from './Map/Map'
import {fetchMapData} from '../../api/index';

const Province = () => {
    const classes = useStyles();
    const [Map_data , SetMap_data] = useState([{}]);
    console.log("marker = " , Map_data)

    useEffect(async ()=> {
        const response_map = await fetchMapData();
        SetMap_data(response_map) 
    },[])

    if (!Map_data) {
        return 'Loading...';
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Typography variant="h3" color="primary" className={classes.title}>API ที่ตั้งของสำนักงานส่งเสริมการปกครองท้องถิ่นจังหวัด</Typography>
            </Container>
            {Map_data ? <Map marker={Map_data} /> : ""}

        </div>
    )
}

export default Province
