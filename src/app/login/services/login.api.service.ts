import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API_ENDPOINT, API_LOGIN, API_USER } from '../../shared/constants/api.constant';
import { IResponse } from '../../shared/interfaces/response.interface';
import { UserModel } from '../../shared/models/user.model';

@Injectable()
export class LoginApiService {
  constructor (private _http: HttpClient) {
  }

  login ({ email, password }: { email: string, password: string }): Observable<IResponse> {
    const params = new HttpParams({
      fromObject: {
        email,
        password,
      },
    });

    return this._http.get(
      `${API_ENDPOINT}/${API_USER}/${API_LOGIN}`,
      { params },
    )
      .pipe(
        map((response: IResponse) => {
            if (response.data) {
              response = {
                ...response,
                data: new UserModel(response.data),
              };
            }

            return response;
          },
        ),
      );
  }
}
