import { filterSinger } from './utils';
import { createSong } from './song';

/**
 *  专辑类模型
 */
class Album {
  constructor(id, mId, name, img, singer, publicTime) {
    this.id = id;
    this.mId = mId;
    this.name = name;
    this.img = img;
    this.singer = singer;
    this.publicTime = publicTime;
  }
}

/**
*  通过专辑列表数据创建专辑对象函数
* @param {*data} data
*/
const createAlbum = data => new Album(
  data.album_id,
  data.album_mid,
  data.album_name,
  `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.album_mid}.jpg?max_age=2592000`,
  filterSinger(data.singers),
  data.public_time,
);

/**
 * 创建歌曲列表
 * @param {*songList} data
 */
const createSongList = data => data.map(song => ({
  ...createSong(song),
}));

/**
 * 通过专辑详情数据船舰专辑详情对象函数
 * @param {*data} data
 */
const createAlbumInfo = data => ({
  ...new Album(
    data.id,
    data.mid,
    data.name,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.mid}.jpg?max_age=2592000`,
    data.singername,
    data.aDate,
  ),
  desc: data.desc,
  songList: createSongList(data.list),
});

export { Album, createAlbum, createAlbumInfo, filterSinger };
