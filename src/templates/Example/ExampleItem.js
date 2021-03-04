import React from 'react';

const exampleItem = props => {
    let { data, index } = props;
    return (
        <div className="col-md-4 d-flex flex-direction-column">
            <div className="card mb-4 box-shadow h-100">
                <img className="card-img-top"
                    alt={data.about}
                    src={data.avatar_url}
                    data-src={data.avatar_url}
                    data-holder-rendered="true"
                />
                <div className="card-body">
                    <div className="card-text">{data.about}</div>
                    <div className="text-muted">{data.address}</div>
                </div>
            </div>
        </div>
    )
}
export default exampleItem;