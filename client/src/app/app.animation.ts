import { trigger, animate, transition, style, query,group, state } from '@angular/animations';

export const appAnimation =

trigger('appAnimation', [
    state('start',style({fontSize:'0px'})),
    state('end',style({fontSize:'40px'})),
    transition('start=>end',animate(500))
]);