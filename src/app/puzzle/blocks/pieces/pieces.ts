export class Pieces {
    vector: String;
    x: number;
    y: number;
    z: number;

    place( x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    }
}