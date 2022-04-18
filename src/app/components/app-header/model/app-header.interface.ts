export interface AppHeader {
  id: number;
  Version: string;
  type: string;
  height: string | number;
  padding: {
    top: string | number;
    right: string | number;
    bottom: string | number;
    left: string | number;
  };
  Column1Config: {
    HorizontalOptions: string;
  };
  Column2Config: {
    HorizontalOptions: string;
  };
  leftIcon: string;
  rightIcon: string;
  logo: string;
  // icon: string;
  // leftIconCommand: string;
  // logo: string;
  // rightIcon: string;
  // rightIconCommand: string;
}
