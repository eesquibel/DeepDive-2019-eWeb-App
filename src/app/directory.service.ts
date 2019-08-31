import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Member } from './model/Member.interface';
import { tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  private directory$: BehaviorSubject<Member[]>;

  public get Directory$(): Observable<Member[]> {
    if (!this.directory$) {
      this.directory$ = new BehaviorSubject(null);
      this.Read();
    }

    return this.directory$;
  }

  constructor(
    private http: HttpClient
  ) {
  }

  private Read(): void {
    this.http.get<Member[]>(
      'https://nf-eesquibel.mshome.net/Baseline/eWeb/api/Directory',
      { withCredentials: true }
    ).subscribe(list => {
        if (list instanceof Array) {
          this.directory$.next(list);
        }
    });
  }
}
