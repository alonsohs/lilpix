import React, { Fragment } from 'react';

const Gallery = (props) => {
	return (
		<Fragment>
			<div>
				hola
				<img src={props.url} alt="" className="gallery-image" />
			</div>
		</Fragment>
	);
};

export default Gallery;
