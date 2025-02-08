export interface Example {
  id: string;
  title: string;
  description: string;
  code: string;
  explanation: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon?: string;
  examples: Example[];
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: any;
  categories: Category[];
} 