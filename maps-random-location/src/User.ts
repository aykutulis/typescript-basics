import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  get markerContent(): string {
    return `<strong>Username:</strong> ${this.name}`;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
}
