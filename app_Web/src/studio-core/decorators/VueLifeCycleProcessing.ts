import { PropOptions } from 'vue';
import { Constructor } from 'vue/types/options';

/**
 * Vue多层继承生命周期处理装饰器
 *
 * @export
 * @param {*} [params]
 * @returns {*}
 */
export function VueLifeCycleProcessing(params?: any): any {
    /**
     * 装饰器处理
     */
    return function (constructor: any) {
        // 原型
        const p = constructor.prototype;
        // 方法名数组
        const methodNames: string[] = [
            'beforeCreate',
            'beforeMount',
            'mounted',
            'beforeUpdate',
            'updated',
            'activated',
            'deactivated',
            'beforeDestroy',
            'destroyed',
            'errorCaptured',
        ];
        methodNames.forEach((name: string) => {
            if (!p.hasOwnProperty(name) && p[name]) {
                p[name] = function () {
                    if (this[name]) {
                        this[name].apply(this, arguments);
                    }
                };
            }
        });
        if (!p.hasOwnProperty('render') && p.render) {
            p.render = function (h: any) {
                if (this.render) {
                    return this.render(h);
                }
            };
        }

        // 替换原生Prop注解
        // if (p.___vuePropArr && p.___vuePropArr.length > 0) {
        //     const arr: any[] = JSON.parse(JSON.stringify(p.___vuePropArr));
        //     delete p.___vuePropArr;
        //     const fun = p['beforeCreate'];
        //     p['beforeCreate'] = function() {
        //         const props = this.$options.props || {};
        //         arr.forEach((item: any) => {
        //             props[item.key] = item.params || {};
        //         });
        //         console.log(props);
        //         this.$options.props = props;
        //         if (fun) {
        //             fun.apply(this, arguments);
        //         }
        //     }
        // } else if (!p.hasOwnProperty('beforeCreate') && p['beforeCreate']) {
        //     p['beforeCreate'] = function () {
        //         if (this['beforeCreate']) {
        //             this['beforeCreate'].apply(this, arguments);
        //         }
        //     }
        // }

        // 替换原生Watch注解
        if (p.___vueWatchArr && p.___vueWatchArr.length > 0) {
            const arr: any[] = JSON.parse(JSON.stringify(p.___vueWatchArr));
            delete p.___vueWatchArr;
            const fun = p['created'];
            p['created'] = function () {
                arr.forEach((item: any) => {
                    if (this.$watch && this[item.handler]) {
                        this.$watch(item.key, this[item.handler], item.params);
                    }
                });
                if (fun) {
                    fun.apply(this, arguments);
                }
            };
        } else if (!p.hasOwnProperty('created') && p['created']) {
            p['created'] = function () {
                if (this['created']) {
                    this['created'].apply(this, arguments);
                }
            };
        }
    };
}

/**
 * 替换Vue自身Watch注解，已实现在继承时的使用
 *
 * @export
 * @param {string} key 需要监控的值项名称
 * @param {{ deep?: boolean, immediate?: boolean }} [params]
 * @returns {*}
 */
export function Watch(key: string, params?: { deep?: boolean; immediate?: boolean }): any {
    return function (p: any, handler: string) {
        if (!p.___vueWatchArr) {
            p.___vueWatchArr = [];
        }
        p.___vueWatchArr.push({
            key,
            handler,
            params,
        });
    };
}

/**
 * 企划Vue自身Prop注解，实现在继承时不出问题
 *
 * @export
 * @param {string} key 输入属性key
 * @param {(PropOptions | Constructor[] | Constructor)} [options] 参数
 * @returns {*}
 */
// export function Prop(options?: PropOptions | Constructor[] | Constructor): any {
//     return function (p: any, key: any) {
//         if (!p.___vuePropArr) {
//             p.___vuePropArr = [];
//         }
//         p.___vuePropArr.push({
//             key,
//             options
//         });
//     };
// }
