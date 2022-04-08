import { AppPopover } from '../app-popover/app-popover';

declare module 'vue/types/vue' {
    interface Vue {
        /**
         * 工具类
         *
         * @type {Util}
         * @memberof Vue
         */
        $util: any;
        /**
         * 飘窗服务
         *
         * @type {AppPopover}
         * @memberof Vue
         */
        $apppopover: AppPopover;
    }
}
