export interface primaryButton {
  id: number | null;
  Version: string;
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
}
