// 扩展Object方法，删除所有元素不改变内存地址
Object.defineProperty(Object.prototype, 'clearAll', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: function () {
        if (this) {
            for (const key in this) {
                if (this.hasOwnProperty(key)) {
                    delete this[key];
                }
            }
        }
    },
});
// 扩展Array方法，删除所有元素不改变内存地址
Object.defineProperty(Array.prototype, 'clearAll', {
    writable: false,
    enumerable: false,
    configurable: true,
    value: function () {
        if (this.length) {
            this.splice(0, this.length);
        }
    },
});

// 扩展window方法 Start

/**
 * 判断对象是否为空，避免发生数值0误判
 *
 * @param obj
 */
window.isExist = function (obj: any) {
    return obj !== undefined && obj !== null;
};

/**
 * 判断字符串是否为空
 *
 * @param str
 */
window.isEmpty = function (str: string | undefined | null) {
    return Object.is(str, '');
};

/**
 * 字符串不为空并且
 *
 * @param str
 */
window.isExistAndNotEmpty = function (str: string | undefined | null) {
    return isExist(str) && !isEmpty(str);
};

// 扩展window方法 End
