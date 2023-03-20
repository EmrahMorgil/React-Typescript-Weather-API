export class result {
    data?: data;
  }
  
  export class data {
    coord?:      Coord;
    weather?:    Weather[];
    base?:       string;
    main?:       Main;
    visibility?: number;
    wind?:       Wind;
    clouds?:     Clouds;
    dt?:         number;
    sys?:        Sys;
    timezone?:   number;
    id?:         number;
    name?:       string;
    cod?:        number;
  }
  
  export class Clouds {
    all?: number;
  }
  
  export class Coord {
    lon?: number;
    lat?: number;
  }
  
  export class Main {
    temp?:       number;
    feels_like?: number;
    temp_min?:   number;
    temp_max?:   number;
    pressure?:   number;
    humidity?:   number;
  }
  
  export class Sys {
    type?:    number;
    id?:      number;
    country?: string;
    sunrise?: number;
    sunset?:  number;
  }
  
  export class Weather {
    id?:          number;
    main?:        string;
    description?: string;
    icon?:        string;
  }
  
  export class Wind {
    speed?: number;
    deg?:   number;
  }