import { createAction, props } from '@ngrx/store';
import { HttpErrorResponseModel } from '../../models/http-error-response.model';

export const uploadFile = createAction(
  '[Storage] Upload File',
  props<{ file: File; fileName: string }>(),
);

export const uploadFileFailure = createAction(
  '[Storage] Upload File Failure',
  props<{ uploadFileErrorMessage: HttpErrorResponseModel }>(),
);

export const uploadFileSuccess = createAction(
  '[Storage] Upload File Success',
  props<{ url: string[] }>(),
);
