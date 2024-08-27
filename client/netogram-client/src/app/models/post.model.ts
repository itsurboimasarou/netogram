export interface PostModel {
  uid: string;
  imageUrls: string[] | File[];
  content: string;
  id: bigint;
  createdAt: string;
}

export interface PostResponse {
  data: PostModel[];
  count: number;
  pageNumber: number;
  limitNumber: number;
}

