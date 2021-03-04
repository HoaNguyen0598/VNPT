import React from "react";

const AreaItem = ({
    imgSrc,
    title,
    description,
}) => {
    return (
        <div className='rc_areaitem'>
            <div className="rc_areaitem_wrapper">
                <div className="rc_areaitem_image_wrap">
                    <div className="rc_areaitem_image_bg" style={{ backgroundImage: `url(${imgSrc})` }}>

                    </div>
                </div>

                <div className="rc_areaitem_content">
                    <div className="rc_areaitem_content_title">
                        {title}
                    </div>
                    <div className="rc_areaitem_content_description">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreaItem;