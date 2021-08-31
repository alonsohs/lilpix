import React, {useEffect} from 'react';
import Hero from '../../components/about/Hero';
const About = () => {

	useEffect(() => {
		document.body.classList.add('about')

		return () => {
			document.body.classList.remove('about')
		}
	})
	return (
		<>
			<Hero />
		</>
	);
};

export default About;
