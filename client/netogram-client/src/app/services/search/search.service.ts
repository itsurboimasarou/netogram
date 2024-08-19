import { Injectable } from '@angular/core';
import { HttpClientAuth } from '../../util/http-client-auth';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClientAuth) {}

  search(q: string) {
    return this.httpClient.get(`search/any?q=${q}`);
  }
}
