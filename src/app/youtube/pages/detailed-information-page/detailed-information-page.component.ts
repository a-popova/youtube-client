import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { YoutubeVideosService } from '../../services/youtube-videos.service';
import SearchItem from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})
export class DetailedInformationPageComponent implements OnInit {
  public video: SearchItem;

  constructor(
    private route: ActivatedRoute,
    private youtubeVideoService: YoutubeVideosService,
    private location: Location
  ) { }

  public ngOnInit(): void {
    // this.getVideo();
  }

  // public getVideo(): void {
  //   const id: string = this.route.snapshot.paramMap.get('id');
  //   this.youtubeVideoService.getVideo(id)
  //     .subscribe(video => this.video = video);
  // }

  public goBack(): void {
    this.location.back();
  }

}
