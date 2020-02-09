import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "home-page" */
  ),
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage/MoviesPage' /* webpackChunkName: "home-page" */),
);

const CastPage = lazy(() =>
  import('../pages/CastPage/CastPage' /* webpackChunkName: "home-page" */),
);

const ReviewsPage = lazy(() =>
  import(
    '../pages/ReviewsPage/ReviewsPage' /* webpackChunkName: "home-page" */
  ),
);

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  MOVIEDETAILS_PAGE: {
    path: '/movies/:id',
    component: MovieDetailsPage,
  },
  MOVIES_PAGE: {
    path: '/movies',
    component: MoviesPage,
  },
  CAST_PAGE: {
    path: '/cast',
    component: CastPage,
  },
  REVIEWS_PAGE: {
    path: '/review',
    component: ReviewsPage,
  },
};
