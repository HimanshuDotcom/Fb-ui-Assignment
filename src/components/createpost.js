import { useState } from 'react';
import Giphy from './Giphy';
import cx from 'classnames';
import {FaPen, FaPhotoVideo, FaVideo,FaTimes, FaUserCircle, FaUserTag, FaMapMarkerAlt, FaCalendarAlt,FaLock, FaAngleDown} from "react-icons/fa";
import {AiOutlineGif} from "react-icons/ai";


const CreatePost = ({setPostModel, addToPosts}) => {
    const [showGIF, toggleGiffy] = useState(false);
    const [postMsg, setPostmsg] = useState("");
    const [postGif, setPostGif] = useState("");
    
    const handlePost = () => {
      addToPosts(postMsg, postGif);
      setPostModel(false)
    }
    
      return (
        <div className='post'>
          <div className='post_header'>
              <a href='#' className='btn'>
                <i><FaPen  /></i>
                Compose Post
              </a>
              <a href='#' className='btn'>
                <i><FaPhotoVideo /></i>
               Photo/video Album
              </a>
              <a href='#' className='btn'>
                <i><FaVideo /></i>
                Live video
              </a>
              <p onClick={() => setPostModel(false)} className='btn btn--close' >
                <i><FaTimes /> </i>
              </p>
          </div>
          <div className='post_body'>
            <div className='post_imgtxt'>
              <p className='post_imgtxt-img'> <FaUserCircle color='#d0d3d8' /></p>
              <div className='post_imgtxt-txt'>
                <textarea
                  placeholder='Write Something here' 
                  value={postMsg}
                  onChange = {(e) => setPostmsg(e.target.value)}
                >
                </textarea>
              </div>
              <div className='post_gif'>
                <img src = {postGif} />
              </div>
            </div>
            <div className='post_tags'>
              <div className='tag'>
              <a href='#' className='btn'>
                <i ><FaUserTag color='#1886e7' /></i>
                Tag Friends
              </a>
              </div>
              <div className='tag'>
              <a href='#' className='btn'>
                <i><FaMapMarkerAlt color='#f63209' /></i>
                Check in
              </a>
              </div>
              <div className='tag tag--gif'>
                <a onClick={() => toggleGiffy(prev => !prev)} href='#' className='btn'>
                  <i><AiOutlineGif /></i>
                  GIF
                </a>
    
                <div className={cx("gif",{
                  "gif--active" : showGIF
                })}>
                  <div></div>
                  {showGIF && 
                  <Giphy 
                    toggleGiffy = {toggleGiffy}
                    setPostGif = {setPostGif} />}
                </div>
              </div>
              <div className='tag'>
              <a onClick={() => toggleGiffy(prev => !prev)} href='#' className='btn'>
                <i><FaCalendarAlt color='' /></i>
                Tag events
              </a>
              </div>
              
            </div>
            <div className='post_footer'>
              <button>
                <FaLock style={{'marginRight': '5px'}} />
                Only me
                <FaAngleDown style={{'marginLeft' : '5px'}} />
              </button>
              <button className='submit' onClick= {handlePost}>Post</button>
            </div>
          </div>
        </div>
      )
    }


    export default CreatePost;