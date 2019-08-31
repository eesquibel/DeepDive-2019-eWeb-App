import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../model/Member.interface';

@Component({
  selector: 'app-directory-item',
  templateUrl: './directory-item.component.html',
  styleUrls: ['./directory-item.component.scss']
})
export class DirectoryItemComponent implements OnInit {

  @Input()
  public Member: Member;

  constructor() { }

  ngOnInit() {
  }

}
