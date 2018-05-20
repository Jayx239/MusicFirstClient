import {AudioContainer} from '../../media/audio/audio-container';
import {MediaSource} from '../../media/media-source';

export interface Track {
  uploader: string;
  artist: string;
  songName: string;
  fileName: string;
  type: string;
  contentLength: number;
  path: string;
}
