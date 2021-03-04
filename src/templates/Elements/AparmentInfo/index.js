import AparmentInfo from 'components/common/ApartmentInfo/AparmentInfo';
import React from 'react';

const index = ({ }) => {
    return (
        <>
            <h3>Apartment Info</h3>
            <AparmentInfo
                img="https://via.placeholder.com/42"
                name="Căn hộ B5 - 0262"
                address="249 Nam Kì Khởi Nghĩa, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh" />
        </>
    )
}
export default index;