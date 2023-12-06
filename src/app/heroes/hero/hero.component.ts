import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'iroman';
  public edad: number = 45;

  get capitalizadName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescripction(): string {
    return `${this.name} - ${this.edad}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }
  changeEdad(): void {
    this.edad = 30;
  }

}
