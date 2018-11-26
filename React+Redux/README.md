# Explanation
>리액트에서 리덕스를 이용하여 상태관리를 하였다.
>라이브러리 immutable과 react-redux를 사용하였다

##Problum (문제점)
----------------------
* Todo는 각자의 id값을 가지는데, 토글하거나 삭제할 때 해당 태그의 id값을 받아 id의 값과 같은 index를 토글하고 삭제한다
( id가 5일때, index가 5인 태그를 토글하거나 삭제한다 )

->문제점: Todo가 삭제 된다면 이전처럼 id값이 5일때 index 값이 5인 태그를 토글하거나 삭제되는 것이 아닌 id값이 5인 태그가 아닌 index 5에 존재하는 태그가 토글 될 것 이다.
  
- 코드의 일부분 ( reducer )

This is a normal paragraph:

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
