export interface Topic {
  author: Author;
  author_id: string;
  content: string;
  create_at: string;
  good: boolean;
  id: string;
  is_collect: boolean;
  last_reply_at: string;
  replies: Reply[];
  reply_count: number;
  tab: string;
  title: string;
  top: boolean;
  visit_count: number;
}

export interface Reply {
  author: Author;
  content: string;
  create_at: string;
  id: string;
  is_uped: boolean;
  reply_id?: null;
  ups: string[];
}

export interface Author {
  loginname: string;
  avatar_url: string;
}

export interface TopicsState {
  topics: Topic[];
}

export interface RootState {
  topics: TopicsState;
}

export type Tab = "all" | "ask" | "share" | "job" | "good";

export interface TopicState {
  topic: Topic;
}

export interface User {
  avatar_url: string;
  create_at: string;
  githubUsername: string;
  loginname: string;
  recent_replies: Reply[];
  recent_topics: Topic[];
  score: number;
}

export interface UserState {
  user: User;
}
