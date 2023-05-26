import React from 'react'
import './announcement.css'
import axios from 'axios'
import Announceimg from '../assets/announce.png'
import Homepage from '../components/Homepage'
const baseURL = "http://localhost:3006/api/v1/announce/Announced";
const Announcement = () => {
  const [anno, setAnnounced] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL,
      {
        responseType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
      ).then((response) => {
        const announce = response.data.Announce
      setAnnounced(announce.reverse());
    });
  }, []);
  const announced = anno.map((data) => {
    return (
      <div className="announcements">
      <div className='anntitle'><h3>{data.title}</h3></div>
      <div className='anndate'>{data.date}</div>
      <div className='anncontent'>{data.content}</div>
      <div className='annto'><p>To All:</p><span><div className='towhom'><p>{data.announceTo}</p></div></span></div>
      </div>
    );
  });
  return (
    <>
        <Homepage/>
    <div className='anncard'>
      <div className='annhead'><p>ANNOUNCEMENT</p><span><img src={Announceimg} alt="" /></span></div>
      {anno.length > 0 ? (<div className='anncontent'>
      {announced}
      </div>) : (
      <div className='anncontent'>
        <p>No Announcement</p>
      </div>)}
    </div>
    </>
  )
}

export default Announcement