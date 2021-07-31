Vim�UnDo� �+�g�X�g/��:7J^�%ɝi�]�)���   c                                   `���    _�                              ����                                                                                                                                                                                                                                                                                                                                                             `���    �       b   _   ]   /import { CommonModule } from '@angular/common';   )import { NgModule } from '@angular/core';   -import { FormsModule } from '@angular/forms';   7import { RouterModule, Routes } from '@angular/router';       2import { NouisliderModule } from 'ng2-nouislider';   7import { NgbModule } from '@ng-bootstrap/ng-bootstrap';   Ximport { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';       7import { CoreCommonModule } from '@core/common.module';   5import { CoreSidebarModule } from '@core/components';   \import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';       aimport { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';       Mimport { EcommerceService } from 'app/main/apps/ecommerce/ecommerce.service';   rimport { EcommerceDetailsComponent } from 'app/main/apps/ecommerce/ecommerce-details/ecommerce-details.component';   iimport { EcommerceItemComponent } from 'app/main/apps/ecommerce/ecommerce-item/ecommerce-item.component';   iimport { EcommerceShopComponent } from 'app/main/apps/ecommerce/ecommerce-shop/ecommerce-shop.component';   mimport { EcommerceSidebarComponent } from 'app/main/apps/ecommerce/ecommerce-shop/sidebar/sidebar.component';   uimport { EcommerceWishlistComponent } from 'app/main/apps/ecommerce/ecommerce-wishlist/ecommerce-wishlist.component';   uimport { EcommerceCheckoutComponent } from 'app/main/apps/ecommerce/ecommerce-checkout/ecommerce-checkout.component';   �import { EcommerceCheckoutItemComponent } from 'app/main/apps/ecommerce/ecommerce-checkout/ecommerce-checkout-item/ecommerce-checkout-item.component';       6const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {     direction: 'horizontal',     observer: true   };       
// routing   const routes: Routes = [     {       path: 'shop',   &    component: EcommerceShopComponent,       resolve: {   !      ecommerce: EcommerceService       }     },     {       path: 'details/:id',   )    component: EcommerceDetailsComponent,       resolve: {   !      ecommerce: EcommerceService       }     },     {       path: 'wishlist',   *    component: EcommerceWishlistComponent,       resolve: {   !      ecommerce: EcommerceService       }     },     {       path: 'checkout',   *    component: EcommerceCheckoutComponent,       resolve: {   !      ecommerce: EcommerceService       }     },     {       path: 'details',   ;    redirectTo: '/apps/e-commerce/details/27' //Redirection     }   ];       @NgModule({     declarations: [       EcommerceShopComponent,       EcommerceSidebarComponent,       EcommerceDetailsComponent,       EcommerceWishlistComponent,       EcommerceCheckoutComponent,       EcommerceItemComponent,   "    EcommerceCheckoutItemComponent     ],     imports: [       CommonModule,   "    RouterModule.forChild(routes),       SwiperModule,       FormsModule,       CoreTouchspinModule,       ContentHeaderModule,       CoreSidebarModule,       CoreCommonModule,       NgbModule,       NouisliderModule     ],     providers: [       {         provide: SWIPER_CONFIG,   %      useValue: DEFAULT_SWIPER_CONFIG       }     ]5��