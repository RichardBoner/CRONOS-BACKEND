export interface UserInterface {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  friends: string[];
  schedules: string[];
}

export interface TranslatedUserInterface {
  email: string;
  name: string;
}