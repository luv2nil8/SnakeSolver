import { Injectable, OnInit, HostListener } from '@angular/core';
import { Blocks } from './blocks/blocks';
import { Angle } from './blocks/pieces/types/angle';
import { Straight } from './blocks/pieces/types/straight';


@Injectable({
  providedIn: 'root'
})
@HostListener('click', ['$event'])

export class PuzzleService{

  public blockArray: Blocks;

  constructor() { }

  initPuzzle(){
    this.blockArray.solved = 0;

    while(this.blockArray.pieces.length != 27){
      let piece;
      piece = new Angle;
      piece = new Straight;
      piece.vector();

    }

  }
  solve(blockArray):Blocks {
    //if (blockArray.solved == 27) return blockArray;
    //let nextBlockArray = new Blocks;
    if(blockArray.pieces[blockArray.solved].possibleMoves(blockArray))
    blockArray.pieces[blockArray.solved]
    .possibleMoves(blockArray).forEach(solution => {
       if(this.solve(solution).solved == 27) return solution;
    });
      else 
      return blockArray; // TODO: When initial solve returns blockArray.solved == 0 -> Unsolvable in current state. Try next starting position permutation
  }
}

