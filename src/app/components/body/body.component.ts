import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  show: boolean = true;
  phrase: any = {
    message: 'Un gran poder conlleva una gran responsabilidad',
    author: 'Ben Parker'
  };
  characters: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
