import React from "react";
import { withRouter} from 'react-router-dom';
import './menu-item.scss';

const MenuItem = ({ id, title, size, imageUrl, history, match, linkUrl }) => (
  <div id={id} onClick={()=> history.push(`${match.url}${linkUrl}`)}
  className={`${size} menu-item`}>
      <div
        className='background-image'
        style= {{
            backgroundImage: `url(${imageUrl})`
        }}
      />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
