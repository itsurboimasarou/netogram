import { ProfileModel } from '../../models/profile.model';
import { HttpErrorResponseModel } from '../../models/http-error-response.model';

export interface ProfileState {
  profiles: ProfileModel[];
  profile: ProfileModel;
  mine: ProfileModel | null;

  isCreating: boolean;
  isCreateSuccess: boolean;
  createErrorMessage: HttpErrorResponseModel;

  isUpdating: boolean;
  isUpdateSuccess: boolean;
  updateErrorMessage: HttpErrorResponseModel;

  isGettingMine: boolean;
  isGetMineSuccess: boolean;
  isGetMineFailure: boolean;
  getErrorMessage: HttpErrorResponseModel;

  isGettingById: boolean;
  isGetByIdSuccess: boolean;
  getErrorMessageById: HttpErrorResponseModel;
}
