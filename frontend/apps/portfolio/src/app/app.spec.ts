import { TestBed } from '@angular/core/testing';
import { App } from './app';

// CHANGED: the generated test checked the Nx welcome heading, which is gone.
// This checks the one thing the root component does until Phase 3: host the
// router outlet that every page renders into.
describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('renders the router outlet', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });
});
