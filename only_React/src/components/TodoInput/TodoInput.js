import React, { Component } from 'react';
import styles from './TodoInput.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class TodoInput extends Component {
    handleKeyPress = (e)=>{
        const {onInsert} = this.props;

        if(e.key === 'Enter'){
            onInsert();
        }
    }
    
    render() {
        const {value, onChange, onInsert} = this.props;
        return (
            <div className={cx('todo-input')}>
                <input 
                    onChange={onChange} 
                    value={value}
                    onKeyPress={this.handleKeyPress}
                    ref={(ref)=>{this.input = ref}}
                    placeholder='To Do'
                />
                <div 
                    className={cx('add-button')} 
                    onClick={()=>{
                        this.input.focus();
                        onInsert();
                    }}
                    >추가
                </div>
            </div>
        );
    }

}
// const TodoInput = ({value, onChange, onInsert}) => {
//     const handleKeyPress = (e)=>{
//         if(e.key === 'Enter'){
//             onInsert();
//         }
//     }


//     return (
//         <div className={cx('todo-input')}>
//             <input 
//                 onChange={onChange} 
//                 value={value}
//                 onKeyPress={handleKeyPress}
//                 ref={(ref)=>{this.input = ref}}
//             />
//             <div className={cx('add-button')} onClick={onInsert}>추가</div>
//         </div>
//     );
// };

export default TodoInput;