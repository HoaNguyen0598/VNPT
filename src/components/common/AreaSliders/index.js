import React from 'react';
import Slider from 'react-slick';
import AreaItem from 'components/common/AreaItem/';

const AreaSliders = (props) => {
    const { dataSource } = props;
    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    };

    return (
        <div className="rc_areasliders">
            <Slider {...settings}>
                {(dataSource || []).map(({ title, description, imgSrc }, index) => (
                    <div className="rc_areasliders_itemwrap" key={index}>
                        <div className="rc_areasliders_item">
                            <AreaItem
                                title={title}
                                description={description}
                                imgSrc={imgSrc}
                            />
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default AreaSliders;