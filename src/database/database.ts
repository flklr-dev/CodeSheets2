import * as SQLite from 'expo-sqlite';
import { SyntaxItem } from '../types';

const db = SQLite.openDatabaseSync('codesheets.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS syntax_items (
          id TEXT PRIMARY KEY,
          categoryId TEXT,
          syntax TEXT,
          description TEXT,
          example TEXT
        );`,
        [],
        () => resolve(true),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const getSyntaxItems = (categoryId: string): Promise<SyntaxItem[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM syntax_items WHERE categoryId = ?;',
        [categoryId],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const addSyntaxItem = (item: SyntaxItem): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO syntax_items (id, categoryId, syntax, description, example) VALUES (?, ?, ?, ?, ?);',
        [item.id, item.categoryId, item.syntax, item.description, item.example],
        () => resolve(),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};