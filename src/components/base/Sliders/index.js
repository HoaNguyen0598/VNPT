import React from 'react';
import Slider from 'react-slick';

const Sliders = (props) => {
    const { perShow, perSlide, autoplay, arrows, loop } = props;
    const settings = {
        dots: false,
        arrows: arrows || false,
        infinite: loop || false,
        autoplay: autoplay || false,
        speed: 500,
        slidesToShow: perShow || 4,
        slidesToScroll: perSlide || 1,
        initialSlide: 2,
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
        <div className="rc_sliders">
            <Slider {...settings}>
                {React.Children.map(props.children, ele => (
                    <div className="rc_sliders_itemwrap">
                        <div className="rc_sliders_item">
                            {ele}
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default Sliders;