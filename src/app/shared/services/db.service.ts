import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

import { SQL_DB_NAME } from '../constants/app.constant';

@Injectable({ providedIn: 'root' })
export class DbService {
  private _dbInstance: any;

  constructor (
    private _platform: Platform,
    private _sqlite: SQLite,
  ) {
  }

  async createDbConnection (): Promise<any> {
    if (!this._platform.is('cordova')) {
      const db = (window as any).openDatabase(SQL_DB_NAME, '1.0', 'DEV', 5 * 1024 * 1024);

      this._dbInstance = await this.browserDBInstance(db);
    } else {
      this._dbInstance = await this._sqlite.create({
        name: SQL_DB_NAME,
        location: 'default',
      });
    }

    return this._dbInstance;
  }

  async executeSql (sql: string, values: any[] = []): Promise<any> {
    if (!this._dbInstance) {
      await this.createDbConnection();
    }

    return this._dbInstance.executeSql(
      sql,
      values,
    );
  }

  private browserDBInstance (db: any): any {
    return {
      executeSql: (sql: string, values: any[] = []) => {
        return new Promise(resolve => {
          db.transaction((tx) => {
            tx.executeSql(sql, values, (tx, rs) => {
              resolve(rs);
            });
          });
        });
      },

      sqlBatch: (commands: string[]) => {
        return new Promise(resolve => {
          const batch: any[] = [];

          db.transaction((tx) => {
            for (const command of commands) {
              batch.push(new Promise((resolve) => {
                tx.executeSql(command, [], () => {
                  resolve(true);
                });
              }));

              Promise.all(batch)
                .then(() => resolve(true));
            }
          });
        });
      },
    };
  }
}
