export interface HttpErrorResponseModel {
  error: ErrorModel;
  status: number;
}

export interface ErrorModel {
  statusCode: number;
  message: string;
}
