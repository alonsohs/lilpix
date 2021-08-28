import React from 'react';
import './index.css';

import Post from '../Post';

const Week = ({ number, title, posts, resolution, size }) => {
	return (
		<div className="week_container_main">
			<header className="weeks_title">
				WEEk #{number}
				<p> {title}</p>
			</header>
			<hr className="hr_m-t-f" />
			<div className="main_week_block">
				{posts.map((post) => (
					<Post
						key={`${post.title}-${post.date}`}
						title={post.title}
						date={post.date}
						url={post.url}
						behind={post.behind}
						size={post.size}
						resolution={post.resolution}
					/>
				))}
			</div>
		</div>
	);
};

export default Week;
