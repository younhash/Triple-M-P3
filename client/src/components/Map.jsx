import React, { useState, useEffect} from 'react';
import ReactMapGL from 'react-map-gl'
export default function Map(){
    const viewPortWidth = () => {
        if(window.innerWidth < 700){
        return window.innerWidth
        }return window.innerWidth*.6
    
    }
    const viewPortHeight = () => {
        if(window.innerWidth < 700){
        return window.innerHeight*.5
        }return window.innerHeight
    
    }
    const viewPortZoom = () => {
      if(window.innerWidth < 700){
      return 10
      }return 11.75
    
    }
    
    const [viewport, setViewport] = useState({
      width:viewPortWidth(),
      height:viewPortHeight(),
      latitude: 40.7433,
      longitude: -73.9485,
      zoom:viewPortZoom()
    });
    
    
    const changeViewPort = () =>{
    
      const newport = {
        ...viewport,
        width:viewPortWidth(),
        height:viewPortHeight(),
        
      }
      setViewport(newport)
    }
    
    useEffect(() => {
      window.addEventListener("resize", changeViewPort)
    }, []);
    
    const _onViewportChange = viewport => {
      setViewport(viewport)
    }
    
      return (
        <div className="App">
         <ReactMapGL
                    width={viewport.width}
                    height={viewport.height}
                    latitude={viewport.latitude}
                    longitude={viewport.longitude}
                    zoom={viewport.zoom}
                    mapboxApiAccessToken='pk.eyJ1IjoibHVuYXRpYzI0MjAiLCJhIjoiY2syM21ndDh1MGdnejNjcGh5bW81dXdjdSJ9.ewN7SVmckWbKz3dcY_mu8g'
                    
                    onViewportChange={_onViewportChange}
                >
          </ReactMapGL>
        </div>
      );
    }
    