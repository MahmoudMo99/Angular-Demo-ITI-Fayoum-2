import { Routes } from '@angular/router';
import { Tracks } from './components/tracks/tracks';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { TrackDetails } from './components/track-details/track-details';

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
    path: 'tracks',
    component: Tracks,
  },

  {
    path: 'tracks/:id',
    component: TrackDetails,
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
