import React from 'react'

const CustomerItem = ({ img, name, phone }) => {
    return (
        <>
            <div className="rc_customer">
                <img className="rc_customer--img" src={img} />
                <div className="rc_customer__info">
                    <h3 className="rc_customer__info--name">{name}</h3>
                    <p className="rc_customer__info--phone">{phone}</p>
                </div>
            </div>
        </>
    )
}
export default CustomerItem;