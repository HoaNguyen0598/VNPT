import React, { useEffect, useState } from 'react';
import UploadCommon from './UploadCommon';
import { UPLOAD_ACCEPT_TYPE } from 'contant';
import UploadInner from 'components/common/UploadInner';
import { bytesToSize, IMAGES_PATH, sleep } from 'functions/Utils'

const UploadInnerProcess = ({ start = false, done = false, fileSize = 0, fileName = '' }) => {
    if (!start) {
        return <UploadInner />
    }
    const [processing, setProcessing] = useState(0);
    const processIntervalRef = React.useRef();
    const fileSizeValue = bytesToSize(fileSize);
    useEffect(() => {
        if (!start || done) return;
        const processSpeed = processing < 50 ? 25 : processing < 75 ? 75 : 125;
        processIntervalRef.current = setInterval(() => {
            if (processing < 90) {
                const nextProcessing = processing + 1;
                setProcessing(nextProcessing)
            }
        }, processSpeed);
        return () => processIntervalRef.current && clearInterval(processIntervalRef.current);
    });

    useEffect(() => {
        if (done) {
            setProcessing(100);
        } else {
            setProcessing(0);
        }
    }, [done]);

    const fileSizeParsed = parseFloat(fileSizeValue);
    return (
        <div className='rc_uploadinnerprocess'>
            <div className='rc_uploadinnerprocess_container'>
                {!done
                    ? (<div className='rc_uploadinnerprocess_percent'>
                        {processing}%
                    </div>)
                    : (<div className="rc_uploadinnerprocess_image">
                        <img className="" src={IMAGES_PATH.imgUploadExcel} />
                    </div>)
                }
                <div className='rc_uploadinnerprocess_notice'>
                    {done && fileName ? <span className="name">{fileName}</span> : 'Đang tải lên'}
                </div>
                {!done
                    ? (<div className="rc_uploadinnerprocess_bar">
                        <div className='rc_uploadinnerprocess_bar_value'>
                            <span className='rc_uploadinnerprocess_bar_value-current'>
                                {(fileSizeParsed * (processing / 100)).toFixed(2)}
                            </span>
                            <span className="seperator">/</span>
                            <span className='rc_uploadinnerprocess_bar_value-total'>
                                {fileSizeValue}
                            </span>
                        </div>
                        <div className='rc_uploadinnerprocess_bar_processing'>
                            <span className='percent' style={{ right: `${100 - processing}%` }} />
                        </div>
                    </div>)
                    : <div className="rc_uploadinnerprocess_done">{fileSizeValue}</div>}
            </div>
        </div >
    )
}

const UploadRequest = (props) => {
    const [uploadState, setUploadState] = useState(0); //0: Init , 1: Processing, 2: Done
    const fileSize = props.file ? props.file.size : 0;
    const fileName = props.file ? props.file.name : '';
    const handleOnProcess = async (event, _file) => {
        const { percent } = event;
        if (percent >= 1 && percent < 100) {
            setUploadState(1) // Upload processing
        } else
            if (percent === 100) {
                await sleep(500); // Delay disable upload trigger 1000ms
                setUploadState(2); // Upload done
            } else {
                setUploadState(0) // Upload reset
            }
    }
    return (
        <UploadCommon
            {...props}
            onProgress={handleOnProcess}
            disabled={(uploadState === 1)}
        >
            <UploadInnerProcess start={!!props.file} done={uploadState === 2} fileSize={fileSize} fileName={fileName} />
        </UploadCommon>
    )
}

export default UploadRequest;