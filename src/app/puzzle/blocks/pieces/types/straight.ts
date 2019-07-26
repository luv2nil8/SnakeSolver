import { Blocks } from '../../blocks';
import { Pieces } from '../pieces';

export class Straight extends Pieces{

    public possibleMoves(blocks: Blocks):Blocks[]{
        let newBlocksArray = new Array<Blocks>();
        let piece = blocks.pieces[blocks.solved];
        let previous = blocks.pieces[blocks.solved-1];

        switch( previous.vector ) { 
            case '-z': {
                piece.place( previous.x, previous.y, previous.z-1);
                break;
            }
            case '+z': {
                piece.place( previous.x, previous.y, previous.z+1);
                break;
            }
            case '-y': {
                piece.place( previous.x, previous.y-1, previous.z);
                break;
            }
            case '+y': {
                piece.place( previous.x, previous.y+1, previous.z);
                break;
            }
            case '-x': {
                piece.place( previous.x-1, previous.y, previous.z);
                break; 
            }
            case '+x': { 
                piece.place( previous.x+1, previous.y, previous.z);
                break;
            } 
        }
        if ( Math.abs(piece.x)>1||Math.abs(piece.y)>1||Math.abs(piece.z)>1 ) return [];

        //for (let j = 0; j < newBlocksArray.length; j++ ){
            for (let i = 0; i < blocks.solved; i++){
                if( blocks.pieces[i].x == newBlocksArray[0].pieces[i].x &&
                    blocks.pieces[i].y == newBlocksArray[0].pieces[i].y &&
                    blocks.pieces[i].z == newBlocksArray[0].pieces[i].z 
                    ){
                    return []
                    //newBlocksArray = newBlocksArray.splice(j-1,1);
                }
            }
        //}
        return newBlocksArray;
    }
}   

