Vim�UnDo� �r��+GWfJ�ʒ����<��$�ћ.�՟�   l                                   `���    _�                     '       ����                                                                                                                                                                                                                                                                                                                            '          '          v       `���    �       k   g   e   /import { CommonModule } from '@angular/common';   )import { NgModule } from '@angular/core';   -import { FormsModule } from '@angular/forms';   7import { RouterModule, Routes } from '@angular/router';       7import { NgbModule } from '@ng-bootstrap/ng-bootstrap';   6import { NgSelectModule } from '@ng-select/ng-select';   =import { NgxDatatableModule } from '@swimlane/ngx-datatable';   3import { Ng2FlatpickrModule } from 'ng2-flatpickr';       7import { CoreCommonModule } from '@core/common.module';   Cimport { CoreDirectivesModule } from '@core/directives/directives';   ;import { CorePipesModule } from '@core/pipes/pipes.module';   5import { CoreSidebarModule } from '@core/components';       aimport { InvoiceListComponent } from 'app/main/apps/invoice/invoice-list/invoice-list.component';   ]import { InvoiceListService } from 'app/main/apps/invoice/invoice-list/invoice-list.service';       ^import { InvoiceAddComponent } from 'app/main/apps/invoice/invoice-add/invoice-add.component';   Zimport { InvoiceAddService } from 'app/main/apps/invoice/invoice-add/invoice-add.service';   �import { AddCustomerSidebarComponent } from 'app/main/apps/invoice/invoice-add/add-customer-sidebar/add-customer-sidebar.component';       aimport { InvoiceEditComponent } from 'app/main/apps/invoice/invoice-edit/invoice-edit.component';   ]import { InvoiceEditService } from 'app/main/apps/invoice/invoice-edit/invoice-edit.service';   �import { SendInvoiceSidebarComponent } from 'app/main/apps/invoice/invoice-edit/sidebar/send-invoice-sidebar/send-invoice-sidebar.component';   �import { AddPaymentSidebarComponent } from 'app/main/apps/invoice/invoice-edit/sidebar/add-payment-sidebar/add-payment-sidebar.component';       jimport { InvoicePreviewComponent } from 'app/main/apps/invoice/invoice-preview/invoice-preview.component';   fimport { InvoicePreviewService } from 'app/main/apps/invoice/invoice-preview/invoice-preview.service';   �import { AddPaymentSidebarPreviewComponent } from 'app/main/apps/invoice/invoice-preview/sidebar/add-payment-sidebar-preview/add-payment-sidebar-preview.component';   �import { SendInvoiceSidebarPreviewComponent } from 'app/main/apps/invoice/invoice-preview/sidebar/send-invoice-sidebar-preview/send-invoice-sidebar-preview.component';       
// routing   const routes: Routes = [     {       path: 'add',   #    component: InvoiceAddComponent,       resolve: {         Ias: InvoiceAddService       }     },     {       path: 'list',   $    component: InvoiceListComponent,       resolve: {         uls: InvoiceListService       }     },     {       path: 'preview/:id',   '    component: InvoicePreviewComponent,       resolve: {   !      data: InvoicePreviewService       },   #    data: { path: 'user-view/:id' }     },     {       path: 'edit/:id',   $    component: InvoiceEditComponent,       resolve: {         data: InvoiceEditService       },   #    data: { path: 'user-view/:id' }     },     {       path: 'preview',   ;    redirectTo: '/apps/invoice/preview/4989' // Redirection     },     {       path: 'edit',   8    redirectTo: '/apps/invoice/edit/4989' // Redirection     }   ];       @NgModule({     declarations: [       InvoiceAddComponent,       InvoiceListComponent,       InvoicePreviewComponent,       InvoiceEditComponent,        AddCustomerSidebarComponent,        SendInvoiceSidebarComponent,       AddPaymentSidebarComponent,   '    SendInvoiceSidebarPreviewComponent,   %    AddPaymentSidebarPreviewComponent     ],     imports: [       CommonModule,   "    RouterModule.forChild(routes),       CoreCommonModule,       CoreDirectivesModule,       Ng2FlatpickrModule,       NgxDatatableModule,       FormsModule,       CorePipesModule,       NgbModule,       NgSelectModule,       CoreSidebarModule     ],   `  providers: [InvoiceListService, InvoicePreviewService, InvoiceEditService, InvoiceAddService],   !  exports: [InvoiceListComponent]5�_�                     g       ����                                                                                                                                                                                                                                                                                                                                                             `���    �       f   g   j   /import { CommonModule } from "@angular/common";   )import { NgModule } from "@angular/core";   -import { FormsModule } from "@angular/forms";   7import { RouterModule, Routes } from "@angular/router";       7import { NgbModule } from "@ng-bootstrap/ng-bootstrap";   6import { NgSelectModule } from "@ng-select/ng-select";   =import { NgxDatatableModule } from "@swimlane/ngx-datatable";   3import { Ng2FlatpickrModule } from "ng2-flatpickr";       7import { CoreCommonModule } from "@core/common.module";   Cimport { CoreDirectivesModule } from "@core/directives/directives";   ;import { CorePipesModule } from "@core/pipes/pipes.module";   5import { CoreSidebarModule } from "@core/components";       aimport { InvoiceListComponent } from "app/main/apps/invoice/invoice-list/invoice-list.component";   ]import { InvoiceListService } from "app/main/apps/invoice/invoice-list/invoice-list.service";       ^import { InvoiceAddComponent } from "app/main/apps/invoice/invoice-add/invoice-add.component";   Zimport { InvoiceAddService } from "app/main/apps/invoice/invoice-add/invoice-add.service";   �import { AddCustomerSidebarComponent } from "app/main/apps/invoice/invoice-add/add-customer-sidebar/add-customer-sidebar.component";       aimport { InvoiceEditComponent } from "app/main/apps/invoice/invoice-edit/invoice-edit.component";   ]import { InvoiceEditService } from "app/main/apps/invoice/invoice-edit/invoice-edit.service";   �import { SendInvoiceSidebarComponent } from "app/main/apps/invoice/invoice-edit/sidebar/send-invoice-sidebar/send-invoice-sidebar.component";   �import { AddPaymentSidebarComponent } from "app/main/apps/invoice/invoice-edit/sidebar/add-payment-sidebar/add-payment-sidebar.component";       jimport { InvoicePreviewComponent } from "app/main/apps/invoice/invoice-preview/invoice-preview.component";   fimport { InvoicePreviewService } from "app/main/apps/invoice/invoice-preview/invoice-preview.service";   �import { AddPaymentSidebarPreviewComponent } from "app/main/apps/invoice/invoice-preview/sidebar/add-payment-sidebar-preview/add-payment-sidebar-preview.component";   �import { SendInvoiceSidebarPreviewComponent } from "app/main/apps/invoice/invoice-preview/sidebar/send-invoice-sidebar-preview/send-invoice-sidebar-preview.component";       
// routing   const routes: Routes = [     {       path: "add",   #    component: InvoiceAddComponent,       resolve: {         Ias: InvoiceAddService,       },     },     {       path: "list",   $    component: InvoiceListComponent,       resolve: {         uls: InvoiceListService,       },     },     {       path: "preview/:id",   '    component: InvoicePreviewComponent,       resolve: {   "      data: InvoicePreviewService,       },   $    data: { path: "user-view/:id" },     },     {       path: "edit/:id",   $    component: InvoiceEditComponent,       resolve: {         data: InvoiceEditService,       },   $    data: { path: "user-view/:id" },     },     {       path: "preview",   <    redirectTo: "/apps/invoice/preview/4989", // Redirection     },     {       path: "edit",   9    redirectTo: "/apps/invoice/edit/4989", // Redirection     },   ];       @NgModule({     declarations: [       InvoiceAddComponent,       InvoiceListComponent,       InvoicePreviewComponent,       InvoiceEditComponent,        AddCustomerSidebarComponent,        SendInvoiceSidebarComponent,       AddPaymentSidebarComponent,   '    SendInvoiceSidebarPreviewComponent,   &    AddPaymentSidebarPreviewComponent,     ],     imports: [       CommonModule,   "    RouterModule.forChild(routes),       CoreCommonModule,       CoreDirectivesModule,       Ng2FlatpickrModule,       NgxDatatableModule,       FormsModule,       CorePipesModule,       NgbModule,       NgSelectModule,       CoreSidebarModule,     ],     providers: [       InvoiceListService,       InvoicePreviewService,       InvoiceEditService,       InvoiceAddService,     ],   "  exports: [InvoiceListComponent],5��