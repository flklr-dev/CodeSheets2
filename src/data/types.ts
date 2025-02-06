export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  output?: string;
  explanation: string;
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  examples: CodeExample[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface ProgrammingLanguage {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: any;
  categories: Category[];
} 