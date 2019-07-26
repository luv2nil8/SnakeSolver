import { Component, OnInit } from '@angular/core';
import { RendererService } from '../renderer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private renderer: RendererService) {}
  
  ngOnInit(){
    this.renderer.run();
  }

  solve(){

  }
}
