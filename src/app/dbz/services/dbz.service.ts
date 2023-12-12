import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid'

@Injectable({
    providedIn: 'root'
})

export class DbzService {

    public characters: Character[] = [
        {
            id: v4(),
            name: 'Krilen',
            power: 100
        },
        {
            id: v4(),
            name: 'Goku',
            power: 9000
        },
        {
            id: v4(),
            name: 'Trunk',
            power: 10
        }

    ]

    agregarCharacter(character: Character): void {
        console.log(character)
        this.characters.push(character)
    }

    eliminarChararcter(id: string): void {
        //this.characters.splice(index, 1);
        this.characters = this.characters.filter(cha => cha.id !== id);
        console.log(id);
    }

}