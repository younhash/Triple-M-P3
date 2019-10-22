import React /*, {useState, useEffect}*/ from 'react';
// import axios from 'axios';
import CityCard from './city/CityCard';
import TrailCard from './trail/TrailCard';
import {trails} from './seedtrails';
import {cities} from './seedcity';
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
    
    // console.log(trails, model);
    
    let modelItemsArr = model==='trail'? trails:cities;

    return(
        <div className={`${model}-list`} >
            <img src='../../public/crop-david-marcu-unsplash.jpg' alt='bike riding in the mountain' width="100%" height=""/>
            {model}
            {modelItemsArr.map((modelItem, idx) => {
                let regex = new RegExp(`^${search}`, 'i')
                if (model === 'trail'){
                    if (!!modelItem.name.match(regex) || !!modelItem.state.match(regex) || !!modelItem.city.match(regex)){
                        let trail = modelItem;
                        return <TrailCard trailObj={trail} key={`${model}-${idx}`} />
                    }
                } else if (model === 'city') {
                    if (!!modelItem.name.match(regex) || !!modelItem.state.match(regex)){
                        let city = modelItem;
                        return <CityCard city={city} key={`${model}-${idx}`} />
                    }
                }
            })}
        </div>
    )
}