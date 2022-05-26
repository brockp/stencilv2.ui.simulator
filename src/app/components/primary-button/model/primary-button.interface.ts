export interface primaryButton {
  id: number | null;
  component: string;
  configuration_json: {
    Width: string;
    CornerRadius: string;
    Text: string;
    TextColor: string;
    CommandName: string;
    CommandParameter: string;
    Padding: {
      top: string | number;
      right: string | number;
      bottom: string | number;
      left: string | number;
    };
    Margin: {
      top: string | number;
      right: string | number;
      bottom: string | number;
      left: string | number;
    };
    BackgroundColor: string;
  };
}
