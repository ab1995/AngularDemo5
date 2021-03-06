import { NgModule, EventEmitter }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {AdvertisementForm} from './component/AdvertisementForm/AdvertisementForm.component';
import {AdvertisementTable} from './component/AdvertisementForm/AdvertisementTable.component';
import {FilterPipe} from './component/AdvertisementForm/AdvertisementTable.component';
import {TemplateAdForm} from './component/template-driven/TemplateAdForm.component';
import {mdfAdForm} from './component/model-driven/mdfAdForm.component'
import {Mdf2AdForm} from './component/model-driven2/mdf2AdForm.component'
import {UpdateFormComponent} from './component/model-driven2/updateForm.component'




import { ThirdComponent } from './component/routes/third.component';
import { HomeComponent } from './component/routes/home.component';
import { EditFormComponent } from './component/routes/editForm.component';

import { FourthComponent } from './component/routes/fourth.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule , HttpModule,
                  RouterModule.forRoot([
                    {path: 'home', component: HomeComponent}, 
                    {path: 'update', component: EditFormComponent},
                    {path: 'third', component: ThirdComponent}, 
                    {path: 'fourth/:message', component: FourthComponent}
                  ]) ],
  declarations: [ AppComponent, AdvertisementForm , AdvertisementTable, FilterPipe, TemplateAdForm, mdfAdForm,Mdf2AdForm, UpdateFormComponent,HomeComponent,EditFormComponent, ThirdComponent, FourthComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
