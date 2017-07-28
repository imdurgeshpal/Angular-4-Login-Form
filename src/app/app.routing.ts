import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{UserComponent} from './user/user.component';
import{AboutComponent} from './about/about.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { CenterloginComponent } from './center/centerlogin/centerlogin.component';
import { AppComponent } from './app.component';
import { StudentviewComponent  } from './student/studentview/studentview.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent  } from './home/home.component';
import { StudentregistrationComponent} from './student/studentregistration/studentregistration.component';
@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'user', component: UserComponent },
         { path: 'about', component: AboutComponent },
         { path: 'studentlogin', component: StudentloginComponent },
         { path: 'studentregisteration', component: StudentregistrationComponent },
         { path: 'studentview', component: StudentviewComponent },
         { path: 'adminlogin', component: AdminloginComponent },
         { path: 'centerlogin', component: CenterloginComponent },
        { path: 'admindashboard', component: AdmindashboardComponent }
         
         

    ],{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}
