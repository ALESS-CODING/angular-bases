import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName: string[] = ['Spirdeman', 'Iroman', 'Hulk', 'Guko'];
  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroName.pop();
  }

}
