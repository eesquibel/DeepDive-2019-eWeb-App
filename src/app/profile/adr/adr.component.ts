import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { Address } from '../../model/Address.interface';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-adr',
  templateUrl: './adr.component.html',
  styleUrls: ['./adr.component.scss']
})
export class AdrComponent implements OnInit {

  public address$: Observable<Address>;

  public Form: FormGroup;

  constructor(
    private profile: ProfileService,
    private builder: FormBuilder
    ) {
  }

  public ngOnInit(): void {
    this.Form = this.builder.group({
      adr_line1: ['', Validators.required],
      adr_line2: [''],
      adr_city: ['', Validators.required],
      adr_state: ['', Validators.required],
      adr_post_code: ['', Validators.required],
    });

    this.address$ = this.profile.Address$.pipe(
      filter(adr => !!adr),
      tap(adr => this.Form.patchValue({
        adr_line1: adr.adr_line1,
        adr_line2: adr.adr_line2,
        adr_city: adr.adr_city,
        adr_state: adr.adr_state,
        adr_post_code: adr.adr_post_code,
      }))
    );
  }

  public onSaveStart($event): void {
    this.Form.disable();
  }

  public onSaveComplete(adr: Address): void {
    this.Form.enable();
  }
}
