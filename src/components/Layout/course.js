import React from 'react';

export default function Course({name, image, showAll, link}) {
  return (
    <div
      className="box"
      style={{cursor: 'pointer'}}
      onClick={() => {
        window.open(`./${link}`, '_self');
      }}>
      <img
        className="round-img"
        src={image}
        alt="Image"
        style={{height: '40px', width: '40px'}}
        height="40px"
        width="40px"></img>
      <h3>{name}</h3>
    </div>
  );
}
