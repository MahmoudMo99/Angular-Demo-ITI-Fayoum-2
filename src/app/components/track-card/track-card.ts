import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITrack } from '../../models/itrack';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { HoverCard } from '../../directives/hover-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-card',
  imports: [TruncatePipe, HoverCard, CommonModule],
  templateUrl: './track-card.html',
  styleUrl: './track-card.css',
})
export class TrackCard {
  @Input() item!: ITrack;

  @Output() deleted = new EventEmitter();

  deleteTrack() {
    this.deleted.emit(this.item.id);
  }
}
