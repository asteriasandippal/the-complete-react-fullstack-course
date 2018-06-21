import React from 'react';
import NewsSlider from './NewsSlider';

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
        </div>
    );
}

export default Home;