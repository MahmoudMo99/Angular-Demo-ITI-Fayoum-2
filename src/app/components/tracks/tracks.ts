import { Component } from '@angular/core';
import { ITrack } from '../../models/itrack';
import { CommonModule } from '@angular/common';
import { TrackCard } from '../track-card/track-card';

@Component({
  selector: 'app-tracks',
  imports: [CommonModule, TrackCard],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css',
})
export class Tracks {
  myClasses: string = 'fw-bold text-info';

  currentDate = new Date();

  TotalPrice: number = 202;

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

  removeTrack(id: number) {
    this.tracks = this.tracks.filter((i) => i.id !== id);
  }
}
