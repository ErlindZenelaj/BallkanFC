export interface Player {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
    };
    goals: number;
    assist: number;
  }
  