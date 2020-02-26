import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { YoutubeVideosService } from './services/youtube-videos.service';
import { GetBorderColorDirective } from './directives/get-border-color.directive';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortPipe,
    GetBorderColorDirective,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    SortPipe,
    MainPageComponent,
    RouterModule
  ],
  providers: [YoutubeVideosService]
})
export class YoutubeModule { }
