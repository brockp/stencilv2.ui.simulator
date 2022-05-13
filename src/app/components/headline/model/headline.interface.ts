export interface Headline {
  id: number;
  component: string;
  version: string;
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
