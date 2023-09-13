export interface TaskItem {
  id?: string;
  title: string;
  description: string;
  status: boolean;
}

export interface DefaultResponse {
  status: string;
  message: string;
  data?: any;
}
