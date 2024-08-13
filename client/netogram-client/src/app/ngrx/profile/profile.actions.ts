import { createAction, props } from '@ngrx/store';
import { ProfileModel } from '../../models/profile.model';
import { HttpErrorResponseModel } from '../../models/http-error-response.model';

export const createMine = createAction(
  '[Profile] Create Mine',
  props<{ mine: ProfileModel }>(),
);
export const createMineSuccess = createAction('[Profile] Create Mine Success');
export const createMineFailure = createAction(
  '[Profile] Create Mine Failure',
  props<{ createErrorMessage: HttpErrorResponseModel }>(),
);

export const updateMine = createAction(
  '[Profile] Update Mine',
  props<{ mine: ProfileModel }>(),
);

export const updateMineSuccess = createAction('[Profile] Update Mine Success');

export const updateMineFailure = createAction(
  '[Profile] Update Mine Failure',
  props<{ updateErrorMessage: HttpErrorResponseModel }>(),
);

export const getMine = createAction(
  '[Profile] Get Mine',
  props<{ uid: string }>(),
);
export const getMineSuccess = createAction(
  '[Profile] Get Mine Success',
  props<{ mine: ProfileModel }>(),
);

export const getMineFailure = createAction(
  '[Profile] Get Mine Failure',
  props<{ getErrorMessage: HttpErrorResponseModel }>(),
);

export const getList = createAction('[Profile] Get List Profiles');
export const getListSuccess = createAction(
  '[Profile] Get List Profiles Success',
  props<{ profiles: ProfileModel[] }>(),
);

export const getListFailure = createAction(
  '[Profile] Get List Profiles Failure',
  props<{ getErrorMessage: HttpErrorResponseModel }>(),
);

export const getById = createAction(
  '[Profile] Get By Id',
  props<{ uid: string }>(),
);

export const getByIdSuccess = createAction(
  '[Profile] Get By Id Success',
  props<{ profile: ProfileModel }>(),
);

export const getByIdFailure = createAction(
  '[Profile] Get By Id Failure',
  props<{ getErrorMessageById: HttpErrorResponseModel }>(),
);

//clear get state
export const clearGetState = createAction('[Profile] Clear Get State');
export const clearCreateState = createAction('[Profile] Clear Create State');
export const clearUpdateState = createAction('[Profile] Clear Update State');
export const clearMessages = createAction('[Profile] Clear Message');
