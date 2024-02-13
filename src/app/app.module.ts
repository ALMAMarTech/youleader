import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SwiperModule} from "swiper/angular";
import { AppComponent } from './app.component';
import { MenuComponent } from './cabecera/menu/menu.component';
import { FooterComponent } from './cabecera/footer/footer.component';
import { HomeComponent } from './vista/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {CarouselModule} from "ngx-owl-carousel-o";
import { ExperienciaComponent } from './vista/experiencia/experiencia.component';
import { ServiciosComponent } from './vista/servicios/servicios.component';
import { LeadershipComponent } from './vista/leadership/leadership.component';
import { GamificationComponent } from './vista/gamification/gamification.component';
import { MicrolearningComponent } from './vista/microlearning/microlearning.component';
import { ModalComponent } from './vista/modal/modal.component';
import { SociosComercialesComponent } from './vista/landing/socios-comerciales/socios-comerciales.component';
const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data:{title: 'Youleader'}},
  {path:'404',component: HomeComponent},
  {path:'experiencia', component: ExperienciaComponent, data:{title: 'Nuestra experiencia'}},
  {path:'servicios',component:ServiciosComponent,data:{title:  'Nuestros productos'}},
  {path:'gamification', component:GamificationComponent, data:{title: 'Gamification'}},
  {path:'leadership', component:LeadershipComponent, data:{title: 'Leadership'}},
  {path:'microlearning', component:MicrolearningComponent, data:{title: 'Microlearning'}},
  {path:'socios', component: SociosComercialesComponent, data:{title: 'Conviertéte en nuestro socio comercial'}},
  {path: '**', redirectTo:'/404'},
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ExperienciaComponent,
    ServiciosComponent,
    LeadershipComponent,
    GamificationComponent,
    MicrolearningComponent,
    ModalComponent,
    SociosComercialesComponent
  ],
    imports: [
        BrowserModule,
        SwiperModule,
        CarouselModule,
      BrowserAnimationsModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation:'ignore', anchorScrolling:'enabled'})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
//@ts-ignore
export class AppModule { }
