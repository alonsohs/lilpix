import React, { useState } from 'react';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import './index.css';

const Tab = ({ children, chageSelectedTab }) => {
	const { onClick } = useTabState();

	const handleClick = () => {
		chageSelectedTab();
		onClick();
	};

	return <button onClick={handleClick}>{children}</button>;
};

const PostDetails = ({ url, title, date, behind, size, resolution }) => {
	const [selected, setSelected] = useState(1);

	const [activeFirst, setActiveFirst] = useState(true);
	const setSelectedTab = (newSelected) => {
		setSelected(newSelected);
		console.log(selected)
		setActiveFirst(false)
	};

	return (
		<Tabs>
			<div className="tab__button__container">
				<Tab chageSelectedTab={() => setSelectedTab(1)}>
					<div className={`tab__button ${selected === 1 ? 'selected' : ''}`}>
						Download <i class="fas fa-arrow-down"></i>
					</div>
				</Tab>
				<Tab chageSelectedTab={() => setSelectedTab(2)}>
					<div className={`tab__button ${selected === 2 ? 'selected' : ''}`}>
						Production notes <i class="fas fa-wrench"></i>
					</div>
				</Tab>
				<Tab chageSelectedTab={() => setSelectedTab(3)}>
					<div className={`tab__button ${selected === 3 ? 'selected' : ''}`}>
						Info <i class="fas fa-info"></i>
					</div>
				</Tab>
			</div>

			<Panel active={activeFirst}>
				<div className="tab__panel">
					<div>
						<h1>{title}</h1>
						<p>{date}</p>
					</div>
					<img src={url} alt="" className="download_img" />
					<div>
						<i class="fas fa-arrow-down"></i>
					</div>
				</div>
			</Panel>
			<Panel>
				<div className="tab__panel">
					<img src={behind} alt="" className="production_notes" />
				</div>
			</Panel>
			<Panel>
				<div className="tab__panel_3">
					<div className="tools">
						<h1>Tools used:</h1>
						<div className="logos">
							<img src="https://i.imgur.com/9dc8L08.png" alt="Blender" />
							<img src="https://i.imgur.com/IdeZdjG.png" alt="Photoshop" />
						</div>
					</div>
					<div className="resolution">
						<div>
							<h1>Original resolution:</h1>
							<p>{resolution} px</p>
						</div>
					</div>
					<div className="size">
						<div>
							<h1>File size:</h1>
							<p>{size} MB</p>
						</div>
					</div>
				</div>
			</Panel>
		</Tabs>
	);
};

export default PostDetails;
