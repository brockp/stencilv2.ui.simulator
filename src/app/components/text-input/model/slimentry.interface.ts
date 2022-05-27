export interface SlimEntry {
  id: number;
  component: string;
  configuration_json: {
    Placeholder: string;
    IsPassword: boolean;
    GroupName: string;
    FieldName: string;
    IsRequired: boolean;
    Borderless: any;
    Type: string;
    BackgroundColor: string;
    Padding: {
      top: string | number;
      right: string | number;
      bottom: string | number;
      left: string | number;
    };
  };
}
