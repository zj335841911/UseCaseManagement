import qs from 'qs';
import Schema from 'async-validator';

/**
 * 平台工具类
 *
 * @export
 * @class Util
 */
export class Util {
    /**
     * App唯一自增主键记录值
     *
     * @private
     * @static
     * @memberof Util
     */
    private static autoIncrementPrimaryKey = 0;

    /**
     * 创建 UUID
     *
     * @static
     * @returns {string}
     * @memberof Util
     */
    public static createUUID(): string {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    /**
     * 创建序列号
     *
     * @static
     * @returns {number}
     * @memberof Util
     */
    public static createSerialNumber(): number {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000);
        }
        return s4();
    }

    /**
     * 获取当前应用界面唯一标识
     *
     * @static
     * @return {*}  {number}
     * @memberof Util
     */
    public static generateAppMajorKey(): number {
        return this.autoIncrementPrimaryKey++;
    }

    /**
     * 判断是否为一个函数
     *
     * @static
     * @param {*} func
     * @returns {boolean}
     * @memberof Util
     */
    public static isFunction(func: any): boolean {
        return typeof func === 'function';
    }

    /**
     *
     *
     * @static
     * @param {*} [o={}]
     * @memberof Util
     */
    public static processResult(o: any = {}): void {
        if (o.url != null && o.url !== '') {
            window.location.href = o.url;
        }
        if (o.code != null && o.code !== '') {
            // tslint:disable-next-line:no-eval
            eval(o.code);
        }

        if (o.downloadurl != null && o.downloadurl !== '') {
            const downloadurl = this.parseURL2(o.downloadurl, '');
            this.download(downloadurl);
        }
    }

    /**
     * 下载文件
     *
     * @static
     * @param {string} url
     * @memberof Util
     */
    public static download(url: string): void {
        window.open(url, '_blank');
    }

    /**
     *
     *
     * @static
     * @param {any} url
     * @param {any} params
     * @returns {string}
     * @memberof Util
     */
    public static parseURL2(url: string, params: any): string {
        let tmpURL;
        if (url.indexOf('../../') !== -1) {
            tmpURL = url.substring(url.indexOf('../../') + 6, url.length);
        } else if (url.indexOf('/') === 0) {
            tmpURL = url.substring(url.indexOf('/') + 1, url.length);
        } else {
            tmpURL = url;
        }

        if (params) {
            return tmpURL + (url.indexOf('?') === -1 ? '?' : '&');
        } else {
            return tmpURL;
        }
    }

    /**
     * 是否是数字
     *
     * @param {*} num
     * @returns {boolean}
     * @memberof Util
     */
    public static isNumberNaN(num: any): boolean {
        return Number.isNaN(num) || num !== num;
    }

    /**
     * 是否未定义
     *
     * @static
     * @param {*} value
     * @returns {boolean}
     * @memberof Util
     */
    public static isUndefined(value: any): boolean {
        return typeof value === 'undefined';
    }

    /**
     * 是否为空
     *
     * @static
     * @param {*} value
     * @returns {boolean}
     * @memberof Util
     */
    public static isEmpty(value: any): boolean {
        return this.isUndefined(value) || Object.is(value, '') || value === null || value !== value;
    }

    /**
     * 转换为矩阵参数
     *
     * @static
     * @param {*} obj
     * @returns {*}
     * @memberof Util
     */
    public static formatMatrixStringify(obj: any): any {
        let str: string = '';
        if (obj && !(obj instanceof Array) && obj instanceof Object) {
            const keys: string[] = Object.keys(obj);
            keys.forEach((key: string) => {
                if (!obj[key]) {
                    return;
                }
                if (!Object.is(str, '')) {
                    str += ';';
                }
                str += `${key}=${obj[key]}`;
            });
        }
        return Object.is(str, '') ? undefined : str;
    }

    /**
     * 准备路由参数
     *
     * @static
     * @param {*} { route: route, sourceNode: sourceNode, targetNode: targetNode, data: data }
     * @returns {*}
     * @memberof Util
     */
    public static prepareRouteParmas({
        route: route,
        sourceNode: sourceNode,
        targetNode: targetNode,
        data: data,
    }: any): any {
        const params: any = {};
        if (!sourceNode || (sourceNode && Object.is(sourceNode, ''))) {
            return params;
        }
        if (!targetNode || (targetNode && Object.is(targetNode, ''))) {
            return params;
        }
        const indexName = route.matched[0].name;
        Object.assign(params, { [indexName]: route.params[indexName] });
        Object.assign(params, { [targetNode]: this.formatMatrixStringify(data) });
        return params;
    }

    /**
     * 获取当前值类型
     *
     * @static
     * @param {*} obj
     * @returns
     * @memberof Util
     */
    public static typeOf(obj: any): string {
        const toString = Object.prototype.toString;
        const map: any = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object',
        };
        return map[toString.call(obj)];
    }

    /**
     * 深拷贝(deepCopy)
     *
     * @static
     * @param {*} data
     * @returns {*}
     * @memberof Util
     */
    public static deepCopy(data: any): any {
        const t = this.typeOf(data);
        let o: any;

        if (t === 'array') {
            o = [];
        } else if (t === 'object') {
            o = {};
        } else {
            return data;
        }

        if (t === 'array') {
            for (let i = 0; i < data.length; i++) {
                o.push(this.deepCopy(data[i]));
            }
        } else if (t === 'object') {
            for (let i in data) {
                o[i] = this.deepCopy(data[i]);
            }
        }
        return o;
    }

    /**
     * 名称格式化
     *
     * @static
     * @param {string} name
     * @returns {string}
     * @memberof Util
     */
    public static srfFilePath2(name: string): string {
        if (!name || (name && Object.is(name, ''))) {
            throw new Error('名称异常');
        }
        name = name.replace(/[_]/g, '-');
        let state: number = 0;
        let _str = '';
        const uPattern = /^[A-Z]{1}$/;

        const str1 = name.substring(0, 1);
        const str2 = name.substring(1);
        state = uPattern.test(str1) ? 1 : 0;
        _str = `${_str}${str1.toLowerCase()}`;

        for (let chr of str2) {
            if (uPattern.test(chr)) {
                if (state === 1) {
                    _str = `${_str}${chr.toLowerCase()}`;
                } else {
                    _str = `${_str}-${chr.toLowerCase()}`;
                }
                state = 1;
            } else {
                _str = `${_str}${chr.toLowerCase()}`;
                state = 0;
            }
        }
        _str = _str.replace(/---/g, '-').replace(/--/g, '-');

        return _str;
    }

    /**
     * 附加参数格式化
     *
     * @static
     * @param {any} arg 表单数据
     * @param {any} parent 外层context或viewparams
     * @param {any} params 附加参数
     * @returns {any}
     * @memberof Util
     */
    public static formatData(arg: any, parent: any, params: any): any {
        let _data: any = {};
        Object.keys(params).forEach((name: string) => {
            if (!name) {
                return;
            }
            let value: string | null = params[name];
            if (value && value.startsWith('%') && value.endsWith('%')) {
                const key = value.substring(1, value.length - 1);
                if (arg && arg.hasOwnProperty(key)) {
                    if (arg[key] !== null && arg[key] !== undefined) {
                        value = arg[key];
                    } else if (parent[key] !== null && parent[key] !== undefined) {
                        value = parent[key];
                    } else {
                        value = null;
                    }
                } else {
                    value = null;
                }
            }
            Object.assign(_data, { [name]: value });
        });
        return _data;
    }

    /**
     * 计算导航数据
     * 先从当前数据目标计算，然后再从当前上下文计算，最后从当前视图参数计算，没有则为null
     *
     * @static
     * @param {any} data 表单数据
     * @param {any} parentContext 外层context
     * @param {any} parentParam 外层param
     * @param {any} params 附加参数
     * @returns {any}
     * @memberof Util
     */
    public static computedNavData(data: any, parentContext: any, parentParam: any, params: any): any {
        let _data: any = {};
        if (params && Object.keys(params).length > 0) {
            Object.keys(params).forEach((name: string) => {
                if (!name) {
                    return;
                }
                let value: string | null = params[name];
                if (value && value.startsWith('%') && value.endsWith('%')) {
                    const key = value.substring(1, value.length - 1).toLowerCase();
                    if (data && data.hasOwnProperty(key)) {
                        value = data[key];
                    } else if (parentContext && parentContext[key]) {
                        value = parentContext[key];
                    } else if (parentParam && parentParam[key]) {
                        value = parentParam[key];
                    } else {
                        value = null;
                    }
                }
                Object.assign(_data, { [name.toLowerCase()]: value });
            });
        }
        return _data;
    }

    /**
     * 日期格式化
     *
     * @static
     * @param {string} fmt 格式化字符串
     * @param {any} date 日期对象
     * @returns {string}
     * @memberof Util
     */
    public static dateFormat(date: any, fmt: string = 'YYYY-mm-dd HH:MM:SS'): string {
        let ret;
        const opt: any = {
            'Y+': date.getFullYear().toString(), // 年
            'm+': (date.getMonth() + 1).toString(), // 月
            'd+': date.getDate().toString(), // 日
            'H+': date.getHours().toString(), // 时
            'M+': date.getMinutes().toString(), // 分
            'S+': date.getSeconds().toString(), // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp('(' + k + ')').exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
            }
        }
        return fmt;
    }

    /**
     * 深度合并对象
     *
     * @param FirstOBJ 目标对象
     * @param SecondOBJ 原对象
     * @returns {Object}
     * @memberof Util
     */
    public static deepObjectMerge(FirstOBJ: any, SecondOBJ: any) {
        for (var key in SecondOBJ) {
            FirstOBJ[key] =
                FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]'
                    ? this.deepObjectMerge(FirstOBJ[key], SecondOBJ[key])
                    : (FirstOBJ[key] = SecondOBJ[key]);
        }
        return FirstOBJ;
    }

    /**
     * 表单项校验
     *
     * @param property 表单项属性名
     * @param data 表单数据
     * @param rules 表单值规则
     * @returns {Promise}
     * @memberof Util
     */
    public static validateItem(property: string, data: any, rules: any) {
        // 1.获取数值和规则
        const value = data[property];
        const rule = rules[property];
        // 2.创建校验规则
        const schema = new Schema({ [property]: rule });
        // 校验返回Promise
        return schema.validate({ [property]: value });
    }

    /**
     * 处理数据
     *
     * @static
     * @param {*} params
     * @param {string} sep
     * @returns
     * @memberof Util
     */
    public static handleParams(params: any, sep: string) {
        return qs.stringify(params, { delimiter: sep });
    }

    /**
     * 设置cookie
     *
     * @static
     * @param {*} name 名称
     * @param {*} value 值
     * @param {*} day 过期天数
     * @param {boolean} [isDomain=false] 是否设置在主域下
     * @param {string} [path='/'] 默认归属路径
     * @memberof Util
     */
    public static setCookie(
        name: string,
        value: string,
        day: number = 0,
        isDomain: boolean = false,
        path: string = '/'
    ): void {
        let domain = '';
        // 设置cookie到主域下
        if (isDomain) {
            // 是否为ip正则
            const regExpr = /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/;
            // 为ip时忽略
            if (!regExpr.test(location.hostname)) {
                const host = location.hostname;
                if (host.indexOf('.') !== host.lastIndexOf('.')) {
                    domain = ';domain=' + host.substring(host.indexOf('.'), host.length);
                }
            }
        }
        if (day !== 0) {
            //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
            const expires = day * 24 * 60 * 60 * 1000;
            const date = new Date(new Date().getTime() + expires);
            document.cookie = `${name}=${escape(value)};path=${path};expires=${date.toUTCString()}${domain}`;
        } else {
            document.cookie = `${name}=${escape(value)};path=${path}${domain}`;
        }
    }

    /**
     * 清除cookie
     *
     * @static
     * @param {string} cookieName
     * @param {boolean} [isDomain] 是否在主域下
     * @memberof Util
     */
    public static clearCookie(cookieName: string, isDomain?: boolean) {
        this.setCookie(cookieName, '', -1, isDomain);
    }

    /**
     * 获取cookie
     *
     * @static
     * @param {string} name
     * @return {*}  {*}
     * @memberof Util
     */
    public static getCookie(name: string): string {
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        const arr = document.cookie.match(reg);
        if (arr && arr.length > 1) {
            return unescape(arr[2]);
        } else {
            return '';
        }
    }

    /**
     * 深层合并两个多层嵌套对象，对象中数组不进行深度合并
     *
     * @static
     * @param {*} obj
     * @param {*} obj2
     * @return {*}  {*}
     * @memberof Util
     */
    public static mergeDeepObject(obj: any, obj2: any): any {
        if (Object.keys(obj2).length <= 0) {
            return obj;
        }
        for (const key in obj2) {
            if (Object.prototype.hasOwnProperty.call(obj2, key)) {
                const val = obj2[key];
                const itemType = this.typeOf(val);
                if (itemType === 'object') {
                    if (!obj[key]) {
                        obj[key] = {};
                    }
                    this.mergeDeepObject(obj[key], val);
                } else {
                    obj[key] = val;
                }
            }
        }
        return obj;
    }

    /**
     * 获取query值
     *
     * @static
     * @param {string} variable
     * @return {*}  {*}
     * @memberof Util
     */
    public static getQueryVariable(variable: string): any {
        const query = location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    }
}
