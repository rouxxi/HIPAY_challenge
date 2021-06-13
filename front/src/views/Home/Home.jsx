import React from 'react';
import Sliders from '../../components/Sliders/Sliders';
import HomeStyle from './HomeStyle';

function Home() {
    const classes = HomeStyle();
    return (
        <div className={classes.main}>
            <Sliders/>
        </div>
    )
}

export default Home;