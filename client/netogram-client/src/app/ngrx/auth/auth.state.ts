import { AuthCredentialModel } from '../../models/auth.model';

export interface AuthState {
  idToken: string;
  authCredential: AuthCredentialModel;

  loginWithGoogleSuccess: boolean;
  logOutSuccess: boolean;
  loading: boolean;
  error: any;
}
