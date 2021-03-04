import React from 'react';

const BackButton = (props) => {
    const { onClick, label } = props;
    return (
        <div class="sales_list_button text-right">
            <button
                type="button"
                class="min-width-button min-height-40 btn-uni-exit"
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    )
}

export default BackButton;