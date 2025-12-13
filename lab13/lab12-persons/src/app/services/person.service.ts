import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Address {
  city?: string;
  street?: string;
  postCode?: string;
}

export interface Person {
  firstName?: string;
  familyName?: string;
  age?: number;
  address: Address;
}

export interface HalLink {
  href: string;
}

export interface PersonResource extends Person {
  _links: {
    self: HalLink;
  };
}

export interface PersonsHalResponse {
  _embedded?: {
    persons: PersonResource[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private readonly baseUrl = `${environment.apiUrl}/persons`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<PersonResource[]> {
    return this.http
      .get<PersonsHalResponse>(this.baseUrl)
      .pipe(map(res => res._embedded?.persons ?? []));
  }

  getById(id: string): Observable<PersonResource> {
    return this.http.get<PersonResource>(`${this.baseUrl}/${id}`);
  }

  addPerson(person: Person): Observable<PersonResource> {
    return this.http.post<PersonResource>(this.baseUrl, person);
  }

  delete(person: PersonResource): Observable<void> {
    const href = person._links.self.href.split('{')[0];
    return this.http.delete<void>(href);
  }

  extractId(person: PersonResource): string {
    const href = person._links.self.href.split('{')[0];
    return href.substring(href.lastIndexOf('/') + 1);
  }
}
