import React from 'react';
import { Slider } from 'antd';
import { formatCurrency1 } from 'functions/Utils';

const SliderRange = ({ defaultValue, min, max, range, onChange, onAfterChange, tooltipVisible, step, ...attr }) => {
    const formatter = (value) => {
        return formatCurrency1(value);
    }
    return (
        <div className="rc-slider w-100">
            <Slider
                defaultValue={defaultValue ? defaultValue : [0, 0]}
                range={range ? range : true}
                min={min}
                max={max}
                step={step > 0 ? step : 1}
                tipFormatter={formatter}
                onChange={onChange}
                onAfterChange={onAfterChange}
                tooltipPlacement="top"
                tooltipVisible={(tooltipVisible && tooltipVisible === false) ? false : true}
                getTooltipPopupContainer={() => document.querySelector(".rc-slider_tooltipcontainer")}
                {...attr}
            />
            <div className="rc-slider_tooltipcontainer" />
        </div>

    )
}

export default SliderRange;
