export interface IReview {
  id: number;
  name: string;
  job: string;
  text: string;
  image: string;
}

export interface IGalleryProps {
  reviews: IReview[];
}
