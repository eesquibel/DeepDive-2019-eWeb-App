import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../model/Customer.interface';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public customer$: Observable<Customer>;

  constructor(
    private profile: ProfileService
  ) {
  }

  public ngOnInit(): void {
    this.customer$ = this.profile.Customer$;
  }

}
