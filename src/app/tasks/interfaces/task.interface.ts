export interface TaskItem {
    id?: string;
    title: string;
    description: string;
    status: boolean;
  }

  export interface AddResponse {
    status:  string;
    message: string;
    data?:   any;
}
