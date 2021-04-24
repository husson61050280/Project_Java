import axios from 'axios';

const url = 'http://localhost:8080/Covid';

 //fetchCovid Data
 export const fetchCovid = async () => {
    const url = "http://localhost:8080/Covid";
    try {
        const {data} = await axios.get(url);
        return data
    }catch(error) {
        console.log(error.message);
    }
}

//fetchMap Data
export const fetchMapData = async () => {
    const url = "http://localhost:8080/province"
    try {
        const {data:{result:{records}}} = await axios.get(url);
        console.log("Map = " ,records)
        return records
    }catch(error) {
        console.log(error.message);
    }
}