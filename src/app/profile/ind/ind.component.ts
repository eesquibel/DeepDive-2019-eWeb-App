import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { Individual } from '../../model/Individual.interface';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ind',
  templateUrl: './ind.component.html',
  styleUrls: ['./ind.component.scss']
})
export class IndComponent implements OnInit {

  public individual$: Observable<Individual>;

  public Form: FormGroup;

  constructor(
    private profile: ProfileService,
    private builder: FormBuilder
    ) {
  }

  public ngOnInit(): void {
    this.Form = this.builder.group({
      ind_first_name: ['', Validators.required],
      ind_last_name: ['', Validators.required],
      ind_badge_name: ['']
    });

    this.individual$ = this.profile.Individual$.pipe(
      filter(ind => !!ind),
      tap(ind => this.Form.patchValue({
        ind_first_name: ind.ind_first_name,
        ind_last_name: ind.ind_last_name,
        ind_badge_name: ind.ind_badge_name,
      }))
    );
  }

  public onSaveStart($event): void {
    this.Form.disable();
  }

  public onSaveComplete(ind: Individual): void {
    this.Form.enable();
  }
}
