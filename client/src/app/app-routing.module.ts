import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { YardComponent } from './yard/yard.component';
import { PriceComponent } from './price/price.component';
import { PhotoComponent } from './photo/photo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AdminComponent } from './admin/admin.component';
import { DatachangeComponent } from './datachange/datachange.component';
import { AuthGuard } from './shared/class/auth.guard';


const appRoutes: Routes = [
  {path:'',component:HouseComponent},
  {path:'yard',component:YardComponent},
  {path:'price',component:PriceComponent},
  {path:'photo',component:PhotoComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'admin',component:AdminComponent},
    {path:'datachange',component:DatachangeComponent,canActivate:[AuthGuard]}
  
];




@NgModule({
  imports: [RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  lengI:number;
 }
