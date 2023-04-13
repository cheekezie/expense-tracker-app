import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title NOT NULL,
            imageUri TEXT NOT NULL,
            location: BLOB NOT NULL,
        )`,
        [],
        // (_, success) => {
        //   resolve(success);
        // },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};
