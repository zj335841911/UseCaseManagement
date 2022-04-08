<script>
export default {
    name: 'app-keep-alive',
    render() {
        const slot = this.$slots.default;
        const vnode = this.getFirstComponentChild(slot);
        const componentOptions = vnode && vnode.componentOptions;
        if (componentOptions) {
            // check pattern
            const name = this.getComponentName(componentOptions);
            const include = this.include;
            const exclude = this.exclude;
            const routerList = this.routerList;
            const route = this.$route;
            if (
                // not included
                (include && (!name || !this.matches(include, name))) ||
                // excluded
                (exclude && name && this.matches(exclude, name)) ||
                (routerList && !route.fullPath && !this.matches(routerList, route.fullPath))
            ) {
                return vnode;
            }
            const cache = this.cache;
            const keys = this.keys;
            const key =
                vnode.key == null
                    ? // same constructor may get registered as different local components
                      // so cid alone is not enough (#3269)
                      componentOptions.Ctor.cid + (componentOptions.tag ? '::' + componentOptions.tag : '')
                    : vnode.key;
            if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance;
                // make current key freshest
                this.remove(keys, key);
                keys.push(key);
            } else {
                cache[key] = vnode;
                keys.push(key);
                // prune oldest entry
                if (this.max && keys.length > parseInt(this.max)) {
                    this.pruneCacheEntry(cache, keys[0], keys, this._vnode);
                }
            }
            vnode.data.keepAlive = true;
            vnode.data.curPath = route.fullPath;
        }
        return vnode || (slot && slot[0]);
    },
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number],
        routerList: [Array],
    },
    data() {
        return {
            _toString: Object.prototype.toString,
        };
    },
    created() {
        this.cache = {};
        this.keys = [];
    },
    destroyed() {
        for (let key in this.cache) {
            this.pruneCacheEntry(this.cache, key, this.keys);
        }
    },
    watch: {
        include(val) {
            this.pruneCache((name) => {
                return this.matches(val, name);
            });
        },
        exclude(val) {
            this.pruneCache((name) => {
                return !this.matches(val, name);
            });
        },
        routerList(val) {
            this.pruneCache2((name) => {
                return !this.matches(val, name);
            });
        },
    },
    methods: {
        pruneCacheEntry(cache, key, keys, current) {
            const cached = cache[key];
            if (cached) {
                cached.componentInstance.$destroy();
            }
            cache[key] = null;
            this.remove(keys, key);
        },
        pruneCache(filter) {
            for (let key in this.cache) {
                const cachedNode = this.cache[key];
                if (cachedNode) {
                    const name = this.getComponentName(cachedNode.componentOptions);
                    if (name && !filter(name)) {
                        this.pruneCacheEntry(this.cache, key, this.keys, this._vnode);
                    }
                }
            }
        },
        pruneCache2(filter) {
            for (let key in this.cache) {
                const cachedNode = this.cache[key];
                if (cachedNode) {
                    const name = cachedNode.data.curPath;
                    if (name && filter(name)) {
                        this.pruneCacheEntry(this.cache, key, this.keys, this._vnode);
                    }
                }
            }
        },
        matches(pattern, name) {
            if (Array.isArray(pattern)) {
                return pattern.findIndex((item) => item.to.fullPath === name) !== -1;
            } else if (typeof pattern === 'string') {
                return pattern.split(',').indexOf(name) > -1;
            } else if (this.isRegExp(pattern)) {
                return pattern.test(name);
            }
            /* istanbul ignore next */
            return false;
        },
        getComponentName(opts) {
            return opts && (opts.Ctor.options.name || opts.tag);
        },
        getFirstComponentChild(children) {
            if (Array.isArray(children)) {
                for (let i = 0; i < children.length; i++) {
                    const c = children[i];
                    if (this.isDef(c) && (this.isDef(c.componentOptions) || this.isAsyncPlaceholder(c))) {
                        return c;
                    }
                }
            }
        },
        isAsyncPlaceholder(node) {
            return node.isComment && node.asyncFactory;
        },
        isDef(v) {
            return v !== undefined && v !== null;
        },
        isRegExp(v) {
            return this._toString.call(v) === '[object RegExp]';
        },
        remove(arr, item) {
            if (arr.length) {
                const index = arr.indexOf(item);
                if (index > -1) {
                    return arr.splice(index, 1);
                }
            }
        },
    },
};
</script>
