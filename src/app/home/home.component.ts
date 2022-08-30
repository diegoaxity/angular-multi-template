import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component${environment.templateSuffix}.html`,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'HOME';

  constructor() {
    console.log(environment.templateSuffix);
  }

  getName(): string {
    return 'DIEGO';
  }

  getLastName(): string {
    return 'CARCAMO';
  }

  showAlert(type: string) {
    if (type === 'v1') {
      alert('HOLA!');
    }
    if (type === 'v2') {
      alert('ADIOS!');
    }
  }
}
