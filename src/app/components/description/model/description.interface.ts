export interface Description {
  id: number;
  Version: string | number;
  Text: string;
  TextColor: string;
  BackgroundColor: string;
  Padding: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}
