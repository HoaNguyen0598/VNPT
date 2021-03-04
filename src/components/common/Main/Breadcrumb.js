import React, { useState, useEffect } from 'react';
import { MAIN } from '../../../routes';
import { getBreadcrumbData } from '../../../functions/Utils';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Breadcrumb = ({ dataBreadcrumb }) => {
    const { t: translate } = useTranslation(['Breadcrumb']);
    const location = useLocation();
    const pahtURL = location.pathname;
    const { title, path, isChangeTitle } = dataBreadcrumb;
    let newPaths = getBreadcrumbData(path, MAIN, pahtURL);

    const { titleContent } = useSelector((state) => state.mainReducer);
    const [titleMain, setTitleMain] = useState(title);
    useEffect(() => {
        if (titleContent.success === true && isChangeTitle === true) {
            setTitleMain(titleContent.data.titleContent)
        } else {
            setTitleMain(title)
        }
    }, [titleContent])

    return (
        <div class="page-breadcrumb ">
            <div class="row ">
                <div class="col-12 col-sm-6 col-md-6 ">
                    <h3 class="page-title text-truncate m_text_000 font-weight-medium ">{translate(titleMain)}</h3>
                </div>
                <div class="col-12 col-sm-6 col-md-6 d-flex justify-content-start justify-content-sm-end mt-2 mt-sm-0 align-items-center ">
                    <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb ">
                            {newPaths && newPaths.length > 0 &&
                                newPaths.map((item, index) => {
                                    if (index === (newPaths.length - 1)) {
                                        return <li class="breadcrumb-item" aria-current="page " key={index}>{translate(item.title)}</li>
                                    } else {
                                        return (
                                            <li class="breadcrumb-item active " aria-current="page " key={index}>
                                                <Link to={item.path}>{translate(item.title)}<i class="fa fa-angle-right " aria-hidden="true "></i></Link>
                                            </li>
                                        )
                                    }
                                })
                            }

                        </ol>
                    </nav>
                </div>
            </div>
        </div >
    )
}

export default Breadcrumb;