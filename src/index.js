import React from 'react'
import { render } from 'react-dom'

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';


import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


import CourseListPage from './pages/CourseListPage'
import mainPage from './pages/mainPage'
import ProfessorPage from './pages/ProfessorPage'
import PDFViewer from './pages/PDFViewer'

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // 함수를 dispatch() 하게 해줍니다
  loggerMiddleware // 액션을 로깅하는 깔끔한 미들웨어입니다
)(createStore);

const store = createStoreWithMiddleware(reducer);




render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={App} store={store}>
    	<IndexRoute component={mainPage} />
      <Route path="/lecture/:lectureId" component={CourseListPage} />
      <Route path="/view/:courseId" component={CourseListPage} />      
      <Route path="/professor/:professorId" component={ProfessorPage} />            
      <Route path="/pdf/:id" component={PDFViewer} />            
      
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
)
