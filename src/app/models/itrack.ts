export interface ITrack {
  id: number;
  name: string;
  isActive: boolean;
  studentsCount: number;
  status: string;
  hidden?: boolean;
}
