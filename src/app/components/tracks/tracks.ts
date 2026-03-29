import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class Tracks implements OnInit, OnChanges {
  myClasses: string = 'fw-bold text-info';
  currentDate = new Date();
  TotalPrice: number = 202;

  tracks: ITrack[] = [];

  filteredTracks: ITrack[] = [];

  @Input() searchText: string = '';
  @Input() selectedStatus: 'all' | 'active' | 'inactive' = 'all';

  newTrackName: string = '';

  public trackService = inject(Track);
  // constructor(private trackService: Track) {}

  // Dependency Injection - simple initialization (Forms)

  // data loading
  ngOnInit(): void {
    // console.log('Component init!');
    this.getTracks();
    this.filteredTracks = this.applyFilter();
  }

  // every time @input values changes
  ngOnChanges(changes: SimpleChanges): void {
    this.filteredTracks = this.applyFilter();
  }

  getTracks() {
    this.tracks = this.trackService.getAllTracks();
  }

  applyFilter() {
    let list = this.tracks;

    if (this.selectedStatus !== 'all') {
      list = list.filter((t) => (this.selectedStatus === 'active' ? t.isActive : !t.isActive));
    }

    const search = this.searchText.trim().toLowerCase();
    if (search) {
      list = list.filter((t) => t.name.toLowerCase().includes(search));
    }
    return list;
  }

  removeTrack(id: number) {
    this.trackService.deleteTrack(id);
    this.getTracks();
  }

  AddTrack() {
    this.trackService.addTrack(this.newTrackName);
    this.getTracks();
    this.newTrackName = '';
  }

  // AddTrackRef(name: string) {
  //   this.trackService.addTrack(name);
  //     this.getTracks();
  //   this.newTrackName = '';
  // }
}
