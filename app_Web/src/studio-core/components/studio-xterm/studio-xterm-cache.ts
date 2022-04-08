import { Subject, Observable } from 'rxjs';

/**
 * 控制台缓存
 *
 * @export
 * @class StudioXtermCache
 */
export class StudioXtermCache {
    /**
     * 历史消息分割线
     *
     * @private
     * @type {string}
     * @memberof StudioXtermCache
     */
    private splitLineText: string = '\x1b[33m-----------------------------------------历史记录----------------------------------------- \x1b[0m';
    /**
     * 当前激活分页
     *
     * @type {string}
     * @memberof StudioXtermCache
     */
    public activeType: string = '默认';
    /**
     * 最后一次分类
     *
     * @type {string}
     * @memberof StudioXtermCache
     */
    public lastType: string = '默认';
    /**
     * 类型是否锁定
     *
     * @type {boolean}
     * @memberof StudioXtermCache
     */
    public typeLock: boolean = false;
    /**
     * 发送消息
     *
     * @protected
     * @type {Subject<any>}
     * @memberof StudioXtermCache
     */
    protected next: Subject<any> = new Subject();
    /**
     * 缓存
     *
     * @type {Map<string, any[]>}
     * @memberof StudioXtermCache
     */
    private $cache: Map<string, any[]> = new Map();
    public get cache(): Map<string, any[]> {
        return this.$cache;
    }
    /**
     * 计数缓存
     *
     * @private
     * @type {Map<string, any[]>}
     * @memberof StudioXtermCache
     */
    private $countCache: Map<string, any[]> = new Map();
    public get countCache(): Map<string, any[]> {
        return this.$countCache;
    }
    /**
     * 缓存行数量
     *
     * @private
     * @type {number}
     * @memberof StudioXtermCache
     */
    private cacheRow: number = 1000;
    /**
     * 所有未读消息计数
     *
     * @type {number}
     * @memberof StudioXtermCache
     */
    public allCount: number = 0;
    /**
     * 所有消息计数变更
     *
     * @type {Subject<any>}
     * @memberof StudioXtermCache
     */
    public allCountSubject: Subject<any> = new Subject();
    /**
     * 是否正在显示命令行区域
     *
     * @private
     * @type {boolean}
     * @memberof StudioXtermCache
     */
    private $isShowTerminal: boolean = false;
    public set isShowTerminal(val: boolean) {
        this.$isShowTerminal = val;
        this.countCacheToCache();
    }
    public get isShowTerminal(): boolean {
        return this.$isShowTerminal;
    }

    /**
     * Creates an instance of StudioXtermCache.
     * @memberof StudioXtermCache
     */
    constructor() {
        this.$cache.set('默认', []);
    }

    /**
     * 变更类型锁定
     *
     * @memberof StudioXtermCache
     */
    public changeTypeLock(): void {
        this.typeLock = !this.typeLock;
    }

    /**
     * 缓存消息进入实际缓存
     *
     * @private
     * @memberof StudioXtermCache
     */
    private countCacheToCache(): void {
        this.$countCache.forEach((arr: any[], type: string) => {
            const arr2: any[] = this.$cache.get(type) || [];
            if (arr2.length > 0) {
                arr2.push(this.splitLineText);
            }
            arr2.push(...arr);
            this.$cache.set(type, arr2);
            this.$countCache.delete(type);
            this.changeAllCount();
        });
    }

    /**
     * 清理当前激活控制台数据
     *
     * @memberof StudioXtermCache
     */
    public clearActiveConsole(): void {
        if (this.isShowTerminal) {
            this.$cache.delete(this.activeType);
        }
    }

    /**
     * 全局未读计数变更
     *
     * @returns {void}
     * @memberof StudioXtermCache
     */
    public changeAllCount(): void {
        let num: number = 0;
        this.$countCache.forEach((arr: any[]) => {
            num += arr.length;
        });
        this.allCount = num;
        this.allCountSubject.next(this.allCount);
    }

    /**
     * 缓存消息
     *
     * @param {*} message
     * @memberof StudioXtermCache
     */
    public setCacheItem(message: any): void {
        if (!message.subtype || Object.is(message.subtype, '')) {
            message.subtype = '默认';
        }
        this.lastType = this.activeType;
        if (!this.typeLock && !Object.is(message.subtype, this.activeType)) {
            this.activeType = message.subtype;
        }
        this.$setCacheItem(message.subtype, message);
        if (Object.is(message.subtype, this.activeType)) {
            this.next.next(message);
        }
    }

    /**
     * 根据类型缓存数据
     *
     * @private
     * @param {string} type
     * @param {*} message
     * @memberof StudioXtermCache
     */
    private $setCacheItem(type: string, message: any): void {
        if (this.isShowTerminal) {
            const arr: any[] = this.cache.get(type) || [];
            arr.push(message.content);
            if (arr.length > this.cacheRow) {
                arr.splice(0, arr.length - this.cacheRow);
            }
            this.cache.set(type, arr);
        } else {
            const arr: any[] = this.$countCache.get(type) || [];
            arr.push(message.content);
            if (arr.length > this.cacheRow) {
                arr.splice(0, arr.length - this.cacheRow);
            }
            this.$countCache.set(type, arr);
            this.changeAllCount();
        }
    }

    /**
     * 根据类型获取数组
     *
     * @param {string} type
     * @returns {any[]}
     * @memberof StudioXtermCache
     */
    public getCache(type: string): any[] {
        return this.cache.get(type) || [];
    }

    /**
     * 订阅消息事件
     *
     * @returns {Observable<any>}
     * @memberof StudioXtermCache
     */
    public subMessage(): Observable<any> {
        return this.next.asObservable();
    }

}

export const sxCache = new StudioXtermCache();