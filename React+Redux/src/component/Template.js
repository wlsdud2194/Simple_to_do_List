import React from 'react';
import classnames from 'classnames/bind';
import style from '../assets/uiStyle.scss';

const cx = classnames.bind(style);

const Template = ({children}) => {
    return (
        <div className={cx("page-template")}>
            <h1>ToDo List</h1>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    );
};

export default Template;