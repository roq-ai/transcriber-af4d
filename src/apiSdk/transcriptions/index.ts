import axios from 'axios';
import queryString from 'query-string';
import { TranscriptionInterface, TranscriptionGetQueryInterface } from 'interfaces/transcription';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTranscriptions = async (
  query?: TranscriptionGetQueryInterface,
): Promise<PaginatedInterface<TranscriptionInterface>> => {
  const response = await axios.get('/api/transcriptions', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTranscription = async (transcription: TranscriptionInterface) => {
  const response = await axios.post('/api/transcriptions', transcription);
  return response.data;
};

export const updateTranscriptionById = async (id: string, transcription: TranscriptionInterface) => {
  const response = await axios.put(`/api/transcriptions/${id}`, transcription);
  return response.data;
};

export const getTranscriptionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/transcriptions/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTranscriptionById = async (id: string) => {
  const response = await axios.delete(`/api/transcriptions/${id}`);
  return response.data;
};
