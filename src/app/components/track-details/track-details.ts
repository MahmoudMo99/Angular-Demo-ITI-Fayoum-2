import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITrack } from '../../models/itrack';
import { Track } from '../../services/track';

@Component({
  selector: 'app-track-details',
  imports: [],
  templateUrl: './track-details.html',
  styleUrl: './track-details.css',
})
export class TrackDetails {
  track?: ITrack;
  constructor(
    private activatedRoute: ActivatedRoute,
    private trackService: Track,
  ) {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    console.log(typeof id);

    this.track = this.trackService.getTrackById(id);
    console.log(this.track);
  }
}
