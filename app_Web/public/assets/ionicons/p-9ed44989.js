import { C as o, p as e, w as n, a as s, d as t, N as r } from './p-70780484.js';
const a = 'undefined' != typeof Deno,
    i = !(
        a ||
        'undefined' == typeof global ||
        'function' != typeof require ||
        !global.process ||
        'string' != typeof __filename ||
        (global.origin && 'string' == typeof global.origin)
    ),
    p =
        (a && Deno,
        i ? process : a && Deno,
        i ? process : a && Deno,
        () =>
            o && o.supports && o.supports('color', 'var(--c)')
                ? s()
                : __sc_import_ionicons('./p-24fc4ba9.js').then(() => ((e.o = n.__cssshim) ? (!1).i() : 0))),
    c = () => {
        e.o = n.__cssshim;
        const o = Array.from(t.querySelectorAll('script')).find(
                (o) =>
                    RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(o.src) || o.getAttribute('data-stencil-namespace') === r
            ),
            a = o['data-opts'] || {};
        return 'onbeforeload' in o && !history.scrollRestoration
            ? { then() {} }
            : ((a.resourcesUrl = new URL(
                  '.',
                  new URL(o.getAttribute('data-resources-url') || o.src, n.location.href)
              ).href),
              l(a.resourcesUrl, o),
              n.customElements ? s(a) : __sc_import_ionicons('./p-46109683.js').then(() => a));
    },
    l = (o, e) => {
        const s = '__sc_import_' + r.replace(/\s|-/g, '_');
        try {
            n[s] = Function('w', 'return import(w);//' + Math.random());
        } catch (a) {
            const r = new Map();
            n[s] = (a) => {
                const i = new URL(a, o).href;
                let p = r.get(i);
                if (!p) {
                    const o = t.createElement('script');
                    (o.type = 'module'),
                        (o.crossOrigin = e.crossOrigin),
                        (o.src = URL.createObjectURL(
                            new Blob([`import * as m from '${i}'; window.${s}.m = m;`], {
                                type: 'application/javascript',
                            })
                        )),
                        (p = new Promise((e) => {
                            o.onload = () => {
                                e(n[s].m), o.remove();
                            };
                        })),
                        r.set(i, p),
                        t.head.appendChild(o);
                }
                return p;
            };
        }
    };
export { p as a, c as p };
