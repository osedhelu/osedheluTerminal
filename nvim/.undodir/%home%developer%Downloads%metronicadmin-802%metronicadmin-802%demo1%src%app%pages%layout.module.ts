Vim�UnDo� G	E�B��
ܢ�ζ��xh��.x��YTj�   3                                   `�X�    _�                              ����                                                                                                                                                                                                                                                                                                                                                             `�X�    �               3   )import { NgModule } from '@angular/core';   /import { CommonModule } from '@angular/common';   0import { InlineSVGModule } from 'ng-inline-svg';   <import { PagesRoutingModule } from './pages-routing.module';   import {     NgbDropdownModule,     NgbProgressbarModule,   $} from '@ng-bootstrap/ng-bootstrap';   Gimport { TranslationModule } from '../modules/i18n/translation.module';   =import { LayoutComponent } from './_layout/layout.component';   Yimport { ScriptsInitComponent } from './_layout/init/scipts-init/scripts-init.component';   cimport { HeaderMobileComponent } from './_layout/components/header-mobile/header-mobile.component';   Limport { AsideComponent } from './_layout/components/aside/aside.component';   Oimport { FooterComponent } from './_layout/components/footer/footer.component';   Oimport { HeaderComponent } from './_layout/components/header/header.component';   dimport { HeaderMenuComponent } from './_layout/components/header/header-menu/header-menu.component';   Oimport { TopbarComponent } from './_layout/components/topbar/topbar.component';   Qimport { ExtrasModule } from '../_metronic/partials/layout/extras/extras.module';   vimport { LanguageSelectorComponent } from './_layout/components/topbar/language-selector/language-selector.component';   /import { CoreModule } from '../_metronic/core';   Zimport { SubheaderModule } from '../_metronic/partials/layout/subheader/subheader.module';   cimport { AsideDynamicComponent } from './_layout/components/aside-dynamic/aside-dynamic.component';   {import { HeaderMenuDynamicComponent } from './_layout/components/header/header-menu-dynamic/header-menu-dynamic.component';       @NgModule({     declarations: [       LayoutComponent,       ScriptsInitComponent,       HeaderMobileComponent,       AsideComponent,       FooterComponent,       HeaderComponent,       HeaderMenuComponent,       TopbarComponent,       LanguageSelectorComponent,       AsideDynamicComponent,       HeaderMenuDynamicComponent,     ],     imports: [       CommonModule,       PagesRoutingModule,       TranslationModule,       InlineSVGModule,       ExtrasModule,       NgbDropdownModule,       NgbProgressbarModule,       CoreModule,       SubheaderModule,     ],   })   export class LayoutModule { }5��