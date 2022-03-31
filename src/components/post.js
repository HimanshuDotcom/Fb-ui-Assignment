import {FaUserCircle, FaThumbsUp, FaComment, FaShare} from "react-icons/fa";


const Post = ({item}) => {
  let today = new Date();
  let month = today.toLocaleString('default', { month: 'short' });

  
    return (
      <div className="frame__container">
    <div className="frame__headline">
      <FaUserCircle style={{'fontSize' : '2.4rem', 'color' : 'grey', 'marginRight' : '1rem'}} />
      <div className="frame__column">
        <p className="headline__title">
          Himanshu Arora
        </p>
        <p className="headline__subtitle">
          {today.getDate() + " "+ month + ", " + today.getFullYear()}
        </p>
      </div>
    </div>
    <div className="frame__content">
      <p className="frame__text--small">{item.msg}</p>
    </div>
    <div className="frame__content">
      <img className="frame__image" src={item.gif} />
    </div>
    <div className="frame__footer">
      <div className="footer__likes">
        <i><FaThumbsUp /></i>
        <p className="text__social">Like</p>
      </div>
      <div className="footer__comments">
        <i><FaComment /></i>
        <p className="text__social">Comment</p>
      </div>
      <div className="footer__share">
        <i><FaShare /></i>
        <p className="text__social">Share</p>
      </div>
    </div>
  </div>
    )
  }

  export default Post;