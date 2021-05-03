import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './interface-user-settings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return of(['Smartphones', 'Computadores', 'Notebooks', 'Acessórios', 'Audio', 'Monitores']);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post(
      'https://putsreq.com/ddOwdOoupZDkU3cwgTNP',
      userSettings
    );

    // return of(userSettings);
  }
}
