export interface Power {
  id: number;
  name: string;
}

export interface Hero {
  id: number;
  name: string;
  avatarUrl: string;
  powers?: Power[];
  price: number;
  saves: number;
  fans: number;
}
