import { Component, OnInit } from '@angular/core';
import { THREE } from 'three.js';
import { OrbitControls} from 'three-orbit-controls';
const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}
  
  ngOnInit(){
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x999999)
  var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/(window.innerHeight), 0.1, 1000 );
  camera.position.set(3,2.5,4);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.getElementById('scene').appendChild( renderer.domElement );
  
  const controls = new OrbitControls(camera , renderer.domElement)
  
  let puzzle= [];
  
  for(let _x =-1; _x < 2 ; _x++){
    for(let _y =-1; _y < 2 ; _y++){
      for(let _z =-1; _z < 2 ; _z++){
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: new THREE.Color(.3*(_x+1), .3*(_y+1),.3*(_z+1)) } );
        var cube = new THREE.Mesh( geometry, material );
        cube.position.z = _z;
        cube.position.y = _y;
        cube.position.x = _x;
        puzzle.push(cube);
      }
    }
  }

  for(let cubes of puzzle){
    scene.add( cubes );
    console.log();
  }
  var animate = function () {
    requestAnimationFrame( animate );


    renderer.render( scene, camera );
    console.log(camera.position);
  };

  animate();
}
}
