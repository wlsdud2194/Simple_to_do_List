import React from 'react';
import styles from '../asset/TodoStyle.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const Template = ({children}) => {
    return (
        <div className={cx('template')}>
            <h1 className={'title'}>TODO List</h1>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Template;