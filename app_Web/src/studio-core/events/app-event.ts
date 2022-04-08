import { IBzEventEmitter } from '../utils/ibz-event-emitter';
import { AppEvents } from './interface/app-events';

/**
 * App搜索事件集
 *
 * @export
 * @class AppEvent
 */
export class AppEvent<K extends keyof AppEvents> extends IBzEventEmitter<K, AppEvents[K]> {
    /**
     * 唯一实例
     *
     * @private
     * @static
     * @memberof AppEvent
     */
    private static readonly instance = new AppEvent();

    /**
     * Creates an instance of AppEvent.
     * @memberof AppEvent
     */
    constructor() {
        super();
        if (AppEvent.instance) {
            return AppEvent.instance as any;
        }
    }

    /**
     * 获取唯一实例
     *
     * @static
     * @return {*}  {AppEvent}
     * @memberof AppEvent
     */
    static getInstance() {
        return this.instance;
    }
}
