export interface ITrack {
  id: number;
  name: string;
  isActive: boolean;
  studentsCount: number;
  hidden?: boolean;
}
