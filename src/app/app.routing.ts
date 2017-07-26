import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{UserComponent} from './user/user.component';
import{AboutComponent} from './about/about.component';
import { StudentloginComponent } from './student/studentlogin/studentlogin.component';
import { StudentregistrationComponent} from './student/studentregistration/studentregistration.component';
@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'user', component: UserComponent },
         { path: 'about', component: AboutComponent },
         { path: 'studentlogin', component: StudentloginComponent },
         { path: 'studentregisteration', component: StudentregistrationComponent }
         

    ],{preloadingStrategy:PreloadAllModules})
  ],
  exports:[RouterModule]
 })
export class AppRoutingModule {}
