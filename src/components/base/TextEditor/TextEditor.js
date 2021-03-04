import { mapModifiers } from 'functions/Utils';
import React from 'react';

import ReactQuill from 'react-quill'; // ES6

const TextEditor = (props) => {
    const { value, readOnly, modifiers, ...remainingProps } = props;
    const className = mapModifiers('rc-texteditor', readOnly ? 'readonly' : undefined);
    const quillModules = {
        toolbar: false,
    };
    const config = {
        modules: quillModules,
        "theme": "snow",
    };

    return (
        <ReactQuill
            className={className}
            {...config}
            {...remainingProps}
            readOnly={readOnly}
            value={value || ''}
        />
    )
}

export default TextEditor;