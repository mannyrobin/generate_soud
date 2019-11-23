import * as uuid from 'uuid';

import { SoundModel } from './sound.model';

export class PlaylistDataModel {
  list: PlaylistModel[];

  constructor (data: Partial<PlaylistDataModel> = {}) {
    Object.assign(this, data, {
      list: data.list.map(it => new PlaylistModel(it)),
    });
  }
}

export class MixModel {
  id: number;
  uuid: string;
  playlist_id: number;
  sounds: SoundModel[];
  created_at: string;
  updated_at: string;
  duration?: number;

  constructor (data: Partial<MixModel> = {}) {
    Object.assign(this, data, {
      sounds: data.sounds.filter(it => it)
        .map(it => {
          it.uuid = uuid.v4();

          return new SoundModel(it);
        }),
    });
  }
}

export class PlaylistModel {
  id: number;
  name: string;
  sounds: SoundModel[];
  mixes: MixModel[];
  status: string;
  user_id: number;
  created_at: string;
  deleted_by: number;
  trash: number;
  updated_at: string;

  constructor (data: Partial<PlaylistModel> = {}) {
    Object.assign(this, data, {
      sounds: data.sounds ? data.sounds.map(it => new SoundModel(it)) : [],
      mixes: data.mixes ? data.mixes.map(it => new MixModel(it)) : [],
    });
  }
}
