import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as uuid from 'uuid';

import { API_CATEGORY, API_COURSE, API_ENDPOINT, API_SOUND, API_USER } from '../../shared/constants/api.constant';
import { PlaylistDataModel } from '../model/playlist.model';
import { SoundModel } from '../model/sound.model';

@Injectable()
export class PlayerApiService {
  constructor (private _http: HttpClient) {
  }

  getPlayLists (): Observable<PlaylistDataModel> {
    return this._http.get<PlaylistDataModel>(`${API_ENDPOINT}/${API_USER}/getPlayList`)
      .pipe(
        map((data: any) => new PlaylistDataModel(data)),
      );
  }

  getUserPlayList (userId: number): Observable<PlaylistDataModel> {
    return this._http.get<PlaylistDataModel>(`${API_ENDPOINT}/${API_USER}/getUserPlayList?id=${userId}`)
      .pipe(
        map((data: any) => new PlaylistDataModel(data)),
      );
  }

  getSounds (): Observable<SoundModel[]> {
    return this._http.get(`${API_ENDPOINT}/${API_SOUND}/getSoundList`)
      .pipe(
        map((data: any) => {
          return data.list.map((it) => {
            return new SoundModel({ ...it, uuid: uuid.v4() });
          });
        }),
      );
  }

  getSettings (): Observable<any> {
    return this._http.get(`${API_ENDPOINT}/${API_USER}/getSettings`);
  }

  getCourses (): Observable<any> {
    return this._http.get(`${API_ENDPOINT}/${API_COURSE}/getCourseList`);
  }

  getGroupedCategories (): Observable<any> {
    return this._http.get(`${API_ENDPOINT}/${API_CATEGORY}/getCateoryListGrouped`);
  }

  getCategories (): Observable<any> {
    return this._http.get(`${API_ENDPOINT}/${API_CATEGORY}/getCateoryList`);
  }

  addSounds (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_COURSE}/addSounds`, data);
  }

  renameCategory (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_CATEGORY}/renameCategory`, data);
  }

  renameCourse (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_COURSE}/renameCourse`, data);
  }

  addCourse (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_COURSE}/addCourse`, data);
  }

  addCategory (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_CATEGORY}/addCategory`, data);
  }

  deleteCategory (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_CATEGORY}/deleteCategory`, data);
  }

  deleteCourse (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_COURSE}/deleteCourse`, data);
  }

  addPlaylist (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_USER}/addPlayList`, data);
  }

  renamePlaylist (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_USER}/renamePlaylist`, data);
  }

  addPlayListSound (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_USER}/addPlayListSound`, data);
  }

  deletePlaylist (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_USER}/deletePlaylist`, data);
  }

  addMix (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_USER}/addMix`, data);
  }

  resetMix (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_USER}/resetMix`, data);
  }

  addMixSounds (data: any): Observable<any> {
    return this._http.post(`${API_ENDPOINT}/${API_USER}/addMixSounds`, data);
  }
}
