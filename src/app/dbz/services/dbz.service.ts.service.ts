import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    { id: uuid(), name: "Krilim", power: 1000 },
    { id: uuid(), name: "Goku", power: 9500 },
    { id: uuid(), name: "Vegueta", power: 7500 }
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  onDeleteCharacterById(id: string): void {
    // console.log('Main Page Delete index: ' + index);
    // this.characters.splice(index, 1);

    this.characters = this.characters.filter(character => character.id !== id);
  }
}
