import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tracks } from '../tracks/tracks';

@Component({
  selector: 'app-tracks-container',
  imports: [FormsModule, Tracks],
  templateUrl: './tracks-container.html',
  styleUrl: './tracks-container.css',
})
export class TracksContainer {
  searchText: string = '';
  selectedStatus: 'all' | 'active' | 'inactive' = 'all';
}
