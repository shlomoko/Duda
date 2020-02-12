import { Injectable } from '@angular/core';
import { ReviewModel } from '../ReviewModel';
import { Observable, of } from 'rxjs';
import { imageGen } from '@dudadev/random-img'

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviews: ReviewModel[] = []

  constructor() { }

  addReview(review: ReviewModel) {
    review.id = this.genId();
    this.reviews.push(review);
  }

  getReviews(): Observable<ReviewModel[]> {
    return of(this.reviews);
  }

  removeReview(id: number) {
    debugger
    this.reviews.filter(review => review.id != id)
  }

  private genId(): number {
    return this.reviews.length > 0 ? Math.max(...this.reviews.map(hero => hero.id)) + 1 : 0;
  }

  imageGen() {
    imageGen().then(avatarURL => {
      return avatarURL;
    })
  }
}
