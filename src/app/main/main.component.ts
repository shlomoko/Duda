import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ReviewModel } from '../ReviewModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  newReview = new ReviewModel;
  reviews: ReviewModel[];
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews();
  }

  getReviews(): void {
    this.reviewService.getReviews()
    .subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  addReview(): void {
    if(this.newReview.name.trim().length > 0 && this.newReview.content.trim().length > 0) {
      this.reviewService.addReview(this.newReview);
    }
  }

}
