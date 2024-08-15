import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface SearchResult {
  id: number;
  name: string;
  type: 'user' | 'post';
  content?: string;
}

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: `search-result.component.html`,
  styleUrls: ['search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() searchResult: SearchResult[] = [];
}


