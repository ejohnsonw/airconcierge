import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-feed-tile',
  templateUrl: './feed-tile.component.html',
  styleUrls: ['./feed-tile.component.scss']
})
export class FeedTileComponent {
    @Input() feed

}
