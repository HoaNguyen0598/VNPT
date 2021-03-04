import React from 'react';
import { Table as TableAntd } from 'antd';
import PropTypes from 'prop-types';
import { mapModifiers } from 'functions/Utils';
import { useTranslation } from 'react-i18next';

const Table = (props) => {
    const { dataSource, columns, bordered, rowClassName, classTable, modifiers, onClickRow, ...attr } = props;
    const { t: translate } = useTranslation();
    const className = mapModifiers("rc_table", modifiers);
    return (
        <div className={`${className} min-width-100-pc`} >
            <TableAntd dataSource={dataSource}
                className={classTable}
                columns={columns}
                bordered={bordered}
                rowClassName={rowClassName}
                pagination={false}
                tableLayout={'auto'}
                onRow={onClickRow}
                locale={{
                    emptyText: translate('nodata')
                }}
                {...attr}
            />
        </div >
    );
}

const { string, bool, array } = PropTypes;

Table.propTypes = {
    dataSource: array,
    columns: array,
    bordered: bool,
    rowClassName: string,
    emptyText: string,
}

export default Table;