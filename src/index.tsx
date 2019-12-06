// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// // import dva from "dva";
// // import createHistory from 'history/createBrowserHistory'
// //
// // const app = dva({
// //     history: createHistory()
// // })
// //
// // app.model(require('./models/app').default)
// //
// // app.router(require('./router').default)
// //
// // app.start('#root')


// ReactDOM.render(<App/>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// if (module.hot) {
//     module.hot.accept();
// }


import dva from 'dva'
import createLoading from 'dva-loading';

const app = dva()

app.use(createLoading())

app.model(require('./models/list').default);

app.router(require('./router').default)

app.start('#root')