import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './interface-user-settings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    return of(userSettings);
  }
}
