import { combineReducers } from 'redux'
import CourseListPage from './CourseListPage'
import Apply from './Apply'
import Viewer from './Viewer'
import MyLectures from './MyLectures'
import ProfessorPage from './ProfessorPage'
import PDFView from './PDFView'
export default  combineReducers({
  Apply,
  CourseListPage,
  Viewer,
  MyLectures,
  ProfessorPage,
  PDFView
})
