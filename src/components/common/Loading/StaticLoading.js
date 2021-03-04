import React from 'react';
import { useTranslation } from 'react-i18next';

const StaticLoading = () => {
    const { t: translate } = useTranslation();
    return (
        <div className="loading_full">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
            <span class="spinner-text">{translate('loading')}...</span>
        </div>
    )
}

export default StaticLoading;