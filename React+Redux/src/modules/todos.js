import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

//액션
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";
const FILTER = "todos/FILTER";

//액션 생성 함수
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);
export const filter = createAction(FILTER);

//초기 state
const initialState = List([
]);

//리듀서
export default handleActions({
    [INSERT]: (state, action) => {
        const {id, text, done} = action.payload;

        return state.push(Map({
            id,
            text,
            done
        }));
    },

    [TOGGLE]: (state, action) => {
        const index = action.payload;

        let point=0;
        for(let i=0; i<state.size; i++){
            if(state.getIn([i,"id"])===index){
                point = i;
            }
        }
        return state.updateIn([point, 'done'], done => !done);
        // return state.setIn([index, 'done'], !state.getIn([0, index]));
    },

    [REMOVE]: (state, action) => {
        const index = action.payload;
        
        let point=0;
        for(let i=0; i<state.size; i++){
            if(state.getIn([i,"id"])===index){
                point = i;
            }
        }

        return state.delete(point);
    },

    [FILTER]: (state, action) => {
        console.log(state.toJS());
        return state.filter(todo=>todo.get('done') === false);
    }

}, initialState);