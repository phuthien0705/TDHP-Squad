import HomePage from '../containers/HomeTemplate/HomePage';
import ManagePostPage from '../containers/AdminTemplate/ManagePostPage';
import LearningPathsPage from 'containers/HomeTemplate/LearningPathsPage';
import CoursesPage from 'containers/HomeTemplate/CoursesPage';
import DetailCoursePage from 'containers/HomeTemplate/DetailCoursePage';
import RoomsPage from 'containers/HomeTemplate/RoomsPage';
import CompetitionsPage from 'containers/HomeTemplate/CompetitionsPage';
import DetailLearningPathPage from 'containers/HomeTemplate/DetailLearningPathPage';
const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/learning-path/:id',
    component: DetailLearningPathPage,
  },
  {
    exact: false,
    path: '/learning-path',
    component: LearningPathsPage,
  },
  {
    exact: false,
    path: '/course/:id',
    component: DetailCoursePage,
  },
  {
    exact: false,
    path: '/course',
    component: CoursesPage,
  },
  {
    exact: false,
    path: '/room',
    component: RoomsPage,
  },
  {
    exact: false,
    path: '/competition',
    component: CompetitionsPage,
  },
];
const routesAdmin = [
  {
    exact: false,
    path: '/manage-posts',
    component: ManagePostPage,
  },
];

export { routesHome, routesAdmin };
