export interface AuthFormI {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface FormInitialI {
  email: FormStateI;
  password: FormStateI;
  confirmPassword: FormStateI;
}

export interface FormStateI {
  value: any;
  isValid: boolean;
}

export interface AuthResponseI {
  idToken: string;
  displayName?: string;
  refreshToken: string;
  expiresIn: string;
  registered: boolean;
  email: string;
  localId: string;
}

export interface SinUpResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  email: string;
  localId: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  returnSecureToken: boolean;
}
export interface AuthPayload {
  token: string;
  returnSecureToken: boolean;
}
