import { Route } from '@angular/router';

export const devRoutes: Route[] = [
  {
    path: 'dev/components',
    loadComponent: () =>
      import('@lawrencecaudle/ui').then((module) => module.ComponentSheet),
    title: 'Component sheet',
  },
];
