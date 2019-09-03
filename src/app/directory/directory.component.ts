import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../directory.service';
import { Observable } from 'rxjs';
import { Member } from '../model/Member.interface';
import { filter, map } from 'rxjs/operators';

const noWebUser = (member: Member) => member.ind_first_name !== 'web' && member.ind_last_name !== 'user';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  public directory$: Observable<Member[]>;

  public column: 'ind_first_name' | 'ind_last_name' = 'ind_last_name';
  public filter: string;
  public chunks: number = 3;

  constructor(private directory: DirectoryService) {
  }

  public ngOnInit(): void {
    this.directory$ = this.directory.Directory$.pipe(
      filter(list => !!list),
      map(list => list.filter(noWebUser))
    );
  }
}
