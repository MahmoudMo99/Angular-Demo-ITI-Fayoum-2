import { Component, inject } from '@angular/core';
import { ITrack } from '../../models/itrack';
import { CommonModule } from '@angular/common';
import { TrackCard } from '../track-card/track-card';
import { Track } from '../../services/track';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracks',
  imports: [CommonModule, TrackCard, FormsModule],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css',
})
export class Tracks {
  myClasses: string = 'fw-bold text-info';
  currentDate = new Date();
  TotalPrice: number = 202;
  tracks: ITrack[] = [];

  newTrackName: string = '';

  public trackService = inject(Track);
  // constructor(private trackService: Track) {}

  constructor() {
    this.tracks = this.trackService.getAllTracks();
  }

  removeTrack(id: number) {
    this.trackService.deleteTrack(id);
    this.tracks = this.trackService.getAllTracks();
  }

  AddTrack() {
    this.trackService.addTrack(this.newTrackName);
    this.tracks = this.trackService.getAllTracks();
    this.newTrackName = '';
  }

  // AddTrackRef(name: string) {
  //   this.trackService.addTrack(name);
  //   this.tracks = this.trackService.getAllTracks();
  //   this.newTrackName = '';
  // }
}
