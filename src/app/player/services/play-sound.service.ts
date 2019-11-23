import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

import { MixModel } from '../model/playlist.model';
import { SoundModel } from '../model/sound.model';

const TOTAL_HZS = 5;
const DECIBEL_LEVEL = -20;

@Injectable()
export class PlayerSoundService {
  get isSomePlaying (): boolean {
    return Object.values(this._playing).some(it => it);
  }

  get playingSounds (): string[] {
    return Object.keys(this._playing).filter(key => this._playing[key]);
  }

  // fixed Decibel value
  
  private _osc: { [key: string]: OscillatorNode[] } = {};
  private _playing: { [key: string]: boolean }      = {};
  private _freq: { [key: string]: number[] }        = {};
  private _audioContext: AudioContext               = new AudioContext();

  isSoundPlaying (uuid: string): boolean {
    return this._playing[uuid];
  }

  playSound (sound: SoundModel): void {
    this.updateFreq(sound);
    this.toggle(sound);
  }

  stopSound (sound: SoundModel): void {
    this.toggle(sound);
  }

  updateSelectedSoundsUuid (soundList: SoundModel[], selectedSoundList: SoundModel[]): SoundModel[] {
    return soundList.map(it => {
      const soundUuid = it.uuid;

      const newSoundInstance = {
        ...it,
        uuid: uuid.v4(),
      };

      const foundIndex = selectedSoundList.findIndex(it => it.uuid === soundUuid);

      if (foundIndex >= 0) {
        selectedSoundList[foundIndex] = newSoundInstance;
      }

      return newSoundInstance;
    });
  }

  getSoundsFromSelectedMixes (mixes: MixModel[]): SoundModel[] {
    const mixesSounds = mixes.map(mix => mix.sounds);

    return [].concat(...mixesSounds);
  }

  private updateFreq (sound: SoundModel): void {
    for (let i = 1; i <= TOTAL_HZS; i++) {
      const hz = sound[`hz${i}`];

      if (!this._freq[sound.uuid]) {
        this._freq[sound.uuid] = [];
      }

      this._freq[sound.uuid][i] = hz;

      if (this._osc[sound.uuid] && this._osc[sound.uuid][i]) {
        this._osc[sound.uuid][i].frequency.value = hz;
      }
    }
  }

  convertDBToGain(Db) {
    return Math.pow(10, Db / 20);
  }

  private toggle (sound: SoundModel): void {
    if (this._playing[sound.uuid]) {
      for (let i = 1; i <= TOTAL_HZS; i++) {
        this._osc[sound.uuid][i].stop(0);
      }

      this._playing[sound.uuid] = false;

      return;
    }

    if (!this._osc[sound.uuid]) {
      this._osc[sound.uuid] = [];
    }

    for (let i = 1; i <= TOTAL_HZS; i++) {
      this._osc[sound.uuid][i] = this._audioContext.createOscillator();

      var gainNode = this._audioContext.createGain();
      this._osc[sound.uuid][i].connect(gainNode);

      gainNode.gain.value = this.convertDBToGain(DECIBEL_LEVEL);
      this._osc[sound.uuid][i].frequency.value = this._freq[sound.uuid][i];

      gainNode.connect(this._audioContext.destination);
      this._osc[sound.uuid][i].start(0);
    }

    this._playing[sound.uuid] = true;
  }
}
