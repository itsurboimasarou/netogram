export interface PostModel{
  uid: string;
  imageUrl: string[] | File[];
  content: string;
  id: BigInt;
}

export interface PostResponse {
  data: PostModel[];
  count: number;
  pageNumber: number;
  limitNumber: number;
}
