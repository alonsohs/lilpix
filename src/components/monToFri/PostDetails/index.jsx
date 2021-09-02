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
						<p>
							Download
						</p>
						 <i className="fas fa-arrow-down"></i>
					</div>
				</Tab>
				<Tab chageSelectedTab={() => setSelectedTab(2)}>
					<div className={`tab__button ${selected === 2 ? 'selected' : ''}`}>
						<p>
							Production notes
						</p>
						<i className="fas fa-wrench"></i>
					</div>
				</Tab>
				<Tab chageSelectedTab={() => setSelectedTab(3)}>
					<div className={`tab__button ${selected === 3 ? 'selected' : ''}`}>
						<p>
							Info
						</p>
						 <i className="fas fa-info"></i>
					</div>
				</Tab>
			</div>

			<Panel active={activeFirst}>
				<div className="tab__panel">
					<div className="tab__panel__title">
						<h1>{title}</h1>
						<p>{date}</p>
					</div>
					<div className="download_img">
						<img src={url} alt="" />
					</div>

					<div className="download__icon">
						<i className="fas fa-arrow-down"></i>
					</div>
				</div>
			</Panel>
			<Panel>
				<div className="tab__panel_2">
					<img src={behind} alt="" className="production_notes"/>
				</div>
			</Panel>
			<Panel>
				<div className="tab__panel_3">
					<div className="tools">
						<h1>Tools used:</h1>
						<div className="logos">
							<picture>
								<img src="https://i.imgur.com/3yeKkyO.png" alt="Blender"/>
								<figcaption>Blender</figcaption>
							</picture>
							<picture>
								<img src="https://i.imgur.com/G1Pn1Bj.png" alt="Photoshop"/>
								<figcaption>Photoshop</figcaption>
							</picture>
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
