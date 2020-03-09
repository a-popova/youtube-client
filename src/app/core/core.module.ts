import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FilteringCriteriaComponent } from './components/filtering-criteria/filtering-criteria.component';
import { FormsModule } from '@angular/forms';
import { Page404Component } from './pages/page404/page404.component';
import { FilteringService } from './services/filtering.service';
import { YoutubeVideosService } from '../youtube/services/youtube-videos.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FilteringCriteriaComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FilteringCriteriaComponent,
    Page404Component
  ]
})
export class CoreModule { }
