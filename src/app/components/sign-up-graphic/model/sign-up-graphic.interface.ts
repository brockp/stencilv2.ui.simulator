export interface SignUpGraphic {
  id: number;
  Version: string;
  Source: string;
  Width: string;
  Height: string;
  MinWidth: string;
  MinHeight: string;
  Padding: {
    top: string | number;
    right: string | number;
    bottom: string | number;
    left: string | number;
  };
  BackgroundColor: string;
}
