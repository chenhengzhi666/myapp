import themes from '../src/utils/theme';
const { gold: theme } = themes;
export default {
  // 说明 描述
  '@font-size-caption-sm': '12px',
  // 主字体
  '@font-size-base': '14px',
  // 副标题
  '@font-size-subhead': '16px',
  // 标题
  '@font-size-caption': '20px',
  // 大标题
  '@font-size-heading': '22px',

  // 圆角
  '@radius-sm': '2px',
  '@radius-md': '4px',

  // 间距
  '@space-sm': '4px',
  '@space-md': '8px',
  '@space-lg': '12px',

  // 字色
  // 标题
  '@font-color-title': 'rgba(0, 0, 0, 0.85)',
  // 正文
  '@font-color-base': 'rgba(0, 0, 0, 0.65)',
  // 描述
  '@font-color-caption': 'rgba(0, 0, 0, 0.45)',
  // 失效
  '@font-color-disable': 'rgba(0, 0, 0, 0.25)',

  // default
  '@theme-color': theme.themeColor,
  '@theme-bg-color': theme.themeBgColor,
  '@theme-font-color-title': theme.themeFontColorTitle,
  '@theme-font-color-base': theme.themeFontColorBase,
  '@theme-font-color-caption': theme.themeFontColorCaption,
  '@theme-mask-color': theme.themeMaskColor,
  // '@primary-color': 'gold' // antd全局主色
};
