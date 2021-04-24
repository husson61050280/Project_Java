import React , {useState , useEffect} from 'react';
import Covid from './components/Covid/Covid';
import {fetchCovid} from './api/index';
import Province from './components/Province/Province'


const App = () => {

    const [covid_data , Setcovid_data] = useState({});

    useEffect(async () => {
        const data = await fetchCovid();
        Setcovid_data(data)
    },[])


    console.log("Covid Data = " , covid_data)
    return (
        <div>
            <Covid covid_data={covid_data}/>
            <Province/>
        </div>
    )
}

export default App
