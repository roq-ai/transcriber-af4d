import { TranscriptionInterface } from 'interfaces/transcription';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  duration: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  transcription?: TranscriptionInterface[];
  organization?: OrganizationInterface;
  _count?: {
    transcription?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  organization_id?: string;
}
