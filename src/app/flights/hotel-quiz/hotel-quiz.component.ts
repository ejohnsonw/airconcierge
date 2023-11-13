import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-quiz',
  templateUrl: './hotel-quiz.component.html',
  styleUrls: ['./hotel-quiz.component.scss']
})
export class HotelQuizComponent {
    feed: any;
    value = 72;
    selectedCities: any;
    notes: any;

    setText() {
        this.notes = "12 red roses, a formal dress shirt size L, and a neck tie solid blue color."
    }
}
