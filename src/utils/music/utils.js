
/**
 * 处理歌手列表
 * @param {*歌手列表} singers
 */
const filterSinger = (singers) => {
  const singerArray = singers.map(singer => singer.singer_name || singer.name);
  return singerArray.join('/');
};

export { filterSinger };
