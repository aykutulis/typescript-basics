import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  get markerContent(): string {
    return `
      <h2>Company Name: ${this.companyName}</h2>
      <h4>Catchphrase: ${this.catchPhrase}</h4>
    `;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
}
