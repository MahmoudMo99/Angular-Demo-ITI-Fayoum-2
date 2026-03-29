import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ITrack } from '../../models/itrack';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { HoverCard } from '../../directives/hover-card';
import { CommonModule } from '@angular/common';
import { Track } from '../../services/track';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-card',
  imports: [TruncatePipe, HoverCard, CommonModule],
  templateUrl: './track-card.html',
  styleUrl: './track-card.css',
})
export class TrackCard {
  @Input() item!: ITrack;

  private trackService = inject(Track);
  private router = inject(Router);

  @Output() deleted = new EventEmitter();

  deleteTrack() {
    this.deleted.emit(this.item.id);
  }
  goToDetails(id: number) {
    this.router.navigate(['/tracks', id]);
  }
}
