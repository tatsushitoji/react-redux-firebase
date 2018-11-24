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
