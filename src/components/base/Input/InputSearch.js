import React from 'react'
import Textfield from './Input';

const InputSearch = props => {
    const { titleSearch, placeholder } = props;
    return (
        <div className="m_search">
            <label className="m_search--label d-none
                    d-md-block">{titleSearch}</label>
            <Textfield
                size="small"
                placeholder={placeholder}
                suffix={<i className="fa fa-search"
                    aria-hidden="true"></i>}
            />
        </div>
    )
}
export default InputSearch
