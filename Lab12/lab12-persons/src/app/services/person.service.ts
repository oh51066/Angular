import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private storageKey = 'persons';

  constructor() {}

  private loadAllInternal(): Person[] {
    const json = localStorage.getItem(this.storageKey);
    if (!json) {
      return [];
    }
    try {
      return JSON.parse(json) as Person[];
    } catch {
      return [];
    }
  }

  private saveAllInternal(persons: Person[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(persons));
  }

  getAll(): Person[] {
    return this.loadAllInternal();
  }

  getByIndex(index: number): Person | undefined {
    const persons = this.loadAllInternal();
    return persons[index];
  }

  addPerson(person: Person): void {
    const persons = this.loadAllInternal();
    persons.push(person);
    this.saveAllInternal(persons);
  }

  deleteByIndex(index: number): void {
    const persons = this.loadAllInternal();
    if (index >= 0 && index < persons.length) {
      persons.splice(index, 1);
      this.saveAllInternal(persons);
    }
  }
}
