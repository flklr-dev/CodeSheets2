export interface Category {
    id: string;
    name: string;
    icon: any; // for image require
    description: string;
    color: string;
  }
  
  export interface SyntaxItem {
    id: string;
    categoryId: string;
    syntax: string;
    description: string;
    example: string;
  }