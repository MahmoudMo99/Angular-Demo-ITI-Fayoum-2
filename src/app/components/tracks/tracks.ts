import { Component } from '@angular/core';
import { ITrack } from '../../models/itrack';

@Component({
  selector: 'app-tracks',
  imports: [],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css',
})
export class Tracks {
  tracks: ITrack[] = [
    {
      id: 1,
      name: '.Net Track',
      isActive: true,
      studentsCount: 20,
      hidden: false,
    },

    {
      id: 2,
      name: 'MEARN Track',
      isActive: true,
      studentsCount: 30,
    },

    {
      id: 3,
      name: 'Software Fund. Track',
      isActive: false,
      studentsCount: 40,
    },

    {
      id: 4,
      name: 'Power BI Track',
      isActive: true,
      studentsCount: 10,
    },
  ];
}
