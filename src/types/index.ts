export interface Category {
    id: string;
    name: string;
    icon: any; // for image require
    description: string;
    color: string;
    subcategories: Subcategory[];
  }
  
  export interface SyntaxItem {
    id: string;
    categoryId: string;
    syntax: string;
    description: string;
    example: string;
  }

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  examples: CodeExample[];
}

export interface CodeExample {
  id: string;
  title: string;
  code: string;
}