export class SoundModel {
  id: number;
  name: string;
  duration: number;
  hz1: number;
  hz2: number;
  hz3: number;
  hz4: number;
  hz5: number;
  uuid?: string;
  deleted_by?: number;
  status?: string;
  created_at?: string;
  updated_at?: string;
  courses?: any[];

  constructor (data: Partial<SoundModel> = {}) {
    Object.assign(this, data, {
      hz1: Number(data.hz1),
      hz2: Number(data.hz2),
      hz3: Number(data.hz3),
      hz4: Number(data.hz4),
      hz5: Number(data.hz5),
    });
  }
}
