import React, { useEffect, useState } from "react";
import './App.css';
import Video from './components/Video';
import { collection, getDocs } from "firebase/firestore";
import db from "./lib/init-firebase";

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const movieCollectionRef = collection(db, 'videos')
    getDocs(movieCollectionRef)
      .then(response => {
        const mds = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setVideos(mds)
      })
      .catch(error => console.log(error.message))
  }, [])

  useEffect(() => {
    console.log(videos);
  }, [videos])

  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map(
            (a) => (

              <Video
                key={a.id}
                url={a.data.url}
                shares={a.data.shares}
                channel={a.data.channel}
                likes={a.data.likes}
                messages={a.data.messages}
                description={a.data.description}
                song={a.data.song}


              />
            )
          )
        }
      </div>
    </div>
  );
}

export default App;







