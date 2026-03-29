import { Injectable } from '@angular/core';
import { ITrack } from '../models/itrack';
@Injectable({
  providedIn: 'root',
})
export class Track {
  private tracks: ITrack[] = [
    {
      id: 1,
      name: '.Net Track',
      isActive: true,
      studentsCount: 20,
      hidden: false,
      status: 'active',
    },

    {
      id: 2,
      name: 'MEARN Track',
      isActive: true,
      studentsCount: 30,
      status: 'active',
    },

    {
      id: 3,
      name: 'Software Fund. Track',
      isActive: false,
      studentsCount: 40,
      status: 'inactive',
    },

    {
      id: 4,
      name: 'Power BI Track',
      isActive: true,
      studentsCount: 10,
      status: 'inactive',
    },
  ];

  getAllTracks(): ITrack[] {
    return this.tracks;
  }

  getTrackById(id: number): ITrack | undefined {
    return this.tracks.find((t) => t.id === id);
  }

  deleteTrack(id: number) {
    this.tracks = this.tracks.filter((t) => t.id !== id);
  }

  addTrack(name: string) {
    const nextId = Math.max(...this.tracks.map((t) => t.id), 0) + 1;
    // const nextId = (this.tracks.at(-1)?.id || 0) + 1;

    this.tracks.unshift({
      id: nextId,
      name,
      isActive: true,
      studentsCount: 5,
      status: 'active',
    });
  }

  get TracksCount() {
    return this.tracks.length;
  }
}
