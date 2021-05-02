import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/interface-user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
    notes: '',
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError: boolean;
  postErrorMessage: string;
  subscriptionTypes: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit ', form.valid);

    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        (result) => {
          console.log('sucess', result);
        },
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors!';
    }
  }

  onBlur(field: NgModel) {
    console.log('onBlur ', field.valid);
  }

  onHttpError(error: any) {
    console.log('Error: ', error);
    (this.postError = true), (this.postErrorMessage = error.error.errorMessage);
  }
}
