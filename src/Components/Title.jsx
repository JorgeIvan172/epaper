import React from 'react';
import './Styles/Title.css';


const Title1 = (props) => { 
    return (
		<div className="title-container">
		  <h1>
			{props.text} 
		  </h1>
		</div>
	  );
}

export default Title1;