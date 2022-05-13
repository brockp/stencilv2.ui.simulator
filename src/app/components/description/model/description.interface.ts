export interface Description {
  id: number;
  version: string | number;
  configuration_json: {
    Text: string;
    TextColor: string;
    BackgroundColor: string;
    Padding: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
  };
}
