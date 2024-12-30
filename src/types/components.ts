export interface AuthorizationProps {
  authKey: string;
  authToken: string;
  apiHost: string;
  onLoadingChange?: (loading: boolean) => void;
  onError?: (error: string | null) => void;
  onStartChat: () => void;
}

export interface DatasetInfo {
  id: string;
  rowCount?: number;
  name?: string;
  error?: string;
}
