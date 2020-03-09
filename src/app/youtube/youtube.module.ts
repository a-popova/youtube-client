import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { YoutubeVideosService } from './services/youtube-videos.service';
import { GetBorderColorDirective } from './directives/get-border-color.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailedInformationPageComponent }
from './pages/detailed-information-page/detailed-information-page.component';
import { DetailedInformationComponent }
from './components/detailed-information/detailed-information.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortPipe,
    GetBorderColorDirective,
    MainPageComponent,
    DetailedInformationPageComponent,
    DetailedInformationComponent
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    DetailedInformationComponent,
    SortPipe,
    MainPageComponent,
    DetailedInformationPageComponent,
    RouterModule
  ],
  providers: [YoutubeVideosService ]
})
export class YoutubeModule { }
