import { g as n } from './p-70780484.js';
let r;
const t = () => {
        if ('undefined' == typeof window) return new Map();
        if (!r) {
            const n = window;
            (n.Ionicons = n.Ionicons || {}), (r = n.Ionicons.map = n.Ionicons.map || new Map());
        }
        return r;
    },
    e = (n) => {
        const r = t();
        Object.keys(n).forEach((t) => r.set(t, n[t]));
    },
    i = (n) => {
        let r = u(n.src);
        if (r) return r;
        if (((r = o(n.name, n.icon, n.mode, n.ios, n.md)), r)) return s(r);
        if (n.icon) {
            if (((r = u(n.icon)), r)) return r;
            if (((r = u(n.icon[n.mode])), r)) return r;
        }
        return null;
    },
    s = (r) => t().get(r) || n(`svg/${r}.svg`),
    o = (n, r, t, e, i) => (
        (t = 'ios' === (t && a(t)) ? 'ios' : 'md'),
        e && 'ios' === t ? (n = a(e)) : i && 'md' === t ? (n = a(i)) : (n || !r || f(r) || (n = r), l(n) && (n = a(n))),
        l(n) && '' !== n.trim() ? ('' !== n.replace(/[a-z]|-|\d/gi, '') ? null : n) : null
    ),
    u = (n) => (l(n) && ((n = n.trim()), f(n)) ? n : null),
    f = (n) => n.length > 0 && /(\/|\.)/.test(n),
    l = (n) => 'string' == typeof n,
    a = (n) => n.toLowerCase();
export { e as a, o as b, i as g, l as i };
