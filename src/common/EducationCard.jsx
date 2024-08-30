import React from 'react';

function EducationCard({ src, link, h3, h6, p }) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <h6>{h6}</h6>
      <p>{p}</p>
    </a>
  );
}

export default EducationCard;
