import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Tracks } from './components/tracks/tracks';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, Tracks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
