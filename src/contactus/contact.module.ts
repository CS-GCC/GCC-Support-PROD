import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';
import {contactOverviewComponent } from './contact-overview.component';       
import { logWarnings } from 'protractor/built/driverProviders';

@NgModule({
  declarations: [
    contactOverviewComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    CommonModule
  ],
  providers: [],

  exports: [
    contactOverviewComponent
  ]
})
export class contactModule { }
