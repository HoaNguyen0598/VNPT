import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MAIN } from 'routes';
import { getBreadcrumbData } from 'functions/Utils';

const Breadcrumb = ({ isDymamicBreadcrumb, dataBreadcrumb }) => {
    const { t: translate } = useTranslation(['breadcrumb']);
    const location = useLocation();
    const { match, loadable } = useSelector((state) => state.breadcrumbReducer);
    const pathURL = location.pathname;
    const { path } = dataBreadcrumb;

    const renderBreadcrumbList = () => {
        if (loadable && isDymamicBreadcrumb) {
            return <div className="skeleton" />
        }
        let newPaths = getBreadcrumbData(path, MAIN, pathURL);
        const matchClone = [...match];
        return (
            <ol className="breadcrumb ">
                {(newPaths || []).map((item, index) => {
                    const breadcrumbLabel = isDymamicBreadcrumb && item.isDynamic && matchClone.length ? matchClone.pop() : translate(item.title);
                    if (index === (newPaths.length - 1)) {
                        return <li className="breadcrumb-item" aria-current="page" key={index}>{breadcrumbLabel}</li>
                    }
                })}
            </ol>
        )
    }
    return (
        <div class="page-breadcrumb">
            <div class="row ">
                <div class="col-12 align-items-center ">
                    <nav aria-label="breadcrumb ">
                        {renderBreadcrumbList()}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Breadcrumb);