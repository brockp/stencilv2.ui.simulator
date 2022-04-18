export interface Carousel {
  id: number;
  Version: string;
  SectionOne: {
    Source: string;
    h1: {
      Version: string;
      Text: string;
      TextColor: string;
      BackgroundColor: string;
    };
    h2: {
      Version: string;
      Text: string;
      TextColor: string;
      BackgroundColor: string;
    };
  };
  SectionTwo: {
    Source: string;
    h1: {
      Version: string;
      Text: string;
      TextColor: string;
      BackgroundColor: string;
    };
    h2: {
      Version: string;
      Text: string;
      TextColor: string;
      BackgroundColor: string;
    };
  };
  SectionThree: {
    Source: string;
    h1: {
      Version: string;
      Text: string;
      TextColor: string;
      BackgroundColor: string;
    };
    h2: {
      Version: string;
      Text: string;
      TextColor: string;
      BackgroundColor: string;
    };
  };
  Nav: {
    Version: string;
    LeftNav: string;
    LeftNavInitialCommand: string;
    LeftNavAlt: string;
    RightNav: string;
  };
}
