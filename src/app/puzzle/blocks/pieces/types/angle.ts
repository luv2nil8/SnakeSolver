import { Blocks } from '../../blocks';
import { Pieces } from '../pieces';

export class Angle extends Pieces {

    public possibleMoves(blocks: Blocks): Blocks[] {
        let newBlocksArray = new Array < Blocks > ();
        let piece = blocks.pieces[blocks.solved];
        let previous = blocks.pieces[blocks.solved - 1];

        for (let i = -1; i < 1; i + 2) {
            for (let j = -1; j < 1; i + 2) {
                switch (previous.vector) {
                    case '-z': case'+z': {
                        piece.place(previous.x + i, previous.y + j, previous.z);
                        newBlocksArray.push(blocks);
                        break;
                    }
                    case '-y': case'+y': {
                        piece.place(previous.x+i, previous.y, previous.z+j);
                        newBlocksArray.push(blocks);

                        break;
                    }
                    case '-x': case '+x': {
                        piece.place(previous.x , previous.y+i, previous.z+j);
                        newBlocksArray.push(blocks);
                        break;
                    }
                }
            }
        }

        if (Math.abs(piece.x) > 1 || Math.abs(piece.y) > 1 || Math.abs(piece.z) > 1) return [];

        for (let j = 0; j < newBlocksArray.length; j++) {
            for (let i = 0; i < blocks.solved; i++) {
                if (blocks.pieces[i].x == newBlocksArray[j].pieces[i].x &&
                    blocks.pieces[i].y == newBlocksArray[j].pieces[i].y &&
                    blocks.pieces[i].z == newBlocksArray[j].pieces[i].z
                ) {
                    newBlocksArray = newBlocksArray.splice(j - 1, 1);
                }
            }
        }
        return newBlocksArray;
    }
}