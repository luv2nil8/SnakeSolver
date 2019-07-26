import { Injectable,  OnInit } from '@angular/core';
import { THREE } from 'three.js';
import { OrbitControls } from 'three-orbit-controls';
import { PuzzleService } from './puzzle/puzzle.service';

const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  constructor(private puzzle: PuzzleService) {}
  
  run() {
    //Scene
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / (window.innerHeight), 0.1, 1000);
    camera.position.set(3, 2.5, 7);

    //Renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x303030);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShad
    document.getElementById('scene').appendChild(renderer.domElement);

    //Camera Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = 6;
    controls.maxDistance = 8;
    controls.minPolarAngle = Math.PI / 3.3;
    controls.maxPolarAngle = Math.PI / 1.3;

    //Lights
    var light = new THREE.AmbientLight(0x909090); // soft white light
    scene.add(light);

    var pointLight = new THREE.PointLight(0xffffff, .75, 100);
    pointLight.position.set(3, 4, 2);
    pointLight.castShadow = true;
    pointLight.shadow.radius = 7.5;
    scene.add(pointLight);

    //Geometry
    var groundGeometry = new THREE.CircleGeometry(10, 50);
    var groundMaterial = new THREE.MeshPhongMaterial({
      color: 0x404040
    });
    var ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.position.y = -3;
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    let chroma = [
      0xFF0000,
      0xFF2A00,
      0xFF5400,
      0xFFD300,
      0xFFA800,
      0xFF7E00,
      0xFFFF00,
      0xD3FF00,
      0xA8FF00,
      0x00FFD3,
      0x00FFA8,
      0x00FF7E,
      0x00FF00,
      0x00FF2A,
      0x00FF54,
      0x2AFF00,
      0x54FF00,
      0x7EFF00,
      0x00FFFF,
      0x00D3FF,
      0x00A8FF,
      0x002AFF,
      0x0054FF,
      0x007EFF,
      0x0000FF,
      0x2A00FF,
      0x5400FF
   ];
   let color = 0;

    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          //let piece = new Piece;
          var geometry = new THREE.BoxGeometry( 1, 1, 1 );
          var material = new THREE.MeshLambertMaterial( { color: new THREE.Color(chroma[color++])} );
          var cube = new THREE.Mesh( geometry, material );
          cube.position.z = x;
          cube.position.y = y;
          cube.position.x = z;
          cube.castShadow = true;
          scene.add(cube);

          //if (!piece) this.pieces = piece.create(_x,_y,_z);
          //else this.pieces += piece.create(_x,_y,_z);
        }
      }
    }
    //this.puzzle.positionBlocks();

      ///}
      var animate = function () {
        requestAnimationFrame(animate);
        pointLight.position.set(camera.position.x, camera.position.y + 3, camera.position.z - 2);

        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    }

  }

