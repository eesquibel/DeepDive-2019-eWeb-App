import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProfileService } from '../../profile.service';
import { Customer } from '../../model/Customer.interface';
import { Individual } from '../../model/Individual.interface';
import { Address } from '../../model/Address.interface';

@Component({
  selector: 'app-profile-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  @Input()
  public Data: any;

  @Input()
  public Type: 'cst' | 'ind' | 'adr';

  @Output()
  public Start: EventEmitter<void>;

  @Output()
  public Complete: EventEmitter<Customer | Individual | Address>;

  constructor(private profile: ProfileService) {
    this.Start = new EventEmitter();
    this.Complete = new EventEmitter();
  }

  public ngOnInit(): void {
  }

  public Save(): void {
    this.Start.emit();

    this.profile.Update(this.Type, this.Data).subscribe(data => {
      this.Complete.emit(data);
    });
  }
}
