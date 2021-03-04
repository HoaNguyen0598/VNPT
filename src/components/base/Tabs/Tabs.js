import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {
    const { tabContent, activeIndex, forceRender, onChange } = props;
    const [active, setActive] = useState(1);
    useEffect(() => {
        if (activeIndex) changeTab(activeIndex);
    }, [activeIndex])
    const changeTab = (value) => {
        setActive(value);
        onChange && onChange(value);
    }
    return (
        <div className="sales_tabs">
            <ul className="nav square nav-tabs nav-top-border no-hover-bg" role="tablist">
                {tabContent.map((item, key) => {
                    let classNameActive = '';
                    if (item.activeTab === active) {
                        classNameActive = "nav-link active";
                    } else {
                        classNameActive = "nav-link";
                    }
                    return (
                        <li key={key} className="nav-item">
                            <a className={classNameActive}
                                onClick={() => changeTab(item.activeTab)}
                            >
                                {item.header}
                            </a>
                        </li>
                    );
                }
                )}
            </ul>
            <div className="tab-content pt-2">
                {forceRender ?
                    tabContent.map((item, key) => {
                        return (
                            <div key={key} className={`tab-pane fade show ${item.activeTab === active ? 'active' : ''}`}>
                                {item.content}
                            </div>
                        )
                    })
                    :
                    tabContent.map((item, key) => {
                        if (item.activeTab === active) {
                            return (
                                <div key={key} className="tab-pane fade show active">
                                    {item.content}
                                </div>
                            )
                        }
                    })
                }

            </div>
        </div>
    );
}

const { arrayOf, shape, element, number, func } = PropTypes;

Tabs.propTypes = {
    tabContent: arrayOf(shape({
        content: element,
        activeTab: number
    })),
    activeIndex: number,
    onChange: func,
}

export default Tabs;