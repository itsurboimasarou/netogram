export interface PostModel {
  uid: string;
  imageUrls: string[] | File[];
  content: string;
  id: BigInt;
}

export interface PostResponse {
  data: PostModel[];
  count: number;
  pageNumber: number;
  limitNumber: number;
}
