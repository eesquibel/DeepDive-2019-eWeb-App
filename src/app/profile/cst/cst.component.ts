import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/Customer.interface';
import { ProfileService } from '../../profile.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cst',
  templateUrl: './cst.component.html',
  styleUrls: ['./cst.component.scss']
})
export class CstComponent implements OnInit {

  public customer$: Observable<Customer>;

  public Form: FormGroup;

  constructor(
    private profile: ProfileService,
    private builder: FormBuilder
    ) {
  }

  public ngOnInit(): void {
    this.Form = this.builder.group({
      cst_bio: [null],
    });

    this.customer$ = this.profile.Customer$.pipe(
      filter(cst => !!cst),
      tap(cst => this.Form.patchValue({
        cst_bio: cst.cst_bio,
      }))
    );
  }

  public onSaveStart($event): void {
    this.Form.disable();
  }

  public onSaveComplete(cst: Customer): void {
    this.Form.enable();
  }
}
