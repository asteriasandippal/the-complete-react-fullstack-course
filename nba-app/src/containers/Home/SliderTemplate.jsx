import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

function SliderTemplate(props) {
    let template = null;
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
      };
    
    switch(props.type) {
        case('featured'):
            template = props.data.map((item, i) => {
                const image = `../../assets/images/articles/${item.image}`;
                return (
                    <div key={i} className="featured">
                        <div className='featured__item'>
                            <div 
                                className="featured__image"
                                style={{
                                    backgroundImage: `url(${image})`
                                }}
                            >
                                <img src={image} alt=""/>
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className="featured__caption">
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                );
            });
            break;
        default:
            template = null;
    }

    return (
        <div >
            <Slick {...settings}>
                {template}
            </Slick>
        </div>
    );
}

export default SliderTemplate;
