import React from 'react';

import Hero from "../../components/monToFri/Hero";
import Week from "../../components/monToFri/Week";

import {weeks} from "../../../../data";

const MonToFri = () => {
    const numberWeeks = weeks.length
     return (
         <div>
             <Hero numberWeeks={numberWeeks}/>
             {weeks.map((week) => (
                 <Week
                     key={`${week.number}-${week.title}`}
                     number={week.number}
                     title={week.title}
                     posts={week.posts}
                 />
             ))}
         </div>
     )
}

export default MonToFri;