import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { CollectionsComponent } from './views/collections/collections.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { BottomBarComponent } from './shared/bottom-bar/bottom-bar.component';
import { OverlayCoverimgComponent } from './shared/overlay-coverimg/overlay-coverimg.component';
import { OverlayImgComponent } from './shared/overlay-img/overlay-img.component';
import { GridComponent } from './shared/grid/grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './views/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    CollectionsComponent,
    ProductDetailsComponent,
    TopBarComponent,
    BottomBarComponent,
    OverlayCoverimgComponent,
    OverlayImgComponent,
    GridComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
