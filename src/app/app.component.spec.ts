import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { firefliesConfig, rainConfig } from './particles-config';

declare let pJSDom: any;

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        MatToolbarModule,
        MatButtonModule,
        MatButtonToggleModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`loadParticlesJS - given a particleJS config when pJSDom is empty,
  expect that config to be loaded and selected`, () => {
    app.isPlaying = false;
    app.selectedConfig = null;
    pJSDom = [];
    app.loadParticlesJS(firefliesConfig);
    expect(Array.isArray(pJSDom)).toBe(true);
    expect(pJSDom.length).toBe(1);
    expect(app.isPlaying).toBe(true);
    expect(app.selectedConfig).toBe(firefliesConfig);
  })

  it(`loadParticlesJS - given a particleJS config when pJSDom is not empty,
  expect that destroypJS be called`, () => {
    app.loadParticlesJS(rainConfig);
    const vendors = pJSDom[0].pJS.fn.vendors;
    spyOn(vendors, 'destroypJS');

    app.loadParticlesJS(firefliesConfig);

    expect(vendors.destroypJS).toHaveBeenCalled();
    expect(Array.isArray(pJSDom)).toBe(true);
    expect(pJSDom.length).toBe(1);
    expect(app.isPlaying).toBe(true);
    expect(app.selectedConfig).toBe(firefliesConfig);
  })

  it(`pause - expect animation to stop`, () => {
    app.loadParticlesJS(firefliesConfig);
    app.isPlaying = true;
    pJSDom[0].pJS.particles.move.speed = firefliesConfig.particles.move.speed;
    pJSDom[0].pJS.particles.size.anim.enable = firefliesConfig.particles.size.anim.enable;
    app.pause();
    expect(app.isPlaying).toBe(false);
    expect(pJSDom[0].pJS.particles.move.speed).toBe(0);
    expect(pJSDom[0].pJS.particles.size.anim.enable).toBe(false);
  })

  it(`play - expect animation to resume`, () => {
    app.loadParticlesJS(firefliesConfig);
    app.isPlaying = false;
    pJSDom[0].pJS.particles.move.speed = 0;
    pJSDom[0].pJS.particles.size.anim.enable = false;
    app.play();
    expect(app.isPlaying).toBe(true);
    expect(pJSDom[0].pJS.particles.move.speed).toBe(firefliesConfig.particles.move.speed);
    expect(pJSDom[0].pJS.particles.size.anim.enable).toBe(firefliesConfig.particles.size.anim.enable);
  })
});
