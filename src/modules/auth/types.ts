export interface Auth {
  uid?: string;
  displayName?: string | null;
  photoURL?: string | null;
  email?: string | null;
  emailVerified?: boolean;
  phoneNumber?: string | null;
  isAnonymous?: boolean;
  isLoaded?: boolean;
  isEmpty?: boolean;
}

interface BaseAuthPayload {
  email: string;
  password: string;
}

export interface SignupPayload extends BaseAuthPayload {
  username: string;
}

export interface LoginPayload extends BaseAuthPayload {}
