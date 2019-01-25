# Explanation
>리액트에서 리덕스를 이용하여 상태관리를 하였다.
>라이브러리 immutable과 react-redux를 사용하였다

## Problum 
----------------------
* Todo는 각자의 id값을 가지는데, 토글하거나 삭제할 때 해당 태그의 id값을 받아 id의 값과 같은 index를 토글하고 삭제한다
( id가 5일때, index가 5인 태그를 토글하거나 삭제한다 )

문제점: 문제는 Todo를 삭제할 때 일어난다 이전처럼 id값이 5일때 index 값이 5인 태그를 토글하거나 삭제되는 것이 아닌 id값이 5인 태그가 아닌 index 5에 존재하는 태그가 토글 될 것 이다.

![1](https://user-images.githubusercontent.com/38432821/49001969-8ba9f480-f1a1-11e8-9246-9304ecfcd43f.PNG)
![1-1](https://user-images.githubusercontent.com/38432821/49001970-8c428b00-f1a1-11e8-8d3b-82b56860a798.png)
 
- 코드의 일부분 ( reducer )
~~~
//액션의 파라미터는 id 이고 아규먼트는 index입니다

[TOGGLE]: (state, action) => {
    //비구조화 할당
    const { payload: index } = action;

    //값을 변경한 객체 반환 ( immutable )
    return state.updateIn([point, 'done'], done => !done);
    // return state.setIn([index, 'done'], !state.getIn([0, index]));
},

[REMOVE]: (state, action) => {
    cont { paylod: index } = action;

    return state.delete(point);
},
~~~

## Solution
----------------------
* 해당 태그를 눌렀을 때 id값을 받고 그 id가 현재 어느 인덱스에 있는지를 알기 위해서 순차탐색을 하여 들어온 id값과 같은 것을 찾는다.

![1](https://user-images.githubusercontent.com/38432821/49003441-412a7700-f1a5-11e8-902e-f55351c6fdf5.PNG)

* 해결코드
~~~
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
~~~


<hr/><hr/>



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
