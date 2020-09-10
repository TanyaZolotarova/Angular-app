import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {UserInterface} from '../interfaces/user.interface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})



export class EditProfileComponent implements OnInit {

  public password = new FormControl('', [Validators.required]);
  hide = true;
  ReactiveForm: FormGroup;
  public users: Array<UserInterface> = [];



  constructor(private apiService: ApiService) { }

  // tslint:disable-next-line:typedef
  public ngOnInit() {

    this.apiService.getData().subscribe( (data: Array<UserInterface>) => {
      this.users = data;
    });
  }

}
