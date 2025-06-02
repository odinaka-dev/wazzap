// interface data for New users creating an account

export interface RegisterUsers {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: number;
  email: string;
  password: string;
}

// interface data required for existing users

export interface UserLoginData {
  id: string;
  email: string;
  password: string;
}

// interface data for individual users profile dashboard

export interface UserDashboardData {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  email: string;
}
