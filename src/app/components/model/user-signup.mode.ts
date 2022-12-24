export interface IUserSignup {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: {
    country: string;
    state: string;
    city: string;
  };
  birthDate: string;
  gender: string;
  password: string;
}
