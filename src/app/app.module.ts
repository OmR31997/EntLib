import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { FireConfigService } from './services/fire-config.service';
import { RegionComponent } from './components/region/region.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { EntertaimentDetailComponent } from './components/entertaiment-detail/entertaiment-detail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    RegionComponent,
    HomeComponent,
    CategoryComponent,
    EntertaimentDetailComponent,
    HomeComponent,
    LoadingComponent,
    NotFoundComponent,
    SigninComponent,
    SignupComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Only call AngularFireModule.initializeApp once here
    AngularFireModule.initializeApp(environment.firebaseConfig),  // Default empty object, until config is loaded
    AngularFireAuthModule
  ],
  providers: 
  [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: 'firebaseConfig',
      useFactory: (configService: FireConfigService) => configService.getFirebaseConfig(),
      deps: [FireConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  constructor(configService: FireConfigService) 
  {
    const firebaseConfig = configService.getFirebaseConfig();
    AngularFireModule.initializeApp(firebaseConfig);
  }
}
