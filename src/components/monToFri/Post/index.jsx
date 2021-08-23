import React, { useState } from 'react';

import Modal from '../../shared/Modal';
import PostDetails from '../PostDetails';

const Post = ({ title, date, url }) => {
	const [show, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	return (
		<div className="info_and_img">
			<div className="info_container">
				{title.length < 18 ? 
					<div className="img_title">{title}</div> :
					<marquee className="img_title">{title}</marquee>
				}
				<div className="img_date">{date}</div>
			</div>

			<img className="img_png" src={url} />

			<button className="more_btn" onClick={openModal}>
				More
			</button>
			<Modal show={show} handleClose={closeModal}>
				<PostDetails url={url} title={title} date={date} />
			</Modal>
		</div>
	);
};

export default Post;
