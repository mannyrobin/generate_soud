import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { API_ENDPOINT, API_LOGIN, API_USER } from '../../shared/constants/api.constant';
import { IResponse } from '../../shared/interfaces/response.interface';
import { UserModel } from '../../shared/models/user.model';

interface IRegisterData {
  first_name: string;
  last_name: string;
  address: string;
  phone: string;
  email: string;
  password: string;
}

@Injectable()
export class RegisterApiService {
  constructor (private _http: HttpClient) {
  }

  register ({ first_name, last_name, address, phone, email, password }: IRegisterData): Observable<IResponse> {
    const params = new HttpParams({
      fromObject: {
        name: first_name,
        last_name: last_name,
        address: address,
        phone: phone,
        email: email,
        password: password,
        city_id: ''
      },
    });

    return this._http.get(
      `${API_ENDPOINT}/${API_USER}/userAdd`,
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
