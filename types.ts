
export interface ServiceHistoryItem {
  title: string;
  sub: string;
  date: string;
  miles: string;
  icon: string;
  verified: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type TabType = 'home' | 'logbook' | 'tracking' | 'advisor';
