const menuList = [
  {
    title: '推荐',
    path: '/recommend',
  },
  {
    title: '排行榜',
    path: '/ranking',
  },
  {
    title: '歌手',
    path: '/singer',
  },
  {
    title: '搜索',
    path: '/search',
  },
];

const currentPageIndex = (pathname) => {
  let pageIndex = 0;
  menuList.forEach((item, index) => {
    if (item.path === pathname) {
      pageIndex = index;
    }
  });
  return pageIndex;
};

export { menuList, currentPageIndex };
