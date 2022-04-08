import { MDControlBase } from './MDControlBase';

/**
 * 列表部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {MDControlBase}
 */
export class ListControlBase extends MDControlBase {
    /**
     * 加载的数据是否附加在items之后
     *
     * @type {boolean}
     * @memberof ListControlBase
     */
    public isAddBehind: boolean = false;

    /**
     * 部件创建完毕
     *
     * @protected
     * @memberof ListControlBase
     */
    protected ctrlCreated(): void {
        super.ctrlCreated();
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action, 'load')) {
                    this.curPage = 1;
                    this.items = [];
                    this.load(data);
                }
                if (Object.is(action, 'refresh')) {
                    this.refresh(data);
                }
            });
        }
    }

    /**
     * 部件挂载完毕
     *
     * @protected
     * @memberof ListControlBase
     */
    protected ctrlMounted(): void {
        const loadMoreCallBack: any = this.throttle(this.loadMore, 3000);
        this.$el.addEventListener('scroll', () => {
            if (this.$el.scrollTop + this.$el.clientHeight >= this.$el.scrollHeight) {
                loadMoreCallBack();
            }
        });
    }

    /**
     * 加载更多
     *
     * @memberof ListControlBase
     */
    public loadMore() {
        if (this.totalRecord > this.items.length) {
            this.curPage = ++this.curPage;
            this.isAddBehind = true;
            this.load({});
        }
    }

    /**
     * 消息中心
     *
     * @protected
     * @param {*} data
     * @memberof ListControlBase
     */
    protected accChange(data: any): void {
        this.refresh();
    }

    /**
     * 刷新
     *
     * @param {*} [args]
     * @memberof ListControlBase
     */
    public refresh(args?: any) {
        this.isAddBehind = false;
        this.load(args);
    }

    /**
     * 列表数据加载
     *
     * @param {*} [opt={}]
     * @returns {void}
     * @memberof ListControlBase
     */
    public load(opt: any = {}): void {
        if (!this.fetchAction) {
            this.$Notice.error({ title: '错误', desc: '视图列表fetchAction参数未配置' });
            return;
        }
        const arg: any = { ...opt };
        const page: any = {};
        if (this.isEnablePagingBar) {
            Object.assign(page, { page: this.curPage - 1, size: this.limit });
        }
        // 设置排序
        if (!Object.is(this.minorSortDir, '') && !Object.is(this.minorSortPSDEF, '')) {
            const sort: string = this.minorSortPSDEF + ',' + this.minorSortDir;
            Object.assign(page, { sort: sort });
        }
        Object.assign(arg, page);
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        let tempViewParams: any = parentdata.viewparams ? parentdata.viewparams : {};
        if (this.viewparams) {
            Object.assign(tempViewParams, JSON.parse(JSON.stringify(this.viewparams)));
        }
        Object.assign(arg, { viewparams: tempViewParams });
        const post: Promise<any> = this.service.search(
            this.fetchAction,
            this.context ? JSON.parse(JSON.stringify(this.context)) : {},
            arg,
            this.showBusyIndicator
        );
        post.then(
            (response: any) => {
                if (!response || response.status !== 200) {
                    if (response.errorMessage) {
                        this.$Notice.error({ title: '错误', desc: response.errorMessage });
                    }
                    return;
                }
                const data: any = response.data;
                if (!this.isAddBehind) {
                    this.items = [];
                }
                if (data && data.length > 0) {
                    let datas = JSON.parse(JSON.stringify(data));
                    datas.map((item: any) => {
                        Object.assign(item, { isselected: false });
                    });
                    this.totalRecord = response.total;
                    this.items.push(...datas);
                    this.items = this.arrayNonRepeatfy(this.items);
                }
                this.isAddBehind = false;
                this.$emit('load', this.items);
                if (this.isSelectFirstDefault) {
                    if (this.selections && this.selections.length > 0) {
                        this.selections.forEach((select: any) => {
                            const index = this.items.findIndex((item: any) => Object.is(item.srfkey, select.srfkey));
                            if (index != -1) {
                                this.handleClick(this.items[index]);
                            }
                        });
                    } else {
                        this.handleClick(this.items[0]);
                    }
                }
            },
            (response: any) => {
                if (response && response.status === 401) {
                    return;
                }
                this.$Notice.error({ title: '错误', desc: response.errorMessage });
            }
        );
    }

    /**
     * 列表数据去重
     *
     * @param {Array<any>} [arr]
     * @returns {void}
     * @memberof ListControlBase
     */
    public arrayNonRepeatfy(arr: Array<any>) {
        let map = new Map();
        let array = new Array();
        for (let i = 0; i < arr.length; i++) {
            map.set(arr[i].srfkey, arr[i]);
        }
        map.forEach((value: any, key: string, map: any) => {
            array.push(value);
        });
        return array;
    }

    /**
     * 节流
     *
     * @param {Array<any>} [arr]
     * @returns {void}
     * @memberof ListControlBase
     */
    public throttle(fn: any, wait: number) {
        let time = 0;
        return () => {
            let now = Date.now();
            let args = arguments;
            if (now - time > wait) {
                fn.apply(this, args);
                time = now;
            }
        };
    }

    /**
     * 删除
     *
     * @param {any[]} items
     * @returns {Promise<any>}
     * @memberof ListControlBase
     */
    public async remove(items: any[]): Promise<any> {
        if (!this.removeAction) {
            this.$Notice.error({ title: '错误', desc: `${this.name}列表removeAction参数未配置` });
            return;
        }
        if (items.length === 0) {
            return;
        }
        let dataInfo = '';
        items.forEach((record: any, index: number) => {
            let srfmajortext = record.srfmajortext;
            if (index < 5) {
                if (!Object.is(dataInfo, '')) {
                    dataInfo += '、';
                }
                dataInfo += srfmajortext;
            } else {
                return false;
            }
        });

        if (items.length < 5) {
            dataInfo = dataInfo + ' 共' + items.length + '条数据';
        } else {
            dataInfo = dataInfo + '...' + ' 共' + items.length + '条数据';
        }

        const removeData = () => {
            let keys: any[] = [];
            items.forEach((data: any) => {
                keys.push(data.srfkey);
            });
            let _removeAction = keys.length > 1 ? 'removeBatch' : this.removeAction;
            const context: any = JSON.parse(JSON.stringify(this.context));
            const post: Promise<any> = this.service.delete(
                _removeAction,
                Object.assign(context, { [this.appDeName]: keys.join(';') }),
                Object.assign({ [this.appDeName]: keys.join(';') }, { viewparams: this.viewparams }),
                this.showBusyIndicator
            );
            return new Promise((resolve: any, reject: any) => {
                post.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '删除数据失败,' + response.info });
                        return;
                    } else {
                        this.$Notice.success({ title: '', desc: '删除成功!' });
                    }
                    //删除items中已删除的项
                    items.forEach((data: any) => {
                        this.items.some((item: any, index: number) => {
                            if (Object.is(item.srfkey, data.srfkey)) {
                                this.items.splice(index, 1);
                                return true;
                            }
                        });
                    });
                    this.$emit('remove', null);
                    this.selections = [];
                    resolve(response);
                }).catch((response: any) => {
                    if (response && response.status === 401) {
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
                });
            });
        };

        dataInfo = dataInfo
            .replace(/[null]/g, '')
            .replace(/[undefined]/g, '')
            .replace(/[ ]/g, '');
        this.$Modal.confirm({
            title: '警告',
            content: '确认要删除 ' + dataInfo + '，删除操作将不可恢复？',
            onOk: () => {
                removeData();
            },
            onCancel: () => {},
        });
        return removeData;
    }
}
