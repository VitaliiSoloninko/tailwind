import { Routes } from '@angular/router';
import { TypificationComponent } from './pages/typification/typification.component';
import { StylizationComponent } from './pages/stylization/stylization.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { FiltersComponent } from './pages/filters/filters.component';
import { AdvancedComponent } from './pages/advanced/advanced.component';

export const routes: Routes = [
  { path: '', component: TypificationComponent },
  { path: 'stylization', component: StylizationComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'filters', component: FiltersComponent },
  { path: 'advanced', component: AdvancedComponent },
];
