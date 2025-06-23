// interface data for New users creating an account

export interface RegisterUsers {
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: number;
  email: string;
  password: string;
}

// interface data required for existing users

export interface UserLoginData {
  email: string;
  password: string;
}

// interface data for individual users profile dashboard

export interface UserDashboardData {
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  email: string;
}
