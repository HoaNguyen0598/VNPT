import React from 'react';
import ButtonBase from 'components/base/Button/ButtonBase';
import Select from 'components/base/Select/Select';
import { removeVietnameseTones } from 'functions/Utils';
const SearchInList = ({ data }) => {
    return (
        <div className="rc_searchPopup" >
            <Select
                data={data}
                placeholder="Tìm kiếm"
                className="rc_customOption"
                showSearch
                filterOption={(input, option) =>
                    removeVietnameseTones(option.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0)
                }

            />
            <div className="button-group">
                <ButtonBase type="button" block>Chuyển phòng</ButtonBase>
            </div>
        </div>
    )
}
export default SearchInList;