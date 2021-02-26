module.exports = {
  title: 'eBook Admin',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  // 右侧控制面板显示
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  // 动态面包线栏
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  // 头部是否固定
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  // 菜单栏logo
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
