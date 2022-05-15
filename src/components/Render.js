import React, {useState, useEffect} from 'react'
import waves from '../assets/waves.mp4'
import LoadingSpinner from './Spinner';
import './VideoStyles.css'
import thumbnail from '../assets/thumbnail.jpg'

function Render() {
    const[loading, setLoading] = useState(true)
    const onLoadedData = () => {
        console.log("loaded")
          setLoading(false);
      };

      useEffect(() => {
          console.log('useEffect')
          console.log(loading)
      }, [loading]);


  return (

    <div >
        <img
            src={thumbnail}
            className="video-thumb tiny"
            alt="thumb"
            id='video'
            style={{ opacity: loading ? 1 : 0 }}
        />
        <video
            loop
            muted
            autoPlay
            id='video'
            src={waves}
            preload={'auto'}
            type={'video/mp4'}
            onLoadedData={onLoadedData}
            style={{ opacity: loading ? 0 : 1 }}
            >
        </video>
    </div>
  )
}

export default Render