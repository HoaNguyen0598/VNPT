import React from 'react'

const Gateway = ({ name, img }) => {
    return (
        <>
                    <div className="rc_gateWay">
                        <img src={img} />
                        <p className="rc_gateWay__name">{name}</p>
                    </div>
        </>
    )
}
export default Gateway;