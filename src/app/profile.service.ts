import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Customer } from './model/Customer.interface';
import { HttpClient } from '@angular/common/http';
import { Individual } from './model/Individual.interface';
import { Address } from './model/Address.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private customer$: Subject<Customer>;
  private individual$: Subject<Individual>;
  private address$: Subject<Address>;

  public get Customer$(): Observable<Customer> {
    if (!this.customer$) {
      this.customer$ = new BehaviorSubject(null);
      this.Read('cst');
    }

    return this.customer$;
  }

  public get Individual$(): Observable<Individual> {
    if (!this.individual$) {
      this.individual$ = new BehaviorSubject(null);
      this.Read('ind');
    }

    return this.individual$;
  }

  public get Address$(): Observable<Address> {
    if (!this.address$) {
      this.address$ = new BehaviorSubject(null);
      this.Read('adr');
    }

    return this.address$;
  }

  constructor(private http: HttpClient) {
  }

  public Read(id: 'cst' | 'ind' | 'adr'): void {
    this.http.get<Customer | Individual | Address>(
      'https://nf-eesquibel.mshome.net/Baseline/eWeb/api/Individual/' + id,
      { withCredentials: true }
    ).subscribe(record => {
      switch (id) {
        case 'cst': {
          this.customer$.next(record as Customer);
          break;
        }
        case 'ind': {
          this.individual$.next(record as Individual);
          break;
        }
        case 'adr': {
          this.address$.next(record as Address);
          break;
        }
      }
    });
  }

  public Update(id: 'cst' | 'ind' | 'adr', data: any): Observable<Customer | Individual | Address> {
    return this.http.put<Customer | Individual | Address>(
      'https://nf-eesquibel.mshome.net/Baseline/eWeb/api/Individual/' + id,
      data,
      { withCredentials: true }
    ).pipe(
      tap(record => {
        switch (id) {
          case 'cst': {
            this.customer$.next(record as Customer);
            break;
          }
          case 'ind': {
            this.individual$.next(record as Individual);
            break;
          }
          case 'adr': {
            this.address$.next(record as Address);
            break;
          }
        }
      })
    );
  }
}
