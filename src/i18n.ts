import { createApp } from 'vue';
import type { CreateI18nOptions } from 'vue-i18n/dist/vue-i18n.cjs.d';
import { createI18n, I18nOptions } from 'vue-i18n';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 引入 element-plus 中文语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 若需要英文等其他语言包，也可类似引入，这里以中文为例

const messages = {
  'zh-cn': {
    ...zhCn,
    // 可在这里扩展自定义的多语言内容，分页组件相关已在 element-plus 语言包内
  }
};

const i18nOptions: CreateI18nOptions  = {
  locale: 'zh-cn', // 设置默认使用中文
  messages,
};

const i18n = createI18n(i18nOptions);

// 用于在入口文件挂载时，让 element-plus 配合 i18n 生效
export function setupI18n(app: ReturnType<typeof createApp>) {
  app.use(i18n);
  app.use(ElementPlus, {
    locale: zhCn, // 让 element-plus 组件使用中文语言包
  });
}

export default i18n;
