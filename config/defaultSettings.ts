import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'U Know',
  pwa: false,
  logo: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/161/迪迦logo瘦版.png',
  iconfontUrl: '',
};

export default Settings;
