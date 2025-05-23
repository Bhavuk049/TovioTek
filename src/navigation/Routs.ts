export interface RouteInterface {
  Login: string;
  Dashboard: string;
  Loader: string;
  BeforeLogin: string;
  AfterLogin: string;
  Setting: string;
  BottomTab: string;
  AfterLoginDashboard: string;
  AddNewClient: string;
  Collection: string;
}

export const Route: RouteInterface = {
  Login: 'Login',
  Dashboard: 'Dashboard',
  Loader: 'Loader',
  BeforeLogin: 'BeforeLogin',
  AfterLogin: 'AfterLogin',
  Setting: 'Setting',
  BottomTab: 'BottomTab',
  AfterLoginDashboard: 'AfterLoginDashboard',
  AddNewClient: 'AddNewClient',
  Collection: 'Collection',
};
