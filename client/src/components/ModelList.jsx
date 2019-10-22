import React /*, {useState, useEffect}*/ from 'react';
// import axios from 'axios';
import CityCard from './city/CityCard';
import TrailCard from './trail/TrailCard';
export default function ModelItemsList({model, search}){
    // const [modelItemsArr, setModelItemsArr] = useState([]);
    // const buildModelItemsArr = async () => {
    //     let query = `/api/${model}s/`
    //     try {
    //         let response = await axios.get(query);
    //         setModelItemsArr([...response.data]);
    //     }
    //     catch (error) {console.log('ERROR', error)}
    // }
    // useEffect(() => {
    //     buildModelItemsArr();
    // },[model])
    let cities = [
        {
            "name": "New York City",
            "state": "New York",
            "lat": 40.730610,
            "lon": -73.935242
        },
        {
            "name": "Atlanta",
            "state": "Georgia",
            "lat": 33.753746,
            "lon": -84.386330
        },{
            "name": "Boulder",
            "state": "Colorado",
            "lat": 	40.014984,
            "lon": -105.270546
        },
    ]
    console.log(cities);
    
    let modelItemsArr = cities;
    return(
        <div className={`${model}-list`} >
            {model}
            {modelItemsArr.map((modelItem, idx) => {
                let regex = new RegExp(`^${search}`, 'i')
                if (model === 'trail'){
                    let trail = modelItem;
                    return <TrailCard trailObj={{trail, model}} key={`${model}-${idx}`} />
                } else if (model === 'city') {
                    if (!!modelItem.name.match(regex) || !!modelItem.state.match(regex)){
                        let city = modelItem;
                        return <CityCard cityObj={{city, model}} key={`${model}-${idx}`} />
                    }
                }
            })}
        </div>
    )
}