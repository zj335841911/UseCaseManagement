/**
 * 主题
 *
 * @export
 * @class StudioXtermTheme
 */
export class StudioXtermTheme {
    /**
     * 主题配置
     *
     * @protected
     * @type {*}
     * @memberof StudioXtermTheme
     */
    protected static readonly themeConfigs: any = {
        dark: {
            background: '#1E1E1E',
            foreground: '#FFFFFF',
            cursor: '#FFFFFF'
        },
        'blue-dark': {
            background: '#002B37',
            foreground: '#FFFFFF',
            cursor: '#FFFFFF'
        },
        'dark-white': {
            background: '#FFFFFF',
            foreground: '#000000',
            cursor: '#000000',
            selection: 'rgba(0, 0, 0, 0.5)'
        },
        light: {
            background: '#F3F3F3',
            foreground: '#000000',
            cursor: '#000000',
            selection: 'rgba(0, 0, 0, 0.5)'
        }
    };

    /**
     * 获取主题配置
     *
     * @static
     * @param {string} themeName
     * @returns {*}
     * @memberof StudioXtermTheme
     */
    public static getThemeConfig(themeName: string): any {
        return this.themeConfigs[themeName];
    }
}