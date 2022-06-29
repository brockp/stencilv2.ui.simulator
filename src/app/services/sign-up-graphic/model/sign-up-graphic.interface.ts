export interface SignUpGraphic {
  id: number;
  version: string;
  component: string;
  configuration_json: {
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
  };
}
