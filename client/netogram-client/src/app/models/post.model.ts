export interface PostModel{
  uid: string;
  imageUrl: string[] | File[];
  content: string;
  id: BigInt;
}
