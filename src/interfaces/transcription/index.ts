import { VideoInterface } from 'interfaces/video';
import { GetQueryInterface } from 'interfaces';

export interface TranscriptionInterface {
  id?: string;
  content: string;
  video_id: string;
  created_at?: any;
  updated_at?: any;

  video?: VideoInterface;
  _count?: {};
}

export interface TranscriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  video_id?: string;
}
