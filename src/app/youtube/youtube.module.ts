import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { YoutubeVideosService } from './services/youtube-videos.service';
import { GetBorderColorDirective } from './directives/get-border-color.directive';


@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SortPipe,
    GetBorderColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchItemComponent,
    SearchResultsComponent,
    SortPipe
  ],
  providers: [YoutubeVideosService]
})
export class YoutubeModule { }
