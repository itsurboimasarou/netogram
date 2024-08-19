import { AuthState } from './auth.state';
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthCredentialModel } from '../../models/auth.model';

export const initialAuthState: AuthState = {
  idToken: '',
  authCredential: <AuthCredentialModel>{},

  isLoading: false,
  isSuccess: false,
  error: null,

  logOutSuccess: false,
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.clearState, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      idToken: '',
      authCredential: <AuthCredentialModel>{},

      isLoading: false,
      isSuccess: false,
      error: null,

      logOutSuccess: false,
    };
  }),

  on(AuthActions.signInWithGoogle, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(AuthActions.signInWithGoogleSuccess, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
    };
  }),

  on(AuthActions.signInWithGoogleFailure, (state, { type, error }) => {
    console.log(type);
    return {
      ...state,
      error: error,
      isLoading: false,
      isSuccess: false,
    };
  }),

  // on(AuthActions.signOut, (state, action) => {
  //   console.log(action.type);
  //   return {
  //     ...state,
  //     loading: true,
  //
  //     loginWithGoogleSuccess: false,
  //     authCredential: <AuthCredentialModel>{},
  //   };
  // }),
  //
  // on(AuthActions.signOutSuccess, (state, action) => {
  //   console.log(action.type);
  //   return {
  //     ...state,
  //     idToken: '',
  //     loginWithGoogleSuccess: false,
  //     loading: false,
  //     logOutSuccess: true,
  //   };
  // }),
  //
  // on(AuthActions.signOutFailure, (state, action) => {
  //   console.log(action.type);
  //   return {
  //     ...state,
  //     error: action.error,
  //     loading: false,
  //   };
  // }),

  on(AuthActions.storeIdToken, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      idToken: action.idToken,
    };
  }),

  on(AuthActions.storeAuthCredential, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      authCredential: action.auth,
      loginWithGoogleSuccess: true,
    };
  }),

  // on(AuthActions.clearLoginSuccess, (state, action) => {
  //   console.log(action.type);
  //   return {
  //     ...state,
  //     loginWithGoogleSuccess: false,
  //   };
  // }),
);
