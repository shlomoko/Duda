import { Component, OnInit, Input } from '@angular/core';
import { ReviewModel } from '../ReviewModel';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.less']
})
export class ReviewComponent implements OnInit {
  editMode = false;
  @Input() review: ReviewModel;
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }

  editReview() {
    this.editMode = true;
  }

  deleteReview() {
    this.reviewService.removeReview(this.review.id);
  }

  saveReview() {
    this.editMode = false;
  }

  getImage() {
    this.reviewService.imageGen();
  }
}
