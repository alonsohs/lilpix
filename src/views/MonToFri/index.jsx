import React, {useEffect} from 'react';

import Hero from '../../components/monToFri/Hero';
import Week from '../../components/monToFri/Week';

import './index.css'

import { weeks } from '../../../data';

import {setHighlightedMenu} from "../../utils/HighligthMenu";

const MonToFri = () => {
	const numberWeeks = weeks.length;

	useEffect(() => {
		const sections = document.querySelectorAll('.week')
		const navLi = document.querySelectorAll('.weeks__li')

		window.addEventListener('scroll', () => setHighlightedMenu(sections, navLi))

	}, [])

	return (
		<div className="mon-to-fri__layout">
			<div>
				<Hero numberWeeks={numberWeeks} />
				{weeks.map((week) => (
					<Week
						key={`${week.number}-${week.title}`}
						number={week.number}
						title={week.title}
						posts={week.posts}

					/>
				))}
			</div>
			<nav className="weeks__nav">
				<ul>
					{weeks.map(week => (
						<li className={`weeks__li week_${week.number}`} key={`li_${week.number}`}>
							<a href={`#week_${week.number}`}>{`week #${week.number}`}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default MonToFri;
