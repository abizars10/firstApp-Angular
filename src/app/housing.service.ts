import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data ?? [];
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }

  async getHousingLocationById(
    id: number
  ): Promise<Housinglocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data ?? undefined;
    } catch (error) {
      console.error('Fetch error:', error);
      return undefined;
    }
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log('Submitting application with the following details:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    // Here you can add further implementation to handle the application submission,
    // such as sending the data to a server.
  }
}
