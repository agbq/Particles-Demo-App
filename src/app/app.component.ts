import { Component } from '@angular/core';
import { rainConfig, snowConfig, leavesConfig, firefliesConfig, spaceConfig, extremeSpaceConfig } from './particles-config';
import { faPlay, faPause, IconDefinition } from '@fortawesome/free-solid-svg-icons';

declare let particlesJS: any;
declare let pJSDom: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  rain: any = rainConfig;
  snow: any = snowConfig;
  leaves: any = leavesConfig;
  fireflies: any = firefliesConfig;
  space: any = spaceConfig;
  extremeSpace: any = extremeSpaceConfig;
  selectedConfig: any;
  faPlay: IconDefinition = faPlay;
  faPause: IconDefinition = faPause;
  isPlaying: boolean;

  public loadParticlesJS(particlesConfig: any): void {

    if (pJSDom.length) {
      pJSDom[0].pJS.fn.vendors.destroypJS();
      pJSDom = [];
    }

    particlesJS('particles-js', particlesConfig);
    this.isPlaying = true;
    this.selectedConfig = particlesConfig;
  }

  public pause(): void {
    this.isPlaying = false;
    pJSDom[0].pJS.particles.move.speed = 0;
    pJSDom[0].pJS.particles.size.anim.enable = false;
  }

  public play(): void {
    this.isPlaying = true;
    pJSDom[0].pJS.particles.move.speed = this.selectedConfig.particles.move.speed;
    pJSDom[0].pJS.particles.size.anim.enable = this.selectedConfig.particles.size.anim.enable;
  }
}
