import React from 'react';

import NewsSlider from './NewsSlider';
import NewsLists from './NewsLists';
import VideoLists from "./VideoLists";

function Home() {
    return (
        <div>
            <NewsSlider 
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: true,
                    infinite: true,
                    arrows: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }}
            />
            <NewsLists
                type="card"
                loadMore={true}
                start={3}
                amount={3} 
            />
            <VideoLists
                type="card"
                title={true}
                loadMore={false}
                start={0}
                amount={3} 
            />
        </div>
    );
}

export default Home;