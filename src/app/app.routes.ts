import { Routes } from '@angular/router';
import { Tracks } from './components/tracks/tracks';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { TrackDetails } from './components/track-details/track-details';
import { TracksContainer } from './components/tracks-container/tracks-container';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Posts } from './components/posts/posts';
import { LoginWithAPI } from './components/login-with-api/login-with-api';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: Home,
  },

  {
    path: 'login',
    component: Login,
  },

  {
    path: 'login-api',
    component: LoginWithAPI,
  },

  {
    path: 'register',
    component: Register,
  },
  {
    path: 'tracks',
    component: Tracks,
  },

  {
    path: 'tracks-container',
    component: TracksContainer,
  },

  {
    path: 'tracks/:id',
    component: TrackDetails,
  },

  {
    path: 'posts',
    component: Posts,
    canActivate: [authGuard],
  },

  {
    path: 'about-us',
    component: AboutUs,
  },

  {
    path: 'contact-us',
    component: ContactUs,
  },
  // first win strategy - wildcard
  {
    path: '**',
    component: NotFound,
  },
];
