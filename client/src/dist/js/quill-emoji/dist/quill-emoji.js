                !function(e, o) {
    "object"==typeof exports&&"object"==typeof module?module.exports=o(): "function"==typeof define&&define.amd?define([], o): "object"==typeof exports?exports.QuillEmoji=o(): e.QuillEmoji=o()
}

(window, function() {
    return function(e) {
        var o= {}
        ;
        function n(a) {
            if(o[a])return o[a].exports;
            var r=o[a]= {
                i:a, l:!1, exports: {}
            }
            ;
            return e[a].call(r.exports, r, r.exports, n), r.l=!0, r.exports
        }
        return n.m=e, n.c=o, n.d=function(e, o, a) {
            n.o(e, o)||Object.defineProperty(e, o, {
                enumerable: !0, get: a
            }
            )
        }
        , n.r=function(e) {
            "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }
            ), Object.defineProperty(e, "__esModule", {
                value: !0
            }
            )
        }
        , n.t=function(e, o) {
            if(1&o&&(e=n(e)), 8&o)return e;
            if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;
            var a=Object.create(null);
            if(n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0, value: e
            }
            ), 2&o&&"string"!=typeof e)for(var r in e)n.d(a, r, function(o) {
                return e[o]
            }
            .bind(null, r));
            return a
        }
        , n.n=function(e) {
            var o=e&&e.__esModule?function() {
                return e.default
            }
            :function() {
                return e
            }
            ;
            return n.d(o, "a", o), o
        }
        , n.o=function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        }
        , n.p="/Users/tim/contentco/quill-emoji/dist/", n(n.s=2)
    }
    ([function(e, o, n) {
        var a;
        a=function() {
            return function(e) {
                var o= {}
                ;
                function n(a) {
                    if(o[a])return o[a].exports;
                    var r=o[a]= {
                        i:a, l:!1, exports: {}
                    }
                    ;
                    return e[a].call(r.exports, r, r.exports, n), r.l=!0, r.exports
                }
                return n.m=e, n.c=o, n.i=function(e) {
                    return e
                }
                , n.d=function(e, o, a) {
                    n.o(e, o)||Object.defineProperty(e, o, {
                        configurable: !1, enumerable: !0, get: a
                    }
                    )
                }
                , n.n=function(e) {
                    var o=e&&e.__esModule?function() {
                        return e.default
                    }
                    :function() {
                        return e
                    }
                    ;
                    return n.d(o, "a", o), o
                }
                , n.o=function(e, o) {
                    return Object.prototype.hasOwnProperty.call(e, o)
                }
                , n.p="", n(n.s=8)
            }
            ([function(e, o, n) {
                "use strict";
                e.exports=function(e) {
                    return Array.isArray?Array.isArray(e): "[object Array]"===Object.prototype.toString.call(e)
                }
            }
            , function(e, o, n) {
                "use strict";
                var a=function() {
                    function e(e, o) {
                        for(var n=0;
                        n<o.length;
                        n++) {
                            var a=o[n];
                            a.enumerable=a.enumerable||!1, a.configurable=!0, "value"in a&&(a.writable=!0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(o, n, a) {
                        return n&&e(o.prototype, n), a&&e(o, a), o
                    }
                }
                (), r=n(5), i=n(7), c=n(4), t=function() {
                    function e(o, n) {
                        var a=n.location, r=void 0===a?0: a, i=n.distance, t=void 0===i?100: i, d=n.threshold, p=void 0===d?.6: d, m=n.maxPatternLength, s=void 0===m?32: m, l=n.isCaseSensitive, g=void 0!==l&&l, _=n.tokenSeparator, u=void 0===_?/ +/g: _, f=n.findAllMatches, x=void 0!==f&&f, h=n.minMatchCharLength, b=void 0===h?1: h;
                        !function(e, o) {
                            if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")
                        }
                        (this, e), this.options= {
                            location: r, distance: t, threshold: p, maxPatternLength: s, isCaseSensitive: g, tokenSeparator: u, findAllMatches: x, minMatchCharLength: b
                        }
                        , this.pattern=this.options.isCaseSensitive?o:o.toLowerCase(), this.pattern.length<=s&&(this.patternAlphabet=c(this.pattern))
                    }
                    return a(e, [ {
                        key:"search", value:function(e) {
                            if(this.options.isCaseSensitive||(e=e.toLowerCase()), this.pattern===e)return {
                                isMatch: !0, score: 0, matchedIndices: [[0, e.length-1]]
                            }
                            ;
                            var o=this.options, n=o.maxPatternLength, a=o.tokenSeparator;
                            if(this.pattern.length>n)return r(e, this.pattern, a);
                            var c=this.options, t=c.location, d=c.distance, p=c.threshold, m=c.findAllMatches, s=c.minMatchCharLength;
                            return i(e, this.pattern, this.patternAlphabet, {
                                location: t, distance: d, threshold: p, findAllMatches: m, minMatchCharLength: s
                            }
                            )
                        }
                    }
                    ]), e
                }
                ();
                e.exports=t
            }
            , function(e, o, n) {
                "use strict";
                var a=n(0);
                e.exports=function(e, o) {
                    return function e(o, n, r) {
                        if(n) {
                            var i=n.indexOf("."), c=n, t=null;
                            -1!==i&&(c=n.slice(0, i), t=n.slice(i+1));
                            var d=o[c];
                            if(null!==d&&void 0!==d)if(t||"string"!=typeof d&&"number"!=typeof d)if(a(d))for(var p=0, m=d.length;
                            p<m;
                            p+=1)e(d[p], t, r);
                            else t&&e(d, t, r);
                            else r.push(d.toString())
                        }
                        else r.push(o);
                        return r
                    }
                    (e, o, [])
                }
            }
            , function(e, o, n) {
                "use strict";
                e.exports=function() {
                    for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: [], o=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1, n=[], a=-1, r=-1, i=0, c=e.length;
                    i<c;
                    i+=1) {
                        var t=e[i];
                        t&&-1===a?a=i: t||-1===a||((r=i-1)-a+1>=o&&n.push([a, r]), a=-1)
                    }
                    return e[i-1]&&i-a>=o&&n.push([a, i-1]), n
                }
            }
            , function(e, o, n) {
                "use strict";
                e.exports=function(e) {
                    for(var o= {}
                    , n=e.length, a=0;
                    a<n;
                    a+=1)o[e.charAt(a)]=0;
                    for(var r=0;
                    r<n;
                    r+=1)o[e.charAt(r)]|=1<<n-r-1;
                    return o
                }
            }
            , function(e, o, n) {
                "use strict";
                var a=/[\-\[\]\/\ {
                    \
                }
                \(\)\*\+\?\.\\\^\$\|]/g;
                e.exports=function(e, o) {
                    var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]: / +/g, r=new RegExp(o.replace(a, "\\$&").replace(n, "|")), i=e.match(r), c=!!i, t=[];
                    if(c)for(var d=0, p=i.length;
                    d<p;
                    d+=1) {
                        var m=i[d];
                        t.push([e.indexOf(m), m.length-1])
                    }
                    return {
                        score: c?.5: 1, isMatch: c, matchedIndices: t
                    }
                }
            }
            , function(e, o, n) {
                "use strict";
                e.exports=function(e, o) {
                    var n=o.errors, a=void 0===n?0: n, r=o.currentLocation, i=void 0===r?0: r, c=o.expectedLocation, t=void 0===c?0: c, d=o.distance, p=void 0===d?100: d, m=a/e.length, s=Math.abs(t-i);
                    return p?m+s/p: s?1: m
                }
            }
            , function(e, o, n) {
                "use strict";
                var a=n(6), r=n(3);
                e.exports=function(e, o, n, i) {
                    for(var c=i.location, t=void 0===c?0: c, d=i.distance, p=void 0===d?100: d, m=i.threshold, s=void 0===m?.6: m, l=i.findAllMatches, g=void 0!==l&&l, _=i.minMatchCharLength, u=void 0===_?1: _, f=t, x=e.length, h=s, b=e.indexOf(o, f), k=o.length, y=[], j=0;
                    j<x;
                    j+=1)y[j]=0;
                    if(-1!==b) {
                        var w=a(o, {
                            errors: 0, currentLocation: b, expectedLocation: f, distance: p
                        }
                        );
                        if(h=Math.min(w, h), -1!==(b=e.lastIndexOf(o, f+k))) {
                            var v=a(o, {
                                errors: 0, currentLocation: b, expectedLocation: f, distance: p
                            }
                            );
                            h=Math.min(v, h)
                        }
                    }
                    b=-1;
                    for(var q=[], z=1, L=k+x, C=1<<k-1, E=0;
                    E<k;
                    E+=1) {
                        for(var S=0, A=L;
                        S<A;
                        )a(o, {
                            errors: E, currentLocation: f+A, expectedLocation: f, distance: p
                        }
                        )<=h?S=A:L=A, A=Math.floor((L-S)/2+S);
                        L=A;
                        var M=Math.max(1, f-A+1), O=g?x:Math.min(f+A, x)+k, T=Array(O+2);
                        T[O+1]=(1<<E)-1;
                        for(var I=O;
                        I>=M;
                        I-=1) {
                            var P=I-1, B=n[e.charAt(P)];
                            if(B&&(y[P]=1), T[I]=(T[I+1]<<1|1)&B, 0!==E&&(T[I]|=(q[I+1]|q[I])<<1|1|q[I+1]), T[I]&C&&(z=a(o, {
                                errors: E, currentLocation: P, expectedLocation: f, distance: p
                            }
                            ))<=h) {
                                if(h=z, (b=P)<=f)break;
                                M=Math.max(1, 2*f-b)
                            }
                        }
                        if(a(o, {
                            errors: E+1, currentLocation: f, expectedLocation: f, distance: p
                        }
                        )>h)break;
                        q=T
                    }
                    return {
                        isMatch: b>=0, score: 0===z?.001: z, matchedIndices: r(y, u)
                    }
                }
            }
            , function(e, o, n) {
                "use strict";
                var a=function() {
                    function e(e, o) {
                        for(var n=0;
                        n<o.length;
                        n++) {
                            var a=o[n];
                            a.enumerable=a.enumerable||!1, a.configurable=!0, "value"in a&&(a.writable=!0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(o, n, a) {
                        return n&&e(o.prototype, n), a&&e(o, a), o
                    }
                }
                (), r=n(1), i=n(2), c=n(0), t=function() {
                    function e(o, n) {
                        var a=n.location, r=void 0===a?0:a, c=n.distance, t=void 0===c?100:c, d=n.threshold, p=void 0===d?.6:d, m=n.maxPatternLength, s=void 0===m?32:m, l=n.caseSensitive, g=void 0!==l&&l, _=n.tokenSeparator, u=void 0===_?/ +/g:_, f=n.findAllMatches, x=void 0!==f&&f, h=n.minMatchCharLength, b=void 0===h?1:h, k=n.id, y=void 0===k?null:k, j=n.keys, w=void 0===j?[]:j, v=n.shouldSort, q=void 0===v||v, z=n.getFn, L=void 0===z?i:z, C=n.sortFn, E=void 0===C?function(e, o) {
                            return e.score-o.score
                        }
                        :C, S=n.tokenize, A=void 0!==S&&S, M=n.matchAllTokens, O=void 0!==M&&M, T=n.includeMatches, I=void 0!==T&&T, P=n.includeScore, B=void 0!==P&&P, F=n.verbose, R=void 0!==F&&F;
                        !function(e, o) {
                            if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")
                        }
                        (this, e), this.options= {
                            location: r, distance: t, threshold: p, maxPatternLength: s, isCaseSensitive: g, tokenSeparator: u, findAllMatches: x, minMatchCharLength: b, id: y, keys: w, includeMatches: I, includeScore: B, shouldSort: q, getFn: L, sortFn: E, verbose: R, tokenize: A, matchAllTokens: O
                        }
                        , this.setCollection(o)
                    }
                    return a(e, [ {
                        key:"setCollection", value:function(e) {
                            return this.list=e, e
                        }
                    }
                    , {
                        key:"search", value:function(e) {
                            this._log('---------\nSearch pattern: "'+e+'"');
                            var o=this._prepareSearchers(e), n=o.tokenSearchers, a=o.fullSearcher, r=this._search(n, a), i=r.weights, c=r.results;
                            return this._computeScore(i, c), this.options.shouldSort&&this._sort(c), this._format(c)
                        }
                    }
                    , {
                        key:"_prepareSearchers", value:function() {
                            var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]: "", o=[];
                            if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator), a=0, i=n.length;
                            a<i;
                            a+=1)o.push(new r(n[a], this.options));
                            return {
                                tokenSearchers: o, fullSearcher: new r(e, this.options)
                            }
                        }
                    }
                    , {
                        key:"_search", value:function() {
                            var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[], o=arguments[1], n=this.list, a= {}
                            , r=[];
                            if("string"==typeof n[0]) {
                                for(var i=0, c=n.length;
                                i<c;
                                i+=1)this._analyze( {
                                    key: "", value: n[i], record: i, index: i
                                }
                                , {
                                    resultMap: a, results: r, tokenSearchers: e, fullSearcher: o
                                }
                                );
                                return {
                                    weights: null, results: r
                                }
                            }
                            for(var t= {}
                            , d=0, p=n.length;
                            d<p;
                            d+=1)for(var m=n[d], s=0, l=this.options.keys.length;
                            s<l;
                            s+=1) {
                                var g=this.options.keys[s];
                                if("string"!=typeof g) {
                                    if(t[g.name]= {
                                        weight: 1-g.weight||1
                                    }
                                    , g.weight<=0||g.weight>1)throw new Error("Key weight has to be > 0 and <= 1");
                                    g=g.name
                                }
                                else t[g]= {
                                    weight: 1
                                }
                                ;
                                this._analyze( {
                                    key: g, value: this.options.getFn(m, g), record: m, index: d
                                }
                                , {
                                    resultMap: a, results: r, tokenSearchers: e, fullSearcher: o
                                }
                                )
                            }
                            return {
                                weights: t, results: r
                            }
                        }
                    }
                    , {
                        key:"_analyze", value:function(e, o) {
                            var n=e.key, a=e.arrayIndex, r=void 0===a?-1:a, i=e.value, t=e.record, d=e.index, p=o.tokenSearchers, m=void 0===p?[]:p, s=o.fullSearcher, l=void 0===s?[]:s, g=o.resultMap, _=void 0===g? {}
                            : g, u=o.results, f=void 0===u?[]: u;
                            if(void 0!==i&&null!==i) {
                                var x=!1, h=-1, b=0;
                                if("string"==typeof i) {
                                    this._log("\nKey: "+(""===n?"-": n));
                                    var k=l.search(i);
                                    if(this._log('Full text: "'+i+'", score: '+k.score), this.options.tokenize) {
                                        for(var y=i.split(this.options.tokenSeparator), j=[], w=0;
                                        w<m.length;
                                        w+=1) {
                                            var v=m[w];
                                            this._log('\nPattern: "'+v.pattern+'"');
                                            for(var q=!1, z=0;
                                            z<y.length;
                                            z+=1) {
                                                var L=y[z], C=v.search(L), E= {}
                                                ;
                                                C.isMatch?(E[L]=C.score, x=!0, q=!0, j.push(C.score)): (E[L]=1, this.options.matchAllTokens||j.push(1)), this._log('Token: "'+L+'", score: '+E[L])
                                            }
                                            q&&(b+=1)
                                        }
                                        h=j[0];
                                        for(var S=j.length, A=1;
                                        A<S;
                                        A+=1)h+=j[A];
                                        h/=S, this._log("Token score average:", h)
                                    }
                                    var M=k.score;
                                    h>-1&&(M=(M+h)/2), this._log("Score average:", M);
                                    var O=!this.options.tokenize||!this.options.matchAllTokens||b>=m.length;
                                    if(this._log("\nCheck Matches: "+O), (x||k.isMatch)&&O) {
                                        var T=_[d];
                                        T?T.output.push( {
                                            key: n, arrayIndex: r, value: i, score: M, matchedIndices: k.matchedIndices
                                        }
                                        ):(_[d]= {
                                            item:t, output:[ {
                                                key: n, arrayIndex: r, value: i, score: M, matchedIndices: k.matchedIndices
                                            }
                                            ]
                                        }
                                        , f.push(_[d]))
                                    }
                                }
                                else if(c(i))for(var I=0, P=i.length;
                                I<P;
                                I+=1)this._analyze( {
                                    key: n, arrayIndex: I, value: i[I], record: t, index: d
                                }
                                , {
                                    resultMap: _, results: f, tokenSearchers: m, fullSearcher: l
                                }
                                )
                            }
                        }
                    }
                    , {
                        key:"_computeScore", value:function(e, o) {
                            this._log("\n\nComputing score:\n");
                            for(var n=0, a=o.length;
                            n<a;
                            n+=1) {
                                for(var r=o[n].output, i=r.length, c=1, t=1, d=0;
                                d<i;
                                d+=1) {
                                    var p=e?e[r[d].key].weight: 1, m=(1===p?r[d].score: r[d].score||.001)*p;
                                    1!==p?t=Math.min(t, m): (r[d].nScore=m, c*=m)
                                }
                                o[n].score=1===t?c:t, this._log(o[n])
                            }
                        }
                    }
                    , {
                        key:"_sort", value:function(e) {
                            this._log("\n\nSorting...."), e.sort(this.options.sortFn)
                        }
                    }
                    , {
                        key:"_format", value:function(e) {
                            var o=[];
                            this.options.verbose&&this._log("\n\nOutput:\n\n", JSON.stringify(e));
                            var n=[];
                            this.options.includeMatches&&n.push(function(e, o) {
                                var n=e.output;
                                o.matches=[];
                                for(var a=0, r=n.length;
                                a<r;
                                a+=1) {
                                    var i=n[a];
                                    if(0!==i.matchedIndices.length) {
                                        var c= {
                                            indices: i.matchedIndices, value: i.value
                                        }
                                        ;
                                        i.key&&(c.key=i.key), i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(c.arrayIndex=i.arrayIndex), o.matches.push(c)
                                    }
                                }
                            }
                            ), this.options.includeScore&&n.push(function(e, o) {
                                o.score=e.score
                            }
                            );
                            for(var a=0, r=e.length;
                            a<r;
                            a+=1) {
                                var i=e[a];
                                if(this.options.id&&(i.item=this.options.getFn(i.item, this.options.id)[0]), n.length) {
                                    for(var c= {
                                        item: i.item
                                    }
                                    , t=0, d=n.length;
                                    t<d;
                                    t+=1)n[t](i, c);
                                    o.push(c)
                                }
                                else o.push(i.item)
                            }
                            return o
                        }
                    }
                    , {
                        key:"_log", value:function() {
                            var e;
                            this.options.verbose&&(e=console).log.apply(e, arguments)
                        }
                    }
                    ]), e
                }
                ();
                e.exports=t
            }
            ])
        }
        , e.exports=a()
    }
    , function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }
        ), o.default=[ {
            name: "100", unicode: "1f4af", shortname: ":100:", code_decimal: "&#128175;", category: "s", emoji_order: "2119"
        }
        , {
            name: "1234", unicode: "1f522", shortname: ":1234:", code_decimal: "&#128290;", category: "s", emoji_order: "2122"
        }
        , {
            name: "grinning", unicode: "1f600", shortname: ":grinning:", code_decimal: "&#128512;", category: "p", emoji_order: "1"
        }
        , {
            name: "grin", unicode: "1f601", shortname: ":grin:", code_decimal: "&#128513;", category: "p", emoji_order: "2"
        }
        , {
            name: "joy", unicode: "1f602", shortname: ":joy:", code_decimal: "&#128514;", category: "p", emoji_order: "3"
        }
        , {
            name: "smiley", unicode: "1f603", shortname: ":smiley:", code_decimal: "&#128515;", category: "p", emoji_order: "5"
        }
        , {
            name: "smile", unicode: "1f604", shortname: ":smile:", code_decimal: "&#128516;", category: "p", emoji_order: "6"
        }
        , {
            name: "sweat_smile", unicode: "1f605", shortname: ":sweat_smile:", code_decimal: "&#128517;", category: "p", emoji_order: "7"
        }
        , {
            name: "laughing", unicode: "1f606", shortname: ":laughing:", code_decimal: "&#128518;", category: "p", emoji_order: "8"
        }
        , {
            name: "wink", unicode: "1f609", shortname: ":wink:", code_decimal: "&#128521;", category: "p", emoji_order: "9"
        }
        , {
            name: "blush", unicode: "1f60a", shortname: ":blush:", code_decimal: "&#128522;", category: "p", emoji_order: "10"
        }
        , {
            name: "yum", unicode: "1f60b", shortname: ":yum:", code_decimal: "&#128523;", category: "p", emoji_order: "11"
        }
        , {
            name: "sunglasses", unicode: "1f60e", shortname: ":sunglasses:", code_decimal: "&#128526;", category: "p", emoji_order: "12"
        }
        , {
            name: "heart_eyes", unicode: "1f60d", shortname: ":heart_eyes:", code_decimal: "&#128525;", category: "p", emoji_order: "13"
        }
        , {
            name: "kissing_heart", unicode: "1f618", shortname: ":kissing_heart:", code_decimal: "&#128536;", category: "p", emoji_order: "14"
        }
        , {
            name: "kissing", unicode: "1f617", shortname: ":kissing:", code_decimal: "&#128535;", category: "p", emoji_order: "15"
        }
        , {
            name: "kissing_smiling_eyes", unicode: "1f619", shortname: ":kissing_smiling_eyes:", code_decimal: "&#128537;", category: "p", emoji_order: "16"
        }
        , {
            name: "kissing_closed_eyes", unicode: "1f61a", shortname: ":kissing_closed_eyes:", code_decimal: "&#128538;", category: "p", emoji_order: "17"
        }
        , {
            name: "slightly_smiling_face", unicode: "1f642", shortname: ":slight_smile:", code_decimal: "&#128578;", category: "p", emoji_order: "19"
        }
        , {
            name: "hugging_face", unicode: "1f917", shortname: ":hugging:", code_decimal: "&#129303;", category: "p", emoji_order: "20"
        }
        , {
            name: "thinking_face", unicode: "1f914", shortname: ":thinking:", code_decimal: "&#129300;", category: "p", emoji_order: "21"
        }
        , {
            name: "neutral_face", unicode: "1f610", shortname: ":neutral_face:", code_decimal: "&#128528;", category: "p", emoji_order: "22"
        }
        , {
            name: "expressionless", unicode: "1f611", shortname: ":expressionless:", code_decimal: "&#128529;", category: "p", emoji_order: "23"
        }
        , {
            name: "no_mouth", unicode: "1f636", shortname: ":no_mouth:", code_decimal: "&#128566;", category: "p", emoji_order: "24"
        }
        , {
            name: "face_with_rolling_eyes", unicode: "1f644", shortname: ":rolling_eyes:", code_decimal: "&#128580;", category: "p", emoji_order: "25"
        }
        , {
            name: "smirk", unicode: "1f60f", shortname: ":smirk:", code_decimal: "&#128527;", category: "p", emoji_order: "26"
        }
        , {
            name: "persevere", unicode: "1f623", shortname: ":persevere:", code_decimal: "&#128547;", category: "p", emoji_order: "27"
        }
        , {
            name: "disappointed_relieved", unicode: "1f625", shortname: ":disappointed_relieved:", code_decimal: "&#128549;", category: "p", emoji_order: "28"
        }
        , {
            name: "open_mouth", unicode: "1f62e", shortname: ":open_mouth:", code_decimal: "&#128558;", category: "p", emoji_order: "29"
        }
        , {
            name: "zipper_mouth_face", unicode: "1f910", shortname: ":zipper_mouth:", code_decimal: "&#129296;", category: "p", emoji_order: "30"
        }
        , {
            name: "hushed", unicode: "1f62f", shortname: ":hushed:", code_decimal: "&#128559;", category: "p", emoji_order: "31"
        }
        , {
            name: "sleepy", unicode: "1f62a", shortname: ":sleepy:", code_decimal: "&#128554;", category: "p", emoji_order: "32"
        }
        , {
            name: "tired_face", unicode: "1f62b", shortname: ":tired_face:", code_decimal: "&#128555;", category: "p", emoji_order: "33"
        }
        , {
            name: "sleeping", unicode: "1f634", shortname: ":sleeping:", code_decimal: "&#128564;", category: "p", emoji_order: "34"
        }
        , {
            name: "relieved", unicode: "1f60c", shortname: ":relieved:", code_decimal: "&#128524;", category: "p", emoji_order: "35"
        }
        , {
            name: "nerd_face", unicode: "1f913", shortname: ":nerd:", code_decimal: "&#129299;", category: "p", emoji_order: "36"
        }
        , {
            name: "stuck_out_tongue", unicode: "1f61b", shortname: ":stuck_out_tongue:", code_decimal: "&#128539;", category: "p", emoji_order: "37"
        }
        , {
            name: "stuck_out_tongue_winking_eye", unicode: "1f61c", shortname: ":stuck_out_tongue_winking_eye:", code_decimal: "&#128540;", category: "p", emoji_order: "38"
        }
        , {
            name: "stuck_out_tongue_closed_eyes", unicode: "1f61d", shortname: ":stuck_out_tongue_closed_eyes:", code_decimal: "&#128541;", category: "p", emoji_order: "39"
        }
        , {
            name: "unamused", unicode: "1f612", shortname: ":unamused:", code_decimal: "&#128530;", category: "p", emoji_order: "41"
        }
        , {
            name: "sweat", unicode: "1f613", shortname: ":sweat:", code_decimal: "&#128531;", category: "p", emoji_order: "42"
        }
        , {
            name: "pensive", unicode: "1f614", shortname: ":pensive:", code_decimal: "&#128532;", category: "p", emoji_order: "43"
        }
        , {
            name: "confused", unicode: "1f615", shortname: ":confused:", code_decimal: "&#128533;", category: "p", emoji_order: "44"
        }
        , {
            name: "upside_down_face", unicode: "1f643", shortname: ":upside_down:", code_decimal: "&#128579;", category: "p", emoji_order: "45"
        }
        , {
            name: "astonished", unicode: "1f632", shortname: ":astonished:", code_decimal: "&#128562;", category: "p", emoji_order: "47"
        }
        , {
            name: "confounded", unicode: "1f616", shortname: ":confounded:", code_decimal: "&#128534;", category: "p", emoji_order: "50"
        }
        , {
            name: "disappointed", unicode: "1f61e", shortname: ":disappointed:", code_decimal: "&#128542;", category: "p", emoji_order: "51"
        }
        , {
            name: "worried", unicode: "1f61f", shortname: ":worried:", code_decimal: "&#128543;", category: "p", emoji_order: "52"
        }
        , {
            name: "triumph", unicode: "1f624", shortname: ":triumph:", code_decimal: "&#128548;", category: "p", emoji_order: "53"
        }
        , {
            name: "cry", unicode: "1f622", shortname: ":cry:", code_decimal: "&#128546;", category: "p", emoji_order: "54"
        }
        , {
            name: "sob", unicode: "1f62d", shortname: ":sob:", code_decimal: "&#128557;", category: "p", emoji_order: "55"
        }
        , {
            name: "frowning", unicode: "1f626", shortname: ":frowning:", code_decimal: "&#128550;", category: "p", emoji_order: "56"
        }
        , {
            name: "anguished", unicode: "1f627", shortname: ":anguished:", code_decimal: "&#128551;", category: "p", emoji_order: "57"
        }
        , {
            name: "fearful", unicode: "1f628", shortname: ":fearful:", code_decimal: "&#128552;", category: "p", emoji_order: "58"
        }
        , {
            name: "weary", unicode: "1f629", shortname: ":weary:", code_decimal: "&#128553;", category: "p", emoji_order: "59"
        }
        , {
            name: "grimacing", unicode: "1f62c", shortname: ":grimacing:", code_decimal: "&#128556;", category: "p", emoji_order: "60"
        }
        , {
            name: "cold_sweat", unicode: "1f630", shortname: ":cold_sweat:", code_decimal: "&#128560;", category: "p", emoji_order: "61"
        }
        , {
            name: "scream", unicode: "1f631", shortname: ":scream:", code_decimal: "&#128561;", category: "p", emoji_order: "62"
        }
        , {
            name: "flushed", unicode: "1f633", shortname: ":flushed:", code_decimal: "&#128563;", category: "p", emoji_order: "63"
        }
        , {
            name: "dizzy_face", unicode: "1f635", shortname: ":dizzy_face:", code_decimal: "&#128565;", category: "p", emoji_order: "64"
        }
        , {
            name: "rage", unicode: "1f621", shortname: ":rage:", code_decimal: "&#128545;", category: "p", emoji_order: "65"
        }
        , {
            name: "angry", unicode: "1f620", shortname: ":angry:", code_decimal: "&#128544;", category: "p", emoji_order: "66"
        }
        , {
            name: "innocent", unicode: "1f607", shortname: ":innocent:", code_decimal: "&#128519;", category: "p", emoji_order: "67"
        }
        , {
            name: "mask", unicode: "1f637", shortname: ":mask:", code_decimal: "&#128567;", category: "p", emoji_order: "71"
        }
        , {
            name: "smiling_imp", unicode: "1f608", shortname: ":smiling_imp:", code_decimal: "&#128520;", category: "p", emoji_order: "76"
        }
        , {
            name: "imp", unicode: "1f47f", shortname: ":imp:", code_decimal: "&#128127;", category: "p", emoji_order: "77"
        }
        , {
            name: "japanese_ogre", unicode: "1f479", shortname: ":japanese_ogre:", code_decimal: "&#128121;", category: "p", emoji_order: "78"
        }
        , {
            name: "japanese_goblin", unicode: "1f47a", shortname: ":japanese_goblin:", code_decimal: "&#128122;", category: "p", emoji_order: "79"
        }
        , {
            name: "skull", unicode: "1f480", shortname: ":skull:", code_decimal: "&#128128;", category: "p", emoji_order: "80"
        }
        , {
            name: "skull_and_crossbones", unicode: "2620", shortname: ":skull_crossbones:", code_decimal: "&#9760;", category: "o", emoji_order: "81"
        }
        , {
            name: "ghost", unicode: "1f47b", shortname: ":ghost:", code_decimal: "&#128123;", category: "p", emoji_order: "82"
        }
        , {
            name: "alien", unicode: "1f47d", shortname: ":alien:", code_decimal: "&#128125;", category: "p", emoji_order: "83"
        }
        , {
            name: "space_invader", unicode: "1f47e", shortname: ":space_invader:", code_decimal: "&#128126;", category: "a", emoji_order: "84"
        }
        , {
            name: "smiley_cat", unicode: "1f63a", shortname: ":smiley_cat:", code_decimal: "&#128570;", category: "p", emoji_order: "87"
        }
        , {
            name: "smile_cat", unicode: "1f638", shortname: ":smile_cat:", code_decimal: "&#128568;", category: "p", emoji_order: "88"
        }
        , {
            name: "joy_cat", unicode: "1f639", shortname: ":joy_cat:", code_decimal: "&#128569;", category: "p", emoji_order: "89"
        }
        , {
            name: "heart_eyes_cat", unicode: "1f63b", shortname: ":heart_eyes_cat:", code_decimal: "&#128571;", category: "p", emoji_order: "90"
        }
        , {
            name: "smirk_cat", unicode: "1f63c", shortname: ":smirk_cat:", code_decimal: "&#128572;", category: "p", emoji_order: "91"
        }
        , {
            name: "kissing_cat", unicode: "1f63d", shortname: ":kissing_cat:", code_decimal: "&#128573;", category: "p", emoji_order: "92"
        }
        , {
            name: "scream_cat", unicode: "1f640", shortname: ":scream_cat:", code_decimal: "&#128576;", category: "p", emoji_order: "93"
        }
        , {
            name: "crying_cat_face", unicode: "1f63f", shortname: ":crying_cat_face:", code_decimal: "&#128575;", category: "p", emoji_order: "94"
        }
        , {
            name: "pouting_cat", unicode: "1f63e", shortname: ":pouting_cat:", code_decimal: "&#128574;", category: "p", emoji_order: "95"
        }
        , {
            name: "see_no_evil", unicode: "1f648", shortname: ":see_no_evil:", code_decimal: "&#128584;", category: "n", emoji_order: "96"
        }
        , {
            name: "hear_no_evil", unicode: "1f649", shortname: ":hear_no_evil:", code_decimal: "&#128585;", category: "n", emoji_order: "97"
        }
        , {
            name: "speak_no_evil", unicode: "1f64a", shortname: ":speak_no_evil:", code_decimal: "&#128586;", category: "n", emoji_order: "98"
        }
        , {
            name: "boy", unicode: "1f466", shortname: ":boy:", code_decimal: "&#128102;", category: "p", emoji_order: "99"
        }
        , {
            name: "girl", unicode: "1f467", shortname: ":girl:", code_decimal: "&#128103;", category: "p", emoji_order: "105"
        }
        , {
            name: "man", unicode: "1f468", shortname: ":man:", code_decimal: "&#128104;", category: "p", emoji_order: "111"
        }
        , {
            name: "woman", unicode: "1f469", shortname: ":woman:", code_decimal: "&#128105;", category: "p", emoji_order: "117"
        }
        , {
            name: "older_man", unicode: "1f474", shortname: ":older_man:", code_decimal: "&#128116;", category: "p", emoji_order: "123"
        }
        , {
            name: "older_woman", unicode: "1f475", shortname: ":older_woman:", code_decimal: "&#128117;", category: "p", emoji_order: "129"
        }
        , {
            name: "baby", unicode: "1f476", shortname: ":baby:", code_decimal: "&#128118;", category: "p", emoji_order: "135"
        }
        , {
            name: "angel", unicode: "1f47c", shortname: ":angel:", code_decimal: "&#128124;", category: "p", emoji_order: "141"
        }
        , {
            name: "cop", unicode: "1f46e", shortname: ":cop:", code_decimal: "&#128110;", category: "p", emoji_order: "339"
        }
        , {
            name: "guardsman", unicode: "1f482", shortname: ":guardsman:", code_decimal: "&#128130;", category: "p", emoji_order: "375"
        }
        , {
            name: "construction_worker", unicode: "1f477", shortname: ":construction_worker:", code_decimal: "&#128119;", category: "p", emoji_order: "393"
        }
        , {
            name: "man_with_turban", unicode: "1f473", shortname: ":man_with_turban:", code_decimal: "&#128115;", category: "p", emoji_order: "411"
        }
        , {
            name: "person_with_blond_hair", unicode: "1f471", shortname: ":person_with_blond_hair:", code_decimal: "&#128113;", category: "p", emoji_order: "429"
        }
        , {
            name: "santa", unicode: "1f385", shortname: ":santa:", code_decimal: "&#127877;", category: "p", emoji_order: "447"
        }
        , {
            name: "princess", unicode: "1f478", shortname: ":princess:", code_decimal: "&#128120;", category: "p", emoji_order: "459"
        }
        , {
            name: "bride_with_veil", unicode: "1f470", shortname: ":bride_with_veil:", code_decimal: "&#128112;", category: "p", emoji_order: "471"
        }
        , {
            name: "man_with_gua_pi_mao", unicode: "1f472", shortname: ":man_with_gua_pi_mao:", code_decimal: "&#128114;", category: "p", emoji_order: "489"
        }
        , {
            name: "person_frowning", unicode: "1f64d", shortname: ":person_frowning:", code_decimal: "&#128589;", category: "p", emoji_order: "495"
        }
        , {
            name: "person_with_pouting_face", unicode: "1f64e", shortname: ":person_with_pouting_face:", code_decimal: "&#128590;", category: "p", emoji_order: "513"
        }
        , {
            name: "no_good", unicode: "1f645", shortname: ":no_good:", code_decimal: "&#128581;", category: "p", emoji_order: "531"
        }
        , {
            name: "ok_woman", unicode: "1f646", shortname: ":ok_woman:", code_decimal: "&#128582;", category: "p", emoji_order: "549"
        }
        , {
            name: "information_desk_person", unicode: "1f481", shortname: ":information_desk_person:", code_decimal: "&#128129;", category: "p", emoji_order: "567"
        }
        , {
            name: "raising_hand", unicode: "1f64b", shortname: ":raising_hand:", code_decimal: "&#128587;", category: "p", emoji_order: "585"
        }
        , {
            name: "bow", unicode: "1f647", shortname: ":bow:", code_decimal: "&#128583;", category: "p", emoji_order: "603"
        }
        , {
            name: "massage", unicode: "1f486", shortname: ":massage:", code_decimal: "&#128134;", category: "p", emoji_order: "657"
        }
        , {
            name: "haircut", unicode: "1f487", shortname: ":haircut:", code_decimal: "&#128135;", category: "p", emoji_order: "675"
        }
        , {
            name: "walking", unicode: "1f6b6", shortname: ":walking:", code_decimal: "&#128694;", category: "p", emoji_order: "693"
        }
        , {
            name: "runner", unicode: "1f3c3", shortname: ":runner:", code_decimal: "&#127939;", category: "p", emoji_order: "711"
        }
        , {
            name: "dancer", unicode: "1f483", shortname: ":dancer:", code_decimal: "&#128131;", category: "p", emoji_order: "729"
        }
        , {
            name: "dancers", unicode: "1f46f", shortname: ":dancers:", code_decimal: "&#128111;", category: "p", emoji_order: "741"
        }
        , {
            name: "busts_in_silhouette", unicode: "1f465", shortname: ":busts_in_silhouette:", code_decimal: "&#128101;", category: "p", emoji_order: "767"
        }
        , {
            name: "horse_racing", unicode: "1f3c7", shortname: ":horse_racing:", code_decimal: "&#127943;", category: "a", emoji_order: "769"
        }
        , {
            name: "skier", unicode: "26f7", shortname: ":skier:", code_decimal: "&#9975;", category: "a", emoji_order: "775"
        }
        , {
            name: "snowboarder", unicode: "1f3c2", shortname: ":snowboarder:", code_decimal: "&#127938;", category: "a", emoji_order: "776"
        }
        , {
            name: "golfer", unicode: "1f3cc", shortname: ":golfer:", code_decimal: "&#127948;", category: "a", emoji_order: "782"
        }
        , {
            name: "surfer", unicode: "1f3c4", shortname: ":surfer:", code_decimal: "&#127940;", category: "a", emoji_order: "800"
        }
        , {
            name: "rowboat", unicode: "1f6a3", shortname: ":rowboat:", code_decimal: "&#128675;", category: "a", emoji_order: "818"
        }
        , {
            name: "swimmer", unicode: "1f3ca", shortname: ":swimmer:", code_decimal: "&#127946;", category: "a", emoji_order: "836"
        }
        , {
            name: "bicyclist", unicode: "1f6b4", shortname: ":bicyclist:", code_decimal: "&#128692;", category: "a", emoji_order: "890"
        }
        , {
            name: "mountain_bicyclist", unicode: "1f6b5", shortname: ":mountain_bicyclist:", code_decimal: "&#128693;", category: "a", emoji_order: "908"
        }
        , {
            name: "couple", unicode: "1f46b", shortname: ":couple:", code_decimal: "&#128107;", category: "p", emoji_order: "1018"
        }
        , {
            name: "two_men_holding_hands", unicode: "1f46c", shortname: ":two_men_holding_hands:", code_decimal: "&#128108;", category: "p", emoji_order: "1024"
        }
        , {
            name: "two_women_holding_hands", unicode: "1f46d", shortname: ":two_women_holding_hands:", code_decimal: "&#128109;", category: "p", emoji_order: "1030"
        }
        , {
            name: "couplekiss", unicode: "1f48f", shortname: ":couplekiss:", code_decimal: "&#128143;", category: "p", emoji_order: "1036"
        }
        , {
            name: "couple_with_heart", unicode: "1f491", shortname: ":couple_with_heart:", code_decimal: "&#128145;", category: "p", emoji_order: "1040"
        }
        , {
            name: "family", unicode: "1f46a", shortname: ":family:", code_decimal: "&#128106;", category: "p", emoji_order: "1044"
        }
        , {
            name: "muscle", unicode: "1f4aa", shortname: ":muscle:", code_decimal: "&#128170;", category: "p", emoji_order: "1080"
        }
        , {
            name: "point_left", unicode: "1f448", shortname: ":point_left:", code_decimal: "&#128072;", category: "p", emoji_order: "1092"
        }
        , {
            name: "point_right", unicode: "1f449", shortname: ":point_right:", code_decimal: "&#128073;", category: "p", emoji_order: "1098"
        }
        , {
            name: "point_up", unicode: "261d", shortname: ":point_up:", code_decimal: "&#9757;", category: "p", emoji_order: "1104"
        }
        , {
            name: "point_up_2", unicode: "1f446", shortname: ":point_up_2:", code_decimal: "&#128070;", category: "p", emoji_order: "1110"
        }
        , {
            name: "middle_finger", unicode: "1f595", shortname: ":middle_finger:", code_decimal: "&#128405;", category: "p", emoji_order: "1116"
        }
        , {
            name: "point_down", unicode: "1f447", shortname: ":point_down:", code_decimal: "&#128071;", category: "p", emoji_order: "1122"
        }
        , {
            name: "v", unicode: "270c", shortname: ":v:", code_decimal: "&#9996;", category: "p", emoji_order: "1128"
        }
        , {
            name: "ok_hand", unicode: "1f44c", shortname: ":ok_hand:", code_decimal: "&#128076;", category: "p", emoji_order: "1170"
        }
        , {
            name: "thumbsup", unicode: "1f44d", shortname: ":thumbsup:", code_decimal: "&#128077;", category: "p", emoji_order: "1176"
        }
        , {
            name: "thumbsdown", unicode: "1f44e", shortname: ":thumbsdown:", code_decimal: "&#128078;", category: "p", emoji_order: "1182"
        }
        , {
            name: "fist", unicode: "270a", shortname: ":fist:", code_decimal: "&#9994;", category: "p", emoji_order: "1188"
        }
        , {
            name: "wave", unicode: "1f44b", shortname: ":wave:", code_decimal: "&#128075;", category: "p", emoji_order: "1218"
        }
        , {
            name: "clap", unicode: "1f44f", shortname: ":clap:", code_decimal: "&#128079;", category: "p", emoji_order: "1224"
        }
        , {
            name: "writing_hand", unicode: "270d", shortname: ":writing_hand:", code_decimal: "&#9997;", category: "p", emoji_order: "1230"
        }
        , {
            name: "open_hands", unicode: "1f450", shortname: ":open_hands:", code_decimal: "&#128080;", category: "p", emoji_order: "1236"
        }
        , {
            name: "raised_hands", unicode: "1f64c", shortname: ":raised_hands:", code_decimal: "&#128588;", category: "p", emoji_order: "1242"
        }
        , {
            name: "pray", unicode: "1f64f", shortname: ":pray:", code_decimal: "&#128591;", category: "p", emoji_order: "1248"
        }
        , {
            name: "nail_care", unicode: "1f485", shortname: ":nail_care:", code_decimal: "&#128133;", category: "p", emoji_order: "1260"
        }
        , {
            name: "ear", unicode: "1f442", shortname: ":ear:", code_decimal: "&#128066;", category: "p", emoji_order: "1266"
        }
        , {
            name: "nose", unicode: "1f443", shortname: ":nose:", code_decimal: "&#128067;", category: "p", emoji_order: "1272"
        }
        , {
            name: "footprints", unicode: "1f463", shortname: ":footprints:", code_decimal: "&#128099;", category: "p", emoji_order: "1278"
        }
        , {
            name: "eyes", unicode: "1f440", shortname: ":eyes:", code_decimal: "&#128064;", category: "p", emoji_order: "1279"
        }
        , {
            name: "eye", unicode: "1f441", shortname: ":eye:", code_decimal: "&#128065;", category: "p", emoji_order: "1280"
        }
        , {
            name: "tongue", unicode: "1f445", shortname: ":tongue:", code_decimal: "&#128069;", category: "p", emoji_order: "1282"
        }
        , {
            name: "lips", unicode: "1f444", shortname: ":lips:", code_decimal: "&#128068;", category: "p", emoji_order: "1283"
        }
        , {
            name: "kiss", unicode: "1f48b", shortname: ":kiss:", code_decimal: "&#128139;", category: "p", emoji_order: "1284"
        }
        , {
            name: "cupid", unicode: "1f498", shortname: ":cupid:", code_decimal: "&#128152;", category: "s", emoji_order: "1285"
        }
        , {
            name: "heart", unicode: "2764", shortname: ":heart:", code_decimal: "&#10084;", category: "s", emoji_order: "1286"
        }
        , {
            name: "heartbeat", unicode: "1f493", shortname: ":heartbeat:", code_decimal: "&#128147;", category: "s", emoji_order: "1287"
        }
        , {
            name: "broken_heart", unicode: "1f494", shortname: ":broken_heart:", code_decimal: "&#128148;", category: "s", emoji_order: "1288"
        }
        , {
            name: "two_hearts", unicode: "1f495", shortname: ":two_hearts:", code_decimal: "&#128149;", category: "s", emoji_order: "1289"
        }
        , {
            name: "sparkling_heart", unicode: "1f496", shortname: ":sparkling_heart:", code_decimal: "&#128150;", category: "s", emoji_order: "1290"
        }
        , {
            name: "heartpulse", unicode: "1f497", shortname: ":heartpulse:", code_decimal: "&#128151;", category: "s", emoji_order: "1291"
        }
        , {
            name: "blue_heart", unicode: "1f499", shortname: ":blue_heart:", code_decimal: "&#128153;", category: "s", emoji_order: "1292"
        }
        , {
            name: "green_heart", unicode: "1f49a", shortname: ":green_heart:", code_decimal: "&#128154;", category: "s", emoji_order: "1293"
        }
        , {
            name: "yellow_heart", unicode: "1f49b", shortname: ":yellow_heart:", code_decimal: "&#128155;", category: "s", emoji_order: "1294"
        }
        , {
            name: "purple_heart", unicode: "1f49c", shortname: ":purple_heart:", code_decimal: "&#128156;", category: "s", emoji_order: "1295"
        }
        , {
            name: "black_heart", unicode: "1f5a4", shortname: ":black_heart:", code_decimal: "&#128420;", category: "s", emoji_order: "1296"
        }
        , {
            name: "gift_heart", unicode: "1f49d", shortname: ":gift_heart:", code_decimal: "&#128157;", category: "s", emoji_order: "1297"
        }
        , {
            name: "revolving_hearts", unicode: "1f49e", shortname: ":revolving_hearts:", code_decimal: "&#128158;", category: "s", emoji_order: "1298"
        }
        , {
            name: "heart_decoration", unicode: "1f49f", shortname: ":heart_decoration:", code_decimal: "&#128159;", category: "s", emoji_order: "1299"
        }
        , {
            name: "heart_exclamation", unicode: "2763", shortname: ":heart_exclamation:", code_decimal: "&#10083;", category: "s", emoji_order: "1300"
        }
        , {
            name: "love_letter", unicode: "1f48c", shortname: ":love_letter:", code_decimal: "&#128140;", category: "o", emoji_order: "1301"
        }
        , {
            name: "zzz", unicode: "1f4a4", shortname: ":zzz:", code_decimal: "&#128164;", category: "p", emoji_order: "1302"
        }
        , {
            name: "anger", unicode: "1f4a2", shortname: ":anger:", code_decimal: "&#128162;", category: "s", emoji_order: "1303"
        }
        , {
            name: "bomb", unicode: "1f4a3", shortname: ":bomb:", code_decimal: "&#128163;", category: "o", emoji_order: "1304"
        }
        , {
            name: "boom", unicode: "1f4a5", shortname: ":boom:", code_decimal: "&#128165;", category: "s", emoji_order: "1305"
        }
        , {
            name: "sweat_drops", unicode: "1f4a6", shortname: ":sweat_drops:", code_decimal: "&#128166;", category: "n", emoji_order: "1306"
        }
        , {
            name: "dash", unicode: "1f4a8", shortname: ":dash:", code_decimal: "&#128168;", category: "n", emoji_order: "1307"
        }
        , {
            name: "dizzy", unicode: "1f4ab", shortname: ":dizzy:", code_decimal: "&#128171;", category: "s", emoji_order: "1308"
        }
        , {
            name: "speech_balloon", unicode: "1f4ac", shortname: ":speech_balloon:", code_decimal: "&#128172;", category: "s", emoji_order: "1309"
        }
        , {
            name: "speech_left", unicode: "1f5e8", shortname: ":speech_left:", code_decimal: "&#128488;", category: "s", emoji_order: "1310"
        }
        , {
            name: "anger_right", unicode: "1f5ef", shortname: ":anger_right:", code_decimal: "&#128495;", category: "s", emoji_order: "1311"
        }
        , {
            name: "thought_balloon", unicode: "1f4ad", shortname: ":thought_balloon:", code_decimal: "&#128173;", category: "s", emoji_order: "1312"
        }
        , {
            name: "hole", unicode: "1f573", shortname: ":hole:", code_decimal: "&#128371;", category: "o", emoji_order: "1313"
        }
        , {
            name: "eyeglasses", unicode: "1f453", shortname: ":eyeglasses:", code_decimal: "&#128083;", category: "p", emoji_order: "1314"
        }
        , {
            name: "dark_sunglasses", unicode: "1f576", shortname: ":dark_sunglasses:", code_decimal: "&#128374;", category: "p", emoji_order: "1315"
        }
        , {
            name: "necktie", unicode: "1f454", shortname: ":necktie:", code_decimal: "&#128084;", category: "p", emoji_order: "1316"
        }
        , {
            name: "shirt", unicode: "1f455", shortname: ":shirt:", code_decimal: "&#128085;", category: "p", emoji_order: "1317"
        }
        , {
            name: "jeans", unicode: "1f456", shortname: ":jeans:", code_decimal: "&#128086;", category: "p", emoji_order: "1318"
        }
        , {
            name: "dress", unicode: "1f457", shortname: ":dress:", code_decimal: "&#128087;", category: "p", emoji_order: "1319"
        }
        , {
            name: "kimono", unicode: "1f458", shortname: ":kimono:", code_decimal: "&#128088;", category: "p", emoji_order: "1320"
        }
        , {
            name: "bikini", unicode: "1f459", shortname: ":bikini:", code_decimal: "&#128089;", category: "p", emoji_order: "1321"
        }
        , {
            name: "womans_clothes", unicode: "1f45a", shortname: ":womans_clothes:", code_decimal: "&#128090;", category: "p", emoji_order: "1322"
        }
        , {
            name: "purse", unicode: "1f45b", shortname: ":purse:", code_decimal: "&#128091;", category: "p", emoji_order: "1323"
        }
        , {
            name: "handbag", unicode: "1f45c", shortname: ":handbag:", code_decimal: "&#128092;", category: "p", emoji_order: "1324"
        }
        , {
            name: "pouch", unicode: "1f45d", shortname: ":pouch:", code_decimal: "&#128093;", category: "p", emoji_order: "1325"
        }
        , {
            name: "shopping_bags", unicode: "1f6cd", shortname: ":shopping_bags:", code_decimal: "&#128717;", category: "o", emoji_order: "1326"
        }
        , {
            name: "school_satchel", unicode: "1f392", shortname: ":school_satchel:", code_decimal: "&#127890;", category: "p", emoji_order: "1327"
        }
        , {
            name: "mans_shoe", unicode: "1f45e", shortname: ":mans_shoe:", code_decimal: "&#128094;", category: "p", emoji_order: "1328"
        }
        , {
            name: "athletic_shoe", unicode: "1f45f", shortname: ":athletic_shoe:", code_decimal: "&#128095;", category: "p", emoji_order: "1329"
        }
        , {
            name: "high_heel", unicode: "1f460", shortname: ":high_heel:", code_decimal: "&#128096;", category: "p", emoji_order: "1330"
        }
        , {
            name: "sandal", unicode: "1f461", shortname: ":sandal:", code_decimal: "&#128097;", category: "p", emoji_order: "1331"
        }
        , {
            name: "boot", unicode: "1f462", shortname: ":boot:", code_decimal: "&#128098;", category: "p", emoji_order: "1332"
        }
        , {
            name: "crown", unicode: "1f451", shortname: ":crown:", code_decimal: "&#128081;", category: "p", emoji_order: "1333"
        }
        , {
            name: "womans_hat", unicode: "1f452", shortname: ":womans_hat:", code_decimal: "&#128082;", category: "p", emoji_order: "1334"
        }
        , {
            name: "tophat", unicode: "1f3a9", shortname: ":tophat:", code_decimal: "&#127913;", category: "p", emoji_order: "1335"
        }
        , {
            name: "mortar_board", unicode: "1f393", shortname: ":mortar_board:", code_decimal: "&#127891;", category: "p", emoji_order: "1336"
        }
        , {
            name: "prayer_beads", unicode: "1f4ff", shortname: ":prayer_beads:", code_decimal: "&#128255;", category: "o", emoji_order: "1338"
        }
        , {
            name: "lipstick", unicode: "1f484", shortname: ":lipstick:", code_decimal: "&#128132;", category: "p", emoji_order: "1339"
        }
        , {
            name: "ring", unicode: "1f48d", shortname: ":ring:", code_decimal: "&#128141;", category: "p", emoji_order: "1340"
        }
        , {
            name: "gem", unicode: "1f48e", shortname: ":gem:", code_decimal: "&#128142;", category: "o", emoji_order: "1341"
        }
        , {
            name: "monkey_face", unicode: "1f435", shortname: ":monkey_face:", code_decimal: "&#128053;", category: "n", emoji_order: "1342"
        }
        , {
            name: "monkey", unicode: "1f412", shortname: ":monkey:", code_decimal: "&#128018;", category: "n", emoji_order: "1343"
        }
        , {
            name: "dog", unicode: "1f436", shortname: ":dog:", code_decimal: "&#128054;", category: "n", emoji_order: "1345"
        }
        , {
            name: "dog2", unicode: "1f415", shortname: ":dog2:", code_decimal: "&#128021;", category: "n", emoji_order: "1346"
        }
        , {
            name: "poodle", unicode: "1f429", shortname: ":poodle:", code_decimal: "&#128041;", category: "n", emoji_order: "1347"
        }
        , {
            name: "wolf", unicode: "1f43a", shortname: ":wolf:", code_decimal: "&#128058;", category: "n", emoji_order: "1348"
        }
        , {
            name: "cat", unicode: "1f431", shortname: ":cat:", code_decimal: "&#128049;", category: "n", emoji_order: "1350"
        }
        , {
            name: "cat2", unicode: "1f408", shortname: ":cat2:", code_decimal: "&#128008;", category: "n", emoji_order: "1351"
        }
        , {
            name: "lion_face", unicode: "1f981", shortname: ":lion_face:", code_decimal: "&#129409;", category: "n", emoji_order: "1352"
        }
        , {
            name: "tiger", unicode: "1f42f", shortname: ":tiger:", code_decimal: "&#128047;", category: "n", emoji_order: "1353"
        }
        , {
            name: "tiger2", unicode: "1f405", shortname: ":tiger2:", code_decimal: "&#128005;", category: "n", emoji_order: "1354"
        }
        , {
            name: "leopard", unicode: "1f406", shortname: ":leopard:", code_decimal: "&#128006;", category: "n", emoji_order: "1355"
        }
        , {
            name: "horse", unicode: "1f434", shortname: ":horse:", code_decimal: "&#128052;", category: "n", emoji_order: "1356"
        }
        , {
            name: "racehorse", unicode: "1f40e", shortname: ":racehorse:", code_decimal: "&#128014;", category: "n", emoji_order: "1357"
        }
        , {
            name: "cow", unicode: "1f42e", shortname: ":cow:", code_decimal: "&#128046;", category: "n", emoji_order: "1360"
        }
        , {
            name: "ox", unicode: "1f402", shortname: ":ox:", code_decimal: "&#128002;", category: "n", emoji_order: "1361"
        }
        , {
            name: "water_buffalo", unicode: "1f403", shortname: ":water_buffalo:", code_decimal: "&#128003;", category: "n", emoji_order: "1362"
        }
        , {
            name: "cow2", unicode: "1f404", shortname: ":cow2:", code_decimal: "&#128004;", category: "n", emoji_order: "1363"
        }
        , {
            name: "pig", unicode: "1f437", shortname: ":pig:", code_decimal: "&#128055;", category: "n", emoji_order: "1364"
        }
        , {
            name: "pig2", unicode: "1f416", shortname: ":pig2:", code_decimal: "&#128022;", category: "n", emoji_order: "1365"
        }
        , {
            name: "boar", unicode: "1f417", shortname: ":boar:", code_decimal: "&#128023;", category: "n", emoji_order: "1366"
        }
        , {
            name: "pig_nose", unicode: "1f43d", shortname: ":pig_nose:", code_decimal: "&#128061;", category: "n", emoji_order: "1367"
        }
        , {
            name: "ram", unicode: "1f40f", shortname: ":ram:", code_decimal: "&#128015;", category: "n", emoji_order: "1368"
        }
        , {
            name: "sheep", unicode: "1f411", shortname: ":sheep:", code_decimal: "&#128017;", category: "n", emoji_order: "1369"
        }
        , {
            name: "goat", unicode: "1f410", shortname: ":goat:", code_decimal: "&#128016;", category: "n", emoji_order: "1370"
        }
        , {
            name: "dromedary_camel", unicode: "1f42a", shortname: ":dromedary_camel:", code_decimal: "&#128042;", category: "n", emoji_order: "1371"
        }
        , {
            name: "camel", unicode: "1f42b", shortname: ":camel:", code_decimal: "&#128043;", category: "n", emoji_order: "1372"
        }
        , {
            name: "elephant", unicode: "1f418", shortname: ":elephant:", code_decimal: "&#128024;", category: "n", emoji_order: "1373"
        }
        , {
            name: "mouse", unicode: "1f42d", shortname: ":mouse:", code_decimal: "&#128045;", category: "n", emoji_order: "1375"
        }
        , {
            name: "mouse2", unicode: "1f401", shortname: ":mouse2:", code_decimal: "&#128001;", category: "n", emoji_order: "1376"
        }
        , {
            name: "rat", unicode: "1f400", shortname: ":rat:", code_decimal: "&#128000;", category: "n", emoji_order: "1377"
        }
        , {
            name: "hamster", unicode: "1f439", shortname: ":hamster:", code_decimal: "&#128057;", category: "n", emoji_order: "1378"
        }
        , {
            name: "rabbit", unicode: "1f430", shortname: ":rabbit:", code_decimal: "&#128048;", category: "n", emoji_order: "1379"
        }
        , {
            name: "rabbit2", unicode: "1f407", shortname: ":rabbit2:", code_decimal: "&#128007;", category: "n", emoji_order: "1380"
        }
        , {
            name: "chipmunk", unicode: "1f43f", shortname: ":chipmunk:", code_decimal: "&#128063;", category: "n", emoji_order: "1381"
        }
        , {
            name: "bear", unicode: "1f43b", shortname: ":bear:", code_decimal: "&#128059;", category: "n", emoji_order: "1383"
        }
        , {
            name: "koala", unicode: "1f428", shortname: ":koala:", code_decimal: "&#128040;", category: "n", emoji_order: "1384"
        }
        , {
            name: "panda_face", unicode: "1f43c", shortname: ":panda_face:", code_decimal: "&#128060;", category: "n", emoji_order: "1385"
        }
        , {
            name: "feet", unicode: "1f43e", shortname: ":feet:", code_decimal: "&#128062;", category: "n", emoji_order: "1386"
        }
        , {
            name: "turkey", unicode: "1f983", shortname: ":turkey:", code_decimal: "&#129411;", category: "n", emoji_order: "1387"
        }
        , {
            name: "chicken", unicode: "1f414", shortname: ":chicken:", code_decimal: "&#128020;", category: "n", emoji_order: "1388"
        }
        , {
            name: "rooster", unicode: "1f413", shortname: ":rooster:", code_decimal: "&#128019;", category: "n", emoji_order: "1389"
        }
        , {
            name: "hatching_chick", unicode: "1f423", shortname: ":hatching_chick:", code_decimal: "&#128035;", category: "n", emoji_order: "1390"
        }
        , {
            name: "baby_chick", unicode: "1f424", shortname: ":baby_chick:", code_decimal: "&#128036;", category: "n", emoji_order: "1391"
        }
        , {
            name: "hatched_chick", unicode: "1f425", shortname: ":hatched_chick:", code_decimal: "&#128037;", category: "n", emoji_order: "1392"
        }
        , {
            name: "bird", unicode: "1f426", shortname: ":bird:", code_decimal: "&#128038;", category: "n", emoji_order: "1393"
        }
        , {
            name: "penguin", unicode: "1f427", shortname: ":penguin:", code_decimal: "&#128039;", category: "n", emoji_order: "1394"
        }
        , {
            name: "frog", unicode: "1f438", shortname: ":frog:", code_decimal: "&#128056;", category: "n", emoji_order: "1399"
        }
        , {
            name: "crocodile", unicode: "1f40a", shortname: ":crocodile:", code_decimal: "&#128010;", category: "n", emoji_order: "1400"
        }
        , {
            name: "turtle", unicode: "1f422", shortname: ":turtle:", code_decimal: "&#128034;", category: "n", emoji_order: "1401"
        }
        , {
            name: "snake", unicode: "1f40d", shortname: ":snake:", code_decimal: "&#128013;", category: "n", emoji_order: "1403"
        }
        , {
            name: "dragon_face", unicode: "1f432", shortname: ":dragon_face:", code_decimal: "&#128050;", category: "n", emoji_order: "1404"
        }
        , {
            name: "dragon", unicode: "1f409", shortname: ":dragon:", code_decimal: "&#128009;", category: "n", emoji_order: "1405"
        }
        , {
            name: "whale", unicode: "1f433", shortname: ":whale:", code_decimal: "&#128051;", category: "n", emoji_order: "1406"
        }
        , {
            name: "whale2", unicode: "1f40b", shortname: ":whale2:", code_decimal: "&#128011;", category: "n", emoji_order: "1407"
        }
        , {
            name: "dolphin", unicode: "1f42c", shortname: ":dolphin:", code_decimal: "&#128044;", category: "n", emoji_order: "1408"
        }
        , {
            name: "fish", unicode: "1f41f", shortname: ":fish:", code_decimal: "&#128031;", category: "n", emoji_order: "1409"
        }
        , {
            name: "tropical_fish", unicode: "1f420", shortname: ":tropical_fish:", code_decimal: "&#128032;", category: "n", emoji_order: "1410"
        }
        , {
            name: "blowfish", unicode: "1f421", shortname: ":blowfish:", code_decimal: "&#128033;", category: "n", emoji_order: "1411"
        }
        , {
            name: "octopus", unicode: "1f419", shortname: ":octopus:", code_decimal: "&#128025;", category: "n", emoji_order: "1413"
        }
        , {
            name: "shell", unicode: "1f41a", shortname: ":shell:", code_decimal: "&#128026;", category: "n", emoji_order: "1414"
        }
        , {
            name: "crab", unicode: "1f980", shortname: ":crab:", code_decimal: "&#129408;", category: "n", emoji_order: "1415"
        }
        , {
            name: "snail", unicode: "1f40c", shortname: ":snail:", code_decimal: "&#128012;", category: "n", emoji_order: "1419"
        }
        , {
            name: "bug", unicode: "1f41b", shortname: ":bug:", code_decimal: "&#128027;", category: "n", emoji_order: "1420"
        }
        , {
            name: "ant", unicode: "1f41c", shortname: ":ant:", code_decimal: "&#128028;", category: "n", emoji_order: "1421"
        }
        , {
            name: "bee", unicode: "1f41d", shortname: ":bee:", code_decimal: "&#128029;", category: "n", emoji_order: "1422"
        }
        , {
            name: "beetle", unicode: "1f41e", shortname: ":beetle:", code_decimal: "&#128030;", category: "n", emoji_order: "1423"
        }
        , {
            name: "spider", unicode: "1f577", shortname: ":spider:", code_decimal: "&#128375;", category: "n", emoji_order: "1424"
        }
        , {
            name: "spider_web", unicode: "1f578", shortname: ":spider_web:", code_decimal: "&#128376;", category: "n", emoji_order: "1425"
        }
        , {
            name: "scorpion", unicode: "1f982", shortname: ":scorpion:", code_decimal: "&#129410;", category: "n", emoji_order: "1426"
        }
        , {
            name: "bouquet", unicode: "1f490", shortname: ":bouquet:", code_decimal: "&#128144;", category: "n", emoji_order: "1427"
        }
        , {
            name: "cherry_blossom", unicode: "1f338", shortname: ":cherry_blossom:", code_decimal: "&#127800;", category: "n", emoji_order: "1428"
        }
        , {
            name: "white_flower", unicode: "1f4ae", shortname: ":white_flower:", code_decimal: "&#128174;", category: "s", emoji_order: "1429"
        }
        , {
            name: "rosette", unicode: "1f3f5", shortname: ":rosette:", code_decimal: "&#127989;", category: "n", emoji_order: "1430"
        }
        , {
            name: "rose", unicode: "1f339", shortname: ":rose:", code_decimal: "&#127801;", category: "n", emoji_order: "1431"
        }
        , {
            name: "hibiscus", unicode: "1f33a", shortname: ":hibiscus:", code_decimal: "&#127802;", category: "n", emoji_order: "1433"
        }
        , {
            name: "sunflower", unicode: "1f33b", shortname: ":sunflower:", code_decimal: "&#127803;", category: "n", emoji_order: "1434"
        }
        , {
            name: "blossom", unicode: "1f33c", shortname: ":blossom:", code_decimal: "&#127804;", category: "n", emoji_order: "1435"
        }
        , {
            name: "tulip", unicode: "1f337", shortname: ":tulip:", code_decimal: "&#127799;", category: "n", emoji_order: "1436"
        }
        , {
            name: "seedling", unicode: "1f331", shortname: ":seedling:", code_decimal: "&#127793;", category: "n", emoji_order: "1437"
        }
        , {
            name: "evergreen_tree", unicode: "1f332", shortname: ":evergreen_tree:", code_decimal: "&#127794;", category: "n", emoji_order: "1438"
        }
        , {
            name: "deciduous_tree", unicode: "1f333", shortname: ":deciduous_tree:", code_decimal: "&#127795;", category: "n", emoji_order: "1439"
        }
        , {
            name: "palm_tree", unicode: "1f334", shortname: ":palm_tree:", code_decimal: "&#127796;", category: "n", emoji_order: "1440"
        }
        , {
            name: "cactus", unicode: "1f335", shortname: ":cactus:", code_decimal: "&#127797;", category: "n", emoji_order: "1441"
        }
        , {
            name: "ear_of_rice", unicode: "1f33e", shortname: ":ear_of_rice:", code_decimal: "&#127806;", category: "n", emoji_order: "1442"
        }
        , {
            name: "herb", unicode: "1f33f", shortname: ":herb:", code_decimal: "&#127807;", category: "n", emoji_order: "1443"
        }
        , {
            name: "shamrock", unicode: "2618", shortname: ":shamrock:", code_decimal: "&#9752;", category: "n", emoji_order: "1444"
        }
        , {
            name: "four_leaf_clover", unicode: "1f340", shortname: ":four_leaf_clover:", code_decimal: "&#127808;", category: "n", emoji_order: "1445"
        }
        , {
            name: "maple_leaf", unicode: "1f341", shortname: ":maple_leaf:", code_decimal: "&#127809;", category: "n", emoji_order: "1446"
        }
        , {
            name: "fallen_leaf", unicode: "1f342", shortname: ":fallen_leaf:", code_decimal: "&#127810;", category: "n", emoji_order: "1447"
        }
        , {
            name: "leaves", unicode: "1f343", shortname: ":leaves:", code_decimal: "&#127811;", category: "n", emoji_order: "1448"
        }
        , {
            name: "grapes", unicode: "1f347", shortname: ":grapes:", code_decimal: "&#127815;", category: "d", emoji_order: "1449"
        }
        , {
            name: "melon", unicode: "1f348", shortname: ":melon:", code_decimal: "&#127816;", category: "d", emoji_order: "1450"
        }
        , {
            name: "watermelon", unicode: "1f349", shortname: ":watermelon:", code_decimal: "&#127817;", category: "d", emoji_order: "1451"
        }
        , {
            name: "tangerine", unicode: "1f34a", shortname: ":tangerine:", code_decimal: "&#127818;", category: "d", emoji_order: "1452"
        }
        , {
            name: "lemon", unicode: "1f34b", shortname: ":lemon:", code_decimal: "&#127819;", category: "d", emoji_order: "1453"
        }
        , {
            name: "banana", unicode: "1f34c", shortname: ":banana:", code_decimal: "&#127820;", category: "d", emoji_order: "1454"
        }
        , {
            name: "pineapple", unicode: "1f34d", shortname: ":pineapple:", code_decimal: "&#127821;", category: "d", emoji_order: "1455"
        }
        , {
            name: "apple", unicode: "1f34e", shortname: ":apple:", code_decimal: "&#127822;", category: "d", emoji_order: "1456"
        }
        , {
            name: "green_apple", unicode: "1f34f", shortname: ":green_apple:", code_decimal: "&#127823;", category: "d", emoji_order: "1457"
        }
        , {
            name: "pear", unicode: "1f350", shortname: ":pear:", code_decimal: "&#127824;", category: "d", emoji_order: "1458"
        }
        , {
            name: "peach", unicode: "1f351", shortname: ":peach:", code_decimal: "&#127825;", category: "d", emoji_order: "1459"
        }
        , {
            name: "cherries", unicode: "1f352", shortname: ":cherries:", code_decimal: "&#127826;", category: "d", emoji_order: "1460"
        }
        , {
            name: "strawberry", unicode: "1f353", shortname: ":strawberry:", code_decimal: "&#127827;", category: "d", emoji_order: "1461"
        }
        , {
            name: "tomato", unicode: "1f345", shortname: ":tomato:", code_decimal: "&#127813;", category: "d", emoji_order: "1463"
        }
        , {
            name: "eggplant", unicode: "1f346", shortname: ":eggplant:", code_decimal: "&#127814;", category: "d", emoji_order: "1465"
        }
        , {
            name: "corn", unicode: "1f33d", shortname: ":corn:", code_decimal: "&#127805;", category: "d", emoji_order: "1468"
        }
        , {
            name: "hot_pepper", unicode: "1f336", shortname: ":hot_pepper:", code_decimal: "&#127798;", category: "d", emoji_order: "1469"
        }
        , {
            name: "mushroom", unicode: "1f344", shortname: ":mushroom:", code_decimal: "&#127812;", category: "n", emoji_order: "1471"
        }
        , {
            name: "bread", unicode: "1f35e", shortname: ":bread:", code_decimal: "&#127838;", category: "d", emoji_order: "1474"
        }
        , {
            name: "meat_on_bone", unicode: "1f356", shortname: ":meat_on_bone:", code_decimal: "&#127830;", category: "d", emoji_order: "1479"
        }
        , {
            name: "poultry_leg", unicode: "1f357", shortname: ":poultry_leg:", code_decimal: "&#127831;", category: "d", emoji_order: "1480"
        }
        , {
            name: "hamburger", unicode: "1f354", shortname: ":hamburger:", code_decimal: "&#127828;", category: "d", emoji_order: "1482"
        }
        , {
            name: "fries", unicode: "1f35f", shortname: ":fries:", code_decimal: "&#127839;", category: "d", emoji_order: "1483"
        }
        , {
            name: "pizza", unicode: "1f355", shortname: ":pizza:", code_decimal: "&#127829;", category: "d", emoji_order: "1484"
        }
        , {
            name: "hotdog", unicode: "1f32d", shortname: ":hotdog:", code_decimal: "&#127789;", category: "d", emoji_order: "1485"
        }
        , {
            name: "taco", unicode: "1f32e", shortname: ":taco:", code_decimal: "&#127790;", category: "d", emoji_order: "1486"
        }
        , {
            name: "burrito", unicode: "1f32f", shortname: ":burrito:", code_decimal: "&#127791;", category: "d", emoji_order: "1487"
        }
        , {
            name: "egg", unicode: "1f95a", shortname: ":egg:", code_decimal: "&#129370;", category: "d", emoji_order: "1489"
        }
        , {
            name: "stew", unicode: "1f372", shortname: ":stew:", code_decimal: "&#127858;", category: "d", emoji_order: "1492"
        }
        , {
            name: "popcorn", unicode: "1f37f", shortname: ":popcorn:", code_decimal: "&#127871;", category: "d", emoji_order: "1494"
        }
        , {
            name: "bento", unicode: "1f371", shortname: ":bento:", code_decimal: "&#127857;", category: "d", emoji_order: "1495"
        }
        , {
            name: "rice_cracker", unicode: "1f358", shortname: ":rice_cracker:", code_decimal: "&#127832;", category: "d", emoji_order: "1496"
        }
        , {
            name: "rice_ball", unicode: "1f359", shortname: ":rice_ball:", code_decimal: "&#127833;", category: "d", emoji_order: "1497"
        }
        , {
            name: "rice", unicode: "1f35a", shortname: ":rice:", code_decimal: "&#127834;", category: "d", emoji_order: "1498"
        }
        , {
            name: "curry", unicode: "1f35b", shortname: ":curry:", code_decimal: "&#127835;", category: "d", emoji_order: "1499"
        }
        , {
            name: "ramen", unicode: "1f35c", shortname: ":ramen:", code_decimal: "&#127836;", category: "d", emoji_order: "1500"
        }
        , {
            name: "spaghetti", unicode: "1f35d", shortname: ":spaghetti:", code_decimal: "&#127837;", category: "d", emoji_order: "1501"
        }
        , {
            name: "sweet_potato", unicode: "1f360", shortname: ":sweet_potato:", code_decimal: "&#127840;", category: "d", emoji_order: "1502"
        }
        , {
            name: "oden", unicode: "1f362", shortname: ":oden:", code_decimal: "&#127842;", category: "d", emoji_order: "1503"
        }
        , {
            name: "sushi", unicode: "1f363", shortname: ":sushi:", code_decimal: "&#127843;", category: "d", emoji_order: "1504"
        }
        , {
            name: "fried_shrimp", unicode: "1f364", shortname: ":fried_shrimp:", code_decimal: "&#127844;", category: "d", emoji_order: "1505"
        }
        , {
            name: "fish_cake", unicode: "1f365", shortname: ":fish_cake:", code_decimal: "&#127845;", category: "d", emoji_order: "1506"
        }
        , {
            name: "dango", unicode: "1f361", shortname: ":dango:", code_decimal: "&#127841;", category: "d", emoji_order: "1507"
        }
        , {
            name: "icecream", unicode: "1f366", shortname: ":icecream:", code_decimal: "&#127846;", category: "d", emoji_order: "1508"
        }
        , {
            name: "shaved_ice", unicode: "1f367", shortname: ":shaved_ice:", code_decimal: "&#127847;", category: "d", emoji_order: "1509"
        }
        , {
            name: "ice_cream", unicode: "1f368", shortname: ":ice_cream:", code_decimal: "&#127848;", category: "d", emoji_order: "1510"
        }
        , {
            name: "doughnut", unicode: "1f369", shortname: ":doughnut:", code_decimal: "&#127849;", category: "d", emoji_order: "1511"
        }
        , {
            name: "cookie", unicode: "1f36a", shortname: ":cookie:", code_decimal: "&#127850;", category: "d", emoji_order: "1512"
        }
        , {
            name: "birthday", unicode: "1f382", shortname: ":birthday:", code_decimal: "&#127874;", category: "d", emoji_order: "1513"
        }
        , {
            name: "cake", unicode: "1f370", shortname: ":cake:", code_decimal: "&#127856;", category: "d", emoji_order: "1514"
        }
        , {
            name: "chocolate_bar", unicode: "1f36b", shortname: ":chocolate_bar:", code_decimal: "&#127851;", category: "d", emoji_order: "1515"
        }
        , {
            name: "candy", unicode: "1f36c", shortname: ":candy:", code_decimal: "&#127852;", category: "d", emoji_order: "1516"
        }
        , {
            name: "lollipop", unicode: "1f36d", shortname: ":lollipop:", code_decimal: "&#127853;", category: "d", emoji_order: "1517"
        }
        , {
            name: "custard", unicode: "1f36e", shortname: ":custard:", code_decimal: "&#127854;", category: "d", emoji_order: "1518"
        }
        , {
            name: "honey_pot", unicode: "1f36f", shortname: ":honey_pot:", code_decimal: "&#127855;", category: "d", emoji_order: "1519"
        }
        , {
            name: "baby_bottle", unicode: "1f37c", shortname: ":baby_bottle:", code_decimal: "&#127868;", category: "d", emoji_order: "1520"
        }
        , {
            name: "coffee", unicode: "2615", shortname: ":coffee:", code_decimal: "&#9749;", category: "d", emoji_order: "1522"
        }
        , {
            name: "tea", unicode: "1f375", shortname: ":tea:", code_decimal: "&#127861;", category: "d", emoji_order: "1523"
        }
        , {
            name: "sake", unicode: "1f376", shortname: ":sake:", code_decimal: "&#127862;", category: "d", emoji_order: "1524"
        }
        , {
            name: "champagne", unicode: "1f37e", shortname: ":champagne:", code_decimal: "&#127870;", category: "d", emoji_order: "1525"
        }
        , {
            name: "wine_glass", unicode: "1f377", shortname: ":wine_glass:", code_decimal: "&#127863;", category: "d", emoji_order: "1526"
        }
        , {
            name: "cocktail", unicode: "1f378", shortname: ":cocktail:", code_decimal: "&#127864;", category: "d", emoji_order: "1527"
        }
        , {
            name: "tropical_drink", unicode: "1f379", shortname: ":tropical_drink:", code_decimal: "&#127865;", category: "d", emoji_order: "1528"
        }
        , {
            name: "beer", unicode: "1f37a", shortname: ":beer:", code_decimal: "&#127866;", category: "d", emoji_order: "1529"
        }
        , {
            name: "beers", unicode: "1f37b", shortname: ":beers:", code_decimal: "&#127867;", category: "d", emoji_order: "1530"
        }
        , {
            name: "fork_and_knife", unicode: "1f374", shortname: ":fork_and_knife:", code_decimal: "&#127860;", category: "d", emoji_order: "1534"
        }
        , {
            name: "amphora", unicode: "1f3fa", shortname: ":amphora:", code_decimal: "&#127994;", category: "o", emoji_order: "1537"
        }
        , {
            name: "earth_africa", unicode: "1f30d", shortname: ":earth_africa:", code_decimal: "&#127757;", category: "n", emoji_order: "1538"
        }
        , {
            name: "earth_americas", unicode: "1f30e", shortname: ":earth_americas:", code_decimal: "&#127758;", category: "n", emoji_order: "1539"
        }
        , {
            name: "earth_asia", unicode: "1f30f", shortname: ":earth_asia:", code_decimal: "&#127759;", category: "n", emoji_order: "1540"
        }
        , {
            name: "globe_with_meridians", unicode: "1f310", shortname: ":globe_with_meridians:", code_decimal: "&#127760;", category: "s", emoji_order: "1541"
        }
        , {
            name: "japan", unicode: "1f5fe", shortname: ":japan:", code_decimal: "&#128510;", category: "t", emoji_order: "1543"
        }
        , {
            name: "mountain", unicode: "26f0", shortname: ":mountain:", code_decimal: "&#9968;", category: "t", emoji_order: "1545"
        }
        , {
            name: "volcano", unicode: "1f30b", shortname: ":volcano:", code_decimal: "&#127755;", category: "t", emoji_order: "1546"
        }
        , {
            name: "mount_fuji", unicode: "1f5fb", shortname: ":mount_fuji:", code_decimal: "&#128507;", category: "t", emoji_order: "1547"
        }
        , {
            name: "camping", unicode: "1f3d5", shortname: ":camping:", code_decimal: "&#127957;", category: "t", emoji_order: "1548"
        }
        , {
            name: "desert", unicode: "1f3dc", shortname: ":desert:", code_decimal: "&#127964;", category: "t", emoji_order: "1550"
        }
        , {
            name: "stadium", unicode: "1f3df", shortname: ":stadium:", code_decimal: "&#127967;", category: "t", emoji_order: "1553"
        }
        , {
            name: "classical_building", unicode: "1f3db", shortname: ":classical_building:", code_decimal: "&#127963;", category: "t", emoji_order: "1554"
        }
        , {
            name: "cityscape", unicode: "1f3d9", shortname: ":cityscape:", code_decimal: "&#127961;", category: "t", emoji_order: "1557"
        }
        , {
            name: "house", unicode: "1f3e0", shortname: ":house:", code_decimal: "&#127968;", category: "t", emoji_order: "1559"
        }
        , {
            name: "house_with_garden", unicode: "1f3e1", shortname: ":house_with_garden:", code_decimal: "&#127969;", category: "t", emoji_order: "1560"
        }
        , {
            name: "office", unicode: "1f3e2", shortname: ":office:", code_decimal: "&#127970;", category: "t", emoji_order: "1561"
        }
        , {
            name: "post_office", unicode: "1f3e3", shortname: ":post_office:", code_decimal: "&#127971;", category: "t", emoji_order: "1562"
        }
        , {
            name: "european_post_office", unicode: "1f3e4", shortname: ":european_post_office:", code_decimal: "&#127972;", category: "t", emoji_order: "1563"
        }
        , {
            name: "hospital", unicode: "1f3e5", shortname: ":hospital:", code_decimal: "&#127973;", category: "t", emoji_order: "1564"
        }
        , {
            name: "bank", unicode: "1f3e6", shortname: ":bank:", code_decimal: "&#127974;", category: "t", emoji_order: "1565"
        }
        , {
            name: "hotel", unicode: "1f3e8", shortname: ":hotel:", code_decimal: "&#127976;", category: "t", emoji_order: "1566"
        }
        , {
            name: "love_hotel", unicode: "1f3e9", shortname: ":love_hotel:", code_decimal: "&#127977;", category: "t", emoji_order: "1567"
        }
        , {
            name: "convenience_store", unicode: "1f3ea", shortname: ":convenience_store:", code_decimal: "&#127978;", category: "t", emoji_order: "1568"
        }
        , {
            name: "school", unicode: "1f3eb", shortname: ":school:", code_decimal: "&#127979;", category: "t", emoji_order: "1569"
        }
        , {
            name: "department_store", unicode: "1f3ec", shortname: ":department_store:", code_decimal: "&#127980;", category: "t", emoji_order: "1570"
        }
        , {
            name: "factory", unicode: "1f3ed", shortname: ":factory:", code_decimal: "&#127981;", category: "t", emoji_order: "1571"
        }
        , {
            name: "japanese_castle", unicode: "1f3ef", shortname: ":japanese_castle:", code_decimal: "&#127983;", category: "t", emoji_order: "1572"
        }
        , {
            name: "european_castle", unicode: "1f3f0", shortname: ":european_castle:", code_decimal: "&#127984;", category: "t", emoji_order: "1573"
        }
        , {
            name: "wedding", unicode: "1f492", shortname: ":wedding:", code_decimal: "&#128146;", category: "t", emoji_order: "1574"
        }
        , {
            name: "tokyo_tower", unicode: "1f5fc", shortname: ":tokyo_tower:", code_decimal: "&#128508;", category: "t", emoji_order: "1575"
        }
        , {
            name: "statue_of_liberty", unicode: "1f5fd", shortname: ":statue_of_liberty:", code_decimal: "&#128509;", category: "t", emoji_order: "1576"
        }
        , {
            name: "church", unicode: "26ea", shortname: ":church:", code_decimal: "&#9962;", category: "t", emoji_order: "1577"
        }
        , {
            name: "mosque", unicode: "1f54c", shortname: ":mosque:", code_decimal: "&#128332;", category: "t", emoji_order: "1578"
        }
        , {
            name: "synagogue", unicode: "1f54d", shortname: ":synagogue:", code_decimal: "&#128333;", category: "t", emoji_order: "1579"
        }
        , {
            name: "shinto_shrine", unicode: "26e9", shortname: ":shinto_shrine:", code_decimal: "&#9961;", category: "t", emoji_order: "1580"
        }
        , {
            name: "kaaba", unicode: "1f54b", shortname: ":kaaba:", code_decimal: "&#128331;", category: "t", emoji_order: "1581"
        }
        , {
            name: "fountain", unicode: "26f2", shortname: ":fountain:", code_decimal: "&#9970;", category: "t", emoji_order: "1582"
        }
        , {
            name: "tent", unicode: "26fa", shortname: ":tent:", code_decimal: "&#9978;", category: "t", emoji_order: "1583"
        }
        , {
            name: "foggy", unicode: "1f301", shortname: ":foggy:", code_decimal: "&#127745;", category: "t", emoji_order: "1584"
        }
        , {
            name: "night_with_stars", unicode: "1f303", shortname: ":night_with_stars:", code_decimal: "&#127747;", category: "t", emoji_order: "1585"
        }
        , {
            name: "sunrise_over_mountains", unicode: "1f304", shortname: ":sunrise_over_mountains:", code_decimal: "&#127748;", category: "t", emoji_order: "1586"
        }
        , {
            name: "sunrise", unicode: "1f305", shortname: ":sunrise:", code_decimal: "&#127749;", category: "t", emoji_order: "1587"
        }
        , {
            name: "city_sunset", unicode: "1f307", shortname: ":city_sunset:", code_decimal: "&#127751;", category: "t", emoji_order: "1589"
        }
        , {
            name: "bridge_at_night", unicode: "1f309", shortname: ":bridge_at_night:", code_decimal: "&#127753;", category: "t", emoji_order: "1590"
        }
        , {
            name: "hotsprings", unicode: "2668", shortname: ":hotsprings:", code_decimal: "&#9832;", category: "s", emoji_order: "1591"
        }
        , {
            name: "milky_way", unicode: "1f30c", shortname: ":milky_way:", code_decimal: "&#127756;", category: "t", emoji_order: "1592"
        }
        , {
            name: "carousel_horse", unicode: "1f3a0", shortname: ":carousel_horse:", code_decimal: "&#127904;", category: "t", emoji_order: "1593"
        }
        , {
            name: "ferris_wheel", unicode: "1f3a1", shortname: ":ferris_wheel:", code_decimal: "&#127905;", category: "t", emoji_order: "1594"
        }
        , {
            name: "roller_coaster", unicode: "1f3a2", shortname: ":roller_coaster:", code_decimal: "&#127906;", category: "t", emoji_order: "1595"
        }
        , {
            name: "barber", unicode: "1f488", shortname: ":barber:", code_decimal: "&#128136;", category: "o", emoji_order: "1596"
        }
        , {
            name: "circus_tent", unicode: "1f3aa", shortname: ":circus_tent:", code_decimal: "&#127914;", category: "a", emoji_order: "1597"
        }
        , {
            name: "performing_arts", unicode: "1f3ad", shortname: ":performing_arts:", code_decimal: "&#127917;", category: "a", emoji_order: "1598"
        }
        , {
            name: "slot_machine", unicode: "1f3b0", shortname: ":slot_machine:", code_decimal: "&#127920;", category: "a", emoji_order: "1601"
        }
        , {
            name: "steam_locomotive", unicode: "1f682", shortname: ":steam_locomotive:", code_decimal: "&#128642;", category: "t", emoji_order: "1602"
        }
        , {
            name: "railway_car", unicode: "1f683", shortname: ":railway_car:", code_decimal: "&#128643;", category: "t", emoji_order: "1603"
        }
        , {
            name: "bullettrain_side", unicode: "1f684", shortname: ":bullettrain_side:", code_decimal: "&#128644;", category: "t", emoji_order: "1604"
        }
        , {
            name: "bullettrain_front", unicode: "1f685", shortname: ":bullettrain_front:", code_decimal: "&#128645;", category: "t", emoji_order: "1605"
        }
        , {
            name: "train2", unicode: "1f686", shortname: ":train2:", code_decimal: "&#128646;", category: "t", emoji_order: "1606"
        }
        , {
            name: "metro", unicode: "1f687", shortname: ":metro:", code_decimal: "&#128647;", category: "t", emoji_order: "1607"
        }
        , {
            name: "light_rail", unicode: "1f688", shortname: ":light_rail:", code_decimal: "&#128648;", category: "t", emoji_order: "1608"
        }
        , {
            name: "station", unicode: "1f689", shortname: ":station:", code_decimal: "&#128649;", category: "t", emoji_order: "1609"
        }
        , {
            name: "tram", unicode: "1f68a", shortname: ":tram:", code_decimal: "&#128650;", category: "t", emoji_order: "1610"
        }
        , {
            name: "monorail", unicode: "1f69d", shortname: ":monorail:", code_decimal: "&#128669;", category: "t", emoji_order: "1611"
        }
        , {
            name: "mountain_railway", unicode: "1f69e", shortname: ":mountain_railway:", code_decimal: "&#128670;", category: "t", emoji_order: "1612"
        }
        , {
            name: "train", unicode: "1f68b", shortname: ":train:", code_decimal: "&#128651;", category: "t", emoji_order: "1613"
        }
        , {
            name: "bus", unicode: "1f68c", shortname: ":bus:", code_decimal: "&#128652;", category: "t", emoji_order: "1614"
        }
        , {
            name: "oncoming_bus", unicode: "1f68d", shortname: ":oncoming_bus:", code_decimal: "&#128653;", category: "t", emoji_order: "1615"
        }
        , {
            name: "trolleybus", unicode: "1f68e", shortname: ":trolleybus:", code_decimal: "&#128654;", category: "t", emoji_order: "1616"
        }
        , {
            name: "minibus", unicode: "1f690", shortname: ":minibus:", code_decimal: "&#128656;", category: "t", emoji_order: "1617"
        }
        , {
            name: "ambulance", unicode: "1f691", shortname: ":ambulance:", code_decimal: "&#128657;", category: "t", emoji_order: "1618"
        }
        , {
            name: "fire_engine", unicode: "1f692", shortname: ":fire_engine:", code_decimal: "&#128658;", category: "t", emoji_order: "1619"
        }
        , {
            name: "police_car", unicode: "1f693", shortname: ":police_car:", code_decimal: "&#128659;", category: "t", emoji_order: "1620"
        }
        , {
            name: "oncoming_police_car", unicode: "1f694", shortname: ":oncoming_police_car:", code_decimal: "&#128660;", category: "t", emoji_order: "1621"
        }
        , {
            name: "taxi", unicode: "1f695", shortname: ":taxi:", code_decimal: "&#128661;", category: "t", emoji_order: "1622"
        }
        , {
            name: "oncoming_taxi", unicode: "1f696", shortname: ":oncoming_taxi:", code_decimal: "&#128662;", category: "t", emoji_order: "1623"
        }
        , {
            name: "oncoming_automobile", unicode: "1f698", shortname: ":oncoming_automobile:", code_decimal: "&#128664;", category: "t", emoji_order: "1625"
        }
        , {
            name: "blue_car", unicode: "1f699", shortname: ":blue_car:", code_decimal: "&#128665;", category: "t", emoji_order: "1626"
        }
        , {
            name: "truck", unicode: "1f69a", shortname: ":truck:", code_decimal: "&#128666;", category: "t", emoji_order: "1627"
        }
        , {
            name: "articulated_lorry", unicode: "1f69b", shortname: ":articulated_lorry:", code_decimal: "&#128667;", category: "t", emoji_order: "1628"
        }
        , {
            name: "tractor", unicode: "1f69c", shortname: ":tractor:", code_decimal: "&#128668;", category: "t", emoji_order: "1629"
        }
        , {
            name: "bike", unicode: "1f6b2", shortname: ":bike:", code_decimal: "&#128690;", category: "t", emoji_order: "1630"
        }
        , {
            name: "busstop", unicode: "1f68f", shortname: ":busstop:", code_decimal: "&#128655;", category: "t", emoji_order: "1633"
        }
        , {
            name: "motorway", unicode: "1f6e3", shortname: ":motorway:", code_decimal: "&#128739;", category: "t", emoji_order: "1634"
        }
        , {
            name: "railway_track", unicode: "1f6e4", shortname: ":railway_track:", code_decimal: "&#128740;", category: "t", emoji_order: "1635"
        }
        , {
            name: "fuelpump", unicode: "26fd", shortname: ":fuelpump:", code_decimal: "&#9981;", category: "t", emoji_order: "1636"
        }
        , {
            name: "rotating_light", unicode: "1f6a8", shortname: ":rotating_light:", code_decimal: "&#128680;", category: "t", emoji_order: "1637"
        }
        , {
            name: "traffic_light", unicode: "1f6a5", shortname: ":traffic_light:", code_decimal: "&#128677;", category: "t", emoji_order: "1638"
        }
        , {
            name: "vertical_traffic_light", unicode: "1f6a6", shortname: ":vertical_traffic_light:", code_decimal: "&#128678;", category: "t", emoji_order: "1639"
        }
        , {
            name: "construction", unicode: "1f6a7", shortname: ":construction:", code_decimal: "&#128679;", category: "t", emoji_order: "1640"
        }
        , {
            name: "octagonal_sign", unicode: "1f6d1", shortname: ":octagonal_sign:", code_decimal: "&#128721;", category: "s", emoji_order: "1641"
        }
        , {
            name: "anchor", unicode: "2693", shortname: ":anchor:", code_decimal: "&#9875;", category: "t", emoji_order: "1642"
        }
        , {
            name: "speedboat", unicode: "1f6a4", shortname: ":speedboat:", code_decimal: "&#128676;", category: "t", emoji_order: "1645"
        }
        , {
            name: "ferry", unicode: "26f4", shortname: ":ferry:", code_decimal: "&#9972;", category: "t", emoji_order: "1647"
        }
        , {
            name: "ship", unicode: "1f6a2", shortname: ":ship:", code_decimal: "&#128674;", category: "t", emoji_order: "1649"
        }
        , {
            name: "airplane", unicode: "2708", shortname: ":airplane:", code_decimal: "&#9992;", category: "t", emoji_order: "1650"
        }
        , {
            name: "airplane_departure", unicode: "1f6eb", shortname: ":airplane_departure:", code_decimal: "&#128747;", category: "t", emoji_order: "1652"
        }
        , {
            name: "airplane_arriving", unicode: "1f6ec", shortname: ":airplane_arriving:", code_decimal: "&#128748;", category: "t", emoji_order: "1653"
        }
        , {
            name: "seat", unicode: "1f4ba", shortname: ":seat:", code_decimal: "&#128186;", category: "t", emoji_order: "1654"
        }
        , {
            name: "helicopter", unicode: "1f681", shortname: ":helicopter:", code_decimal: "&#128641;", category: "t", emoji_order: "1655"
        }
        , {
            name: "suspension_railway", unicode: "1f69f", shortname: ":suspension_railway:", code_decimal: "&#128671;", category: "t", emoji_order: "1656"
        }
        , {
            name: "mountain_cableway", unicode: "1f6a0", shortname: ":mountain_cableway:", code_decimal: "&#128672;", category: "t", emoji_order: "1657"
        }
        , {
            name: "aerial_tramway", unicode: "1f6a1", shortname: ":aerial_tramway:", code_decimal: "&#128673;", category: "t", emoji_order: "1658"
        }
        , {
            name: "rocket", unicode: "1f680", shortname: ":rocket:", code_decimal: "&#128640;", category: "t", emoji_order: "1659"
        }
        , {
            name: "door", unicode: "1f6aa", shortname: ":door:", code_decimal: "&#128682;", category: "o", emoji_order: "1662"
        }
        , {
            name: "sleeping_accommodation", unicode: "1f6cc", shortname: ":sleeping_accommodation:", code_decimal: "&#128716;", category: "o", emoji_order: "1663"
        }
        , {
            name: "bed", unicode: "1f6cf", shortname: ":bed:", code_decimal: "&#128719;", category: "o", emoji_order: "1669"
        }
        , {
            name: "toilet", unicode: "1f6bd", shortname: ":toilet:", code_decimal: "&#128701;", category: "o", emoji_order: "1671"
        }
        , {
            name: "shower", unicode: "1f6bf", shortname: ":shower:", code_decimal: "&#128703;", category: "o", emoji_order: "1672"
        }
        , {
            name: "bath", unicode: "1f6c0", shortname: ":bath:", code_decimal: "&#128704;", category: "a", emoji_order: "1673"
        }
        , {
            name: "bathtub", unicode: "1f6c1", shortname: ":bathtub:", code_decimal: "&#128705;", category: "o", emoji_order: "1679"
        }
        , {
            name: "hourglass", unicode: "231b", shortname: ":hourglass:", code_decimal: "&#8987;", category: "o", emoji_order: "1680"
        }
        , {
            name: "hourglass_flowing_sand", unicode: "23f3", shortname: ":hourglass_flowing_sand:", code_decimal: "&#9203;", category: "o", emoji_order: "1681"
        }
        , {
            name: "watch", unicode: "231a", shortname: ":watch:", code_decimal: "&#8986;", category: "o", emoji_order: "1682"
        }
        , {
            name: "alarm_clock", unicode: "23f0", shortname: ":alarm_clock:", code_decimal: "&#9200;", category: "o", emoji_order: "1683"
        }
        , {
            name: "stopwatch", unicode: "23f1", shortname: ":stopwatch:", code_decimal: "&#9201;", category: "o", emoji_order: "1684"
        }
        , {
            name: "clock12", unicode: "1f55b", shortname: ":clock12:", code_decimal: "&#128347;", category: "s", emoji_order: "1687"
        }
        , {
            name: "clock1230", unicode: "1f567", shortname: ":clock1230:", code_decimal: "&#128359;", category: "s", emoji_order: "1688"
        }
        , {
            name: "clock1", unicode: "1f550", shortname: ":clock1:", code_decimal: "&#128336;", category: "s", emoji_order: "1689"
        }
        , {
            name: "clock130", unicode: "1f55c", shortname: ":clock130:", code_decimal: "&#128348;", category: "s", emoji_order: "1690"
        }
        , {
            name: "clock2", unicode: "1f551", shortname: ":clock2:", code_decimal: "&#128337;", category: "s", emoji_order: "1691"
        }
        , {
            name: "clock230", unicode: "1f55d", shortname: ":clock230:", code_decimal: "&#128349;", category: "s", emoji_order: "1692"
        }
        , {
            name: "clock3", unicode: "1f552", shortname: ":clock3:", code_decimal: "&#128338;", category: "s", emoji_order: "1693"
        }
        , {
            name: "clock330", unicode: "1f55e", shortname: ":clock330:", code_decimal: "&#128350;", category: "s", emoji_order: "1694"
        }
        , {
            name: "clock4", unicode: "1f553", shortname: ":clock4:", code_decimal: "&#128339;", category: "s", emoji_order: "1695"
        }
        , {
            name: "clock430", unicode: "1f55f", shortname: ":clock430:", code_decimal: "&#128351;", category: "s", emoji_order: "1696"
        }
        , {
            name: "clock5", unicode: "1f554", shortname: ":clock5:", code_decimal: "&#128340;", category: "s", emoji_order: "1697"
        }
        , {
            name: "clock530", unicode: "1f560", shortname: ":clock530:", code_decimal: "&#128352;", category: "s", emoji_order: "1698"
        }
        , {
            name: "clock6", unicode: "1f555", shortname: ":clock6:", code_decimal: "&#128341;", category: "s", emoji_order: "1699"
        }
        , {
            name: "clock630", unicode: "1f561", shortname: ":clock630:", code_decimal: "&#128353;", category: "s", emoji_order: "1700"
        }
        , {
            name: "clock7", unicode: "1f556", shortname: ":clock7:", code_decimal: "&#128342;", category: "s", emoji_order: "1701"
        }
        , {
            name: "clock730", unicode: "1f562", shortname: ":clock730:", code_decimal: "&#128354;", category: "s", emoji_order: "1702"
        }
        , {
            name: "clock8", unicode: "1f557", shortname: ":clock8:", code_decimal: "&#128343;", category: "s", emoji_order: "1703"
        }
        , {
            name: "clock830", unicode: "1f563", shortname: ":clock830:", code_decimal: "&#128355;", category: "s", emoji_order: "1704"
        }
        , {
            name: "clock9", unicode: "1f558", shortname: ":clock9:", code_decimal: "&#128344;", category: "s", emoji_order: "1705"
        }
        , {
            name: "clock930", unicode: "1f564", shortname: ":clock930:", code_decimal: "&#128356;", category: "s", emoji_order: "1706"
        }
        , {
            name: "clock10", unicode: "1f559", shortname: ":clock10:", code_decimal: "&#128345;", category: "s", emoji_order: "1707"
        }
        , {
            name: "clock1030", unicode: "1f565", shortname: ":clock1030:", code_decimal: "&#128357;", category: "s", emoji_order: "1708"
        }
        , {
            name: "clock11", unicode: "1f55a", shortname: ":clock11:", code_decimal: "&#128346;", category: "s", emoji_order: "1709"
        }
        , {
            name: "clock1130", unicode: "1f566", shortname: ":clock1130:", code_decimal: "&#128358;", category: "s", emoji_order: "1710"
        }
        , {
            name: "new_moon", unicode: "1f311", shortname: ":new_moon:", code_decimal: "&#127761;", category: "n", emoji_order: "1711"
        }
        , {
            name: "waxing_crescent_moon", unicode: "1f312", shortname: ":waxing_crescent_moon:", code_decimal: "&#127762;", category: "n", emoji_order: "1712"
        }
        , {
            name: "first_quarter_moon", unicode: "1f313", shortname: ":first_quarter_moon:", code_decimal: "&#127763;", category: "n", emoji_order: "1713"
        }
        , {
            name: "full_moon", unicode: "1f315", shortname: ":full_moon:", code_decimal: "&#127765;", category: "n", emoji_order: "1715"
        }
        , {
            name: "waning_gibbous_moon", unicode: "1f316", shortname: ":waning_gibbous_moon:", code_decimal: "&#127766;", category: "n", emoji_order: "1716"
        }
        , {
            name: "last_quarter_moon", unicode: "1f317", shortname: ":last_quarter_moon:", code_decimal: "&#127767;", category: "n", emoji_order: "1717"
        }
        , {
            name: "waning_crescent_moon", unicode: "1f318", shortname: ":waning_crescent_moon:", code_decimal: "&#127768;", category: "n", emoji_order: "1718"
        }
        , {
            name: "crescent_moon", unicode: "1f319", shortname: ":crescent_moon:", code_decimal: "&#127769;", category: "n", emoji_order: "1719"
        }
        , {
            name: "new_moon_with_face", unicode: "1f31a", shortname: ":new_moon_with_face:", code_decimal: "&#127770;", category: "n", emoji_order: "1720"
        }
        , {
            name: "first_quarter_moon_with_face", unicode: "1f31b", shortname: ":first_quarter_moon_with_face:", code_decimal: "&#127771;", category: "n", emoji_order: "1721"
        }
        , {
            name: "last_quarter_moon_with_face", unicode: "1f31c", shortname: ":last_quarter_moon_with_face:", code_decimal: "&#127772;", category: "n", emoji_order: "1722"
        }
        , {
            name: "thermometer", unicode: "1f321", shortname: ":thermometer:", code_decimal: "&#127777;", category: "o", emoji_order: "1723"
        }
        , {
            name: "sunny", unicode: "2600", shortname: ":sunny:", code_decimal: "&#9728;", category: "n", emoji_order: "1724"
        }
        , {
            name: "full_moon_with_face", unicode: "1f31d", shortname: ":full_moon_with_face:", code_decimal: "&#127773;", category: "n", emoji_order: "1725"
        }
        , {
            name: "sun_with_face", unicode: "1f31e", shortname: ":sun_with_face:", code_decimal: "&#127774;", category: "n", emoji_order: "1726"
        }
        , {
            name: "star", unicode: "2b50", shortname: ":star:", code_decimal: "&#11088;", category: "n", emoji_order: "1727"
        }
        , {
            name: "star2", unicode: "1f31f", shortname: ":star2:", code_decimal: "&#127775;", category: "n", emoji_order: "1728"
        }
        , {
            name: "stars", unicode: "1f320", shortname: ":stars:", code_decimal: "&#127776;", category: "t", emoji_order: "1729"
        }
        , {
            name: "cloud", unicode: "2601", shortname: ":cloud:", code_decimal: "&#9729;", category: "n", emoji_order: "1730"
        }
        , {
            name: "partly_sunny", unicode: "26c5", shortname: ":partly_sunny:", code_decimal: "&#9925;", category: "n", emoji_order: "1731"
        }
        , {
            name: "fog", unicode: "1f32b", shortname: ":fog:", code_decimal: "&#127787;", category: "n", emoji_order: "1740"
        }
        , {
            name: "wind_blowing_face", unicode: "1f32c", shortname: ":wind_blowing_face:", code_decimal: "&#127788;", category: "n", emoji_order: "1741"
        }
        , {
            name: "cyclone", unicode: "1f300", shortname: ":cyclone:", code_decimal: "&#127744;", category: "s", emoji_order: "1742"
        }
        , {
            name: "rainbow", unicode: "1f308", shortname: ":rainbow:", code_decimal: "&#127752;", category: "t", emoji_order: "1743"
        }
        , {
            name: "closed_umbrella", unicode: "1f302", shortname: ":closed_umbrella:", code_decimal: "&#127746;", category: "p", emoji_order: "1744"
        }
        , {
            name: "umbrella", unicode: "2614", shortname: ":umbrella:", code_decimal: "&#9748;", category: "n", emoji_order: "1746"
        }
        , {
            name: "beach_umbrella", unicode: "26f1", shortname: ":beach_umbrella:", code_decimal: "&#9969;", category: "o", emoji_order: "1747"
        }
        , {
            name: "zap", unicode: "26a1", shortname: ":zap:", code_decimal: "&#9889;", category: "n", emoji_order: "1748"
        }
        , {
            name: "snowflake", unicode: "2744", shortname: ":snowflake:", code_decimal: "&#10052;", category: "n", emoji_order: "1749"
        }
        , {
            name: "snowman", unicode: "26c4", shortname: ":snowman:", code_decimal: "&#9924;", category: "n", emoji_order: "1751"
        }
        , {
            name: "comet", unicode: "2604", shortname: ":comet:", code_decimal: "&#9732;", category: "n", emoji_order: "1752"
        }
        , {
            name: "fire", unicode: "1f525", shortname: ":fire:", code_decimal: "&#128293;", category: "n", emoji_order: "1753"
        }
        , {
            name: "droplet", unicode: "1f4a7", shortname: ":droplet:", code_decimal: "&#128167;", category: "n", emoji_order: "1754"
        }
        , {
            name: "ocean", unicode: "1f30a", shortname: ":ocean:", code_decimal: "&#127754;", category: "n", emoji_order: "1755"
        }
        , {
            name: "jack_o_lantern", unicode: "1f383", shortname: ":jack_o_lantern:", code_decimal: "&#127875;", category: "n", emoji_order: "1756"
        }
        , {
            name: "christmas_tree", unicode: "1f384", shortname: ":christmas_tree:", code_decimal: "&#127876;", category: "n", emoji_order: "1757"
        }
        , {
            name: "fireworks", unicode: "1f386", shortname: ":fireworks:", code_decimal: "&#127878;", category: "t", emoji_order: "1758"
        }
        , {
            name: "sparkler", unicode: "1f387", shortname: ":sparkler:", code_decimal: "&#127879;", category: "t", emoji_order: "1759"
        }
        , {
            name: "sparkles", unicode: "2728", shortname: ":sparkles:", code_decimal: "&#10024;", category: "n", emoji_order: "1760"
        }
        , {
            name: "balloon", unicode: "1f388", shortname: ":balloon:", code_decimal: "&#127880;", category: "o", emoji_order: "1761"
        }
        , {
            name: "tada", unicode: "1f389", shortname: ":tada:", code_decimal: "&#127881;", category: "o", emoji_order: "1762"
        }
        , {
            name: "confetti_ball", unicode: "1f38a", shortname: ":confetti_ball:", code_decimal: "&#127882;", category: "o", emoji_order: "1763"
        }
        , {
            name: "tanabata_tree", unicode: "1f38b", shortname: ":tanabata_tree:", code_decimal: "&#127883;", category: "n", emoji_order: "1764"
        }
        , {
            name: "bamboo", unicode: "1f38d", shortname: ":bamboo:", code_decimal: "&#127885;", category: "n", emoji_order: "1765"
        }
        , {
            name: "dolls", unicode: "1f38e", shortname: ":dolls:", code_decimal: "&#127886;", category: "o", emoji_order: "1766"
        }
        , {
            name: "flags", unicode: "1f38f", shortname: ":flags:", code_decimal: "&#127887;", category: "o", emoji_order: "1767"
        }
        , {
            name: "wind_chime", unicode: "1f390", shortname: ":wind_chime:", code_decimal: "&#127888;", category: "o", emoji_order: "1768"
        }
        , {
            name: "rice_scene", unicode: "1f391", shortname: ":rice_scene:", code_decimal: "&#127889;", category: "t", emoji_order: "1769"
        }
        , {
            name: "ribbon", unicode: "1f380", shortname: ":ribbon:", code_decimal: "&#127872;", category: "o", emoji_order: "1770"
        }
        , {
            name: "gift", unicode: "1f381", shortname: ":gift:", code_decimal: "&#127873;", category: "o", emoji_order: "1771"
        }
        , {
            name: "reminder_ribbon", unicode: "1f397", shortname: ":reminder_ribbon:", code_decimal: "&#127895;", category: "a", emoji_order: "1772"
        }
        , {
            name: "ticket", unicode: "1f3ab", shortname: ":ticket:", code_decimal: "&#127915;", category: "a", emoji_order: "1774"
        }
        , {
            name: "trophy", unicode: "1f3c6", shortname: ":trophy:", code_decimal: "&#127942;", category: "a", emoji_order: "1776"
        }
        , {
            name: "medal", unicode: "1f3c5", shortname: ":medal:", code_decimal: "&#127941;", category: "a", emoji_order: "1777"
        }
        , {
            name: "soccer", unicode: "26bd", shortname: ":soccer:", code_decimal: "&#9917;", category: "a", emoji_order: "1781"
        }
        , {
            name: "baseball", unicode: "26be", shortname: ":baseball:", code_decimal: "&#9918;", category: "a", emoji_order: "1782"
        }
        , {
            name: "basketball", unicode: "1f3c0", shortname: ":basketball:", code_decimal: "&#127936;", category: "a", emoji_order: "1783"
        }
        , {
            name: "volleyball", unicode: "1f3d0", shortname: ":volleyball:", code_decimal: "&#127952;", category: "a", emoji_order: "1784"
        }
        , {
            name: "football", unicode: "1f3c8", shortname: ":football:", code_decimal: "&#127944;", category: "a", emoji_order: "1785"
        }
        , {
            name: "rugby_football", unicode: "1f3c9", shortname: ":rugby_football:", code_decimal: "&#127945;", category: "a", emoji_order: "1786"
        }
        , {
            name: "tennis", unicode: "1f3be", shortname: ":tennis:", code_decimal: "&#127934;", category: "a", emoji_order: "1787"
        }
        , {
            name: "8ball", unicode: "1f3b1", shortname: ":8ball:", code_decimal: "&#127921;", category: "a", emoji_order: "1788"
        }
        , {
            name: "bowling", unicode: "1f3b3", shortname: ":bowling:", code_decimal: "&#127923;", category: "a", emoji_order: "1789"
        }
        , {
            name: "dart", unicode: "1f3af", shortname: ":dart:", code_decimal: "&#127919;", category: "a", emoji_order: "1798"
        }
        , {
            name: "golf", unicode: "26f3", shortname: ":golf:", code_decimal: "&#9971;", category: "a", emoji_order: "1799"
        }
        , {
            name: "ice_skate", unicode: "26f8", shortname: ":ice_skate:", code_decimal: "&#9976;", category: "a", emoji_order: "1800"
        }
        , {
            name: "fishing_pole_and_fish", unicode: "1f3a3", shortname: ":fishing_pole_and_fish:", code_decimal: "&#127907;", category: "a", emoji_order: "1801"
        }
        , {
            name: "running_shirt_with_sash", unicode: "1f3bd", shortname: ":running_shirt_with_sash:", code_decimal: "&#127933;", category: "a", emoji_order: "1802"
        }
        , {
            name: "ski", unicode: "1f3bf", shortname: ":ski:", code_decimal: "&#127935;", category: "a", emoji_order: "1803"
        }
        , {
            name: "video_game", unicode: "1f3ae", shortname: ":video_game:", code_decimal: "&#127918;", category: "a", emoji_order: "1804"
        }
        , {
            name: "joystick", unicode: "1f579", shortname: ":joystick:", code_decimal: "&#128377;", category: "o", emoji_order: "1805"
        }
        , {
            name: "game_die", unicode: "1f3b2", shortname: ":game_die:", code_decimal: "&#127922;", category: "a", emoji_order: "1806"
        }
        , {
            name: "spades", unicode: "2660", shortname: ":spades:", code_decimal: "&spades;", category: "s", emoji_order: "1807"
        }
        , {
            name: "hearts", unicode: "2665", shortname: ":hearts:", code_decimal: "&hearts;", category: "s", emoji_order: "1808"
        }
        , {
            name: "diamonds", unicode: "2666", shortname: ":diamonds:", code_decimal: "&diams;", category: "s", emoji_order: "1809"
        }
        , {
            name: "clubs", unicode: "2663", shortname: ":clubs:", code_decimal: "&clubs;", category: "s", emoji_order: "1810"
        }
        , {
            name: "black_joker", unicode: "1f0cf", shortname: ":black_joker:", code_decimal: "&#127183;", category: "s", emoji_order: "1811"
        }
        , {
            name: "mahjong", unicode: "1f004", shortname: ":mahjong:", code_decimal: "&#126980;", category: "s", emoji_order: "1812"
        }
        , {
            name: "flower_playing_cards", unicode: "1f3b4", shortname: ":flower_playing_cards:", code_decimal: "&#127924;", category: "s", emoji_order: "1813"
        }
        , {
            name: "mute", unicode: "1f507", shortname: ":mute:", code_decimal: "&#128263;", category: "s", emoji_order: "1814"
        }
        , {
            name: "speaker", unicode: "1f508", shortname: ":speaker:", code_decimal: "&#128264;", category: "s", emoji_order: "1815"
        }
        , {
            name: "sound", unicode: "1f509", shortname: ":sound:", code_decimal: "&#128265;", category: "s", emoji_order: "1816"
        }
        , {
            name: "loud_sound", unicode: "1f50a", shortname: ":loud_sound:", code_decimal: "&#128266;", category: "s", emoji_order: "1817"
        }
        , {
            name: "loudspeaker", unicode: "1f4e2", shortname: ":loudspeaker:", code_decimal: "&#128226;", category: "s", emoji_order: "1818"
        }
        , {
            name: "mega", unicode: "1f4e3", shortname: ":mega:", code_decimal: "&#128227;", category: "s", emoji_order: "1819"
        }
        , {
            name: "postal_horn", unicode: "1f4ef", shortname: ":postal_horn:", code_decimal: "&#128239;", category: "o", emoji_order: "1820"
        }
        , {
            name: "bell", unicode: "1f514", shortname: ":bell:", code_decimal: "&#128276;", category: "s", emoji_order: "1821"
        }
        , {
            name: "no_bell", unicode: "1f515", shortname: ":no_bell:", code_decimal: "&#128277;", category: "s", emoji_order: "1822"
        }
        , {
            name: "musical_score", unicode: "1f3bc", shortname: ":musical_score:", code_decimal: "&#127932;", category: "a", emoji_order: "1823"
        }
        , {
            name: "musical_note", unicode: "1f3b5", shortname: ":musical_note:", code_decimal: "&#127925;", category: "s", emoji_order: "1824"
        }
        , {
            name: "notes", unicode: "1f3b6", shortname: ":notes:", code_decimal: "&#127926;", category: "s", emoji_order: "1825"
        }
        , {
            name: "level_slider", unicode: "1f39a", shortname: ":level_slider:", code_decimal: "&#127898;", category: "o", emoji_order: "1827"
        }
        , {
            name: "control_knobs", unicode: "1f39b", shortname: ":control_knobs:", code_decimal: "&#127899;", category: "o", emoji_order: "1828"
        }
        , {
            name: "microphone", unicode: "1f3a4", shortname: ":microphone:", code_decimal: "&#127908;", category: "a", emoji_order: "1829"
        }
        , {
            name: "headphones", unicode: "1f3a7", shortname: ":headphones:", code_decimal: "&#127911;", category: "a", emoji_order: "1830"
        }
        , {
            name: "radio", unicode: "1f4fb", shortname: ":radio:", code_decimal: "&#128251;", category: "o", emoji_order: "1831"
        }
        , {
            name: "saxophone", unicode: "1f3b7", shortname: ":saxophone:", code_decimal: "&#127927;", category: "a", emoji_order: "1832"
        }
        , {
            name: "guitar", unicode: "1f3b8", shortname: ":guitar:", code_decimal: "&#127928;", category: "a", emoji_order: "1833"
        }
        , {
            name: "musical_keyboard", unicode: "1f3b9", shortname: ":musical_keyboard:", code_decimal: "&#127929;", category: "a", emoji_order: "1834"
        }
        , {
            name: "trumpet", unicode: "1f3ba", shortname: ":trumpet:", code_decimal: "&#127930;", category: "a", emoji_order: "1835"
        }
        , {
            name: "violin", unicode: "1f3bb", shortname: ":violin:", code_decimal: "&#127931;", category: "a", emoji_order: "1836"
        }
        , {
            name: "drum", unicode: "1f941", shortname: ":drum:", code_decimal: "&#129345;", category: "a", emoji_order: "1837"
        }
        , {
            name: "iphone", unicode: "1f4f1", shortname: ":iphone:", code_decimal: "&#128241;", category: "o", emoji_order: "1838"
        }
        , {
            name: "calling", unicode: "1f4f2", shortname: ":calling:", code_decimal: "&#128242;", category: "o", emoji_order: "1839"
        }
        , {
            name: "telephone", unicode: "260e", shortname: ":telephone:", code_decimal: "&#9742;", category: "o", emoji_order: "1840"
        }
        , {
            name: "telephone_receiver", unicode: "1f4de", shortname: ":telephone_receiver:", code_decimal: "&#128222;", category: "o", emoji_order: "1841"
        }
        , {
            name: "pager", unicode: "1f4df", shortname: ":pager:", code_decimal: "&#128223;", category: "o", emoji_order: "1842"
        }
        , {
            name: "fax", unicode: "1f4e0", shortname: ":fax:", code_decimal: "&#128224;", category: "o", emoji_order: "1843"
        }
        , {
            name: "battery", unicode: "1f50b", shortname: ":battery:", code_decimal: "&#128267;", category: "o", emoji_order: "1844"
        }
        , {
            name: "electric_plug", unicode: "1f50c", shortname: ":electric_plug:", code_decimal: "&#128268;", category: "o", emoji_order: "1845"
        }
        , {
            name: "computer", unicode: "1f4bb", shortname: ":computer:", code_decimal: "&#128187;", category: "o", emoji_order: "1846"
        }
        , {
            name: "printer", unicode: "1f5a8", shortname: ":printer:", code_decimal: "&#128424;", category: "o", emoji_order: "1848"
        }
        , {
            name: "keyboard", unicode: "2328", shortname: ":keyboard:", code_decimal: "&#9000;", category: "o", emoji_order: "1849"
        }
        , {
            name: "trackball", unicode: "1f5b2", shortname: ":trackball:", code_decimal: "&#128434;", category: "o", emoji_order: "1851"
        }
        , {
            name: "minidisc", unicode: "1f4bd", shortname: ":minidisc:", code_decimal: "&#128189;", category: "o", emoji_order: "1852"
        }
        , {
            name: "floppy_disk", unicode: "1f4be", shortname: ":floppy_disk:", code_decimal: "&#128190;", category: "o", emoji_order: "1853"
        }
        , {
            name: "cd", unicode: "1f4bf", shortname: ":cd:", code_decimal: "&#128191;", category: "o", emoji_order: "1854"
        }
        , {
            name: "dvd", unicode: "1f4c0", shortname: ":dvd:", code_decimal: "&#128192;", category: "o", emoji_order: "1855"
        }
        , {
            name: "movie_camera", unicode: "1f3a5", shortname: ":movie_camera:", code_decimal: "&#127909;", category: "o", emoji_order: "1856"
        }
        , {
            name: "film_frames", unicode: "1f39e", shortname: ":film_frames:", code_decimal: "&#127902;", category: "o", emoji_order: "1857"
        }
        , {
            name: "clapper", unicode: "1f3ac", shortname: ":clapper:", code_decimal: "&#127916;", category: "a", emoji_order: "1859"
        }
        , {
            name: "tv", unicode: "1f4fa", shortname: ":tv:", code_decimal: "&#128250;", category: "o", emoji_order: "1860"
        }
        , {
            name: "camera", unicode: "1f4f7", shortname: ":camera:", code_decimal: "&#128247;", category: "o", emoji_order: "1861"
        }
        , {
            name: "camera_with_flash", unicode: "1f4f8", shortname: ":camera_with_flash:", code_decimal: "&#128248;", category: "o", emoji_order: "1862"
        }
        , {
            name: "video_camera", unicode: "1f4f9", shortname: ":video_camera:", code_decimal: "&#128249;", category: "o", emoji_order: "1863"
        }
        , {
            name: "vhs", unicode: "1f4fc", shortname: ":vhs:", code_decimal: "&#128252;", category: "o", emoji_order: "1864"
        }
        , {
            name: "mag", unicode: "1f50d", shortname: ":mag:", code_decimal: "&#128269;", category: "o", emoji_order: "1865"
        }
        , {
            name: "mag_right", unicode: "1f50e", shortname: ":mag_right:", code_decimal: "&#128270;", category: "o", emoji_order: "1866"
        }
        , {
            name: "microscope", unicode: "1f52c", shortname: ":microscope:", code_decimal: "&#128300;", category: "o", emoji_order: "1867"
        }
        , {
            name: "telescope", unicode: "1f52d", shortname: ":telescope:", code_decimal: "&#128301;", category: "o", emoji_order: "1868"
        }
        , {
            name: "satellite", unicode: "1f4e1", shortname: ":satellite:", code_decimal: "&#128225;", category: "o", emoji_order: "1869"
        }
        , {
            name: "candle", unicode: "1f56f", shortname: ":candle:", code_decimal: "&#128367;", category: "o", emoji_order: "1870"
        }
        , {
            name: "bulb", unicode: "1f4a1", shortname: ":bulb:", code_decimal: "&#128161;", category: "o", emoji_order: "1871"
        }
        , {
            name: "flashlight", unicode: "1f526", shortname: ":flashlight:", code_decimal: "&#128294;", category: "o", emoji_order: "1872"
        }
        , {
            name: "izakaya_lantern", unicode: "1f3ee", shortname: ":izakaya_lantern:", code_decimal: "&#127982;", category: "o", emoji_order: "1873"
        }
        , {
            name: "notebook_with_decorative_cover", unicode: "1f4d4", shortname: ":notebook_with_decorative_cover:", code_decimal: "&#128212;", category: "o", emoji_order: "1874"
        }
        , {
            name: "closed_book", unicode: "1f4d5", shortname: ":closed_book:", code_decimal: "&#128213;", category: "o", emoji_order: "1875"
        }
        , {
            name: "book", unicode: "1f4d6", shortname: ":book:", code_decimal: "&#128214;", category: "o", emoji_order: "1876"
        }
        , {
            name: "green_book", unicode: "1f4d7", shortname: ":green_book:", code_decimal: "&#128215;", category: "o", emoji_order: "1877"
        }
        , {
            name: "blue_book", unicode: "1f4d8", shortname: ":blue_book:", code_decimal: "&#128216;", category: "o", emoji_order: "1878"
        }
        , {
            name: "orange_book", unicode: "1f4d9", shortname: ":orange_book:", code_decimal: "&#128217;", category: "o", emoji_order: "1879"
        }
        , {
            name: "books", unicode: "1f4da", shortname: ":books:", code_decimal: "&#128218;", category: "o", emoji_order: "1880"
        }
        , {
            name: "notebook", unicode: "1f4d3", shortname: ":notebook:", code_decimal: "&#128211;", category: "o", emoji_order: "1881"
        }
        , {
            name: "ledger", unicode: "1f4d2", shortname: ":ledger:", code_decimal: "&#128210;", category: "o", emoji_order: "1882"
        }
        , {
            name: "page_with_curl", unicode: "1f4c3", shortname: ":page_with_curl:", code_decimal: "&#128195;", category: "o", emoji_order: "1883"
        }
        , {
            name: "scroll", unicode: "1f4dc", shortname: ":scroll:", code_decimal: "&#128220;", category: "o", emoji_order: "1884"
        }
        , {
            name: "page_facing_up", unicode: "1f4c4", shortname: ":page_facing_up:", code_decimal: "&#128196;", category: "o", emoji_order: "1885"
        }
        , {
            name: "newspaper", unicode: "1f4f0", shortname: ":newspaper:", code_decimal: "&#128240;", category: "o", emoji_order: "1886"
        }
        , {
            name: "bookmark_tabs", unicode: "1f4d1", shortname: ":bookmark_tabs:", code_decimal: "&#128209;", category: "o", emoji_order: "1888"
        }
        , {
            name: "bookmark", unicode: "1f516", shortname: ":bookmark:", code_decimal: "&#128278;", category: "o", emoji_order: "1889"
        }
        , {
            name: "label", unicode: "1f3f7", shortname: ":label:", code_decimal: "&#127991;", category: "o", emoji_order: "1890"
        }
        , {
            name: "moneybag", unicode: "1f4b0", shortname: ":moneybag:", code_decimal: "&#128176;", category: "o", emoji_order: "1891"
        }
        , {
            name: "yen", unicode: "1f4b4", shortname: ":yen:", code_decimal: "&#128180;", category: "o", emoji_order: "1892"
        }
        , {
            name: "dollar", unicode: "1f4b5", shortname: ":dollar:", code_decimal: "&#128181;", category: "o", emoji_order: "1893"
        }
        , {
            name: "euro", unicode: "1f4b6", shortname: ":euro:", code_decimal: "&#128182;", category: "o", emoji_order: "1894"
        }
        , {
            name: "pound", unicode: "1f4b7", shortname: ":pound:", code_decimal: "&#128183;", category: "o", emoji_order: "1895"
        }
        , {
            name: "money_with_wings", unicode: "1f4b8", shortname: ":money_with_wings:", code_decimal: "&#128184;", category: "o", emoji_order: "1896"
        }
        , {
            name: "credit_card", unicode: "1f4b3", shortname: ":credit_card:", code_decimal: "&#128179;", category: "o", emoji_order: "1897"
        }
        , {
            name: "chart", unicode: "1f4b9", shortname: ":chart:", code_decimal: "&#128185;", category: "s", emoji_order: "1898"
        }
        , {
            name: "currency_exchange", unicode: "1f4b1", shortname: ":currency_exchange:", code_decimal: "&#128177;", category: "s", emoji_order: "1899"
        }
        , {
            name: "heavy_dollar_sign", unicode: "1f4b2", shortname: ":heavy_dollar_sign:", code_decimal: "&#128178;", category: "s", emoji_order: "1900"
        }
        , {
            name: "e-mail", unicode: "1f4e7", shortname: ":e-mail:", code_decimal: "&#128231;", category: "o", emoji_order: "1902"
        }
        , {
            name: "incoming_envelope", unicode: "1f4e8", shortname: ":incoming_envelope:", code_decimal: "&#128232;", category: "o", emoji_order: "1903"
        }
        , {
            name: "envelope_with_arrow", unicode: "1f4e9", shortname: ":envelope_with_arrow:", code_decimal: "&#128233;", category: "o", emoji_order: "1904"
        }
        , {
            name: "outbox_tray", unicode: "1f4e4", shortname: ":outbox_tray:", code_decimal: "&#128228;", category: "o", emoji_order: "1905"
        }
        , {
            name: "inbox_tray", unicode: "1f4e5", shortname: ":inbox_tray:", code_decimal: "&#128229;", category: "o", emoji_order: "1906"
        }
        , {
            name: "package", unicode: "1f4e6", shortname: ":package:", code_decimal: "&#128230;", category: "o", emoji_order: "1907"
        }
        , {
            name: "mailbox", unicode: "1f4eb", shortname: ":mailbox:", code_decimal: "&#128235;", category: "o", emoji_order: "1908"
        }
        , {
            name: "mailbox_closed", unicode: "1f4ea", shortname: ":mailbox_closed:", code_decimal: "&#128234;", category: "o", emoji_order: "1909"
        }
        , {
            name: "mailbox_with_mail", unicode: "1f4ec", shortname: ":mailbox_with_mail:", code_decimal: "&#128236;", category: "o", emoji_order: "1910"
        }
        , {
            name: "mailbox_with_no_mail", unicode: "1f4ed", shortname: ":mailbox_with_no_mail:", code_decimal: "&#128237;", category: "o", emoji_order: "1911"
        }
        , {
            name: "postbox", unicode: "1f4ee", shortname: ":postbox:", code_decimal: "&#128238;", category: "o", emoji_order: "1912"
        }
        , {
            name: "ballot_box", unicode: "1f5f3", shortname: ":ballot_box:", code_decimal: "&#128499;", category: "o", emoji_order: "1913"
        }
        , {
            name: "pencil2", unicode: "270f", shortname: ":pencil2:", code_decimal: "&#9999;", category: "o", emoji_order: "1914"
        }
        , {
            name: "black_nib", unicode: "2712", shortname: ":black_nib:", code_decimal: "&#10002;", category: "o", emoji_order: "1915"
        }
        , {
            name: "briefcase", unicode: "1f4bc", shortname: ":briefcase:", code_decimal: "&#128188;", category: "p", emoji_order: "1921"
        }
        , {
            name: "file_folder", unicode: "1f4c1", shortname: ":file_folder:", code_decimal: "&#128193;", category: "o", emoji_order: "1922"
        }
        , {
            name: "open_file_folder", unicode: "1f4c2", shortname: ":open_file_folder:", code_decimal: "&#128194;", category: "o", emoji_order: "1923"
        }
        , {
            name: "date", unicode: "1f4c5", shortname: ":date:", code_decimal: "&#128197;", category: "o", emoji_order: "1925"
        }
        , {
            name: "calendar", unicode: "1f4c6", shortname: ":calendar:", code_decimal: "&#128198;", category: "o", emoji_order: "1926"
        }
        , {
            name: "card_index", unicode: "1f4c7", shortname: ":card_index:", code_decimal: "&#128199;", category: "o", emoji_order: "1929"
        }
        , {
            name: "chart_with_upwards_trend", unicode: "1f4c8", shortname: ":chart_with_upwards_trend:", code_decimal: "&#128200;", category: "o", emoji_order: "1930"
        }
        , {
            name: "chart_with_downwards_trend", unicode: "1f4c9", shortname: ":chart_with_downwards_trend:", code_decimal: "&#128201;", category: "o", emoji_order: "1931"
        }
        , {
            name: "bar_chart", unicode: "1f4ca", shortname: ":bar_chart:", code_decimal: "&#128202;", category: "o", emoji_order: "1932"
        }
        , {
            name: "clipboard", unicode: "1f4cb", shortname: ":clipboard:", code_decimal: "&#128203;", category: "o", emoji_order: "1933"
        }
        , {
            name: "pushpin", unicode: "1f4cc", shortname: ":pushpin:", code_decimal: "&#128204;", category: "o", emoji_order: "1934"
        }
        , {
            name: "round_pushpin", unicode: "1f4cd", shortname: ":round_pushpin:", code_decimal: "&#128205;", category: "o", emoji_order: "1935"
        }
        , {
            name: "paperclip", unicode: "1f4ce", shortname: ":paperclip:", code_decimal: "&#128206;", category: "o", emoji_order: "1936"
        }
        , {
            name: "straight_ruler", unicode: "1f4cf", shortname: ":straight_ruler:", code_decimal: "&#128207;", category: "o", emoji_order: "1938"
        }
        , {
            name: "triangular_ruler", unicode: "1f4d0", shortname: ":triangular_ruler:", code_decimal: "&#128208;", category: "o", emoji_order: "1939"
        }
        , {
            name: "scissors", unicode: "2702", shortname: ":scissors:", code_decimal: "&#9986;", category: "o", emoji_order: "1940"
        }
        , {
            name: "file_cabinet", unicode: "1f5c4", shortname: ":file_cabinet:", code_decimal: "&#128452;", category: "o", emoji_order: "1942"
        }
        , {
            name: "wastebasket", unicode: "1f5d1", shortname: ":wastebasket:", code_decimal: "&#128465;", category: "o", emoji_order: "1943"
        }
        , {
            name: "lock", unicode: "1f512", shortname: ":lock:", code_decimal: "&#128274;", category: "o", emoji_order: "1944"
        }
        , {
            name: "unlock", unicode: "1f513", shortname: ":unlock:", code_decimal: "&#128275;", category: "o", emoji_order: "1945"
        }
        , {
            name: "lock_with_ink_pen", unicode: "1f50f", shortname: ":lock_with_ink_pen:", code_decimal: "&#128271;", category: "o", emoji_order: "1946"
        }
        , {
            name: "closed_lock_with_key", unicode: "1f510", shortname: ":closed_lock_with_key:", code_decimal: "&#128272;", category: "o", emoji_order: "1947"
        }
        , {
            name: "key", unicode: "1f511", shortname: ":key:", code_decimal: "&#128273;", category: "o", emoji_order: "1948"
        }
        , {
            name: "hammer", unicode: "1f528", shortname: ":hammer:", code_decimal: "&#128296;", category: "o", emoji_order: "1950"
        }
        , {
            name: "pick", unicode: "26cf", shortname: ":pick:", code_decimal: "&#9935;", category: "o", emoji_order: "1951"
        }
        , {
            name: "crossed_swords", unicode: "2694", shortname: ":crossed_swords:", code_decimal: "&#9876;", category: "o", emoji_order: "1955"
        }
        , {
            name: "gun", unicode: "1f52b", shortname: ":gun:", code_decimal: "&#128299;", category: "o", emoji_order: "1956"
        }
        , {
            name: "bow_and_arrow", unicode: "1f3f9", shortname: ":bow_and_arrow:", code_decimal: "&#127993;", category: "a", emoji_order: "1957"
        }
        , {
            name: "shield", unicode: "1f6e1", shortname: ":shield:", code_decimal: "&#128737;", category: "o", emoji_order: "1958"
        }
        , {
            name: "wrench", unicode: "1f527", shortname: ":wrench:", code_decimal: "&#128295;", category: "o", emoji_order: "1959"
        }
        , {
            name: "nut_and_bolt", unicode: "1f529", shortname: ":nut_and_bolt:", code_decimal: "&#128297;", category: "o", emoji_order: "1960"
        }
        , {
            name: "gear", unicode: "2699", shortname: ":gear:", code_decimal: "&#9881;", category: "o", emoji_order: "1961"
        }
        , {
            name: "compression", unicode: "1f5dc", shortname: ":compression:", code_decimal: "&#128476;", category: "o", emoji_order: "1962"
        }
        , {
            name: "alembic", unicode: "2697", shortname: ":alembic:", code_decimal: "&#9879;", category: "o", emoji_order: "1963"
        }
        , {
            name: "scales", unicode: "2696", shortname: ":scales:", code_decimal: "&#9878;", category: "o", emoji_order: "1964"
        }
        , {
            name: "link", unicode: "1f517", shortname: ":link:", code_decimal: "&#128279;", category: "o", emoji_order: "1965"
        }
        , {
            name: "chains", unicode: "26d3", shortname: ":chains:", code_decimal: "&#9939;", category: "o", emoji_order: "1966"
        }
        , {
            name: "syringe", unicode: "1f489", shortname: ":syringe:", code_decimal: "&#128137;", category: "o", emoji_order: "1967"
        }
        , {
            name: "pill", unicode: "1f48a", shortname: ":pill:", code_decimal: "&#128138;", category: "o", emoji_order: "1968"
        }
        , {
            name: "smoking", unicode: "1f6ac", shortname: ":smoking:", code_decimal: "&#128684;", category: "o", emoji_order: "1969"
        }
        , {
            name: "coffin", unicode: "26b0", shortname: ":coffin:", code_decimal: "&#9904;", category: "o", emoji_order: "1970"
        }
        , {
            name: "moyai", unicode: "1f5ff", shortname: ":moyai:", code_decimal: "&#128511;", category: "o", emoji_order: "1972"
        }
        , {
            name: "crystal_ball", unicode: "1f52e", shortname: ":crystal_ball:", code_decimal: "&#128302;", category: "o", emoji_order: "1974"
        }
        , {
            name: "atm", unicode: "1f3e7", shortname: ":atm:", code_decimal: "&#127975;", category: "s", emoji_order: "1976"
        }
        , {
            name: "put_litter_in_its_place", unicode: "1f6ae", shortname: ":put_litter_in_its_place:", code_decimal: "&#128686;", category: "s", emoji_order: "1977"
        }
        , {
            name: "potable_water", unicode: "1f6b0", shortname: ":potable_water:", code_decimal: "&#128688;", category: "s", emoji_order: "1978"
        }
        , {
            name: "wheelchair", unicode: "267f", shortname: ":wheelchair:", code_decimal: "&#9855;", category: "s", emoji_order: "1979"
        }
        , {
            name: "mens", unicode: "1f6b9", shortname: ":mens:", code_decimal: "&#128697;", category: "s", emoji_order: "1980"
        }
        , {
            name: "womens", unicode: "1f6ba", shortname: ":womens:", code_decimal: "&#128698;", category: "s", emoji_order: "1981"
        }
        , {
            name: "restroom", unicode: "1f6bb", shortname: ":restroom:", code_decimal: "&#128699;", category: "s", emoji_order: "1982"
        }
        , {
            name: "baby_symbol", unicode: "1f6bc", shortname: ":baby_symbol:", code_decimal: "&#128700;", category: "s", emoji_order: "1983"
        }
        , {
            name: "wc", unicode: "1f6be", shortname: ":wc:", code_decimal: "&#128702;", category: "s", emoji_order: "1984"
        }
        , {
            name: "passport_control", unicode: "1f6c2", shortname: ":passport_control:", code_decimal: "&#128706;", category: "s", emoji_order: "1985"
        }
        , {
            name: "customs", unicode: "1f6c3", shortname: ":customs:", code_decimal: "&#128707;", category: "s", emoji_order: "1986"
        }
        , {
            name: "baggage_claim", unicode: "1f6c4", shortname: ":baggage_claim:", code_decimal: "&#128708;", category: "s", emoji_order: "1987"
        }
        , {
            name: "left_luggage", unicode: "1f6c5", shortname: ":left_luggage:", code_decimal: "&#128709;", category: "s", emoji_order: "1988"
        }
        , {
            name: "warning", unicode: "26a0", shortname: ":warning:", code_decimal: "&#9888;", category: "s", emoji_order: "1989"
        }
        , {
            name: "children_crossing", unicode: "1f6b8", shortname: ":children_crossing:", code_decimal: "&#128696;", category: "s", emoji_order: "1990"
        }
        , {
            name: "no_entry", unicode: "26d4", shortname: ":no_entry:", code_decimal: "&#9940;", category: "s", emoji_order: "1991"
        }
        , {
            name: "no_entry_sign", unicode: "1f6ab", shortname: ":no_entry_sign:", code_decimal: "&#128683;", category: "s", emoji_order: "1992"
        }
        , {
            name: "no_bicycles", unicode: "1f6b3", shortname: ":no_bicycles:", code_decimal: "&#128691;", category: "s", emoji_order: "1993"
        }
        , {
            name: "no_smoking", unicode: "1f6ad", shortname: ":no_smoking:", code_decimal: "&#128685;", category: "s", emoji_order: "1994"
        }
        , {
            name: "do_not_litter", unicode: "1f6af", shortname: ":do_not_litter:", code_decimal: "&#128687;", category: "s", emoji_order: "1995"
        }
        , {
            name: "non-potable_water", unicode: "1f6b1", shortname: ":non-potable_water:", code_decimal: "&#128689;", category: "s", emoji_order: "1996"
        }
        , {
            name: "no_pedestrians", unicode: "1f6b7", shortname: ":no_pedestrians:", code_decimal: "&#128695;", category: "s", emoji_order: "1997"
        }
        , {
            name: "no_mobile_phones", unicode: "1f4f5", shortname: ":no_mobile_phones:", code_decimal: "&#128245;", category: "s", emoji_order: "1998"
        }
        , {
            name: "underage", unicode: "1f51e", shortname: ":underage:", code_decimal: "&#128286;", category: "s", emoji_order: "1999"
        }
        , {
            name: "radioactive", unicode: "2622", shortname: ":radioactive:", code_decimal: "&#9762;", category: "s", emoji_order: "2000"
        }
        , {
            name: "biohazard", unicode: "2623", shortname: ":biohazard:", code_decimal: "&#9763;", category: "s", emoji_order: "2001"
        }
        , {
            name: "arrow_up", unicode: "2b06", shortname: ":arrow_up:", code_decimal: "&#11014;", category: "s", emoji_order: "2002"
        }
        , {
            name: "arrow_upper_right", unicode: "2197", shortname: ":arrow_upper_right:", code_decimal: "&#8599;", category: "s", emoji_order: "2003"
        }
        , {
            name: "arrow_right", unicode: "27a1", shortname: ":arrow_right:", code_decimal: "&#10145;", category: "s", emoji_order: "2004"
        }
        , {
            name: "arrow_lower_right", unicode: "2198", shortname: ":arrow_lower_right:", code_decimal: "&#8600;", category: "s", emoji_order: "2005"
        }
        , {
            name: "arrow_down", unicode: "2b07", shortname: ":arrow_down:", code_decimal: "&#11015;", category: "s", emoji_order: "2006"
        }
        , {
            name: "arrow_lower_left", unicode: "2199", shortname: ":arrow_lower_left:", code_decimal: "&#8601;", category: "s", emoji_order: "2007"
        }
        , {
            name: "arrow_left", unicode: "2b05", shortname: ":arrow_left:", code_decimal: "&#11013;", category: "s", emoji_order: "2008"
        }
        , {
            name: "arrow_upper_left", unicode: "2196", shortname: ":arrow_upper_left:", code_decimal: "&#8598;", category: "s", emoji_order: "2009"
        }
        , {
            name: "arrow_up_down", unicode: "2195", shortname: ":arrow_up_down:", code_decimal: "&#8597;", category: "s", emoji_order: "2010"
        }
        , {
            name: "left_right_arrow", unicode: "2194", shortname: ":left_right_arrow:", code_decimal: "&harr;", category: "s", emoji_order: "2011"
        }
        , {
            name: "leftwards_arrow_with_hook", unicode: "21a9", shortname: ":leftwards_arrow_with_hook:", code_decimal: "&#8617;", category: "s", emoji_order: "2012"
        }
        , {
            name: "arrow_right_hook", unicode: "21aa", shortname: ":arrow_right_hook:", code_decimal: "&#8618;", category: "s", emoji_order: "2013"
        }
        , {
            name: "arrow_heading_up", unicode: "2934", shortname: ":arrow_heading_up:", code_decimal: "&#10548;", category: "s", emoji_order: "2014"
        }
        , {
            name: "arrow_heading_down", unicode: "2935", shortname: ":arrow_heading_down:", code_decimal: "&#10549;", category: "s", emoji_order: "2015"
        }
        , {
            name: "arrows_clockwise", unicode: "1f503", shortname: ":arrows_clockwise:", code_decimal: "&#128259;", category: "s", emoji_order: "2016"
        }
        , {
            name: "arrows_counterclockwise", unicode: "1f504", shortname: ":arrows_counterclockwise:", code_decimal: "&#128260;", category: "s", emoji_order: "2017"
        }
        , {
            name: "back", unicode: "1f519", shortname: ":back:", code_decimal: "&#128281;", category: "s", emoji_order: "2018"
        }
        , {
            name: "end", unicode: "1f51a", shortname: ":end:", code_decimal: "&#128282;", category: "s", emoji_order: "2019"
        }
        , {
            name: "on", unicode: "1f51b", shortname: ":on:", code_decimal: "&#128283;", category: "s", emoji_order: "2020"
        }
        , {
            name: "soon", unicode: "1f51c", shortname: ":soon:", code_decimal: "&#128284;", category: "s", emoji_order: "2021"
        }
        , {
            name: "top", unicode: "1f51d", shortname: ":top:", code_decimal: "&#128285;", category: "s", emoji_order: "2022"
        }
        , {
            name: "place_of_worship", unicode: "1f6d0", shortname: ":place_of_worship:", code_decimal: "&#128720;", category: "s", emoji_order: "2023"
        }
        , {
            name: "atom", unicode: "269b", shortname: ":atom:", code_decimal: "&#9883;", category: "s", emoji_order: "2024"
        }
        , {
            name: "om_symbol", unicode: "1f549", shortname: ":om_symbol:", code_decimal: "&#128329;", category: "s", emoji_order: "2025"
        }
        , {
            name: "star_of_david", unicode: "2721", shortname: ":star_of_david:", code_decimal: "&#10017;", category: "s", emoji_order: "2026"
        }
        , {
            name: "wheel_of_dharma", unicode: "2638", shortname: ":wheel_of_dharma:", code_decimal: "&#9784;", category: "s", emoji_order: "2027"
        }
        , {
            name: "yin_yang", unicode: "262f", shortname: ":yin_yang:", code_decimal: "&#9775;", category: "s", emoji_order: "2028"
        }
        , {
            name: "cross", unicode: "271d", shortname: ":cross:", code_decimal: "&#10013;", category: "s", emoji_order: "2029"
        }
        , {
            name: "orthodox_cross", unicode: "2626", shortname: ":orthodox_cross:", code_decimal: "&#9766;", category: "s", emoji_order: "2030"
        }
        , {
            name: "star_and_crescent", unicode: "262a", shortname: ":star_and_crescent:", code_decimal: "&#9770;", category: "s", emoji_order: "2031"
        }
        , {
            name: "peace", unicode: "262e", shortname: ":peace:", code_decimal: "&#9774;", category: "s", emoji_order: "2032"
        }
        , {
            name: "menorah", unicode: "1f54e", shortname: ":menorah:", code_decimal: "&#128334;", category: "s", emoji_order: "2033"
        }
        , {
            name: "six_pointed_star", unicode: "1f52f", shortname: ":six_pointed_star:", code_decimal: "&#128303;", category: "s", emoji_order: "2034"
        }
        , {
            name: "aries", unicode: "2648", shortname: ":aries:", code_decimal: "&#9800;", category: "s", emoji_order: "2035"
        }
        , {
            name: "taurus", unicode: "2649", shortname: ":taurus:", code_decimal: "&#9801;", category: "s", emoji_order: "2036"
        }
        , {
            name: "gemini", unicode: "264a", shortname: ":gemini:", code_decimal: "&#9802;", category: "s", emoji_order: "2037"
        }
        , {
            name: "cancer", unicode: "264b", shortname: ":cancer:", code_decimal: "&#9803;", category: "s", emoji_order: "2038"
        }
        , {
            name: "leo", unicode: "264c", shortname: ":leo:", code_decimal: "&#9804;", category: "s", emoji_order: "2039"
        }
        , {
            name: "virgo", unicode: "264d", shortname: ":virgo:", code_decimal: "&#9805;", category: "s", emoji_order: "2040"
        }
        , {
            name: "libra", unicode: "264e", shortname: ":libra:", code_decimal: "&#9806;", category: "s", emoji_order: "2041"
        }
        , {
            name: "scorpius", unicode: "264f", shortname: ":scorpius:", code_decimal: "&#9807;", category: "s", emoji_order: "2042"
        }
        , {
            name: "sagittarius", unicode: "2650", shortname: ":sagittarius:", code_decimal: "&#9808;", category: "s", emoji_order: "2043"
        }
        , {
            name: "capricorn", unicode: "2651", shortname: ":capricorn:", code_decimal: "&#9809;", category: "s", emoji_order: "2044"
        }
        , {
            name: "aquarius", unicode: "2652", shortname: ":aquarius:", code_decimal: "&#9810;", category: "s", emoji_order: "2045"
        }
        , {
            name: "pisces", unicode: "2653", shortname: ":pisces:", code_decimal: "&#9811;", category: "s", emoji_order: "2046"
        }
        , {
            name: "ophiuchus", unicode: "26ce", shortname: ":ophiuchus:", code_decimal: "&#9934;", category: "s", emoji_order: "2047"
        }
        , {
            name: "twisted_rightwards_arrows", unicode: "1f500", shortname: ":twisted_rightwards_arrows:", code_decimal: "&#128256;", category: "s", emoji_order: "2048"
        }
        , {
            name: "repeat", unicode: "1f501", shortname: ":repeat:", code_decimal: "&#128257;", category: "s", emoji_order: "2049"
        }
        , {
            name: "repeat_one", unicode: "1f502", shortname: ":repeat_one:", code_decimal: "&#128258;", category: "s", emoji_order: "2050"
        }
        , {
            name: "arrow_forward", unicode: "25b6", shortname: ":arrow_forward:", code_decimal: "&#9654;", category: "s", emoji_order: "2051"
        }
        , {
            name: "fast_forward", unicode: "23e9", shortname: ":fast_forward:", code_decimal: "&#9193;", category: "s", emoji_order: "2052"
        }
        , {
            name: "track_next", unicode: "23ed", shortname: ":track_next:", code_decimal: "&#9197;", category: "s", emoji_order: "2053"
        }
        , {
            name: "play_pause", unicode: "23ef", shortname: ":play_pause:", code_decimal: "&#9199;", category: "s", emoji_order: "2054"
        }
        , {
            name: "arrow_backward", unicode: "25c0", shortname: ":arrow_backward:", code_decimal: "&#9664;", category: "s", emoji_order: "2055"
        }
        , {
            name: "rewind", unicode: "23ea", shortname: ":rewind:", code_decimal: "&#9194;", category: "s", emoji_order: "2056"
        }
        , {
            name: "track_previous", unicode: "23ee", shortname: ":track_previous:", code_decimal: "&#9198;", category: "s", emoji_order: "2057"
        }
        , {
            name: "arrow_up_small", unicode: "1f53c", shortname: ":arrow_up_small:", code_decimal: "&#128316;", category: "s", emoji_order: "2058"
        }
        , {
            name: "arrow_double_up", unicode: "23eb", shortname: ":arrow_double_up:", code_decimal: "&#9195;", category: "s", emoji_order: "2059"
        }
        , {
            name: "arrow_down_small", unicode: "1f53d", shortname: ":arrow_down_small:", code_decimal: "&#128317;", category: "s", emoji_order: "2060"
        }
        , {
            name: "arrow_double_down", unicode: "23ec", shortname: ":arrow_double_down:", code_decimal: "&#9196;", category: "s", emoji_order: "2061"
        }
        , {
            name: "cinema", unicode: "1f3a6", shortname: ":cinema:", code_decimal: "&#127910;", category: "s", emoji_order: "2066"
        }
        , {
            name: "low_brightness", unicode: "1f505", shortname: ":low_brightness:", code_decimal: "&#128261;", category: "s", emoji_order: "2067"
        }
        , {
            name: "high_brightness", unicode: "1f506", shortname: ":high_brightness:", code_decimal: "&#128262;", category: "s", emoji_order: "2068"
        }
        , {
            name: "signal_strength", unicode: "1f4f6", shortname: ":signal_strength:", code_decimal: "&#128246;", category: "s", emoji_order: "2069"
        }
        , {
            name: "vibration_mode", unicode: "1f4f3", shortname: ":vibration_mode:", code_decimal: "&#128243;", category: "s", emoji_order: "2070"
        }
        , {
            name: "mobile_phone_off", unicode: "1f4f4", shortname: ":mobile_phone_off:", code_decimal: "&#128244;", category: "s", emoji_order: "2071"
        }
        , {
            name: "recycle", unicode: "267b", shortname: ":recycle:", code_decimal: "&#9851;", category: "s", emoji_order: "2072"
        }
        , {
            name: "name_badge", unicode: "1f4db", shortname: ":name_badge:", code_decimal: "&#128219;", category: "s", emoji_order: "2073"
        }
        , {
            name: "fleur-de-lis", unicode: "269c", shortname: ":fleur-de-lis:", code_decimal: "&#9884;", category: "s", emoji_order: "2074"
        }
        , {
            name: "beginner", unicode: "1f530", shortname: ":beginner:", code_decimal: "&#128304;", category: "s", emoji_order: "2075"
        }
        , {
            name: "trident", unicode: "1f531", shortname: ":trident:", code_decimal: "&#128305;", category: "s", emoji_order: "2076"
        }
        , {
            name: "o", unicode: "2b55", shortname: ":o:", code_decimal: "&#11093;", category: "s", emoji_order: "2077"
        }
        , {
            name: "white_check_mark", unicode: "2705", shortname: ":white_check_mark:", code_decimal: "&#9989;", category: "s", emoji_order: "2078"
        }
        , {
            name: "ballot_box_with_check", unicode: "2611", shortname: ":ballot_box_with_check:", code_decimal: "&#9745;", category: "s", emoji_order: "2079"
        }
        , {
            name: "heavy_check_mark", unicode: "2714", shortname: ":heavy_check_mark:", code_decimal: "&#10004;", category: "s", emoji_order: "2080"
        }
        , {
            name: "heavy_multiplication_x", unicode: "2716", shortname: ":heavy_multiplication_x:", code_decimal: "&#10006;", category: "s", emoji_order: "2081"
        }
        , {
            name: "x", unicode: "274c", shortname: ":x:", code_decimal: "&#10060;", category: "s", emoji_order: "2082"
        }
        , {
            name: "negative_squared_cross_mark", unicode: "274e", shortname: ":negative_squared_cross_mark:", code_decimal: "&#10062;", category: "s", emoji_order: "2083"
        }
        , {
            name: "heavy_plus_sign", unicode: "2795", shortname: ":heavy_plus_sign:", code_decimal: "&#10133;", category: "s", emoji_order: "2084"
        }
        , {
            name: "heavy_minus_sign", unicode: "2796", shortname: ":heavy_minus_sign:", code_decimal: "&#10134;", category: "s", emoji_order: "2088"
        }
        , {
            name: "heavy_division_sign", unicode: "2797", shortname: ":heavy_division_sign:", code_decimal: "&#10135;", category: "s", emoji_order: "2089"
        }
        , {
            name: "curly_loop", unicode: "27b0", shortname: ":curly_loop:", code_decimal: "&#10160;", category: "s", emoji_order: "2090"
        }
        , {
            name: "loop", unicode: "27bf", shortname: ":loop:", code_decimal: "&#10175;", category: "s", emoji_order: "2091"
        }
        , {
            name: "part_alternation_mark", unicode: "303d", shortname: ":part_alternation_mark:", code_decimal: "&#12349;", category: "s", emoji_order: "2092"
        }
        , {
            name: "eight_spoked_asterisk", unicode: "2733", shortname: ":eight_spoked_asterisk:", code_decimal: "&#10035;", category: "s", emoji_order: "2093"
        }
        , {
            name: "eight_pointed_black_star", unicode: "2734", shortname: ":eight_pointed_black_star:", code_decimal: "&#10036;", category: "s", emoji_order: "2094"
        }
        , {
            name: "sparkle", unicode: "2747", shortname: ":sparkle:", code_decimal: "&#10055;", category: "s", emoji_order: "2095"
        }
        , {
            name: "bangbang", unicode: "203c", shortname: ":bangbang:", code_decimal: "&#8252;", category: "s", emoji_order: "2096"
        }
        , {
            name: "interrobang", unicode: "2049", shortname: ":interrobang:", code_decimal: "&#8265;", category: "s", emoji_order: "2097"
        }
        , {
            name: "question", unicode: "2753", shortname: ":question:", code_decimal: "&#10067;", category: "s", emoji_order: "2098"
        }
        , {
            name: "grey_question", unicode: "2754", shortname: ":grey_question:", code_decimal: "&#10068;", category: "s", emoji_order: "2099"
        }
        , {
            name: "grey_exclamation", unicode: "2755", shortname: ":grey_exclamation:", code_decimal: "&#10069;", category: "s", emoji_order: "2100"
        }
        , {
            name: "exclamation", unicode: "2757", shortname: ":exclamation:", code_decimal: "&#10071;", category: "s", emoji_order: "2101"
        }
        , {
            name: "wavy_dash", unicode: "3030", shortname: ":wavy_dash:", code_decimal: "&#12336;", category: "s", emoji_order: "2102"
        }
        , {
            name: "copyright", unicode: "00a9", shortname: ":copyright:", code_decimal: "&copy;", category: "s", emoji_order: "2103"
        }
        , {
            name: "registered", unicode: "00ae", shortname: ":registered:", code_decimal: "&reg;", category: "s", emoji_order: "2104"
        }
        , {
            name: "tm", unicode: "2122", shortname: ":tm:", code_decimal: "&trade;", category: "s", emoji_order: "2105"
        }
        , {
            name: "hash", unicode: "0023-20e3", shortname: ":hash:", code_decimal: "#&#8419;", category: "s", emoji_order: "2106"
        }
        , {
            name: "asterisk", unicode: "002a-20e3", shortname: ":asterisk:", code_decimal: "*&#8419;", category: "s", emoji_order: "2107"
        }
        , {
            name: "zero", unicode: "0030-20e3", shortname: ":zero:", code_decimal: "0&#8419;", category: "s", emoji_order: "2108"
        }
        , {
            name: "one", unicode: "0031-20e3", shortname: ":one:", code_decimal: "1&#8419;", category: "s", emoji_order: "2109"
        }
        , {
            name: "two", unicode: "0032-20e3", shortname: ":two:", code_decimal: "2&#8419;", category: "s", emoji_order: "2110"
        }
        , {
            name: "three", unicode: "0033-20e3", shortname: ":three:", code_decimal: "3&#8419;", category: "s", emoji_order: "2111"
        }
        , {
            name: "four", unicode: "0034-20e3", shortname: ":four:", code_decimal: "4&#8419;", category: "s", emoji_order: "2112"
        }
        , {
            name: "five", unicode: "0035-20e3", shortname: ":five:", code_decimal: "5&#8419;", category: "s", emoji_order: "2113"
        }
        , {
            name: "six", unicode: "0036-20e3", shortname: ":six:", code_decimal: "6&#8419;", category: "s", emoji_order: "2114"
        }
        , {
            name: "seven", unicode: "0037-20e3", shortname: ":seven:", code_decimal: "7&#8419;", category: "s", emoji_order: "2115"
        }
        , {
            name: "eight", unicode: "0038-20e3", shortname: ":eight:", code_decimal: "8&#8419;", category: "s", emoji_order: "2116"
        }
        , {
            name: "nine", unicode: "0039-20e3", shortname: ":nine:", code_decimal: "9&#8419;", category: "s", emoji_order: "2117"
        }
        , {
            name: "keycap_ten", unicode: "1f51f", shortname: ":keycap_ten:", code_decimal: "&#128287;", category: "s", emoji_order: "2118"
        }
        , {
            name: "capital_abcd", unicode: "1f520", shortname: ":capital_abcd:", code_decimal: "&#128288;", category: "s", emoji_order: "2120"
        }
        , {
            name: "abcd", unicode: "1f521", shortname: ":abcd:", code_decimal: "&#128289;", category: "s", emoji_order: "2121"
        }
        , {
            name: "symbols", unicode: "1f523", shortname: ":symbols:", code_decimal: "&#128291;", category: "s", emoji_order: "2123"
        }
        , {
            name: "abc", unicode: "1f524", shortname: ":abc:", code_decimal: "&#128292;", category: "s", emoji_order: "2124"
        }
        , {
            name: "a", unicode: "1f170", shortname: ":a:", code_decimal: "&#127344;", category: "s", emoji_order: "2125"
        }
        , {
            name: "ab", unicode: "1f18e", shortname: ":ab:", code_decimal: "&#127374;", category: "s", emoji_order: "2126"
        }
        , {
            name: "b", unicode: "1f171", shortname: ":b:", code_decimal: "&#127345;", category: "s", emoji_order: "2127"
        }
        , {
            name: "cl", unicode: "1f191", shortname: ":cl:", code_decimal: "&#127377;", category: "s", emoji_order: "2128"
        }
        , {
            name: "cool", unicode: "1f192", shortname: ":cool:", code_decimal: "&#127378;", category: "s", emoji_order: "2129"
        }
        , {
            name: "free", unicode: "1f193", shortname: ":free:", code_decimal: "&#127379;", category: "s", emoji_order: "2130"
        }
        , {
            name: "information_source", unicode: "2139", shortname: ":information_source:", code_decimal: "&#8505;", category: "s", emoji_order: "2131"
        }
        , {
            name: "id", unicode: "1f194", shortname: ":id:", code_decimal: "&#127380;", category: "s", emoji_order: "2132"
        }
        , {
            name: "m", unicode: "24c2", shortname: ":m:", code_decimal: "&#9410;", category: "s", emoji_order: "2133"
        }
        , {
            name: "new", unicode: "1f195", shortname: ":new:", code_decimal: "&#127381;", category: "s", emoji_order: "2134"
        }
        , {
            name: "ng", unicode: "1f196", shortname: ":ng:", code_decimal: "&#127382;", category: "s", emoji_order: "2135"
        }
        , {
            name: "o2", unicode: "1f17e", shortname: ":o2:", code_decimal: "&#127358;", category: "s", emoji_order: "2136"
        }
        , {
            name: "ok", unicode: "1f197", shortname: ":ok:", code_decimal: "&#127383;", category: "s", emoji_order: "2137"
        }
        , {
            name: "parking", unicode: "1f17f", shortname: ":parking:", code_decimal: "&#127359;", category: "s", emoji_order: "2138"
        }
        , {
            name: "sos", unicode: "1f198", shortname: ":sos:", code_decimal: "&#127384;", category: "s", emoji_order: "2139"
        }
        , {
            name: "up", unicode: "1f199", shortname: ":up:", code_decimal: "&#127385;", category: "s", emoji_order: "2140"
        }
        , {
            name: "vs", unicode: "1f19a", shortname: ":vs:", code_decimal: "&#127386;", category: "s", emoji_order: "2141"
        }
        , {
            name: "koko", unicode: "1f201", shortname: ":koko:", code_decimal: "&#127489;", category: "s", emoji_order: "2142"
        }
        , {
            name: "sa", unicode: "1f202", shortname: ":sa:", code_decimal: "&#127490;", category: "s", emoji_order: "2143"
        }
        , {
            name: "u6708", unicode: "1f237", shortname: ":u6708:", code_decimal: "&#127543;", category: "s", emoji_order: "2144"
        }
        , {
            name: "u6709", unicode: "1f236", shortname: ":u6709:", code_decimal: "&#127542;", category: "s", emoji_order: "2145"
        }
        , {
            name: "u6307", unicode: "1f22f", shortname: ":u6307:", code_decimal: "&#127535;", category: "s", emoji_order: "2146"
        }
        , {
            name: "ideograph_advantage", unicode: "1f250", shortname: ":ideograph_advantage:", code_decimal: "&#127568;", category: "s", emoji_order: "2147"
        }
        , {
            name: "u5272", unicode: "1f239", shortname: ":u5272:", code_decimal: "&#127545;", category: "s", emoji_order: "2148"
        }
        , {
            name: "u7121", unicode: "1f21a", shortname: ":u7121:", code_decimal: "&#127514;", category: "s", emoji_order: "2149"
        }
        , {
            name: "u7981", unicode: "1f232", shortname: ":u7981:", code_decimal: "&#127538;", category: "s", emoji_order: "2150"
        }
        , {
            name: "accept", unicode: "1f251", shortname: ":accept:", code_decimal: "&#127569;", category: "s", emoji_order: "2151"
        }
        , {
            name: "u7533", unicode: "1f238", shortname: ":u7533:", code_decimal: "&#127544;", category: "s", emoji_order: "2152"
        }
        , {
            name: "u5408", unicode: "1f234", shortname: ":u5408:", code_decimal: "&#127540;", category: "s", emoji_order: "2153"
        }
        , {
            name: "u7a7a", unicode: "1f233", shortname: ":u7a7a:", code_decimal: "&#127539;", category: "s", emoji_order: "2154"
        }
        , {
            name: "congratulations", unicode: "3297", shortname: ":congratulations:", code_decimal: "&#12951;", category: "s", emoji_order: "2155"
        }
        , {
            name: "secret", unicode: "3299", shortname: ":secret:", code_decimal: "&#12953;", category: "s", emoji_order: "2156"
        }
        , {
            name: "u55b6", unicode: "1f23a", shortname: ":u55b6:", code_decimal: "&#127546;", category: "s", emoji_order: "2157"
        }
        , {
            name: "u6e80", unicode: "1f235", shortname: ":u6e80:", code_decimal: "&#127541;", category: "s", emoji_order: "2158"
        }
        , {
            name: "black_small_square", unicode: "25aa", shortname: ":black_small_square:", code_decimal: "&#9642;", category: "s", emoji_order: "2159"
        }
        , {
            name: "white_small_square", unicode: "25ab", shortname: ":white_small_square:", code_decimal: "&#9643;", category: "s", emoji_order: "2160"
        }
        , {
            name: "white_medium_square", unicode: "25fb", shortname: ":white_medium_square:", code_decimal: "&#9723;", category: "s", emoji_order: "2161"
        }
        , {
            name: "black_medium_square", unicode: "25fc", shortname: ":black_medium_square:", code_decimal: "&#9724;", category: "s", emoji_order: "2162"
        }
        , {
            name: "white_medium_small_square", unicode: "25fd", shortname: ":white_medium_small_square:", code_decimal: "&#9725;", category: "s", emoji_order: "2163"
        }
        , {
            name: "black_medium_small_square", unicode: "25fe", shortname: ":black_medium_small_square:", code_decimal: "&#9726;", category: "s", emoji_order: "2164"
        }
        , {
            name: "black_large_square", unicode: "2b1b", shortname: ":black_large_square:", code_decimal: "&#11035;", category: "s", emoji_order: "2165"
        }
        , {
            name: "white_large_square", unicode: "2b1c", shortname: ":white_large_square:", code_decimal: "&#11036;", category: "s", emoji_order: "2166"
        }
        , {
            name: "large_orange_diamond", unicode: "1f536", shortname: ":large_orange_diamond:", code_decimal: "&#128310;", category: "s", emoji_order: "2167"
        }
        , {
            name: "large_blue_diamond", unicode: "1f537", shortname: ":large_blue_diamond:", code_decimal: "&#128311;", category: "s", emoji_order: "2168"
        }
        , {
            name: "small_orange_diamond", unicode: "1f538", shortname: ":small_orange_diamond:", code_decimal: "&#128312;", category: "s", emoji_order: "2169"
        }
        , {
            name: "small_blue_diamond", unicode: "1f539", shortname: ":small_blue_diamond:", code_decimal: "&#128313;", category: "s", emoji_order: "2170"
        }
        , {
            name: "small_red_triangle", unicode: "1f53a", shortname: ":small_red_triangle:", code_decimal: "&#128314;", category: "s", emoji_order: "2171"
        }
        , {
            name: "small_red_triangle_down", unicode: "1f53b", shortname: ":small_red_triangle_down:", code_decimal: "&#128315;", category: "s", emoji_order: "2172"
        }
        , {
            name: "diamond_shape_with_a_dot_inside", unicode: "1f4a0", shortname: ":diamond_shape_with_a_dot_inside:", code_decimal: "&#128160;", category: "s", emoji_order: "2173"
        }
        , {
            name: "radio_button", unicode: "1f518", shortname: ":radio_button:", code_decimal: "&#128280;", category: "s", emoji_order: "2174"
        }
        , {
            name: "black_square_button", unicode: "1f532", shortname: ":black_square_button:", code_decimal: "&#128306;", category: "s", emoji_order: "2175"
        }
        , {
            name: "white_square_button", unicode: "1f533", shortname: ":white_square_button:", code_decimal: "&#128307;", category: "s", emoji_order: "2176"
        }
        , {
            name: "white_circle", unicode: "26aa", shortname: ":white_circle:", code_decimal: "&#9898;", category: "s", emoji_order: "2177"
        }
        , {
            name: "black_circle", unicode: "26ab", shortname: ":black_circle:", code_decimal: "&#9899;", category: "s", emoji_order: "2178"
        }
        , {
            name: "red_circle", unicode: "1f534", shortname: ":red_circle:", code_decimal: "&#128308;", category: "s", emoji_order: "2179"
        }
        , {
            name: "blue_circle", unicode: "1f535", shortname: ":blue_circle:", code_decimal: "&#128309;", category: "s", emoji_order: "2180"
        }
        , {
            name: "checkered_flag", unicode: "1f3c1", shortname: ":checkered_flag:", code_decimal: "&#127937;", category: "t", emoji_order: "2181"
        }
        , {
            name: "triangular_flag_on_post", unicode: "1f6a9", shortname: ":triangular_flag_on_post:", code_decimal: "&#128681;", category: "o", emoji_order: "2182"
        }
        , {
            name: "crossed_flags", unicode: "1f38c", shortname: ":crossed_flags:", code_decimal: "&#127884;", category: "o", emoji_order: "2183"
        }
        , {
            name: "waving_black_flag", unicode: "1f3f4", shortname: ":flag_black:", code_decimal: "&#127988;", category: "o", emoji_order: "2184"
        }
        , {
            name: "waving_white_flag", unicode: "1f3f3", shortname: ":flag_white:", code_decimal: "&#127987;", category: "o", emoji_order: "2185"
        }
        , {
            name: "flag-ac", unicode: "1f1e6-1f1e8", shortname: ":flag_ac:", code_decimal: "&#127462;&#127464;", category: "f", emoji_order: "2187"
        }
        , {
            name: "flag-ad", unicode: "1f1e6-1f1e9", shortname: ":flag_ad:", code_decimal: "&#127462;&#127465;", category: "f", emoji_order: "2188"
        }
        , {
            name: "flag-ae", unicode: "1f1e6-1f1ea", shortname: ":flag_ae:", code_decimal: "&#127462;&#127466;", category: "f", emoji_order: "2189"
        }
        , {
            name: "flag-af", unicode: "1f1e6-1f1eb", shortname: ":flag_af:", code_decimal: "&#127462;&#127467;", category: "f", emoji_order: "2190"
        }
        , {
            name: "flag-ag", unicode: "1f1e6-1f1ec", shortname: ":flag_ag:", code_decimal: "&#127462;&#127468;", category: "f", emoji_order: "2191"
        }
        , {
            name: "flag-ai", unicode: "1f1e6-1f1ee", shortname: ":flag_ai:", code_decimal: "&#127462;&#127470;", category: "f", emoji_order: "2192"
        }
        , {
            name: "flag-al", unicode: "1f1e6-1f1f1", shortname: ":flag_al:", code_decimal: "&#127462;&#127473;", category: "f", emoji_order: "2193"
        }
        , {
            name: "flag-am", unicode: "1f1e6-1f1f2", shortname: ":flag_am:", code_decimal: "&#127462;&#127474;", category: "f", emoji_order: "2194"
        }
        , {
            name: "flag-ao", unicode: "1f1e6-1f1f4", shortname: ":flag-ao:", code_decimal: "&#127462;&#127476;", category: "f", emoji_order: "2195"
        }
        , {
            name: "flag-aq", unicode: "1f1e6-1f1f6", shortname: ":flag-aq:", code_decimal: "&#127462;&#127478;", category: "f", emoji_order: "2196"
        }
        , {
            name: "flag-ar", unicode: "1f1e6-1f1f7", shortname: ":flag-ar:", code_decimal: "&#127462;&#127479;", category: "f", emoji_order: "2197"
        }
        , {
            name: "flag-as", unicode: "1f1e6-1f1f8", shortname: ":flag-as:", code_decimal: "&#127462;&#127480;", category: "f", emoji_order: "2198"
        }
        , {
            name: "flag-at", unicode: "1f1e6-1f1f9", shortname: ":flag-at:", code_decimal: "&#127462;&#127481;", category: "f", emoji_order: "2199"
        }
        , {
            name: "flag-au", unicode: "1f1e6-1f1fa", shortname: ":flag-au:", code_decimal: "&#127462;&#127482;", category: "f", emoji_order: "2200"
        }
        , {
            name: "flag-aw", unicode: "1f1e6-1f1fc", shortname: ":flag-aw:", code_decimal: "&#127462;&#127484;", category: "f", emoji_order: "2201"
        }
        , {
            name: "flag-ax", unicode: "1f1e6-1f1fd", shortname: ":flag-ax:", code_decimal: "&#127462;&#127485;", category: "f", emoji_order: "2202"
        }
        , {
            name: "flag-az", unicode: "1f1e6-1f1ff", shortname: ":flag-az:", code_decimal: "&#127462;&#127487;", category: "f", emoji_order: "2203"
        }
        , {
            name: "flag-ba", unicode: "1f1e7-1f1e6", shortname: ":flag-ba:", code_decimal: "&#127463;&#127462;", category: "f", emoji_order: "2204"
        }
        , {
            name: "flag-bb", unicode: "1f1e7-1f1e7", shortname: ":flag-bb:", code_decimal: "&#127463;&#127463;", category: "f", emoji_order: "2205"
        }
        , {
            name: "flag-bd", unicode: "1f1e7-1f1e9", shortname: ":flag-bd:", code_decimal: "&#127463;&#127465;", category: "f", emoji_order: "2206"
        }
        , {
            name: "flag-be", unicode: "1f1e7-1f1ea", shortname: ":flag-be:", code_decimal: "&#127463;&#127466;", category: "f", emoji_order: "2207"
        }
        , {
            name: "flag-bf", unicode: "1f1e7-1f1eb", shortname: ":flag-bf:", code_decimal: "&#127463;&#127467;", category: "f", emoji_order: "2208"
        }
        , {
            name: "flag-bg", unicode: "1f1e7-1f1ec", shortname: ":flag-bg:", code_decimal: "&#127463;&#127468;", category: "f", emoji_order: "2209"
        }
        , {
            name: "flag-bh", unicode: "1f1e7-1f1ed", shortname: ":flag-bh:", code_decimal: "&#127463;&#127469;", category: "f", emoji_order: "2210"
        }
        , {
            name: "flag-bi", unicode: "1f1e7-1f1ee", shortname: ":flag-bi:", code_decimal: "&#127463;&#127470;", category: "f", emoji_order: "2211"
        }
        , {
            name: "flag-bj", unicode: "1f1e7-1f1ef", shortname: ":flag-bj:", code_decimal: "&#127463;&#127471;", category: "f", emoji_order: "2212"
        }
        , {
            name: "flag-bl", unicode: "1f1e7-1f1f1", shortname: ":flag-bl:", code_decimal: "&#127463;&#127473;", category: "f", emoji_order: "2213"
        }
        , {
            name: "flag-bm", unicode: "1f1e7-1f1f2", shortname: ":flag-bm:", code_decimal: "&#127463;&#127474;", category: "f", emoji_order: "2214"
        }
        , {
            name: "flag-bn", unicode: "1f1e7-1f1f3", shortname: ":flag-bn:", code_decimal: "&#127463;&#127475;", category: "f", emoji_order: "2215"
        }
        , {
            name: "flag-bo", unicode: "1f1e7-1f1f4", shortname: ":flag-bo:", code_decimal: "&#127463;&#127476;", category: "f", emoji_order: "2216"
        }
        , {
            name: "flag-bq", unicode: "1f1e7-1f1f6", shortname: ":flag-bq:", code_decimal: "&#127463;&#127478;", category: "f", emoji_order: "2217"
        }
        , {
            name: "flag-br", unicode: "1f1e7-1f1f7", shortname: ":flag-br:", code_decimal: "&#127463;&#127479;", category: "f", emoji_order: "2218"
        }
        , {
            name: "flag-bs", unicode: "1f1e7-1f1f8", shortname: ":flag-bs:", code_decimal: "&#127463;&#127480;", category: "f", emoji_order: "2219"
        }
        , {
            name: "flag-bt", unicode: "1f1e7-1f1f9", shortname: ":flag-bt:", code_decimal: "&#127463;&#127481;", category: "f", emoji_order: "2220"
        }
        , {
            name: "flag-bv", unicode: "1f1e7-1f1fb", shortname: ":flag-bv:", code_decimal: "&#127463;&#127483;", category: "f", emoji_order: "2221"
        }
        , {
            name: "flag-bw", unicode: "1f1e7-1f1fc", shortname: ":flag-bw:", code_decimal: "&#127463;&#127484;", category: "f", emoji_order: "2222"
        }
        , {
            name: "flag-by", unicode: "1f1e7-1f1fe", shortname: ":flag-by:", code_decimal: "&#127463;&#127486;", category: "f", emoji_order: "2223"
        }
        , {
            name: "flag-bz", unicode: "1f1e7-1f1ff", shortname: ":flag-bz:", code_decimal: "&#127463;&#127487;", category: "f", emoji_order: "2224"
        }
        , {
            name: "flag-ca", unicode: "1f1e8-1f1e6", shortname: ":flag-ca:", code_decimal: "&#127464;&#127462;", category: "f", emoji_order: "2225"
        }
        , {
            name: "flag-cc", unicode: "1f1e8-1f1e8", shortname: ":flag-cc:", code_decimal: "&#127464;&#127464;", category: "f", emoji_order: "2226"
        }
        , {
            name: "flag-cd", unicode: "1f1e8-1f1e9", shortname: ":flag-cd:", code_decimal: "&#127464;&#127465;", category: "f", emoji_order: "2227"
        }
        , {
            name: "flag-cf", unicode: "1f1e8-1f1eb", shortname: ":flag-cf:", code_decimal: "&#127464;&#127467;", category: "f", emoji_order: "2228"
        }
        , {
            name: "flag-cg", unicode: "1f1e8-1f1ec", shortname: ":flag-cg:", code_decimal: "&#127464;&#127468;", category: "f", emoji_order: "2229"
        }
        , {
            name: "flag-ch", unicode: "1f1e8-1f1ed", shortname: ":flag-ch:", code_decimal: "&#127464;&#127469;", category: "f", emoji_order: "2230"
        }
        , {
            name: "flag-ci", unicode: "1f1e8-1f1ee", shortname: ":flag-ci:", code_decimal: "&#127464;&#127470;", category: "f", emoji_order: "2231"
        }
        , {
            name: "flag-ck", unicode: "1f1e8-1f1f0", shortname: ":flag-ck:", code_decimal: "&#127464;&#127472;", category: "f", emoji_order: "2232"
        }
        , {
            name: "flag-cl", unicode: "1f1e8-1f1f1", shortname: ":flag-cl:", code_decimal: "&#127464;&#127473;", category: "f", emoji_order: "2233"
        }
        , {
            name: "flag-cm", unicode: "1f1e8-1f1f2", shortname: ":flag-cm:", code_decimal: "&#127464;&#127474;", category: "f", emoji_order: "2234"
        }
        , {
            name: "flag-cn", unicode: "1f1e8-1f1f3", shortname: ":flag-cn:", code_decimal: "&#127464;&#127475;", category: "f", emoji_order: "2235"
        }
        , {
            name: "flag-co", unicode: "1f1e8-1f1f4", shortname: ":flag-co:", code_decimal: "&#127464;&#127476;", category: "f", emoji_order: "2236"
        }
        , {
            name: "flag-cp", unicode: "1f1e8-1f1f5", shortname: ":flag-cp:", code_decimal: "&#127464;&#127477;", category: "f", emoji_order: "2237"
        }
        , {
            name: "flag-cr", unicode: "1f1e8-1f1f7", shortname: ":flag-cr:", code_decimal: "&#127464;&#127479;", category: "f", emoji_order: "2238"
        }
        , {
            name: "flag-cu", unicode: "1f1e8-1f1fa", shortname: ":flag-cu:", code_decimal: "&#127464;&#127482;", category: "f", emoji_order: "2239"
        }
        , {
            name: "flag-cv", unicode: "1f1e8-1f1fb", shortname: ":flag-cv:", code_decimal: "&#127464;&#127483;", category: "f", emoji_order: "2240"
        }
        , {
            name: "flag-cw", unicode: "1f1e8-1f1fc", shortname: ":flag-cw:", code_decimal: "&#127464;&#127484;", category: "f", emoji_order: "2241"
        }
        , {
            name: "flag-cx", unicode: "1f1e8-1f1fd", shortname: ":flag-cx:", code_decimal: "&#127464;&#127485;", category: "f", emoji_order: "2242"
        }
        , {
            name: "flag-cy", unicode: "1f1e8-1f1fe", shortname: ":flag-cy:", code_decimal: "&#127464;&#127486;", category: "f", emoji_order: "2243"
        }
        , {
            name: "flag-cz", unicode: "1f1e8-1f1ff", shortname: ":flag-cz:", code_decimal: "&#127464;&#127487;", category: "f", emoji_order: "2244"
        }
        , {
            name: "flag-de", unicode: "1f1e9-1f1ea", shortname: ":flag-de:", code_decimal: "&#127465;&#127466;", category: "f", emoji_order: "2245"
        }
        , {
            name: "flag-dg", unicode: "1f1e9-1f1ec", shortname: ":flag-dg:", code_decimal: "&#127465;&#127468;", category: "f", emoji_order: "2246"
        }
        , {
            name: "flag-dj", unicode: "1f1e9-1f1ef", shortname: ":flag-dj:", code_decimal: "&#127465;&#127471;", category: "f", emoji_order: "2247"
        }
        , {
            name: "flag-dk", unicode: "1f1e9-1f1f0", shortname: ":flag-dk:", code_decimal: "&#127465;&#127472;", category: "f", emoji_order: "2248"
        }
        , {
            name: "flag-dm", unicode: "1f1e9-1f1f2", shortname: ":flag-dm:", code_decimal: "&#127465;&#127474;", category: "f", emoji_order: "2249"
        }
        , {
            name: "flag-do", unicode: "1f1e9-1f1f4", shortname: ":flag-do:", code_decimal: "&#127465;&#127476;", category: "f", emoji_order: "2250"
        }
        , {
            name: "flag-dz", unicode: "1f1e9-1f1ff", shortname: ":flag-dz:", code_decimal: "&#127465;&#127487;", category: "f", emoji_order: "2251"
        }
        , {
            name: "flag-ea", unicode: "1f1ea-1f1e6", shortname: ":flag-ea:", code_decimal: "&#127466;&#127462;", category: "f", emoji_order: "2252"
        }
        , {
            name: "flag-ec", unicode: "1f1ea-1f1e8", shortname: ":flag-ec:", code_decimal: "&#127466;&#127464;", category: "f", emoji_order: "2253"
        }
        , {
            name: "flag-ee", unicode: "1f1ea-1f1ea", shortname: ":flag-ee:", code_decimal: "&#127466;&#127466;", category: "f", emoji_order: "2254"
        }
        , {
            name: "flag-eg", unicode: "1f1ea-1f1ec", shortname: ":flag-eg:", code_decimal: "&#127466;&#127468;", category: "f", emoji_order: "2255"
        }
        , {
            name: "flag-eh", unicode: "1f1ea-1f1ed", shortname: ":flag-eh:", code_decimal: "&#127466;&#127469;", category: "f", emoji_order: "2256"
        }
        , {
            name: "flag-er", unicode: "1f1ea-1f1f7", shortname: ":flag-er:", code_decimal: "&#127466;&#127479;", category: "f", emoji_order: "2257"
        }
        , {
            name: "flag-es", unicode: "1f1ea-1f1f8", shortname: ":flag-es:", code_decimal: "&#127466;&#127480;", category: "f", emoji_order: "2258"
        }
        , {
            name: "flag-et", unicode: "1f1ea-1f1f9", shortname: ":flag-et:", code_decimal: "&#127466;&#127481;", category: "f", emoji_order: "2259"
        }
        , {
            name: "flag-eu", unicode: "1f1ea-1f1fa", shortname: ":flag-eu:", code_decimal: "&#127466;&#127482;", category: "f", emoji_order: "2260"
        }
        , {
            name: "flag-fi", unicode: "1f1eb-1f1ee", shortname: ":flag-fi:", code_decimal: "&#127467;&#127470;", category: "f", emoji_order: "2261"
        }
        , {
            name: "flag-fj", unicode: "1f1eb-1f1ef", shortname: ":flag-fj:", code_decimal: "&#127467;&#127471;", category: "f", emoji_order: "2262"
        }
        , {
            name: "flag-fk", unicode: "1f1eb-1f1f0", shortname: ":flag-fk:", code_decimal: "&#127467;&#127472;", category: "f", emoji_order: "2263"
        }
        , {
            name: "flag-fm", unicode: "1f1eb-1f1f2", shortname: ":flag-fm:", code_decimal: "&#127467;&#127474;", category: "f", emoji_order: "2264"
        }
        , {
            name: "flag-fo", unicode: "1f1eb-1f1f4", shortname: ":flag-fo:", code_decimal: "&#127467;&#127476;", category: "f", emoji_order: "2265"
        }
        , {
            name: "flag-fr", unicode: "1f1eb-1f1f7", shortname: ":flag-fr:", code_decimal: "&#127467;&#127479;", category: "f", emoji_order: "2266"
        }
        , {
            name: "flag-ga", unicode: "1f1ec-1f1e6", shortname: ":flag-ga:", code_decimal: "&#127468;&#127462;", category: "f", emoji_order: "2267"
        }
        , {
            name: "flag-gb", unicode: "1f1ec-1f1e7", shortname: ":flag-gb:", code_decimal: "&#127468;&#127463;", category: "f", emoji_order: "2268"
        }
        , {
            name: "flag-gd", unicode: "1f1ec-1f1e9", shortname: ":flag-gd:", code_decimal: "&#127468;&#127465;", category: "f", emoji_order: "2269"
        }
        , {
            name: "flag-ge", unicode: "1f1ec-1f1ea", shortname: ":flag-ge:", code_decimal: "&#127468;&#127466;", category: "f", emoji_order: "2270"
        }
        , {
            name: "flag-gf", unicode: "1f1ec-1f1eb", shortname: ":flag-gf:", code_decimal: "&#127468;&#127467;", category: "f", emoji_order: "2271"
        }
        , {
            name: "flag-gg", unicode: "1f1ec-1f1ec", shortname: ":flag-gg:", code_decimal: "&#127468;&#127468;", category: "f", emoji_order: "2272"
        }
        , {
            name: "flag-gh", unicode: "1f1ec-1f1ed", shortname: ":flag-gh:", code_decimal: "&#127468;&#127469;", category: "f", emoji_order: "2273"
        }
        , {
            name: "flag-gi", unicode: "1f1ec-1f1ee", shortname: ":flag-gi:", code_decimal: "&#127468;&#127470;", category: "f", emoji_order: "2274"
        }
        , {
            name: "flag-gl", unicode: "1f1ec-1f1f1", shortname: ":flag-gl:", code_decimal: "&#127468;&#127473;", category: "f", emoji_order: "2275"
        }
        , {
            name: "flag-gm", unicode: "1f1ec-1f1f2", shortname: ":flag-gm:", code_decimal: "&#127468;&#127474;", category: "f", emoji_order: "2276"
        }
        , {
            name: "flag-gn", unicode: "1f1ec-1f1f3", shortname: ":flag-gn:", code_decimal: "&#127468;&#127475;", category: "f", emoji_order: "2277"
        }
        , {
            name: "flag-gp", unicode: "1f1ec-1f1f5", shortname: ":flag-gp:", code_decimal: "&#127468;&#127477;", category: "f", emoji_order: "2278"
        }
        , {
            name: "flag-gq", unicode: "1f1ec-1f1f6", shortname: ":flag-gq:", code_decimal: "&#127468;&#127478;", category: "f", emoji_order: "2279"
        }
        , {
            name: "flag-gr", unicode: "1f1ec-1f1f7", shortname: ":flag-gr:", code_decimal: "&#127468;&#127479;", category: "f", emoji_order: "2280"
        }
        , {
            name: "flag-gs", unicode: "1f1ec-1f1f8", shortname: ":flag-gs:", code_decimal: "&#127468;&#127480;", category: "f", emoji_order: "2281"
        }
        , {
            name: "flag-gt", unicode: "1f1ec-1f1f9", shortname: ":flag-gt:", code_decimal: "&#127468;&#127481;", category: "f", emoji_order: "2282"
        }
        , {
            name: "flag-gu", unicode: "1f1ec-1f1fa", shortname: ":flag-gu:", code_decimal: "&#127468;&#127482;", category: "f", emoji_order: "2283"
        }
        , {
            name: "flag-gw", unicode: "1f1ec-1f1fc", shortname: ":flag-gw:", code_decimal: "&#127468;&#127484;", category: "f", emoji_order: "2284"
        }
        , {
            name: "flag-gy", unicode: "1f1ec-1f1fe", shortname: ":flag-gy:", code_decimal: "&#127468;&#127486;", category: "f", emoji_order: "2285"
        }
        , {
            name: "flag-hk", unicode: "1f1ed-1f1f0", shortname: ":flag-hk:", code_decimal: "&#127469;&#127472;", category: "f", emoji_order: "2286"
        }
        , {
            name: "flag-hm", unicode: "1f1ed-1f1f2", shortname: ":flag-hm:", code_decimal: "&#127469;&#127474;", category: "f", emoji_order: "2287"
        }
        , {
            name: "flag-hn", unicode: "1f1ed-1f1f3", shortname: ":flag-hn:", code_decimal: "&#127469;&#127475;", category: "f", emoji_order: "2288"
        }
        , {
            name: "flag-hr", unicode: "1f1ed-1f1f7", shortname: ":flag-hr:", code_decimal: "&#127469;&#127479;", category: "f", emoji_order: "2289"
        }
        , {
            name: "flag-ht", unicode: "1f1ed-1f1f9", shortname: ":flag-ht:", code_decimal: "&#127469;&#127481;", category: "f", emoji_order: "2290"
        }
        , {
            name: "flag-hu", unicode: "1f1ed-1f1fa", shortname: ":flag-hu:", code_decimal: "&#127469;&#127482;", category: "f", emoji_order: "2291"
        }
        , {
            name: "flag-ic", unicode: "1f1ee-1f1e8", shortname: ":flag-ic:", code_decimal: "&#127470;&#127464;", category: "f", emoji_order: "2292"
        }
        , {
            name: "flag-id", unicode: "1f1ee-1f1e9", shortname: ":flag-id:", code_decimal: "&#127470;&#127465;", category: "f", emoji_order: "2293"
        }
        , {
            name: "flag-ie", unicode: "1f1ee-1f1ea", shortname: ":flag-ie:", code_decimal: "&#127470;&#127466;", category: "f", emoji_order: "2294"
        }
        , {
            name: "flag-il", unicode: "1f1ee-1f1f1", shortname: ":flag-il:", code_decimal: "&#127470;&#127473;", category: "f", emoji_order: "2295"
        }
        , {
            name: "flag-im", unicode: "1f1ee-1f1f2", shortname: ":flag-im:", code_decimal: "&#127470;&#127474;", category: "f", emoji_order: "2296"
        }
        , {
            name: "flag-in", unicode: "1f1ee-1f1f3", shortname: ":flag-in:", code_decimal: "&#127470;&#127475;", category: "f", emoji_order: "2297"
        }
        , {
            name: "flag-io", unicode: "1f1ee-1f1f4", shortname: ":flag-io:", code_decimal: "&#127470;&#127476;", category: "f", emoji_order: "2298"
        }
        , {
            name: "flag-iq", unicode: "1f1ee-1f1f6", shortname: ":flag-iq:", code_decimal: "&#127470;&#127478;", category: "f", emoji_order: "2299"
        }
        , {
            name: "flag-ir", unicode: "1f1ee-1f1f7", shortname: ":flag-ir:", code_decimal: "&#127470;&#127479;", category: "f", emoji_order: "2300"
        }
        , {
            name: "flag-is", unicode: "1f1ee-1f1f8", shortname: ":flag-is:", code_decimal: "&#127470;&#127480;", category: "f", emoji_order: "2301"
        }
        , {
            name: "flag-it", unicode: "1f1ee-1f1f9", shortname: ":flag-it:", code_decimal: "&#127470;&#127481;", category: "f", emoji_order: "2302"
        }
        , {
            name: "flag-je", unicode: "1f1ef-1f1ea", shortname: ":flag-je:", code_decimal: "&#127471;&#127466;", category: "f", emoji_order: "2303"
        }
        , {
            name: "flag-jm", unicode: "1f1ef-1f1f2", shortname: ":flag-jm:", code_decimal: "&#127471;&#127474;", category: "f", emoji_order: "2304"
        }
        , {
            name: "flag-jo", unicode: "1f1ef-1f1f4", shortname: ":flag-jo:", code_decimal: "&#127471;&#127476;", category: "f", emoji_order: "2305"
        }
        , {
            name: "flag-jp", unicode: "1f1ef-1f1f5", shortname: ":flag-jp:", code_decimal: "&#127471;&#127477;", category: "f", emoji_order: "2306"
        }
        , {
            name: "flag-ke", unicode: "1f1f0-1f1ea", shortname: ":flag-ke:", code_decimal: "&#127472;&#127466;", category: "f", emoji_order: "2307"
        }
        , {
            name: "flag-kg", unicode: "1f1f0-1f1ec", shortname: ":flag-kg:", code_decimal: "&#127472;&#127468;", category: "f", emoji_order: "2308"
        }
        , {
            name: "flag-kh", unicode: "1f1f0-1f1ed", shortname: ":flag-kh:", code_decimal: "&#127472;&#127469;", category: "f", emoji_order: "2309"
        }
        , {
            name: "flag-ki", unicode: "1f1f0-1f1ee", shortname: ":flag-ki:", code_decimal: "&#127472;&#127470;", category: "f", emoji_order: "2310"
        }
        , {
            name: "flag-km", unicode: "1f1f0-1f1f2", shortname: ":flag-km:", code_decimal: "&#127472;&#127474;", category: "f", emoji_order: "2311"
        }
        , {
            name: "flag-kn", unicode: "1f1f0-1f1f3", shortname: ":flag-kn:", code_decimal: "&#127472;&#127475;", category: "f", emoji_order: "2312"
        }
        , {
            name: "flag-kp", unicode: "1f1f0-1f1f5", shortname: ":flag-kp:", code_decimal: "&#127472;&#127477;", category: "f", emoji_order: "2313"
        }
        , {
            name: "flag-kr", unicode: "1f1f0-1f1f7", shortname: ":flag-kr:", code_decimal: "&#127472;&#127479;", category: "f", emoji_order: "2314"
        }
        , {
            name: "flag-kw", unicode: "1f1f0-1f1fc", shortname: ":flag-kw:", code_decimal: "&#127472;&#127484;", category: "f", emoji_order: "2315"
        }
        , {
            name: "flag-ky", unicode: "1f1f0-1f1fe", shortname: ":flag-ky:", code_decimal: "&#127472;&#127486;", category: "f", emoji_order: "2316"
        }
        , {
            name: "flag-kz", unicode: "1f1f0-1f1ff", shortname: ":flag-kz:", code_decimal: "&#127472;&#127487;", category: "f", emoji_order: "2317"
        }
        , {
            name: "flag-la", unicode: "1f1f1-1f1e6", shortname: ":flag-la:", code_decimal: "&#127473;&#127462;", category: "f", emoji_order: "2318"
        }
        , {
            name: "flag-lb", unicode: "1f1f1-1f1e7", shortname: ":flag-lb:", code_decimal: "&#127473;&#127463;", category: "f", emoji_order: "2319"
        }
        , {
            name: "flag-lc", unicode: "1f1f1-1f1e8", shortname: ":flag-lc:", code_decimal: "&#127473;&#127464;", category: "f", emoji_order: "2320"
        }
        , {
            name: "flag-li", unicode: "1f1f1-1f1ee", shortname: ":flag-li:", code_decimal: "&#127473;&#127470;", category: "f", emoji_order: "2321"
        }
        , {
            name: "flag-lk", unicode: "1f1f1-1f1f0", shortname: ":flag-lk:", code_decimal: "&#127473;&#127472;", category: "f", emoji_order: "2322"
        }
        , {
            name: "flag-lr", unicode: "1f1f1-1f1f7", shortname: ":flag-lr:", code_decimal: "&#127473;&#127479;", category: "f", emoji_order: "2323"
        }
        , {
            name: "flag-ls", unicode: "1f1f1-1f1f8", shortname: ":flag-ls:", code_decimal: "&#127473;&#127480;", category: "f", emoji_order: "2324"
        }
        , {
            name: "flag-lt", unicode: "1f1f1-1f1f9", shortname: ":flag-lt:", code_decimal: "&#127473;&#127481;", category: "f", emoji_order: "2325"
        }
        , {
            name: "flag-lu", unicode: "1f1f1-1f1fa", shortname: ":flag-lu:", code_decimal: "&#127473;&#127482;", category: "f", emoji_order: "2326"
        }
        , {
            name: "flag-lv", unicode: "1f1f1-1f1fb", shortname: ":flag-lv:", code_decimal: "&#127473;&#127483;", category: "f", emoji_order: "2327"
        }
        , {
            name: "flag-ly", unicode: "1f1f1-1f1fe", shortname: ":flag-ly:", code_decimal: "&#127473;&#127486;", category: "f", emoji_order: "2328"
        }
        , {
            name: "flag-ma", unicode: "1f1f2-1f1e6", shortname: ":flag-ma:", code_decimal: "&#127474;&#127462;", category: "f", emoji_order: "2329"
        }
        , {
            name: "flag-mc", unicode: "1f1f2-1f1e8", shortname: ":flag-mc:", code_decimal: "&#127474;&#127464;", category: "f", emoji_order: "2330"
        }
        , {
            name: "flag-md", unicode: "1f1f2-1f1e9", shortname: ":flag-md:", code_decimal: "&#127474;&#127465;", category: "f", emoji_order: "2331"
        }
        , {
            name: "flag-me", unicode: "1f1f2-1f1ea", shortname: ":flag-me:", code_decimal: "&#127474;&#127466;", category: "f", emoji_order: "2332"
        }
        , {
            name: "flag-mf", unicode: "1f1f2-1f1eb", shortname: ":flag-mf:", code_decimal: "&#127474;&#127467;", category: "f", emoji_order: "2333"
        }
        , {
            name: "flag-mg", unicode: "1f1f2-1f1ec", shortname: ":flag-mg:", code_decimal: "&#127474;&#127468;", category: "f", emoji_order: "2334"
        }
        , {
            name: "flag-mh", unicode: "1f1f2-1f1ed", shortname: ":flag-mh:", code_decimal: "&#127474;&#127469;", category: "f", emoji_order: "2335"
        }
        , {
            name: "flag-mk", unicode: "1f1f2-1f1f0", shortname: ":flag-mk:", code_decimal: "&#127474;&#127472;", category: "f", emoji_order: "2336"
        }
        , {
            name: "flag-ml", unicode: "1f1f2-1f1f1", shortname: ":flag-ml:", code_decimal: "&#127474;&#127473;", category: "f", emoji_order: "2337"
        }
        , {
            name: "flag-mm", unicode: "1f1f2-1f1f2", shortname: ":flag-mm:", code_decimal: "&#127474;&#127474;", category: "f", emoji_order: "2338"
        }
        , {
            name: "flag-mn", unicode: "1f1f2-1f1f3", shortname: ":flag-mn:", code_decimal: "&#127474;&#127475;", category: "f", emoji_order: "2339"
        }
        , {
            name: "flag-mo", unicode: "1f1f2-1f1f4", shortname: ":flag-mo:", code_decimal: "&#127474;&#127476;", category: "f", emoji_order: "2340"
        }
        , {
            name: "flag-mp", unicode: "1f1f2-1f1f5", shortname: ":flag-mp:", code_decimal: "&#127474;&#127477;", category: "f", emoji_order: "2341"
        }
        , {
            name: "flag-mq", unicode: "1f1f2-1f1f6", shortname: ":flag-mq:", code_decimal: "&#127474;&#127478;", category: "f", emoji_order: "2342"
        }
        , {
            name: "flag-mr", unicode: "1f1f2-1f1f7", shortname: ":flag-mr:", code_decimal: "&#127474;&#127479;", category: "f", emoji_order: "2343"
        }
        , {
            name: "flag-ms", unicode: "1f1f2-1f1f8", shortname: ":flag-ms:", code_decimal: "&#127474;&#127480;", category: "f", emoji_order: "2344"
        }
        , {
            name: "flag-mt", unicode: "1f1f2-1f1f9", shortname: ":flag-mt:", code_decimal: "&#127474;&#127481;", category: "f", emoji_order: "2345"
        }
        , {
            name: "flag-mu", unicode: "1f1f2-1f1fa", shortname: ":flag-mu:", code_decimal: "&#127474;&#127482;", category: "f", emoji_order: "2346"
        }
        , {
            name: "flag-mv", unicode: "1f1f2-1f1fb", shortname: ":flag-mv:", code_decimal: "&#127474;&#127483;", category: "f", emoji_order: "2347"
        }
        , {
            name: "flag-mw", unicode: "1f1f2-1f1fc", shortname: ":flag-mw:", code_decimal: "&#127474;&#127484;", category: "f", emoji_order: "2348"
        }
        , {
            name: "flag-mx", unicode: "1f1f2-1f1fd", shortname: ":flag-mx:", code_decimal: "&#127474;&#127485;", category: "f", emoji_order: "2349"
        }
        , {
            name: "flag-my", unicode: "1f1f2-1f1fe", shortname: ":flag-my:", code_decimal: "&#127474;&#127486;", category: "f", emoji_order: "2350"
        }
        , {
            name: "flag-mz", unicode: "1f1f2-1f1ff", shortname: ":flag-mz:", code_decimal: "&#127474;&#127487;", category: "f", emoji_order: "2351"
        }
        , {
            name: "flag-na", unicode: "1f1f3-1f1e6", shortname: ":flag-na:", code_decimal: "&#127475;&#127462;", category: "f", emoji_order: "2352"
        }
        , {
            name: "flag-nc", unicode: "1f1f3-1f1e8", shortname: ":flag-nc:", code_decimal: "&#127475;&#127464;", category: "f", emoji_order: "2353"
        }
        , {
            name: "flag-ne", unicode: "1f1f3-1f1ea", shortname: ":flag-ne:", code_decimal: "&#127475;&#127466;", category: "f", emoji_order: "2354"
        }
        , {
            name: "flag-nf", unicode: "1f1f3-1f1eb", shortname: ":flag-nf:", code_decimal: "&#127475;&#127467;", category: "f", emoji_order: "2355"
        }
        , {
            name: "flag-ng", unicode: "1f1f3-1f1ec", shortname: ":flag-ng:", code_decimal: "&#127475;&#127468;", category: "f", emoji_order: "2356"
        }
        , {
            name: "flag-ni", unicode: "1f1f3-1f1ee", shortname: ":flag-ni:", code_decimal: "&#127475;&#127470;", category: "f", emoji_order: "2357"
        }
        , {
            name: "flag-nl", unicode: "1f1f3-1f1f1", shortname: ":flag-nl:", code_decimal: "&#127475;&#127473;", category: "f", emoji_order: "2358"
        }
        , {
            name: "flag-no", unicode: "1f1f3-1f1f4", shortname: ":flag-no:", code_decimal: "&#127475;&#127476;", category: "f", emoji_order: "2359"
        }
        , {
            name: "flag-np", unicode: "1f1f3-1f1f5", shortname: ":flag-np:", code_decimal: "&#127475;&#127477;", category: "f", emoji_order: "2360"
        }
        , {
            name: "flag-nr", unicode: "1f1f3-1f1f7", shortname: ":flag-nr:", code_decimal: "&#127475;&#127479;", category: "f", emoji_order: "2361"
        }
        , {
            name: "flag-nu", unicode: "1f1f3-1f1fa", shortname: ":flag-nu:", code_decimal: "&#127475;&#127482;", category: "f", emoji_order: "2362"
        }
        , {
            name: "flag-nz", unicode: "1f1f3-1f1ff", shortname: ":flag-nz:", code_decimal: "&#127475;&#127487;", category: "f", emoji_order: "2363"
        }
        , {
            name: "flag-om", unicode: "1f1f4-1f1f2", shortname: ":flag-om:", code_decimal: "&#127476;&#127474;", category: "f", emoji_order: "2364"
        }
        , {
            name: "flag-pa", unicode: "1f1f5-1f1e6", shortname: ":flag-pa:", code_decimal: "&#127477;&#127462;", category: "f", emoji_order: "2365"
        }
        , {
            name: "flag-pe", unicode: "1f1f5-1f1ea", shortname: ":flag-pe:", code_decimal: "&#127477;&#127466;", category: "f", emoji_order: "2366"
        }
        , {
            name: "flag-pf", unicode: "1f1f5-1f1eb", shortname: ":flag-pf:", code_decimal: "&#127477;&#127467;", category: "f", emoji_order: "2367"
        }
        , {
            name: "flag-pg", unicode: "1f1f5-1f1ec", shortname: ":flag-pg:", code_decimal: "&#127477;&#127468;", category: "f", emoji_order: "2368"
        }
        , {
            name: "flag-ph", unicode: "1f1f5-1f1ed", shortname: ":flag-ph:", code_decimal: "&#127477;&#127469;", category: "f", emoji_order: "2369"
        }
        , {
            name: "flag-pk", unicode: "1f1f5-1f1f0", shortname: ":flag-pk:", code_decimal: "&#127477;&#127472;", category: "f", emoji_order: "2370"
        }
        , {
            name: "flag-pl", unicode: "1f1f5-1f1f1", shortname: ":flag-pl:", code_decimal: "&#127477;&#127473;", category: "f", emoji_order: "2371"
        }
        , {
            name: "flag-pm", unicode: "1f1f5-1f1f2", shortname: ":flag-pm:", code_decimal: "&#127477;&#127474;", category: "f", emoji_order: "2372"
        }
        , {
            name: "flag-pn", unicode: "1f1f5-1f1f3", shortname: ":flag-pn:", code_decimal: "&#127477;&#127475;", category: "f", emoji_order: "2373"
        }
        , {
            name: "flag-pr", unicode: "1f1f5-1f1f7", shortname: ":flag-pr:", code_decimal: "&#127477;&#127479;", category: "f", emoji_order: "2374"
        }
        , {
            name: "flag-ps", unicode: "1f1f5-1f1f8", shortname: ":flag-ps:", code_decimal: "&#127477;&#127480;", category: "f", emoji_order: "2375"
        }
        , {
            name: "flag-pt", unicode: "1f1f5-1f1f9", shortname: ":flag-pt:", code_decimal: "&#127477;&#127481;", category: "f", emoji_order: "2376"
        }
        , {
            name: "flag-pw", unicode: "1f1f5-1f1fc", shortname: ":flag-pw:", code_decimal: "&#127477;&#127484;", category: "f", emoji_order: "2377"
        }
        , {
            name: "flag-py", unicode: "1f1f5-1f1fe", shortname: ":flag-py:", code_decimal: "&#127477;&#127486;", category: "f", emoji_order: "2378"
        }
        , {
            name: "flag-qa", unicode: "1f1f6-1f1e6", shortname: ":flag-qa:", code_decimal: "&#127478;&#127462;", category: "f", emoji_order: "2379"
        }
        , {
            name: "flag-re", unicode: "1f1f7-1f1ea", shortname: ":flag-re:", code_decimal: "&#127479;&#127466;", category: "f", emoji_order: "2380"
        }
        , {
            name: "flag-ro", unicode: "1f1f7-1f1f4", shortname: ":flag-ro:", code_decimal: "&#127479;&#127476;", category: "f", emoji_order: "2381"
        }
        , {
            name: "flag-rs", unicode: "1f1f7-1f1f8", shortname: ":flag-rs:", code_decimal: "&#127479;&#127480;", category: "f", emoji_order: "2382"
        }
        , {
            name: "flag-ru", unicode: "1f1f7-1f1fa", shortname: ":flag-ru:", code_decimal: "&#127479;&#127482;", category: "f", emoji_order: "2383"
        }
        , {
            name: "flag-rw", unicode: "1f1f7-1f1fc", shortname: ":flag-rw:", code_decimal: "&#127479;&#127484;", category: "f", emoji_order: "2384"
        }
        , {
            name: "flag-sa", unicode: "1f1f8-1f1e6", shortname: ":flag-sa:", code_decimal: "&#127480;&#127462;", category: "f", emoji_order: "2385"
        }
        , {
            name: "flag-sb", unicode: "1f1f8-1f1e7", shortname: ":flag-sb:", code_decimal: "&#127480;&#127463;", category: "f", emoji_order: "2386"
        }
        , {
            name: "flag-sc", unicode: "1f1f8-1f1e8", shortname: ":flag-sc:", code_decimal: "&#127480;&#127464;", category: "f", emoji_order: "2387"
        }
        , {
            name: "flag-sd", unicode: "1f1f8-1f1e9", shortname: ":flag-sd:", code_decimal: "&#127480;&#127465;", category: "f", emoji_order: "2388"
        }
        , {
            name: "flag-se", unicode: "1f1f8-1f1ea", shortname: ":flag-se:", code_decimal: "&#127480;&#127466;", category: "f", emoji_order: "2389"
        }
        , {
            name: "flag-sg", unicode: "1f1f8-1f1ec", shortname: ":flag-sg:", code_decimal: "&#127480;&#127468;", category: "f", emoji_order: "2390"
        }
        , {
            name: "flag-sh", unicode: "1f1f8-1f1ed", shortname: ":flag-sh:", code_decimal: "&#127480;&#127469;", category: "f", emoji_order: "2391"
        }
        , {
            name: "flag-si", unicode: "1f1f8-1f1ee", shortname: ":flag-si:", code_decimal: "&#127480;&#127470;", category: "f", emoji_order: "2392"
        }
        , {
            name: "flag-sj", unicode: "1f1f8-1f1ef", shortname: ":flag-sj:", code_decimal: "&#127480;&#127471;", category: "f", emoji_order: "2393"
        }
        , {
            name: "flag-sk", unicode: "1f1f8-1f1f0", shortname: ":flag-sk:", code_decimal: "&#127480;&#127472;", category: "f", emoji_order: "2394"
        }
        , {
            name: "flag-sl", unicode: "1f1f8-1f1f1", shortname: ":flag-sl:", code_decimal: "&#127480;&#127473;", category: "f", emoji_order: "2395"
        }
        , {
            name: "flag-sm", unicode: "1f1f8-1f1f2", shortname: ":flag-sm:", code_decimal: "&#127480;&#127474;", category: "f", emoji_order: "2396"
        }
        , {
            name: "flag-sn", unicode: "1f1f8-1f1f3", shortname: ":flag-sn:", code_decimal: "&#127480;&#127475;", category: "f", emoji_order: "2397"
        }
        , {
            name: "flag-so", unicode: "1f1f8-1f1f4", shortname: ":flag-so:", code_decimal: "&#127480;&#127476;", category: "f", emoji_order: "2398"
        }
        , {
            name: "flag-sr", unicode: "1f1f8-1f1f7", shortname: ":flag-sr:", code_decimal: "&#127480;&#127479;", category: "f", emoji_order: "2399"
        }
        , {
            name: "flag-ss", unicode: "1f1f8-1f1f8", shortname: ":flag-ss:", code_decimal: "&#127480;&#127480;", category: "f", emoji_order: "2400"
        }
        , {
            name: "flag-st", unicode: "1f1f8-1f1f9", shortname: ":flag-st:", code_decimal: "&#127480;&#127481;", category: "f", emoji_order: "2401"
        }
        , {
            name: "flag-sv", unicode: "1f1f8-1f1fb", shortname: ":flag-sv:", code_decimal: "&#127480;&#127483;", category: "f", emoji_order: "2402"
        }
        , {
            name: "flag-sx", unicode: "1f1f8-1f1fd", shortname: ":flag-sx:", code_decimal: "&#127480;&#127485;", category: "f", emoji_order: "2403"
        }
        , {
            name: "flag-sy", unicode: "1f1f8-1f1fe", shortname: ":flag-sy:", code_decimal: "&#127480;&#127486;", category: "f", emoji_order: "2404"
        }
        , {
            name: "flag-sz", unicode: "1f1f8-1f1ff", shortname: ":flag-sz:", code_decimal: "&#127480;&#127487;", category: "f", emoji_order: "2405"
        }
        , {
            name: "flag-ta", unicode: "1f1f9-1f1e6", shortname: ":flag-ta:", code_decimal: "&#127481;&#127462;", category: "f", emoji_order: "2406"
        }
        , {
            name: "flag-tc", unicode: "1f1f9-1f1e8", shortname: ":flag-tc:", code_decimal: "&#127481;&#127464;", category: "f", emoji_order: "2407"
        }
        , {
            name: "flag-td", unicode: "1f1f9-1f1e9", shortname: ":flag-td:", code_decimal: "&#127481;&#127465;", category: "f", emoji_order: "2408"
        }
        , {
            name: "flag-tf", unicode: "1f1f9-1f1eb", shortname: ":flag-tf:", code_decimal: "&#127481;&#127467;", category: "f", emoji_order: "2409"
        }
        , {
            name: "flag-tg", unicode: "1f1f9-1f1ec", shortname: ":flag-tg:", code_decimal: "&#127481;&#127468;", category: "f", emoji_order: "2410"
        }
        , {
            name: "flag-th", unicode: "1f1f9-1f1ed", shortname: ":flag-th:", code_decimal: "&#127481;&#127469;", category: "f", emoji_order: "2411"
        }
        , {
            name: "flag-tj", unicode: "1f1f9-1f1ef", shortname: ":flag-tj:", code_decimal: "&#127481;&#127471;", category: "f", emoji_order: "2412"
        }
        , {
            name: "flag-tk", unicode: "1f1f9-1f1f0", shortname: ":flag-tk:", code_decimal: "&#127481;&#127472;", category: "f", emoji_order: "2413"
        }
        , {
            name: "flag-tl", unicode: "1f1f9-1f1f1", shortname: ":flag-tl:", code_decimal: "&#127481;&#127473;", category: "f", emoji_order: "2414"
        }
        , {
            name: "flag-tm", unicode: "1f1f9-1f1f2", shortname: ":flag-tm:", code_decimal: "&#127481;&#127474;", category: "f", emoji_order: "2415"
        }
        , {
            name: "flag-tn", unicode: "1f1f9-1f1f3", shortname: ":flag-tn:", code_decimal: "&#127481;&#127475;", category: "f", emoji_order: "2416"
        }
        , {
            name: "flag-to", unicode: "1f1f9-1f1f4", shortname: ":flag-to:", code_decimal: "&#127481;&#127476;", category: "f", emoji_order: "2417"
        }
        , {
            name: "flag-tr", unicode: "1f1f9-1f1f7", shortname: ":flag-tr:", code_decimal: "&#127481;&#127479;", category: "f", emoji_order: "2418"
        }
        , {
            name: "flag-tt", unicode: "1f1f9-1f1f9", shortname: ":flag-tt:", code_decimal: "&#127481;&#127481;", category: "f", emoji_order: "2419"
        }
        , {
            name: "flag-tv", unicode: "1f1f9-1f1fb", shortname: ":flag-tv:", code_decimal: "&#127481;&#127483;", category: "f", emoji_order: "2420"
        }
        , {
            name: "flag-tw", unicode: "1f1f9-1f1fc", shortname: ":flag-tw:", code_decimal: "&#127481;&#127484;", category: "f", emoji_order: "2421"
        }
        , {
            name: "flag-tz", unicode: "1f1f9-1f1ff", shortname: ":flag-tz:", code_decimal: "&#127481;&#127487;", category: "f", emoji_order: "2422"
        }
        , {
            name: "flag-ua", unicode: "1f1fa-1f1e6", shortname: ":flag-ua:", code_decimal: "&#127482;&#127462;", category: "f", emoji_order: "2423"
        }
        , {
            name: "flag-ug", unicode: "1f1fa-1f1ec", shortname: ":flag-ug:", code_decimal: "&#127482;&#127468;", category: "f", emoji_order: "2424"
        }
        , {
            name: "flag-um", unicode: "1f1fa-1f1f2", shortname: ":flag-um:", code_decimal: "&#127482;&#127474;", category: "f", emoji_order: "2425"
        }
        , {
            name: "flag-us", unicode: "1f1fa-1f1f8", shortname: ":flag-us:", code_decimal: "&#127482;&#127480;", category: "f", emoji_order: "2427"
        }
        , {
            name: "flag-uy", unicode: "1f1fa-1f1fe", shortname: ":flag-uy:", code_decimal: "&#127482;&#127486;", category: "f", emoji_order: "2428"
        }
        , {
            name: "flag-uz", unicode: "1f1fa-1f1ff", shortname: ":flag-uz:", code_decimal: "&#127482;&#127487;", category: "f", emoji_order: "2429"
        }
        , {
            name: "flag-va", unicode: "1f1fb-1f1e6", shortname: ":flag-va:", code_decimal: "&#127483;&#127462;", category: "f", emoji_order: "2430"
        }
        , {
            name: "flag-vc", unicode: "1f1fb-1f1e8", shortname: ":flag-vc:", code_decimal: "&#127483;&#127464;", category: "f", emoji_order: "2431"
        }
        , {
            name: "flag-ve", unicode: "1f1fb-1f1ea", shortname: ":flag-ve:", code_decimal: "&#127483;&#127466;", category: "f", emoji_order: "2432"
        }
        , {
            name: "flag-vg", unicode: "1f1fb-1f1ec", shortname: ":flag-vg:", code_decimal: "&#127483;&#127468;", category: "f", emoji_order: "2433"
        }
        , {
            name: "flag-vi", unicode: "1f1fb-1f1ee", shortname: ":flag-vi:", code_decimal: "&#127483;&#127470;", category: "f", emoji_order: "2434"
        }
        , {
            name: "flag-vn", unicode: "1f1fb-1f1f3", shortname: ":flag-vn:", code_decimal: "&#127483;&#127475;", category: "f", emoji_order: "2435"
        }
        , {
            name: "flag-vu", unicode: "1f1fb-1f1fa", shortname: ":flag_vu:", code_decimal: "&#127483;&#127482;", category: "f", emoji_order: "2436"
        }
        , {
            name: "flag-wf", unicode: "1f1fc-1f1eb", shortname: ":flag_wf:", code_decimal: "&#127484;&#127467;", category: "f", emoji_order: "2437"
        }
        , {
            name: "flag-ws", unicode: "1f1fc-1f1f8", shortname: ":flag_ws:", code_decimal: "&#127484;&#127480;", category: "f", emoji_order: "2438"
        }
        , {
            name: "flag-xk", unicode: "1f1fd-1f1f0", shortname: ":flag_xk:", code_decimal: "&#127485;&#127472;", category: "f", emoji_order: "2439"
        }
        , {
            name: "flag-ye", unicode: "1f1fe-1f1ea", shortname: ":flag_ye:", code_decimal: "&#127486;&#127466;", category: "f", emoji_order: "2440"
        }
        , {
            name: "flag-yt", unicode: "1f1fe-1f1f9", shortname: ":flag_yt:", code_decimal: "&#127486;&#127481;", category: "f", emoji_order: "2441"
        }
        , {
            name: "flag-za", unicode: "1f1ff-1f1e6", shortname: ":flag_za:", code_decimal: "&#127487;&#127462;", category: "f", emoji_order: "2442"
        }
        , {
            name: "flag-zm", unicode: "1f1ff-1f1f2", shortname: ":flag_zm:", code_decimal: "&#127487;&#127474;", category: "f", emoji_order: "2443"
        }
        , {
            name: "flag-zw", unicode: "1f1ff-1f1fc", shortname: ":flag_zw:", code_decimal: "&#127487;&#127484;", category: "f", emoji_order: "2444"
        }
        ]
    }
    , function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }
        );
        var a=t(n(3)), r=t(n(4)), i=t(n(5)), c=t(n(6));
        function t(e) {
            return e&&e.__esModule?e: {
                default: e
            }
        }
        n(7), window.Quill&&window.Quill.register( {
            "formats/emoji": a.default, "modules/emoji-shortname": r.default, "modules/emoji-toolbar": i.default, "modules/emoji-textarea": c.default
        }
        , !0), o.default= {
            EmojiBlot: a.default, ShortNameEmoji: r.default, ToolbarEmoji: i.default, TextAreaEmoji: c.default
        }
    }
    , function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }
        );
        var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e) {
            return typeof e
        }
        :function(e) {
            return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol": typeof e
        }
        , r=function() {
            function e(e, o) {
                for(var n=0;
                n<o.length;
                n++) {
                    var a=o[n];
                    a.enumerable=a.enumerable||!1, a.configurable=!0, "value"in a&&(a.writable=!0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(o, n, a) {
                return n&&e(o.prototype, n), a&&e(o, a), o
            }
        }
        (), i=function e(o, n, a) {
            null===o&&(o=Function.prototype);
            var r=Object.getOwnPropertyDescriptor(o, n);
            if(void 0===r) {
                var i=Object.getPrototypeOf(o);
                return null===i?void 0: e(i, n, a)
            }
            if("value"in r)return r.value;
            var c=r.get;
            return void 0!==c?c.call(a):void 0
        }
        , c=window.Quill.import("blots/embed"), t=function(e) {
            function o() {
                return function(e, o) {
                    if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")
                }
                (this, o), function(e, o) {
                    if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return!o||"object"!=typeof o&&"function"!=typeof o?e: o
                }
                (this, (o.__proto__||Object.getPrototypeOf(o)).apply(this, arguments))
            }
            return function(e, o) {
                if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);
                e.prototype=Object.create(o&&o.prototype, {
                    constructor: {
                        value: e, enumerable: !1, writable: !0, configurable: !0
                    }
                }
                ), o&&(Object.setPrototypeOf?Object.setPrototypeOf(e, o):e.__proto__=o)
            }
            (o, c), r(o, [ {
                key:"format", value:function(e, n) {
                    "class"===e||"alt"===e?n?this.domNode.setAttribute(e, n): this.domNode.removeAttribute(e, n): i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype), "format", this).call(this, e, n)
                }
            }
            ], [ {
                key:"create", value:function(e) {
                    var n=i(o.__proto__||Object.getPrototypeOf(o), "create", this).call(this);
                    return"object"===(void 0===e?"undefined": a(e))?(n.classList.add("emoji"), n.classList.add("ap"), n.classList.add("ap-"+e.name), n.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="), n.setAttribute("data-resize", "no")): "string"==typeof e&&n.setAttribute("src", e), n
                }
            }
            , {
                key:"formats", value:function(e) {
                    var o= {}
                    ;
                    return e.hasAttribute("class")&&(o.class=e.getAttribute("class")), e.hasAttribute("alt")&&(o.width=e.getAttribute("alt")), o
                }
            }
            , {
                key:"value", value:function(e) {
                    return e.getAttribute("src")
                }
            }
            ]), o
        }
        ();
        t.blotName="emoji", t.tagName="img", o.default=t
    }
    , function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }
        );
        var a=function() {
            function e(e, o) {
                for(var n=0;
                n<o.length;
                n++) {
                    var a=o[n];
                    a.enumerable=a.enumerable||!1, a.configurable=!0, "value"in a&&(a.writable=!0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(o, n, a) {
                return n&&e(o.prototype, n), a&&e(o, a), o
            }
        }
        (), r=c(n(0)), i=c(n(1));
        function c(e) {
            return e&&e.__esModule?e: {
                default: e
            }
        }
        var t=window.Quill.import("delta"), d=window.Quill.import("core/module"), p=function(e) {
            function o(e, n) {
                !function(e, o) {
                    if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")
                }
                (this, o);
                var a=function(e, o) {
                    if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return!o||"object"!=typeof o&&"function"!=typeof o?e: o
                }
                (this, (o.__proto__||Object.getPrototypeOf(o)).call(this, e, n));
                return a.emojiList=n.emojiList, a.fuse=new r.default(n.emojiList, n.fuse), a.quill=e, a.onClose=n.onClose, a.onOpen=n.onOpen, a.container=document.createElement("ul"), a.container.classList.add("emoji_completions"), a.quill.container.appendChild(a.container), a.container.style.position="absolute", a.container.style.display="none", a.onSelectionChange=a.maybeUnfocus.bind(a), a.onTextChange=a.update.bind(a), a.open=!1, a.atIndex=null, a.focusedButton=null, a.isWhiteSpace=function(e) {
                    var o=!1;
                    return/\s/.test(e)&&(o=!0), o
                }
                , e.keyboard.addBinding( {
                    key: 190, shiftKey: !0
                }
                , a.triggerPicker.bind(a)), e.keyboard.addBinding( {
                    key: 186, shiftKey: !0
                }
                , a.triggerPicker.bind(a)), e.keyboard.addBinding( {
                    key: 39, collapsed: !0, format: ["emoji-shortname"]
                }
                , a.handleArrow.bind(a)), e.keyboard.addBinding( {
                    key: 40, collapsed: !0, format: ["emoji-shortname"]
                }
                , a.handleArrow.bind(a)), a
            }
            return function(e, o) {
                if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);
                e.prototype=Object.create(o&&o.prototype, {
                    constructor: {
                        value: e, enumerable: !1, writable: !0, configurable: !0
                    }
                }
                ), o&&(Object.setPrototypeOf?Object.setPrototypeOf(e, o):e.__proto__=o)
            }
            (o, d), a(o, [ {
                key:"triggerPicker", value:function(e, o) {
                    if(this.open)return!0;
                    e.length>0&&this.quill.deleteText(e.index, e.length, Quill.sources.USER), this.quill.insertText(e.index, ":", "emoji-shortname", Quill.sources.USER);
                    var n=this.quill.getBounds(e.index);
                    this.quill.setSelection(e.index+1, Quill.sources.SILENT), this.atIndex=e.index, n.left+250>this.quill.container.offsetWidth?this.container.style.left=n.left-250+"px": this.container.style.left=n.left+"px", this.container.style.top=n.top+n.height+"px", this.open=!0, this.quill.on("text-change", this.onTextChange), this.quill.once("selection-change", this.onSelectionChange), this.update(), this.onOpen&&this.onOpen()
                }
            }
            , {
                key:"handleArrow", value:function() {
                    if(!this.open)return!0;
                    this.buttons[0].classList.remove("emoji-active"), this.buttons[0].focus(), this.buttons.length>1&&this.buttons[1].focus()
                }
            }
            , {
                key:"update", value:function() {
                    var e=this.quill.getSelection().index;
                    if(this.atIndex>=e)return this.close(null);
                    if(this.query=this.quill.getText(this.atIndex+1, e-this.atIndex-1), event||!this.isWhiteSpace(this.query)) {
                        this.query=this.query.trim();
                        var o=this.fuse.search(this.query);
                        o.sort(function(e, o) {
                            return e.emoji_order-o.emoji_order
                        }
                        ), this.query.length<this.options.fuse.minMatchCharLength||0===o.length?this.container.style.display="none":(o.length>15&&(o=o.slice(0, 15)), this.renderCompletions(o))
                    }
                    else this.close(null)
                }
            }
            , {
                key:"maybeUnfocus", value:function() {
                    this.container.querySelector("*:focus")||this.close(null)
                }
            }
            , {
                key:"renderCompletions", value:function(e) {
                    var o=this;
                    if(event) {
                        if("Enter"===event.key||13===event.keyCode)return this.enterEmoji(e[0]), void(this.container.style.display="none");
                        if("Tab"===event.key||9===event.keyCode)return this.quill.disable(), this.buttons[0].classList.remove("emoji-active"), void this.buttons[1].focus()
                    }
                    if(!event) {
                        for(;
                        this.container.firstChild;
                        )this.container.removeChild(this.container.firstChild);
                        var n=Array(e.length);
                        if(this.buttons=n, e.forEach(function(e, a) {
                            var r=m("li", {}
                            , m("button", {
                                type: "button"
                            }
                            , m("span", {
                                className: "emoji ap ap-"+e.name, innerHTML: e.code_decimal
                            }
                            ), m("span", {
                                className: "unmatched"
                            }
                            , e.shortname)));
                            o.container.appendChild(r), n[a]=r.firstChild, n[a].addEventListener("keydown", function(e, a) {
                                return function(r) {
                                    if("ArrowRight"===r.key||39===r.keyCode)r.preventDefault(), n[Math.min(n.length-1, e+1)].focus();
                                    else if("Tab"===r.key||9===r.keyCode) {
                                        if(r.preventDefault(), e+1===n.length)return void n[0].focus();
                                        n[Math.min(n.length-1, e+1)].focus()
                                    }
                                    else"ArrowLeft"===r.key||37===r.keyCode?(r.preventDefault(), n[Math.max(0, e-1)].focus()):"ArrowDown"===r.key||40===r.keyCode?(r.preventDefault(), n[Math.min(n.length-1, e+1)].focus()):"ArrowUp"===r.key||38===r.keyCode?(r.preventDefault(), n[Math.max(0, e-1)].focus()):"Enter"!==r.key&&13!==r.keyCode&&" "!==r.key&&32!==r.keyCode&&"Tab"!==r.key&&9!==r.keyCode||(r.preventDefault(), o.quill.enable(), o.close(a))
                                }
                            }
                            (a, e)), n[a].addEventListener("mousedown", function() {
                                return o.close(e)
                            }
                            ), n[a].addEventListener("focus", function() {
                                return o.focusedButton=a
                            }
                            ), n[a].addEventListener("unfocus", function() {
                                return o.focusedButton=null
                            }
                            )
                        }
                        ), this.container.style.display="block", this.quill.container.classList.contains("top-emoji")) {
                            var a=this.container.querySelectorAll("li"), r=void 0;
                            for(r=0;
                            r<a.length;
                            r++)a[r].style.display="block";
                            var i=window.innerHeight;
                            this.quill.container.getBoundingClientRect().top>i/2&&this.container.offsetHeight>0&&(this.container.style.top="-"+this.container.offsetHeight+"px")
                        }
                        n[0].classList.add("emoji-active")
                    }
                }
            }
            , {
                key:"close", value:function(e) {
                    for(this.quill.enable(), this.container.style.display="none";
                    this.container.firstChild;
                    )this.container.removeChild(this.container.firstChild);
                    this.quill.off("selection-change", this.onSelectionChange), this.quill.off("text-change", this.onTextChange), e&&(e.name, e.unicode, e.shortname, e.code_decimal, this.quill.deleteText(this.atIndex, this.query.length+1, Quill.sources.USER), this.quill.insertEmbed(this.atIndex, "emoji", e)), this.quill.focus(), this.open=!1, this.onClose&&this.onClose(e)
                }
            }
            , {
                key:"enterEmoji", value:function(e) {
                    if(e) {
                        e.name, e.unicode, e.shortname, m("span", {
                            className: "ico", innerHTML: " "+e.code_decimal+" "
                        }
                        ).innerHTML, new t;
                        var o=this.quill.getSelection(), n=[];
                        if(this.atIndex>0) {
                            var a=o.index-this.query.length;
                            a>2&&(a-=2), n.push( {
                                retain: a
                            }
                            )
                        }
                        n=n.concat([ {
                            delete: this.query.length+1
                        }
                        , {
                            insert: {
                                emoji: "data:image/png;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
                            }
                            , attributes: {
                                class: "emoji ap ap-"+e.name
                            }
                        }
                        , {
                            delete: 1
                        }
                        ]), this.quill.updateContents( {
                            ops: n
                        }
                        )
                    }
                    this.quill.blur(), this.open=!1, this.onClose&&this.onClose(e)
                }
            }
            ]), o
        }
        ();
        function m(e, o) {
            var n=document.createElement(e);
            Object.keys(o).forEach(function(e) {
                return n[e]=o[e]
            }
            );
            for(var a=arguments.length, r=Array(a>2?a-2:0), i=2;
            i<a;
            i++)r[i-2]=arguments[i];
            return r.forEach(function(e) {
                "string"==typeof e&&(e=document.createTextNode(e)), n.appendChild(e)
            }
            ), n
        }
        p.DEFAULTS= {
            emojiList:i.default, fuse: {
                shouldSort: !0, threshold: .1, location: 0, distance: 100, maxPatternLength: 32, minMatchCharLength: 1, keys: ["shortname"]
            }
        }
        , o.default=p
    }
    , function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }
        );
        var a=function() {
            function e(e, o) {
                for(var n=0;
                n<o.length;
                n++) {
                    var a=o[n];
                    a.enumerable=a.enumerable||!1, a.configurable=!0, "value"in a&&(a.writable=!0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(o, n, a) {
                return n&&e(o.prototype, n), a&&e(o, a), o
            }
        }
        (), r=c(n(0)), i=c(n(1));
        function c(e) {
            return e&&e.__esModule?e: {
                default: e
            }
        }
        window.Quill.import("delta");
        var t=window.Quill.import("core/module"), d=function(e) {
            function o(e, n) {
                !function(e, o) {
                    if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")
                }
                (this, o);
                var a=function(e, o) {
                    if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return!o||"object"!=typeof o&&"function"!=typeof o?e: o
                }
                (this, (o.__proto__||Object.getPrototypeOf(o)).call(this, e, n));
                a.quill=e, a.toolbar=e.getModule("toolbar"), void 0!==a.toolbar&&a.toolbar.addHandler("emoji", a.checkPalatteExist);
                var r=document.getElementsByClassName("ql-emoji");
                return r&&[].slice.call(r).forEach(function(e) {
                    e.innerHTML=n.buttonIcon
                }
                ), a
            }
            return function(e, o) {
                if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);
                e.prototype=Object.create(o&&o.prototype, {
                    constructor: {
                        value: e, enumerable: !1, writable: !0, configurable: !0
                    }
                }
                ), o&&(Object.setPrototypeOf?Object.setPrototypeOf(e, o):e.__proto__=o)
            }
            (o, t), a(o, [ {
                key:"checkPalatteExist", value:function() {
                    var e=this.quill;
                    !function(e) {
                        var o=document.getElementById("emoji-palette");
                        o?o.remove():function(e) {
                            var o=document.createElement("div"), n=(document.querySelector(".ql-toolbar"), e.getSelection()), a=e.getBounds(n.index);
                            e.container.appendChild(o);
                            var r=a.left+250;
                            o.id="emoji-palette", o.style.top=10+a.top+a.height+"px", r>e.container.offsetWidth?o.style.left=a.left-250+"px": o.style.left=a.left+"px";
                            var i=document.createElement("div");
                            i.id="tab-toolbar", o.appendChild(i);
                            var c=document.createElement("div");
                            c.id="tab-panel", o.appendChild(c);
                            var t=document.createElement("ul");
                            if(i.appendChild(t), null===document.getElementById("emoji-close-div")) {
                                var d=document.createElement("div");
                                d.id="emoji-close-div", d.addEventListener("click", p, !1), document.getElementsByTagName("body")[0].appendChild(d)
                            }
                            else document.getElementById("emoji-close-div").style.display="block";
                            [ {
                                type: "p", name: "people", content: '<div class="i-people"></div>'
                            }
                            , {
                                type: "n", name: "nature", content: '<div class="i-nature"></div>'
                            }
                            , {
                                type: "d", name: "food", content: '<div class="i-food"></div>'
                            }
                            , {
                                type: "s", name: "symbols", content: '<div class="i-symbols"></div>'
                            }
                            , {
                                type: "a", name: "activity", content: '<div class="i-activity"></div>'
                            }
                            , {
                                type: "t", name: "travel", content: '<div class="i-travel"></div>'
                            }
                            , {
                                type: "o", name: "objects", content: '<div class="i-objects"></div>'
                            }
                            , {
                                type: "f", name: "flags", content: '<div class="i-flags"></div>'
                            }
                            ].map(function(o) {
                                var n=document.createElement("li");
                                n.classList.add("emoji-tab"), n.classList.add("filter-"+o.name);
                                var a=o.content;
                                n.innerHTML=a, n.dataset.filter=o.type, t.appendChild(n);
                                var r=document.querySelector(".filter-"+o.name);
                                r.addEventListener("click", function() {
                                    var o=document.querySelector(".active");
                                    o&&o.classList.remove("active"), r.classList.toggle("active"), function(e, o, n) {
                                        for(;
                                        o.firstChild;
                                        )o.removeChild(o.firstChild);
                                        s(e.dataset.filter, o, n)
                                    }
                                    (r, c, e)
                                }
                                )
                            }
                            ), function(e, o) {
                                s("p", c, o), document.querySelector(".filter-people").classList.add("active")
                            }
                            (0, e)
                        }
                        (e)
                    }
                    (e), this.quill.on("text-change", function(o, n, a) {
                        "user"===a&&(p(), m(e))
                    }
                    )
                }
            }
            ]), o
        }
        ();
        function p() {
            var e=document.getElementById("emoji-palette");
            document.getElementById("emoji-close-div").style.display="none", e&&e.remove()
        }
        function m(e) {
            return e.getSelection()
        }
        function s(e, o, n) {
            var a=new r.default(i.default, {
                shouldSort: !0, matchAllTokens: !0, threshold: .3, location: 0, distance: 100, maxPatternLength: 32, minMatchCharLength: 3, keys: ["category"]
            }
            ).search(e);
            a.sort(function(e, o) {
                return e.emoji_order-o.emoji_order
            }
            ), n.focus();
            var c=m(n);
            a.map(function(e) {
                var a=document.createElement("span"), r=document.createTextNode(e.shortname);
                a.appendChild(r), a.classList.add("bem"), a.classList.add("bem-"+e.name), a.classList.add("ap"), a.classList.add("ap-"+e.name);
                var i=""+e.code_decimal;
                a.innerHTML=i+" ", o.appendChild(a);
                var t=document.querySelector(".bem-"+e.name);
                t&&t.addEventListener("click", function() {
                    (function(e, o) {
                        var n=document.createElement(e);
                        Object.keys(o).forEach(function(e) {
                            return n[e]=o[e]
                        }
                        );
                        for(var a=arguments.length, r=Array(a>2?a-2:0), i=2;
                        i<a;
                        i++)r[i-2]=arguments[i];
                        return r.forEach(function(e) {
                            "string"==typeof e&&(e=document.createTextNode(e)), n.appendChild(e)
                        }
                        ), n
                    }
                    )("span", {
                        className: "ico", innerHTML: e.code_decimal+" "
                    }
                    ).innerHTML, n.insertEmbed(c.index, "emoji", e), p()
                }
                )
            }
            )
        }
        d.DEFAULTS= {
            buttonIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>'
        }
        , o.default=d
    }
    , function(e, o, n) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }
        );
        var a=function() {
            function e(e, o) {
                for(var n=0;
                n<o.length;
                n++) {
                    var a=o[n];
                    a.enumerable=a.enumerable||!1, a.configurable=!0, "value"in a&&(a.writable=!0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(o, n, a) {
                return n&&e(o.prototype, n), a&&e(o, a), o
            }
        }
        (), r=c(n(0)), i=c(n(1));
        function c(e) {
            return e&&e.__esModule?e: {
                default: e
            }
        }
        window.Quill.import("delta");
        var t=window.Quill.import("core/module"), d=function(e) {
            function o(e, n) {
                !function(e, o) {
                    if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")
                }
                (this, o);
                var a=function(e, o) {
                    if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return!o||"object"!=typeof o&&"function"!=typeof o?e: o
                }
                (this, (o.__proto__||Object.getPrototypeOf(o)).call(this, e, n));
                return a.quill=e, a.container=document.createElement("div"), a.container.classList.add("textarea-emoji-control"), a.container.style.position="absolute", a.container.innerHTML=n.buttonIcon, a.quill.container.appendChild(a.container), a.container.addEventListener("click", a.checkEmojiBoxExist.bind(a), !1), a
            }
            return function(e, o) {
                if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);
                e.prototype=Object.create(o&&o.prototype, {
                    constructor: {
                        value: e, enumerable: !1, writable: !0, configurable: !0
                    }
                }
                ), o&&(Object.setPrototypeOf?Object.setPrototypeOf(e, o):e.__proto__=o)
            }
            (o, t), a(o, [ {
                key:"checkEmojiBoxExist", value:function() {
                    var e=document.getElementById("textarea-emoji");
                    if(e)e.remove();
                    else {
                        var o=document.createElement("div");
                        o.id="textarea-emoji", this.quill.container.appendChild(o);
                        var n=document.createElement("div");
                        n.id="tab-toolbar", o.appendChild(n);
                        var a=document.createElement("ul");
                        if(n.appendChild(a), null===document.getElementById("emoji-close-div")) {
                            var r=document.createElement("div");
                            r.id="emoji-close-div", r.addEventListener("click", p, !1), document.getElementsByTagName("body")[0].appendChild(r)
                        }
                        else document.getElementById("emoji-close-div").style.display="block";
                        var i=document.createElement("div");
                        i.id="tab-panel", o.appendChild(i);
                        var c=this.quill;
                        [ {
                            type: "p", name: "people", content: '<div class="i-people"></div>'
                        }
                        , {
                            type: "n", name: "nature", content: '<div class="i-nature"></div>'
                        }
                        , {
                            type: "d", name: "food", content: '<div class="i-food"></div>'
                        }
                        , {
                            type: "s", name: "symbols", content: '<div class="i-symbols"></div>'
                        }
                        , {
                            type: "a", name: "activity", content: '<div class="i-activity"></div>'
                        }
                        , {
                            type: "t", name: "travel", content: '<div class="i-travel"></div>'
                        }
                        , {
                            type: "o", name: "objects", content: '<div class="i-objects"></div>'
                        }
                        , {
                            type: "f", name: "flags", content: '<div class="i-flags"></div>'
                        }
                        ].map(function(e) {
                            var o=document.createElement("li");
                            o.classList.add("emoji-tab"), o.classList.add("filter-"+e.name);
                            var n=e.content;
                            o.innerHTML=n, o.dataset.filter=e.type, a.appendChild(o);
                            var r=document.querySelector(".filter-"+e.name);
                            r.addEventListener("click", function() {
                                var e=document.querySelector(".active");
                                for(e&&e.classList.remove("active"), r.classList.toggle("active");
                                i.firstChild;
                                )i.removeChild(i.firstChild);
                                m(r.dataset.filter, i, c)
                            }
                            )
                        }
                        );
                        var t=window.innerHeight;
                        this.quill.container.getBoundingClientRect().top>t/2&&(o.style.top="-250px"), function(e, o) {
                            m("p", e, o), document.querySelector(".filter-people").classList.add("active")
                        }
                        (i, this.quill)
                    }
                }
            }
            ]), o
        }
        ();
        function p() {
            var e=document.getElementById("textarea-emoji");
            document.getElementById("emoji-close-div").style.display="none", e&&e.remove()
        }
        function m(e, o, n) {
            var a=new r.default(i.default, {
                shouldSort: !0, matchAllTokens: !0, threshold: .3, location: 0, distance: 100, maxPatternLength: 32, minMatchCharLength: 3, keys: ["category"]
            }
            ).search(e);
            a.sort(function(e, o) {
                return e.emoji_order-o.emoji_order
            }
            ), n.focus();
            var c=n.getSelection();
            a.map(function(e) {
                var a=document.createElement("span"), r=document.createTextNode(e.shortname);
                a.appendChild(r), a.classList.add("bem"), a.classList.add("bem-"+e.name), a.classList.add("ap"), a.classList.add("ap-"+e.name);
                var i=""+e.code_decimal;
                a.innerHTML=i+" ", o.appendChild(a);
                var t=document.querySelector(".bem-"+e.name);
                t&&t.addEventListener("click", function() {
                    n.insertEmbed(c.index, "emoji", e), p()
                }
                )
            }
            )
        }
        d.DEFAULTS= {
            buttonIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.507 13.941c-1.512 1.195-3.174 1.931-5.506 1.931-2.334 0-3.996-.736-5.508-1.931l-.493.493c1.127 1.72 3.2 3.566 6.001 3.566 2.8 0 4.872-1.846 5.999-3.566l-.493-.493zm-9.007-5.941c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>'
        }
        , o.default=d
    }
    , function(e, o, n) {
        var a=n(8);
        "string"==typeof a&&(a=[[e.i, a, ""]]);
        n(12)(a, {
            hmr: !0, transform: void 0, insertInto: void 0
        }
        ), a.locals&&(e.exports=a.locals)
    }
    , function(e, o, n) {
        var a=n(9);
        (e.exports=n(10)(!1)).push([e.i, '#quill-editor {\n  position: relative; }\n\n.mention {\n  color: #0366d6; }\n\n.completions {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  background: #FFF;\n  border-radius: 2px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25); }\n\n.completions > li {\n  margin: 0;\n  padding: 0; }\n\n.completions > li > button {\n  box-sizing: border-box;\n  height: 2em;\n  padding: .25em .5em;\n  margin: 0;\n  display: block;\n  width: 100%;\n  text-align: left;\n  border: none;\n  background: none; }\n\n.completions > li > button:hover {\n  background: #ddd; }\n\n.completions > li > button:focus {\n  background: #ddd;\n  outline: none; }\n\n.completions > li > button > .matched {\n  font-weight: bold;\n  color: black; }\n\n.completions > li > button > * {\n  vertical-align: middle; }\n\n.emoji_completions {\n  list-style: none;\n  margin: 0;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  padding: 6px;\n  background: #FFF;\n  border-radius: 3px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12); }\n  .emoji_completions li {\n    margin: 2px 0;\n    padding: 0;\n    display: inline-block; }\n    .emoji_completions li:not(:last-of-type) {\n      margin-right: 3px; }\n\n.emoji_completions > li > button {\n  box-sizing: border-box;\n  padding: 3px 2px 6px;\n  margin: 0;\n  display: block;\n  width: 100%;\n  text-align: left;\n  border: none;\n  background: #efefef;\n  border-radius: 3px; }\n\n.emoji_completions > li > button:hover {\n  background: #2D9EE0;\n  color: #FFF; }\n\n.emoji_completions > li > button:focus {\n  background: #2D9EE0;\n  outline: none;\n  color: #FFF; }\n\n.emoji_completions > li > button.emoji-active {\n  background: red;\n  background: #2d9ee0;\n  outline: none;\n  color: #fff; }\n\n.emoji_completions > li > button > .matched {\n  font-weight: bold; }\n\n.emoji_completions > li > button > * {\n  vertical-align: middle; }\n\n.ico {\n  margin-right: 5px;\n  font-size: 18px;\n  line-height: 0;\n  vertical-align: middle; }\n\n#emoji-palette {\n  position: absolute;\n  max-width: 250px;\n  z-index: 999;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.15); }\n\n.bem {\n  font-size: 24px;\n  width: 34px;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  margin: 2px; }\n\n#tab-filters {\n  width: 210px;\n  margin: 0px auto;\n  margin-top: 20px; }\n\n.emoji-tab {\n  display: inline-table;\n  text-align: center;\n  width: 30px;\n  height: 100%;\n  min-height: 30px;\n  cursor: pointer; }\n\n#tab-toolbar {\n  background-color: #f7f7f7;\n  padding: 4px 4px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15); }\n\n#tab-toolbar ul {\n  margin: 0px;\n  padding: 0px; }\n\n#tab-toolbar .active {\n  border-bottom: 3px solid #2ab27b; }\n\n#tab-panel {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-height: 220px;\n  overflow-y: scroll;\n  padding: 2px;\n  background: #FFF; }\n\n#quill-editor x-contain, contain {\n  background: #ffbb88;\n  display: block; }\n\n#quill-editor table {\n  width: 100%;\n  border-collapse: collapse; }\n\n#quill-editor table td {\n  border: 1px solid black;\n  padding: 5px;\n  height: 25px; }\n\nbutton.ql-table::after {\n  content: "TABLE"; }\n\n.ql-picker.ql-table .ql-picker-label::before {\n  content: "TABLE"; }\n\nbutton.ql-contain::after {\n  content: "WRAP"; }\n\nbutton.ql-table[value="append-row"]::after {\n  content: "ROWS+"; }\n\nbutton.ql-table[value="append-col"]::after {\n  content: "COLS+"; }\n\n.ql-table,\n.ql-contain {\n  width: auto !important;\n  margin-right: -15px; }\n\n#emoji-close-div {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0; }\n\n.textarea-emoji-control {\n  width: 25px;\n  height: 25px;\n  right: 4px;\n  top: 10px; }\n\n#textarea-emoji {\n  position: absolute;\n  right: 0px;\n  max-width: 250px;\n  z-index: 999;\n  border: 1px solid #66afe9;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.15); }\n\n.ql-editor {\n  padding-right: 26px; }\n\n.i-activity {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70"><g transform="translate(7.500000, 7.500000)"><path stroke="%236F6D70" d="M18.02 1.36c5.92 3.02 8.28 10.26 5.26 16.18-2.12 4.17-6.35 6.57-10.73 6.57-1.83 0-3.7-.4-5.45-1.3-5.9-3-8.27-10.22-5.25-16.2C3.97 2.5 8.2.1 12.57.1c1.84 0 3.7.42 5.45 1.3zm4.7 11.44c.1-1.3-.06-2.6-.47-3.87-.13-.38-.27-.75-.43-1.1l-3.42-1.6-1.57-3.4c-.62-.3-1.27-.5-1.92-.68-.7-.18-1.5-.27-2.3-.27-.4 0-.8.02-1.2.06L8.9 4.74l-3.74.43c-.63.68-1.16 1.45-1.6 2.28-.42.84-.72 1.72-.9 2.63l1.84 3.3-.74 3.68c.3.56.66 1.08 1.1 1.58.76.94 1.7 1.7 2.8 2.32l3.7-.74 3.26 1.84c1.13-.23 2.23-.65 3.24-1.26.6-.35 1.2-.77 1.7-1.24l.44-3.74 2.78-2.55.05-.47z" stroke-linecap="round" stroke-linejoin="round"/><polygon points="10.6158689 8.50666885 8.42649168 12.8046921 11.836847 16.2129328 16.1342124 14.0235556 15.3793892 9.26144504"/></g></g></g></svg>\'); }\n\n.i-flags {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70" fill-rule="nonzero"><g transform="translate(9.500000, 8.000000)"><path d="M.5 3.13V23.5c0 .83.68 1.5 1.5 1.5.84 0 1.5-.67 1.5-1.5V3.14c0-.83-.66-1.5-1.5-1.5-.82 0-1.5.67-1.5 1.5z"/><path d="M3.5 11.54c.7-.16 1.44-.22 2.25-.17 1.38.07 2.48.3 5.23 1.04l.55.2c3.02.8 4.77 1 5.96.67v-7.9c-1.7.33-3.8-.07-7.1-1-3.9-1.1-5.7-1.3-6.9-.5v7.7zm7.68-10.1c4.1 1.15 5.7 1.3 6.98.44 1-.66 2.33.05 2.33 1.25v11c0 .5-.3 1-.7 1.26-2.2 1.4-4.6 1.2-9.1 0l-.56-.16c-4.54-1.2-6.15-1.3-7.05-.2-.9 1.06-2.65.42-2.65-.98v-11c0-.4.2-.8.5-1.1C3.4-.24 5.75-.1 11.2 1.4z"/></g></g></g></svg>\'); }\n\n.i-food {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70"><path fill-rule="nonzero" d="M9.57 28.2c0 .28.22.5.5.5h19.2c.27 0 .5-.22.5-.5v-4.4H9.57v4.4zm23.2-3.06v3.07c0 1.95-1.57 3.5-3.5 3.5h-19.2c-1.93 0-3.5-1.55-3.5-3.5V25c.46.15.96.24 1.47.24h23.78c.33 0 .64-.04.94-.1z"/><path fill-rule="nonzero" d="M6.57 18.2v-3.45c0-3.56 2.9-6.45 6.45-6.45h13.3c3.55 0 6.44 2.9 6.44 6.45v3.45H6.56zm3-1.83h3.6l.4.86c.23.5.73.83 1.3.83.56 0 1.06-.33 1.3-.83l.4-.86h13.2v-1.62c0-1.9-1.56-3.45-3.45-3.45h-13.3c-1.9 0-3.45 1.55-3.45 3.45v1.62z"/><path fill-rule="nonzero" d="M13.23 16.37l.4.86c.24.5.74.83 1.3.83.57 0 1.07-.33 1.3-.83l.4-.86H31.9c2.44 0 4.43 1.98 4.43 4.43 0 2.45-1.98 4.44-4.44 4.44H8.1c-2.44 0-4.43-2-4.43-4.44 0-2.45 1.98-4.43 4.44-4.43h5.14zm-5.12 3c-.8 0-1.42.64-1.42 1.43 0 .8.64 1.44 1.44 1.44h23.8c.8 0 1.43-.64 1.43-1.44 0-.8-.64-1.43-1.44-1.43H18.4c-.83 1.04-2.1 1.7-3.5 1.7-1.37 0-2.65-.66-3.47-1.7H8.1z"/><circle cx="14.6682646" cy="13.75" r="1"/><circle cx="24.6682646" cy="13.75" r="1"/><circle cx="19.6682646" cy="13.75" r="1"/></g></g></svg>\'); }\n\n.i-nature {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70" fill-rule="nonzero"><path d="M15.96 18.26L30.86 32c.5.46 1.3.43 1.77-.08.46-.5.43-1.3-.08-1.76l-14.9-13.74c-.5-.46-1.3-.43-1.76.08-.5.5-.5 1.3 0 1.76z"/><path d="M18.17 21.28c-.7-.06-1.3.45-1.35 1.14-.06.7.45 1.3 1.13 1.35l4.96.43c.9.07 1.5-.66 1.4-1.47l-1-5.6c-.1-.7-.74-1.14-1.42-1.02-.67.2-1.12.8-1 1.5l.7 4-3.32-.3z"/><path d="M28.48 28.95c-.38.17-1 .4-1.85.64-2.92.7-6 .9-8.95-.2-5.98-2.17-9.8-8.5-10.54-19.9l-.1-1.4 1.38-.2c14.45-2.08 23.4 7.4 21.33 19.85l-1.9-.3.63 1.43zM10.24 10.77C11.12 20.14 14.2 25 18.7 26.6c2.27.83 4.76.74 7.14.1.4-.12.76-.23 1.07-.35 1.2-9.6-5.4-16.57-16.6-15.58z"/></g></g></svg>\'); }\n\n.i-objects {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70" fill-rule="nonzero"><path d="M11.04 16.7c0-4.85 4.02-8.76 8.96-8.76 4.94 0 8.96 3.9 8.96 8.76 0 2.54-1.12 4.9-3 6.54v1.87c0 1.28-1.02 2.27-2.26 2.27h-7.37c-1.23 0-2.25-1-2.25-2.22V23.3c-1.9-1.65-3.04-4-3.04-6.58zm11.9 5.82c0-.48.24-.93.63-1.22 1.5-1.08 2.4-2.77 2.4-4.6 0-3.17-2.67-5.76-5.97-5.76s-5.96 2.6-5.96 5.76c0 1.84.9 3.54 2.42 4.62.4.28.62.74.62 1.22v1.8h5.87V22.5z"/><path d="M21.76 28.78c-.22.05-.42.1-.62.13-.5.1-.9.2-1.1.2-.24 0-.62-.04-1.08-.12l-.74-.15-.08-.02v-2.93c0-.83-.68-1.5-1.5-1.5-.83 0-1.5.67-1.5 1.5v4.1c0 .68.44 1.27 1.1 1.45l.38.1.94.23c.3.1.6.15.87.2.62.1 1.16.17 1.6.17.47 0 1.03-.1 1.7-.2l.7-.17.95-.22c.18-.03.32-.1.4-.1.64-.2 1.08-.76 1.08-1.43v-4.1c0-.83-.67-1.5-1.5-1.5-.82 0-1.5.67-1.5 1.5v2.9c-.03 0-.07 0-.1.02z"/></g></g></svg>\'); }\n\n.i-people {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70"><path fill-rule="nonzero" d="M20 34c-7.73 0-14-6.27-14-14S12.27 6 20 6s14 6.27 14 14-6.27 14-14 14zm0-3c6.08 0 11-4.92 11-11S26.08 9 20 9 9 13.92 9 20s4.92 11 11 11z"/><circle cx="15.3474348" cy="16.7705459" r="2.34743481"/><circle cx="24.4703784" cy="16.7705459" r="2.34743481"/><path d="M20 27.9c2.7 0 4.88-2.18 4.88-4.88 0-2.7-9.76-2.7-9.76 0S17.3 27.9 20 27.9z"/></g></g></svg>\'); }\n\n.i-symbols {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70" fill-rule="nonzero"><path d="M15.37 7.95c-4.48 0-8.06 3.9-8.06 8.64 0 3.5 2.2 6.9 5.8 10.3 1.2 1.1 2.5 2.2 3.9 3.1.84.6 1.5 1 1.98 1.3l.27.15.8.5 1.1-.6c.5-.27 1.18-.7 2-1.25 1.34-.9 2.66-1.9 3.9-3 3.57-3.28 5.75-6.8 5.75-10.6 0-4.74-3.6-8.65-8.1-8.65v3.3c2.6 0 4.76 2.4 4.76 5.35 0 2.65-1.72 5.43-4.7 8.13-1.1 1-2.27 1.9-3.5 2.7-.43.3-.83.54-1.17.74-.35-.2-.76-.5-1.2-.83-1.24-.87-2.4-1.83-3.54-2.87-2.95-2.76-4.7-5.5-4.7-7.9 0-2.98 2.2-5.35 4.78-5.35 1.3 0 2.5.6 3.4 1.6L20 14.3l1.25-1.43c.9-1.03 2.1-1.6 3.38-1.6v-3.3c-1.68 0-3.3.56-4.63 1.57-1.34-1-2.95-1.57-4.63-1.57z"/></g></g></svg>\'); }\n\n.i-travel {\n  content: \'\';\n  height: 25px;\n  width: 25px;\n  margin: auto;\n  background: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><g fill="%236F6D70" fill-rule="nonzero"><path d="M25.46 11.2s-2.67 2.58-3.94 3.95l-10.6-2.13c-.12-.02-.25.04-.3.15l-.8 1.6c-.07.13 0 .3.12.37l7.75 3.88L13.4 24c-.5-.16-1.1-.33-1.66-.3-.3 0-.6.06-.85.25-.3.2-.4.5-.4.9s.1.74.3.98l3.2 3.23c.3.23.7.34 1 .34.4 0 .7-.13.9-.37.2-.23.24-.53.25-.84 0-.6-.15-1.2-.3-1.7l4.97-4.3 3.9 7.76c.06.13.23.2.36.12l1.6-.8c.13-.07.2-.2.17-.3l-2.12-10.6c1.4-1.28 3.95-3.95 3.96-3.96.86-.88 1.4-1.93 1.4-2.87 0-.5-.17-1-.5-1.33-.37-.36-.87-.5-1.38-.5-.95 0-2 .52-2.88 1.4zm2.87-4.4c1.28 0 2.54.44 3.5 1.4.93.93 1.38 2.2 1.38 3.47 0 1.8-.8 3.54-2.2 4.94-.4.5-1.7 1.8-2.8 2.9l1.8 9c.3 1.5-.4 2.9-1.7 3.6l-1.62.8c-1.62.8-3.6.1-4.36-1.4L20 27.1l-.7.6v.62c-.03.92-.28 1.8-.92 2.6-.8 1-1.98 1.5-3.22 1.5-1.03 0-2.12-.37-2.96-1.1l-.16-.14-3.22-3.22-.1-.12c-.75-.83-1.12-1.9-1.12-3 0-1.24.5-2.43 1.48-3.22.8-.6 1.68-.9 2.62-.9h.62l.6-.7-4.27-2.1c-1.65-.8-2.33-2.8-1.52-4.4l.8-1.64c.67-1.3 2.14-2.02 3.57-1.73l9 1.8 1.36-1.33 1.5-1.48c1.42-1.4 3.17-2.27 4.97-2.27z"/></g></g></svg>\'); }\n\n.emoji {\n  margin-bottom: -5px; }\n\n/*\n    Emoji styles & image sheets sourced from: https://github.com/markygriff/Website.git\n    TODO: Update with a more contemporary sprite and css\n\n*/\n.ap {\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  background-image: url('+a(n(11))+");\n  background-size: 820px;\n  background-repeat: no-repeat;\n  text-indent: -999px;\n  box-sizing: border-box;\n  font-size: 20px;\n  line-height: 25px;\n  overflow: hidden; }\n\n.ap-copyright {\n  background-position: -0px -0px; }\n\n.ap-registered {\n  background-position: -0px -20px; }\n\n.ap-bangbang {\n  background-position: -0px -40px; }\n\n.ap-interrobang {\n  background-position: -0px -60px; }\n\n.ap-tm {\n  background-position: -0px -80px; }\n\n.ap-information_source {\n  background-position: -0px -100px; }\n\n.ap-left_right_arrow {\n  background-position: -0px -120px; }\n\n.ap-arrow_up_down {\n  background-position: -0px -140px; }\n\n.ap-arrow_upper_left {\n  background-position: -0px -160px; }\n\n.ap-arrow_upper_right {\n  background-position: -0px -180px; }\n\n.ap-arrow_lower_right {\n  background-position: -0px -200px; }\n\n.ap-arrow_lower_left {\n  background-position: -0px -220px; }\n\n.ap-leftwards_arrow_with_hook {\n  background-position: -0px -240px; }\n\n.ap-arrow_right_hook {\n  background-position: -0px -260px; }\n\n.ap-watch {\n  background-position: -0px -280px; }\n\n.ap-hourglass {\n  background-position: -0px -300px; }\n\n.ap-keyboard {\n  background-position: -0px -320px; }\n\n.ap-fast_forward {\n  background-position: -0px -360px; }\n\n.ap-rewind {\n  background-position: -0px -380px; }\n\n.ap-arrow_double_up {\n  background-position: -0px -400px; }\n\n.ap-arrow_double_down {\n  background-position: -0px -420px; }\n\n.ap-black_right_pointing_double_triangle_with_vertical_bar {\n  background-position: -0px -440px; }\n\n.ap-black_left_pointing_double_triangle_with_vertical_bar {\n  background-position: -0px -460px; }\n\n.ap-black_right_pointing_triangle_with_double_vertical_bar {\n  background-position: -0px -480px; }\n\n.ap-alarm_clock {\n  background-position: -0px -500px; }\n\n.ap-stopwatch {\n  background-position: -0px -520px; }\n\n.ap-timer_clock {\n  background-position: -0px -540px; }\n\n.ap-hourglass_flowing_sand {\n  background-position: -0px -560px; }\n\n.ap-double_vertical_bar {\n  background-position: -0px -580px; }\n\n.ap-black_square_for_stop {\n  background-position: -0px -600px; }\n\n.ap-black_circle_for_record {\n  background-position: -0px -620px; }\n\n.ap-m {\n  background-position: -0px -640px; }\n\n.ap-black_small_square {\n  background-position: -0px -660px; }\n\n.ap-white_small_square {\n  background-position: -0px -680px; }\n\n.ap-arrow_forward {\n  background-position: -0px -700px; }\n\n.ap-arrow_backward {\n  background-position: -0px -720px; }\n\n.ap-white_medium_square {\n  background-position: -0px -740px; }\n\n.ap-black_medium_square {\n  background-position: -0px -760px; }\n\n.ap-white_medium_small_square {\n  background-position: -0px -780px; }\n\n.ap-black_medium_small_square {\n  background-position: -0px -800px; }\n\n.ap-sunny {\n  background-position: -20px -0px; }\n\n.ap-cloud {\n  background-position: -20px -20px; }\n\n.ap-umbrella {\n  background-position: -20px -40px; }\n\n.ap-snowman {\n  background-position: -20px -60px; }\n\n.ap-comet {\n  background-position: -20px -80px; }\n\n.ap-phone, .ap-telephone {\n  background-position: -20px -100px; }\n\n.ap-ballot_box_with_check {\n  background-position: -20px -120px; }\n\n.ap-umbrella_with_rain_drops {\n  background-position: -20px -140px; }\n\n.ap-coffee {\n  background-position: -20px -160px; }\n\n.ap-shamrock {\n  background-position: -20px -180px; }\n\n.ap-point_up {\n  background-position: -20px -200px; }\n\n.ap-skull_and_crossbones {\n  background-position: -20px -320px; }\n\n.ap-radioactive_sign {\n  background-position: -20px -340px; }\n\n.ap-biohazard_sign {\n  background-position: -20px -360px; }\n\n.ap-orthodox_cross {\n  background-position: -20px -380px; }\n\n.ap-star_and_crescent {\n  background-position: -20px -400px; }\n\n.ap-peace_symbol {\n  background-position: -20px -420px; }\n\n.ap-yin_yang {\n  background-position: -20px -440px; }\n\n.ap-wheel_of_dharma {\n  background-position: -20px -460px; }\n\n.ap-white_frowning_face {\n  background-position: -20px -480px; }\n\n.ap-relaxed {\n  background-position: -20px -500px; }\n\n.ap-aries {\n  background-position: -20px -520px; }\n\n.ap-taurus {\n  background-position: -20px -540px; }\n\n.ap-gemini {\n  background-position: -20px -560px; }\n\n.ap-cancer {\n  background-position: -20px -580px; }\n\n.ap-leo {\n  background-position: -20px -600px; }\n\n.ap-virgo {\n  background-position: -20px -620px; }\n\n.ap-libra {\n  background-position: -20px -640px; }\n\n.ap-scorpius {\n  background-position: -20px -660px; }\n\n.ap-sagittarius {\n  background-position: -20px -680px; }\n\n.ap-capricorn {\n  background-position: -20px -700px; }\n\n.ap-aquarius {\n  background-position: -20px -720px; }\n\n.ap-pisces {\n  background-position: -20px -740px; }\n\n.ap-spades {\n  background-position: -20px -760px; }\n\n.ap-clubs {\n  background-position: -20px -780px; }\n\n.ap-hearts {\n  background-position: -20px -800px; }\n\n.ap-diamonds {\n  background-position: -40px -0px; }\n\n.ap-hotsprings {\n  background-position: -40px -20px; }\n\n.ap-recycle {\n  background-position: -40px -40px; }\n\n.ap-wheelchair {\n  background-position: -40px -60px; }\n\n.ap-hammer_and_pick {\n  background-position: -40px -80px; }\n\n.ap-anchor {\n  background-position: -40px -100px; }\n\n.ap-crossed_swords {\n  background-position: -40px -120px; }\n\n.ap-scales {\n  background-position: -40px -140px; }\n\n.ap-alembic {\n  background-position: -40px -160px; }\n\n.ap-gear {\n  background-position: -40px -180px; }\n\n.ap-atom_symbol {\n  background-position: -40px -200px; }\n\n.ap-fleur_de_lis {\n  background-position: -40px -220px; }\n\n.ap-warning {\n  background-position: -40px -240px; }\n\n.ap-zap {\n  background-position: -40px -260px; }\n\n.ap-white_circle {\n  background-position: -40px -280px; }\n\n.ap-black_circle {\n  background-position: -40px -300px; }\n\n.ap-coffin {\n  background-position: -40px -320px; }\n\n.ap-funeral_urn {\n  background-position: -40px -340px; }\n\n.ap-soccer {\n  background-position: -40px -360px; }\n\n.ap-baseball {\n  background-position: -40px -380px; }\n\n.ap-snowman_without_snow {\n  background-position: -40px -400px; }\n\n.ap-partly_sunny {\n  background-position: -40px -420px; }\n\n.ap-thunder_cloud_and_rain {\n  background-position: -40px -440px; }\n\n.ap-ophiuchus {\n  background-position: -40px -460px; }\n\n.ap-pick {\n  background-position: -40px -480px; }\n\n.ap-helmet_with_white_cross {\n  background-position: -40px -500px; }\n\n.ap-chains {\n  background-position: -40px -520px; }\n\n.ap-no_entry {\n  background-position: -40px -540px; }\n\n.ap-shinto_shrine {\n  background-position: -40px -560px; }\n\n.ap-church {\n  background-position: -40px -580px; }\n\n.ap-mountain {\n  background-position: -40px -600px; }\n\n.ap-umbrella_on_ground,\n.ap-beach_umbrella {\n  background-position: -40px -620px; }\n\n.ap-fountain {\n  background-position: -40px -640px; }\n\n.ap-golf {\n  background-position: -40px -660px; }\n\n.ap-ferry {\n  background-position: -40px -680px; }\n\n.ap-boat {\n  background-position: -40px -700px; }\n\n.ap-skier {\n  background-position: -40px -720px; }\n\n.ap-ice_skate {\n  background-position: -40px -740px; }\n\n.ap-person_with_ball {\n  background-position: -40px -760px; }\n\n.ap-tent {\n  background-position: -60px -60px; }\n\n.ap-fuelpump {\n  background-position: -60px -80px; }\n\n.ap-scissors {\n  background-position: -60px -100px; }\n\n.ap-white_check_mark {\n  background-position: -60px -120px; }\n\n.ap-airplane {\n  background-position: -60px -140px; }\n\n.ap-email {\n  background-position: -60px -160px; }\n\n.ap-fist {\n  background-position: -60px -180px; }\n\n.ap-hand {\n  background-position: -60px -300px; }\n\n.ap-v {\n  background-position: -60px -420px; }\n\n.ap-writing_hand {\n  background-position: -60px -540px; }\n\n.ap-pencil2 {\n  background-position: -60px -660px; }\n\n.ap-black_nib {\n  background-position: -60px -680px; }\n\n.ap-heavy_check_mark {\n  background-position: -60px -700px; }\n\n.ap-heavy_multiplication_x {\n  background-position: -60px -720px; }\n\n.ap-latin_cross {\n  background-position: -60px -740px; }\n\n.ap-star_of_david {\n  background-position: -60px -760px; }\n\n.ap-sparkles {\n  background-position: -60px -780px; }\n\n.ap-eight_spoked_asterisk {\n  background-position: -60px -800px; }\n\n.ap-eight_pointed_black_star {\n  background-position: -80px -0px; }\n\n.ap-snowflake {\n  background-position: -80px -20px; }\n\n.ap-sparkle {\n  background-position: -80px -40px; }\n\n.ap-x {\n  background-position: -80px -60px; }\n\n.ap-negative_squared_cross_mark {\n  background-position: -80px -80px; }\n\n.ap-question {\n  background-position: -80px -100px; }\n\n.ap-grey_question {\n  background-position: -80px -120px; }\n\n.ap-grey_exclamation {\n  background-position: -80px -140px; }\n\n.ap-exclamation {\n  background-position: -80px -160px; }\n\n.ap-heavy_heart_exclamation_mark_ornament {\n  background-position: -80px -180px; }\n\n.ap-heart {\n  background-position: -80px -200px; }\n\n.ap-heavy_plus_sign {\n  background-position: -80px -220px; }\n\n.ap-heavy_minus_sign {\n  background-position: -80px -240px; }\n\n.ap-heavy_division_sign {\n  background-position: -80px -260px; }\n\n.ap-arrow_right {\n  background-position: -80px -280px; }\n\n.ap-curly_loop {\n  background-position: -80px -300px; }\n\n.ap-loop {\n  background-position: -80px -320px; }\n\n.ap-arrow_heading_up {\n  background-position: -80px -340px; }\n\n.ap-arrow_heading_down {\n  background-position: -80px -360px; }\n\n.ap-arrow_left {\n  background-position: -80px -380px; }\n\n.ap-arrow_up {\n  background-position: -80px -400px; }\n\n.ap-arrow_down {\n  background-position: -80px -420px; }\n\n.ap-black_large_square {\n  background-position: -80px -440px; }\n\n.ap-white_large_square {\n  background-position: -80px -460px; }\n\n.ap-star {\n  background-position: -80px -480px; }\n\n.ap-o {\n  background-position: -80px -500px; }\n\n.ap-wavy_dash {\n  background-position: -80px -520px; }\n\n.ap-part_alternation_mark {\n  background-position: -80px -540px; }\n\n.ap-congratulations {\n  background-position: -80px -560px; }\n\n.ap-secret {\n  background-position: -80px -580px; }\n\n.ap-mahjong {\n  background-position: -80px -600px; }\n\n.ap-black_joker {\n  background-position: -80px -620px; }\n\n.ap-a {\n  background-position: -80px -640px; }\n\n.ap-b {\n  background-position: -80px -660px; }\n\n.ap-o2 {\n  background-position: -80px -680px; }\n\n.ap-parking {\n  background-position: -80px -700px; }\n\n.ap-ab {\n  background-position: -80px -720px; }\n\n.ap-cl {\n  background-position: -80px -740px; }\n\n.ap-cool {\n  background-position: -80px -760px; }\n\n.ap-free {\n  background-position: -80px -780px; }\n\n.ap-id {\n  background-position: -80px -800px; }\n\n.ap-new {\n  background-position: -100px -0px; }\n\n.ap-ng {\n  background-position: -100px -20px; }\n\n.ap-ok {\n  background-position: -100px -40px; }\n\n.ap-sos {\n  background-position: -100px -60px; }\n\n.ap-up {\n  background-position: -100px -80px; }\n\n.ap-vs {\n  background-position: -100px -100px; }\n\n.ap-koko {\n  background-position: -100px -120px; }\n\n.ap-sa {\n  background-position: -100px -140px; }\n\n.ap-u7121 {\n  background-position: -100px -160px; }\n\n.ap-u6307 {\n  background-position: -100px -180px; }\n\n.ap-u7981 {\n  background-position: -100px -200px; }\n\n.ap-u7a7a {\n  background-position: -100px -220px; }\n\n.ap-u5408 {\n  background-position: -100px -240px; }\n\n.ap-u6e80 {\n  background-position: -100px -260px; }\n\n.ap-u6709 {\n  background-position: -100px -280px; }\n\n.ap-u6708 {\n  background-position: -100px -300px; }\n\n.ap-u7533 {\n  background-position: -100px -320px; }\n\n.ap-u5272 {\n  background-position: -100px -340px; }\n\n.ap-u55b6 {\n  background-position: -100px -360px; }\n\n.ap-ideograph_advantage {\n  background-position: -100px -380px; }\n\n.ap-accept {\n  background-position: -100px -400px; }\n\n.ap-cyclone {\n  background-position: -100px -420px; }\n\n.ap-foggy {\n  background-position: -100px -440px; }\n\n.ap-closed_umbrella {\n  background-position: -100px -460px; }\n\n.ap-night_with_stars {\n  background-position: -100px -480px; }\n\n.ap-sunrise_over_mountains {\n  background-position: -100px -500px; }\n\n.ap-sunrise {\n  background-position: -100px -520px; }\n\n.ap-city_sunset {\n  background-position: -100px -540px; }\n\n.ap-city_sunrise {\n  background-position: -100px -560px; }\n\n.ap-rainbow {\n  background-position: -100px -580px; }\n\n.ap-bridge_at_night {\n  background-position: -100px -600px; }\n\n.ap-ocean {\n  background-position: -100px -620px; }\n\n.ap-volcano {\n  background-position: -100px -640px; }\n\n.ap-milky_way {\n  background-position: -100px -660px; }\n\n.ap-earth_africa {\n  background-position: -100px -680px; }\n\n.ap-earth_americas {\n  background-position: -100px -700px; }\n\n.ap-earth_asia {\n  background-position: -100px -720px; }\n\n.ap-globe_with_meridians {\n  background-position: -100px -740px; }\n\n.ap-new_moon {\n  background-position: -100px -760px; }\n\n.ap-waxing_crescent_moon {\n  background-position: -100px -780px; }\n\n.ap-first_quarter_moon {\n  background-position: -100px -800px; }\n\n.ap-moon {\n  background-position: -120px -0px; }\n\n.ap-full_moon {\n  background-position: -120px -20px; }\n\n.ap-waning_gibbous_moon {\n  background-position: -120px -40px; }\n\n.ap-last_quarter_moon {\n  background-position: -120px -60px; }\n\n.ap-waning_crescent_moon {\n  background-position: -120px -80px; }\n\n.ap-crescent_moon {\n  background-position: -120px -100px; }\n\n.ap-new_moon_with_face {\n  background-position: -120px -120px; }\n\n.ap-first_quarter_moon_with_face {\n  background-position: -120px -140px; }\n\n.ap-last_quarter_moon_with_face {\n  background-position: -120px -160px; }\n\n.ap-full_moon_with_face {\n  background-position: -120px -180px; }\n\n.ap-sun_with_face {\n  background-position: -120px -200px; }\n\n.ap-star2 {\n  background-position: -120px -220px; }\n\n.ap-stars {\n  background-position: -120px -240px; }\n\n.ap-thermometer {\n  background-position: -120px -260px; }\n\n.ap-mostly_sunny {\n  background-position: -120px -280px; }\n\n.ap-barely_sunny {\n  background-position: -120px -300px; }\n\n.ap-partly_sunny_rain {\n  background-position: -120px -320px; }\n\n.ap-rain_cloud {\n  background-position: -120px -340px; }\n\n.ap-snow_cloud {\n  background-position: -120px -360px; }\n\n.ap-lightning {\n  background-position: -120px -380px; }\n\n.ap-tornado {\n  background-position: -120px -400px; }\n\n.ap-fog {\n  background-position: -120px -420px; }\n\n.ap-wind_blowing_face {\n  background-position: -120px -440px; }\n\n.ap-hotdog {\n  background-position: -120px -460px; }\n\n.ap-taco {\n  background-position: -120px -480px; }\n\n.ap-burrito {\n  background-position: -120px -500px; }\n\n.ap-chestnut {\n  background-position: -120px -520px; }\n\n.ap-seedling {\n  background-position: -120px -540px; }\n\n.ap-evergreen_tree {\n  background-position: -120px -560px; }\n\n.ap-deciduous_tree {\n  background-position: -120px -580px; }\n\n.ap-palm_tree {\n  background-position: -120px -600px; }\n\n.ap-cactus {\n  background-position: -120px -620px; }\n\n.ap-hot_pepper {\n  background-position: -120px -640px; }\n\n.ap-tulip {\n  background-position: -120px -660px; }\n\n.ap-cherry_blossom {\n  background-position: -120px -680px; }\n\n.ap-rose {\n  background-position: -120px -700px; }\n\n.ap-hibiscus {\n  background-position: -120px -720px; }\n\n.ap-sunflower {\n  background-position: -120px -740px; }\n\n.ap-blossom {\n  background-position: -120px -760px; }\n\n.ap-corn {\n  background-position: -120px -780px; }\n\n.ap-ear_of_rice {\n  background-position: -120px -800px; }\n\n.ap-herb {\n  background-position: -140px -0px; }\n\n.ap-four_leaf_clover {\n  background-position: -140px -20px; }\n\n.ap-maple_leaf {\n  background-position: -140px -40px; }\n\n.ap-fallen_leaf {\n  background-position: -140px -60px; }\n\n.ap-leaves {\n  background-position: -140px -80px; }\n\n.ap-mushroom {\n  background-position: -140px -100px; }\n\n.ap-tomato {\n  background-position: -140px -120px; }\n\n.ap-eggplant {\n  background-position: -140px -140px; }\n\n.ap-grapes {\n  background-position: -140px -160px; }\n\n.ap-melon {\n  background-position: -140px -180px; }\n\n.ap-watermelon {\n  background-position: -140px -200px; }\n\n.ap-tangerine {\n  background-position: -140px -220px; }\n\n.ap-lemon {\n  background-position: -140px -240px; }\n\n.ap-banana {\n  background-position: -140px -260px; }\n\n.ap-pineapple {\n  background-position: -140px -280px; }\n\n.ap-apple {\n  background-position: -140px -300px; }\n\n.ap-green_apple {\n  background-position: -140px -320px; }\n\n.ap-pear {\n  background-position: -140px -340px; }\n\n.ap-peach {\n  background-position: -140px -360px; }\n\n.ap-cherries {\n  background-position: -140px -380px; }\n\n.ap-strawberry {\n  background-position: -140px -400px; }\n\n.ap-hamburger {\n  background-position: -140px -420px; }\n\n.ap-pizza {\n  background-position: -140px -440px; }\n\n.ap-meat_on_bone {\n  background-position: -140px -460px; }\n\n.ap-poultry_leg {\n  background-position: -140px -480px; }\n\n.ap-rice_cracker {\n  background-position: -140px -500px; }\n\n.ap-rice_ball {\n  background-position: -140px -520px; }\n\n.ap-rice {\n  background-position: -140px -540px; }\n\n.ap-curry {\n  background-position: -140px -560px; }\n\n.ap-ramen {\n  background-position: -140px -580px; }\n\n.ap-spaghetti {\n  background-position: -140px -600px; }\n\n.ap-bread {\n  background-position: -140px -620px; }\n\n.ap-fries {\n  background-position: -140px -640px; }\n\n.ap-sweet_potato {\n  background-position: -140px -660px; }\n\n.ap-dango {\n  background-position: -140px -680px; }\n\n.ap-oden {\n  background-position: -140px -700px; }\n\n.ap-sushi {\n  background-position: -140px -720px; }\n\n.ap-fried_shrimp {\n  background-position: -140px -740px; }\n\n.ap-fish_cake {\n  background-position: -140px -760px; }\n\n.ap-icecream {\n  background-position: -140px -780px; }\n\n.ap-shaved_ice {\n  background-position: -140px -800px; }\n\n.ap-ice_cream {\n  background-position: -160px -0px; }\n\n.ap-doughnut {\n  background-position: -160px -20px; }\n\n.ap-cookie {\n  background-position: -160px -40px; }\n\n.ap-chocolate_bar {\n  background-position: -160px -60px; }\n\n.ap-candy {\n  background-position: -160px -80px; }\n\n.ap-lollipop {\n  background-position: -160px -100px; }\n\n.ap-custard {\n  background-position: -160px -120px; }\n\n.ap-honey_pot {\n  background-position: -160px -140px; }\n\n.ap-cake {\n  background-position: -160px -160px; }\n\n.ap-bento {\n  background-position: -160px -180px; }\n\n.ap-stew {\n  background-position: -160px -200px; }\n\n.ap-egg {\n  background-position: -160px -220px; }\n\n.ap-fork_and_knife {\n  background-position: -160px -240px; }\n\n.ap-tea {\n  background-position: -160px -260px; }\n\n.ap-sake {\n  background-position: -160px -280px; }\n\n.ap-wine_glass {\n  background-position: -160px -300px; }\n\n.ap-cocktail {\n  background-position: -160px -320px; }\n\n.ap-tropical_drink {\n  background-position: -160px -340px; }\n\n.ap-beer {\n  background-position: -160px -360px; }\n\n.ap-beers {\n  background-position: -160px -380px; }\n\n.ap-baby_bottle {\n  background-position: -160px -400px; }\n\n.ap-knife_fork_plate {\n  background-position: -160px -420px; }\n\n.ap-champagne {\n  background-position: -160px -440px; }\n\n.ap-popcorn {\n  background-position: -160px -460px; }\n\n.ap-ribbon {\n  background-position: -160px -480px; }\n\n.ap-gift {\n  background-position: -160px -500px; }\n\n.ap-birthday {\n  background-position: -160px -520px; }\n\n.ap-jack_o_lantern {\n  background-position: -160px -540px; }\n\n.ap-christmas_tree {\n  background-position: -160px -560px; }\n\n.ap-santa {\n  background-position: -160px -580px; }\n\n.ap-fireworks {\n  background-position: -160px -700px; }\n\n.ap-sparkler {\n  background-position: -160px -720px; }\n\n.ap-balloon {\n  background-position: -160px -740px; }\n\n.ap-tada {\n  background-position: -160px -760px; }\n\n.ap-confetti_ball {\n  background-position: -160px -780px; }\n\n.ap-tanabata_tree {\n  background-position: -160px -800px; }\n\n.ap-crossed_flags {\n  background-position: -180px -0px; }\n\n.ap-bamboo {\n  background-position: -180px -20px; }\n\n.ap-dolls {\n  background-position: -180px -40px; }\n\n.ap-flags {\n  background-position: -180px -60px; }\n\n.ap-wind_chime {\n  background-position: -180px -80px; }\n\n.ap-rice_scene {\n  background-position: -180px -100px; }\n\n.ap-school_satchel {\n  background-position: -180px -120px; }\n\n.ap-mortar_board {\n  background-position: -180px -140px; }\n\n.ap-medal {\n  background-position: -180px -160px; }\n\n.ap-reminder_ribbon {\n  background-position: -180px -180px; }\n\n.ap-studio_microphone {\n  background-position: -180px -200px; }\n\n.ap-level_slider {\n  background-position: -180px -220px; }\n\n.ap-control_knobs {\n  background-position: -180px -240px; }\n\n.ap-film_frames {\n  background-position: -180px -260px; }\n\n.ap-admission_tickets {\n  background-position: -180px -280px; }\n\n.ap-carousel_horse {\n  background-position: -180px -300px; }\n\n.ap-ferris_wheel {\n  background-position: -180px -320px; }\n\n.ap-roller_coaster {\n  background-position: -180px -340px; }\n\n.ap-fishing_pole_and_fish {\n  background-position: -180px -360px; }\n\n.ap-microphone {\n  background-position: -180px -380px; }\n\n.ap-movie_camera {\n  background-position: -180px -400px; }\n\n.ap-cinema {\n  background-position: -180px -420px; }\n\n.ap-headphones {\n  background-position: -180px -440px; }\n\n.ap-art {\n  background-position: -180px -460px; }\n\n.ap-tophat {\n  background-position: -180px -480px; }\n\n.ap-circus_tent {\n  background-position: -180px -500px; }\n\n.ap-ticket {\n  background-position: -180px -520px; }\n\n.ap-clapper {\n  background-position: -180px -540px; }\n\n.ap-performing_arts {\n  background-position: -180px -560px; }\n\n.ap-video_game {\n  background-position: -180px -580px; }\n\n.ap-dart {\n  background-position: -180px -600px; }\n\n.ap-slot_machine {\n  background-position: -180px -620px; }\n\n.ap-8ball {\n  background-position: -180px -640px; }\n\n.ap-game_die {\n  background-position: -180px -660px; }\n\n.ap-bowling {\n  background-position: -180px -680px; }\n\n.ap-flower_playing_cards {\n  background-position: -180px -700px; }\n\n.ap-musical_note {\n  background-position: -180px -720px; }\n\n.ap-notes {\n  background-position: -180px -740px; }\n\n.ap-saxophone {\n  background-position: -180px -760px; }\n\n.ap-guitar {\n  background-position: -180px -780px; }\n\n.ap-musical_keyboard {\n  background-position: -180px -800px; }\n\n.ap-trumpet {\n  background-position: -200px -0px; }\n\n.ap-violin {\n  background-position: -200px -20px; }\n\n.ap-musical_score {\n  background-position: -200px -40px; }\n\n.ap-running_shirt_with_sash {\n  background-position: -200px -60px; }\n\n.ap-tennis {\n  background-position: -200px -80px; }\n\n.ap-ski {\n  background-position: -200px -100px; }\n\n.ap-basketball {\n  background-position: -200px -120px; }\n\n.ap-checkered_flag {\n  background-position: -200px -140px; }\n\n.ap-snowboarder {\n  background-position: -200px -160px; }\n\n.ap-runner {\n  background-position: -200px -180px; }\n\n.ap-surfer {\n  background-position: -200px -300px; }\n\n.ap-sports_medal {\n  background-position: -200px -420px; }\n\n.ap-trophy {\n  background-position: -200px -440px; }\n\n.ap-horse_racing {\n  background-position: -200px -460px; }\n\n.ap-football {\n  background-position: -200px -480px; }\n\n.ap-rugby_football {\n  background-position: -200px -500px; }\n\n.ap-swimmer {\n  background-position: -200px -520px; }\n\n.ap-weight_lifter {\n  background-position: -200px -640px; }\n\n.ap-golfer {\n  background-position: -200px -760px; }\n\n.ap-racing_motorcycle {\n  background-position: -200px -780px; }\n\n.ap-racing_car {\n  background-position: -200px -800px; }\n\n.ap-cricket_bat_and_ball {\n  background-position: -220px -0px; }\n\n.ap-volleyball {\n  background-position: -220px -20px; }\n\n.ap-field_hockey_stick_and_ball {\n  background-position: -220px -40px; }\n\n.ap-ice_hockey_stick_and_puck {\n  background-position: -220px -60px; }\n\n.ap-table_tennis_paddle_and_ball {\n  background-position: -220px -80px; }\n\n.ap-snow_capped_mountain {\n  background-position: -220px -100px; }\n\n.ap-camping {\n  background-position: -220px -120px; }\n\n.ap-beach_with_umbrella {\n  background-position: -220px -140px; }\n\n.ap-building_construction {\n  background-position: -220px -160px; }\n\n.ap-house_buildings {\n  background-position: -220px -180px; }\n\n.ap-cityscape {\n  background-position: -220px -200px; }\n\n.ap-derelict_house_building {\n  background-position: -220px -220px; }\n\n.ap-classical_building {\n  background-position: -220px -240px; }\n\n.ap-desert {\n  background-position: -220px -260px; }\n\n.ap-desert_island {\n  background-position: -220px -280px; }\n\n.ap-national_park {\n  background-position: -220px -300px; }\n\n.ap-stadium {\n  background-position: -220px -320px; }\n\n.ap-house {\n  background-position: -220px -340px; }\n\n.ap-house_with_garden {\n  background-position: -220px -360px; }\n\n.ap-office {\n  background-position: -220px -380px; }\n\n.ap-post_office {\n  background-position: -220px -400px; }\n\n.ap-european_post_office {\n  background-position: -220px -420px; }\n\n.ap-hospital {\n  background-position: -220px -440px; }\n\n.ap-bank {\n  background-position: -220px -460px; }\n\n.ap-atm {\n  background-position: -220px -480px; }\n\n.ap-hotel {\n  background-position: -220px -500px; }\n\n.ap-love_hotel {\n  background-position: -220px -520px; }\n\n.ap-convenience_store {\n  background-position: -220px -540px; }\n\n.ap-school {\n  background-position: -220px -560px; }\n\n.ap-department_store {\n  background-position: -220px -580px; }\n\n.ap-factory {\n  background-position: -220px -600px; }\n\n.ap-izakaya_lantern {\n  background-position: -220px -620px; }\n\n.ap-japanese_castle {\n  background-position: -220px -640px; }\n\n.ap-european_castle {\n  background-position: -220px -660px; }\n\n.ap-waving_white_flag {\n  background-position: -220px -680px; }\n\n.ap-waving_black_flag {\n  background-position: -220px -700px; }\n\n.ap-rosette {\n  background-position: -220px -720px; }\n\n.ap-label {\n  background-position: -220px -740px; }\n\n.ap-badminton_racquet_and_shuttlecock {\n  background-position: -220px -760px; }\n\n.ap-bow_and_arrow {\n  background-position: -220px -780px; }\n\n.ap-amphora {\n  background-position: -220px -800px; }\n\n.ap-skin-tone-2 {\n  background-position: -240px -0px; }\n\n.ap-skin-tone-3 {\n  background-position: -240px -20px; }\n\n.ap-skin-tone-4 {\n  background-position: -240px -40px; }\n\n.ap-skin-tone-5 {\n  background-position: -240px -60px; }\n\n.ap-skin-tone-6 {\n  background-position: -240px -80px; }\n\n.ap-rat {\n  background-position: -240px -100px; }\n\n.ap-mouse2 {\n  background-position: -240px -120px; }\n\n.ap-ox {\n  background-position: -240px -140px; }\n\n.ap-water_buffalo {\n  background-position: -240px -160px; }\n\n.ap-cow2 {\n  background-position: -240px -180px; }\n\n.ap-tiger2 {\n  background-position: -240px -200px; }\n\n.ap-leopard {\n  background-position: -240px -220px; }\n\n.ap-rabbit2 {\n  background-position: -240px -240px; }\n\n.ap-cat2 {\n  background-position: -240px -260px; }\n\n.ap-dragon {\n  background-position: -240px -280px; }\n\n.ap-crocodile {\n  background-position: -240px -300px; }\n\n.ap-whale2 {\n  background-position: -240px -320px; }\n\n.ap-snail {\n  background-position: -240px -340px; }\n\n.ap-snake {\n  background-position: -240px -360px; }\n\n.ap-racehorse {\n  background-position: -240px -380px; }\n\n.ap-ram {\n  background-position: -240px -400px; }\n\n.ap-goat {\n  background-position: -240px -420px; }\n\n.ap-sheep {\n  background-position: -240px -440px; }\n\n.ap-monkey {\n  background-position: -240px -460px; }\n\n.ap-rooster {\n  background-position: -240px -480px; }\n\n.ap-chicken {\n  background-position: -240px -500px; }\n\n.ap-dog2 {\n  background-position: -240px -520px; }\n\n.ap-pig2 {\n  background-position: -240px -540px; }\n\n.ap-boar {\n  background-position: -240px -560px; }\n\n.ap-elephant {\n  background-position: -240px -580px; }\n\n.ap-octopus {\n  background-position: -240px -600px; }\n\n.ap-shell {\n  background-position: -240px -620px; }\n\n.ap-bug {\n  background-position: -240px -640px; }\n\n.ap-ant {\n  background-position: -240px -660px; }\n\n.ap-bee {\n  background-position: -240px -680px; }\n\n.ap-beetle {\n  background-position: -240px -700px; }\n\n.ap-fish {\n  background-position: -240px -720px; }\n\n.ap-tropical_fish {\n  background-position: -240px -740px; }\n\n.ap-blowfish {\n  background-position: -240px -760px; }\n\n.ap-turtle {\n  background-position: -240px -780px; }\n\n.ap-hatching_chick {\n  background-position: -240px -800px; }\n\n.ap-baby_chick {\n  background-position: -260px -0px; }\n\n.ap-hatched_chick {\n  background-position: -260px -20px; }\n\n.ap-bird {\n  background-position: -260px -40px; }\n\n.ap-penguin {\n  background-position: -260px -60px; }\n\n.ap-koala {\n  background-position: -260px -80px; }\n\n.ap-poodle {\n  background-position: -260px -100px; }\n\n.ap-dromedary_camel {\n  background-position: -260px -120px; }\n\n.ap-camel {\n  background-position: -260px -140px; }\n\n.ap-dolphin {\n  background-position: -260px -160px; }\n\n.ap-mouse {\n  background-position: -260px -180px; }\n\n.ap-cow {\n  background-position: -260px -200px; }\n\n.ap-tiger {\n  background-position: -260px -220px; }\n\n.ap-rabbit {\n  background-position: -260px -240px; }\n\n.ap-cat {\n  background-position: -260px -260px; }\n\n.ap-dragon_face {\n  background-position: -260px -280px; }\n\n.ap-whale {\n  background-position: -260px -300px; }\n\n.ap-horse {\n  background-position: -260px -320px; }\n\n.ap-monkey_face {\n  background-position: -260px -340px; }\n\n.ap-dog {\n  background-position: -260px -360px; }\n\n.ap-pig {\n  background-position: -260px -380px; }\n\n.ap-frog {\n  background-position: -260px -400px; }\n\n.ap-hamster {\n  background-position: -260px -420px; }\n\n.ap-wolf {\n  background-position: -260px -440px; }\n\n.ap-bear {\n  background-position: -260px -460px; }\n\n.ap-panda_face {\n  background-position: -260px -480px; }\n\n.ap-pig_nose {\n  background-position: -260px -500px; }\n\n.ap-feet {\n  background-position: -260px -520px; }\n\n.ap-chipmunk {\n  background-position: -260px -540px; }\n\n.ap-eyes {\n  background-position: -260px -560px; }\n\n.ap-eye {\n  background-position: -260px -580px; }\n\n.ap-ear {\n  background-position: -260px -600px; }\n\n.ap-nose {\n  background-position: -260px -720px; }\n\n.ap-lips {\n  background-position: -280px -20px; }\n\n.ap-tongue {\n  background-position: -280px -40px; }\n\n.ap-point_up_2 {\n  background-position: -280px -60px; }\n\n.ap-point_down {\n  background-position: -280px -180px; }\n\n.ap-point_left {\n  background-position: -280px -300px; }\n\n.ap-point_right {\n  background-position: -280px -420px; }\n\n.ap-facepunch {\n  background-position: -280px -540px; }\n\n.ap-wave {\n  background-position: -280px -660px; }\n\n.ap-ok_hand {\n  background-position: -280px -780px; }\n\n.ap-+1, .ap-thumbsup {\n  background-position: -300px -80px; }\n\n.ap--1, .ap-thumbsdown {\n  background-position: -300px -200px; }\n\n.ap-clap {\n  background-position: -300px -320px; }\n\n.ap-open_hands {\n  background-position: -300px -440px; }\n\n.ap-crown {\n  background-position: -300px -560px; }\n\n.ap-womans_hat {\n  background-position: -300px -580px; }\n\n.ap-eyeglasses {\n  background-position: -300px -600px; }\n\n.ap-necktie {\n  background-position: -300px -620px; }\n\n.ap-shirt {\n  background-position: -300px -640px; }\n\n.ap-jeans {\n  background-position: -300px -660px; }\n\n.ap-dress {\n  background-position: -300px -680px; }\n\n.ap-kimono {\n  background-position: -300px -700px; }\n\n.ap-bikini {\n  background-position: -300px -720px; }\n\n.ap-womans_clothes {\n  background-position: -300px -740px; }\n\n.ap-purse {\n  background-position: -300px -760px; }\n\n.ap-handbag {\n  background-position: -300px -780px; }\n\n.ap-pouch {\n  background-position: -300px -800px; }\n\n.ap-mans_shoe {\n  background-position: -320px -0px; }\n\n.ap-athletic_shoe {\n  background-position: -320px -20px; }\n\n.ap-high_heel {\n  background-position: -320px -40px; }\n\n.ap-sandal {\n  background-position: -320px -60px; }\n\n.ap-boot {\n  background-position: -320px -80px; }\n\n.ap-footprints {\n  background-position: -320px -100px; }\n\n.ap-bust_in_silhouette {\n  background-position: -320px -120px; }\n\n.ap-busts_in_silhouette {\n  background-position: -320px -140px; }\n\n.ap-boy {\n  background-position: -320px -160px; }\n\n.ap-girl {\n  background-position: -320px -280px; }\n\n.ap-man {\n  background-position: -320px -400px; }\n\n.ap-woman {\n  background-position: -320px -520px; }\n\n.ap-family {\n  background-position: -320px -640px; }\n\n.ap-couple {\n  background-position: -320px -660px; }\n\n.ap-two_men_holding_hands {\n  background-position: -320px -680px; }\n\n.ap-two_women_holding_hands {\n  background-position: -320px -700px; }\n\n.ap-cop {\n  background-position: -320px -720px; }\n\n.ap-dancers {\n  background-position: -340px -20px; }\n\n.ap-bride_with_veil {\n  background-position: -340px -40px; }\n\n.ap-person_with_blond_hair {\n  background-position: -340px -160px; }\n\n.ap-man_with_gua_pi_mao {\n  background-position: -340px -280px; }\n\n.ap-man_with_turban {\n  background-position: -340px -400px; }\n\n.ap-older_man {\n  background-position: -340px -520px; }\n\n.ap-older_woman {\n  background-position: -340px -640px; }\n\n.ap-baby {\n  background-position: -340px -760px; }\n\n.ap-construction_worker {\n  background-position: -360px -60px; }\n\n.ap-princess {\n  background-position: -360px -180px; }\n\n.ap-japanese_ogre {\n  background-position: -360px -300px; }\n\n.ap-japanese_goblin {\n  background-position: -360px -320px; }\n\n.ap-ghost {\n  background-position: -360px -340px; }\n\n.ap-angel {\n  background-position: -360px -360px; }\n\n.ap-alien {\n  background-position: -360px -480px; }\n\n.ap-space_invader {\n  background-position: -360px -500px; }\n\n.ap-imp {\n  background-position: -360px -520px; }\n\n.ap-skull {\n  background-position: -360px -540px; }\n\n.ap-information_desk_person {\n  background-position: -360px -560px; }\n\n.ap-guardsman {\n  background-position: -360px -680px; }\n\n.ap-dancer {\n  background-position: -360px -800px; }\n\n.ap-lipstick {\n  background-position: -380px -100px; }\n\n.ap-nail_care {\n  background-position: -380px -120px; }\n\n.ap-massage {\n  background-position: -380px -240px; }\n\n.ap-haircut {\n  background-position: -380px -360px; }\n\n.ap-barber {\n  background-position: -380px -480px; }\n\n.ap-syringe {\n  background-position: -380px -500px; }\n\n.ap-pill {\n  background-position: -380px -520px; }\n\n.ap-kiss {\n  background-position: -380px -540px; }\n\n.ap-love_letter {\n  background-position: -380px -560px; }\n\n.ap-ring {\n  background-position: -380px -580px; }\n\n.ap-gem {\n  background-position: -380px -600px; }\n\n.ap-couplekiss {\n  background-position: -380px -620px; }\n\n.ap-bouquet {\n  background-position: -380px -640px; }\n\n.ap-couple_with_heart {\n  background-position: -380px -660px; }\n\n.ap-wedding {\n  background-position: -380px -680px; }\n\n.ap-heartbeat {\n  background-position: -380px -700px; }\n\n.ap-broken_heart {\n  background-position: -380px -720px; }\n\n.ap-two_hearts {\n  background-position: -380px -740px; }\n\n.ap-sparkling_heart {\n  background-position: -380px -760px; }\n\n.ap-heartpulse {\n  background-position: -380px -780px; }\n\n.ap-cupid {\n  background-position: -380px -800px; }\n\n.ap-blue_heart {\n  background-position: -400px -0px; }\n\n.ap-green_heart {\n  background-position: -400px -20px; }\n\n.ap-yellow_heart {\n  background-position: -400px -40px; }\n\n.ap-purple_heart {\n  background-position: -400px -60px; }\n\n.ap-gift_heart {\n  background-position: -400px -80px; }\n\n.ap-revolving_hearts {\n  background-position: -400px -100px; }\n\n.ap-heart_decoration {\n  background-position: -400px -120px; }\n\n.ap-diamond_shape_with_a_dot_inside {\n  background-position: -400px -140px; }\n\n.ap-bulb {\n  background-position: -400px -160px; }\n\n.ap-anger {\n  background-position: -400px -180px; }\n\n.ap-bomb {\n  background-position: -400px -200px; }\n\n.ap-zzz {\n  background-position: -400px -220px; }\n\n.ap-boom {\n  background-position: -400px -240px; }\n\n.ap-sweat_drops {\n  background-position: -400px -260px; }\n\n.ap-droplet {\n  background-position: -400px -280px; }\n\n.ap-dash {\n  background-position: -400px -300px; }\n\n.ap-hankey {\n  background-position: -400px -320px; }\n\n.ap-muscle {\n  background-position: -400px -340px; }\n\n.ap-dizzy {\n  background-position: -400px -460px; }\n\n.ap-speech_balloon {\n  background-position: -400px -480px; }\n\n.ap-thought_balloon {\n  background-position: -400px -500px; }\n\n.ap-white_flower {\n  background-position: -400px -520px; }\n\n.ap-100 {\n  background-position: -400px -540px; }\n\n.ap-moneybag {\n  background-position: -400px -560px; }\n\n.ap-currency_exchange {\n  background-position: -400px -580px; }\n\n.ap-heavy_dollar_sign {\n  background-position: -400px -600px; }\n\n.ap-credit_card {\n  background-position: -400px -620px; }\n\n.ap-yen {\n  background-position: -400px -640px; }\n\n.ap-dollar {\n  background-position: -400px -660px; }\n\n.ap-euro {\n  background-position: -400px -680px; }\n\n.ap-pound {\n  background-position: -400px -700px; }\n\n.ap-money_with_wings {\n  background-position: -400px -720px; }\n\n.ap-chart {\n  background-position: -400px -740px; }\n\n.ap-seat {\n  background-position: -400px -760px; }\n\n.ap-computer {\n  background-position: -400px -780px; }\n\n.ap-briefcase {\n  background-position: -400px -800px; }\n\n.ap-minidisc {\n  background-position: -420px -0px; }\n\n.ap-floppy_disk {\n  background-position: -420px -20px; }\n\n.ap-cd {\n  background-position: -420px -40px; }\n\n.ap-dvd {\n  background-position: -420px -60px; }\n\n.ap-file_folder {\n  background-position: -420px -80px; }\n\n.ap-open_file_folder {\n  background-position: -420px -100px; }\n\n.ap-page_with_curl {\n  background-position: -420px -120px; }\n\n.ap-page_facing_up {\n  background-position: -420px -140px; }\n\n.ap-date {\n  background-position: -420px -160px; }\n\n.ap-calendar {\n  background-position: -420px -180px; }\n\n.ap-card_index {\n  background-position: -420px -200px; }\n\n.ap-chart_with_upwards_trend {\n  background-position: -420px -220px; }\n\n.ap-chart_with_downwards_trend {\n  background-position: -420px -240px; }\n\n.ap-bar_chart {\n  background-position: -420px -260px; }\n\n.ap-clipboard {\n  background-position: -420px -280px; }\n\n.ap-pushpin {\n  background-position: -420px -300px; }\n\n.ap-round_pushpin {\n  background-position: -420px -320px; }\n\n.ap-paperclip {\n  background-position: -420px -340px; }\n\n.ap-straight_ruler {\n  background-position: -420px -360px; }\n\n.ap-triangular_ruler {\n  background-position: -420px -380px; }\n\n.ap-bookmark_tabs {\n  background-position: -420px -400px; }\n\n.ap-ledger {\n  background-position: -420px -420px; }\n\n.ap-notebook {\n  background-position: -420px -440px; }\n\n.ap-notebook_with_decorative_cover {\n  background-position: -420px -460px; }\n\n.ap-closed_book {\n  background-position: -420px -480px; }\n\n.ap-book {\n  background-position: -420px -500px; }\n\n.ap-green_book {\n  background-position: -420px -520px; }\n\n.ap-blue_book {\n  background-position: -420px -540px; }\n\n.ap-orange_book {\n  background-position: -420px -560px; }\n\n.ap-books {\n  background-position: -420px -580px; }\n\n.ap-name_badge {\n  background-position: -420px -600px; }\n\n.ap-scroll {\n  background-position: -420px -620px; }\n\n.ap-memo {\n  background-position: -420px -640px; }\n\n.ap-telephone_receiver {\n  background-position: -420px -660px; }\n\n.ap-pager {\n  background-position: -420px -680px; }\n\n.ap-fax {\n  background-position: -420px -700px; }\n\n.ap-satellite_antenna {\n  background-position: -420px -720px; }\n\n.ap-loudspeaker {\n  background-position: -420px -740px; }\n\n.ap-mega {\n  background-position: -420px -760px; }\n\n.ap-outbox_tray {\n  background-position: -420px -780px; }\n\n.ap-inbox_tray {\n  background-position: -420px -800px; }\n\n.ap-package {\n  background-position: -440px -0px; }\n\n.ap-e-mail {\n  background-position: -440px -20px; }\n\n.ap-incoming_envelope {\n  background-position: -440px -40px; }\n\n.ap-envelope_with_arrow {\n  background-position: -440px -60px; }\n\n.ap-mailbox_closed {\n  background-position: -440px -80px; }\n\n.ap-mailbox {\n  background-position: -440px -100px; }\n\n.ap-mailbox_with_mail {\n  background-position: -440px -120px; }\n\n.ap-mailbox_with_no_mail {\n  background-position: -440px -140px; }\n\n.ap-postbox {\n  background-position: -440px -160px; }\n\n.ap-postal_horn {\n  background-position: -440px -180px; }\n\n.ap-newspaper {\n  background-position: -440px -200px; }\n\n.ap-iphone {\n  background-position: -440px -220px; }\n\n.ap-calling {\n  background-position: -440px -240px; }\n\n.ap-vibration_mode {\n  background-position: -440px -260px; }\n\n.ap-mobile_phone_off {\n  background-position: -440px -280px; }\n\n.ap-no_mobile_phones {\n  background-position: -440px -300px; }\n\n.ap-signal_strength {\n  background-position: -440px -320px; }\n\n.ap-camera {\n  background-position: -440px -340px; }\n\n.ap-camera_with_flash {\n  background-position: -440px -360px; }\n\n.ap-video_camera {\n  background-position: -440px -380px; }\n\n.ap-tv {\n  background-position: -440px -400px; }\n\n.ap-radio {\n  background-position: -440px -420px; }\n\n.ap-vhs {\n  background-position: -440px -440px; }\n\n.ap-film_projector {\n  background-position: -440px -460px; }\n\n.ap-prayer_beads {\n  background-position: -440px -480px; }\n\n.ap-twisted_rightwards_arrows {\n  background-position: -440px -500px; }\n\n.ap-repeat {\n  background-position: -440px -520px; }\n\n.ap-repeat_one {\n  background-position: -440px -540px; }\n\n.ap-arrows_clockwise {\n  background-position: -440px -560px; }\n\n.ap-arrows_counterclockwise {\n  background-position: -440px -580px; }\n\n.ap-low_brightness {\n  background-position: -440px -600px; }\n\n.ap-high_brightness {\n  background-position: -440px -620px; }\n\n.ap-mute {\n  background-position: -440px -640px; }\n\n.ap-speaker {\n  background-position: -440px -660px; }\n\n.ap-sound {\n  background-position: -440px -680px; }\n\n.ap-loud_sound {\n  background-position: -440px -700px; }\n\n.ap-battery {\n  background-position: -440px -720px; }\n\n.ap-electric_plug {\n  background-position: -440px -740px; }\n\n.ap-mag {\n  background-position: -440px -760px; }\n\n.ap-mag_right {\n  background-position: -440px -780px; }\n\n.ap-lock_with_ink_pen {\n  background-position: -440px -800px; }\n\n.ap-closed_lock_with_key {\n  background-position: -460px -0px; }\n\n.ap-key {\n  background-position: -460px -20px; }\n\n.ap-lock {\n  background-position: -460px -40px; }\n\n.ap-unlock {\n  background-position: -460px -60px; }\n\n.ap-bell {\n  background-position: -460px -80px; }\n\n.ap-no_bell {\n  background-position: -460px -100px; }\n\n.ap-bookmark {\n  background-position: -460px -120px; }\n\n.ap-link {\n  background-position: -460px -140px; }\n\n.ap-radio_button {\n  background-position: -460px -160px; }\n\n.ap-back {\n  background-position: -460px -180px; }\n\n.ap-end {\n  background-position: -460px -200px; }\n\n.ap-on {\n  background-position: -460px -220px; }\n\n.ap-soon {\n  background-position: -460px -240px; }\n\n.ap-top {\n  background-position: -460px -260px; }\n\n.ap-underage {\n  background-position: -460px -280px; }\n\n.ap-keycap_ten {\n  background-position: -460px -300px; }\n\n.ap-capital_abcd {\n  background-position: -460px -320px; }\n\n.ap-abcd {\n  background-position: -460px -340px; }\n\n.ap-1234 {\n  background-position: -460px -360px; }\n\n.ap-symbols {\n  background-position: -460px -380px; }\n\n.ap-abc {\n  background-position: -460px -400px; }\n\n.ap-fire {\n  background-position: -460px -420px; }\n\n.ap-flashlight {\n  background-position: -460px -440px; }\n\n.ap-wrench {\n  background-position: -460px -460px; }\n\n.ap-hammer {\n  background-position: -460px -480px; }\n\n.ap-nut_and_bolt {\n  background-position: -460px -500px; }\n\n.ap-hocho {\n  background-position: -460px -520px; }\n\n.ap-gun {\n  background-position: -460px -540px; }\n\n.ap-microscope {\n  background-position: -460px -560px; }\n\n.ap-telescope {\n  background-position: -460px -580px; }\n\n.ap-crystal_ball {\n  background-position: -460px -600px; }\n\n.ap-six_pointed_star {\n  background-position: -460px -620px; }\n\n.ap-beginner {\n  background-position: -460px -640px; }\n\n.ap-trident {\n  background-position: -460px -660px; }\n\n.ap-black_square_button {\n  background-position: -460px -680px; }\n\n.ap-white_square_button {\n  background-position: -460px -700px; }\n\n.ap-red_circle {\n  background-position: -460px -720px; }\n\n.ap-large_blue_circle {\n  background-position: -460px -740px; }\n\n.ap-large_orange_diamond {\n  background-position: -460px -760px; }\n\n.ap-large_blue_diamond {\n  background-position: -460px -780px; }\n\n.ap-small_orange_diamond {\n  background-position: -460px -800px; }\n\n.ap-small_blue_diamond {\n  background-position: -480px -0px; }\n\n.ap-small_red_triangle {\n  background-position: -480px -20px; }\n\n.ap-small_red_triangle_down {\n  background-position: -480px -40px; }\n\n.ap-arrow_up_small {\n  background-position: -480px -60px; }\n\n.ap-arrow_down_small {\n  background-position: -480px -80px; }\n\n.ap-om_symbol {\n  background-position: -480px -100px; }\n\n.ap-dove_of_peace {\n  background-position: -480px -120px; }\n\n.ap-kaaba {\n  background-position: -480px -140px; }\n\n.ap-mosque {\n  background-position: -480px -160px; }\n\n.ap-synagogue {\n  background-position: -480px -180px; }\n\n.ap-menorah_with_nine_branches {\n  background-position: -480px -200px; }\n\n.ap-clock1 {\n  background-position: -480px -220px; }\n\n.ap-clock2 {\n  background-position: -480px -240px; }\n\n.ap-clock3 {\n  background-position: -480px -260px; }\n\n.ap-clock4 {\n  background-position: -480px -280px; }\n\n.ap-clock5 {\n  background-position: -480px -300px; }\n\n.ap-clock6 {\n  background-position: -480px -320px; }\n\n.ap-clock7 {\n  background-position: -480px -340px; }\n\n.ap-clock8 {\n  background-position: -480px -360px; }\n\n.ap-clock9 {\n  background-position: -480px -380px; }\n\n.ap-clock10 {\n  background-position: -480px -400px; }\n\n.ap-clock11 {\n  background-position: -480px -420px; }\n\n.ap-clock12 {\n  background-position: -480px -440px; }\n\n.ap-clock130 {\n  background-position: -480px -460px; }\n\n.ap-clock230 {\n  background-position: -480px -480px; }\n\n.ap-clock330 {\n  background-position: -480px -500px; }\n\n.ap-clock430 {\n  background-position: -480px -520px; }\n\n.ap-clock530 {\n  background-position: -480px -540px; }\n\n.ap-clock630 {\n  background-position: -480px -560px; }\n\n.ap-clock730 {\n  background-position: -480px -580px; }\n\n.ap-clock830 {\n  background-position: -480px -600px; }\n\n.ap-clock930 {\n  background-position: -480px -620px; }\n\n.ap-clock1030 {\n  background-position: -480px -640px; }\n\n.ap-clock1130 {\n  background-position: -480px -660px; }\n\n.ap-clock1230 {\n  background-position: -480px -680px; }\n\n.ap-candle {\n  background-position: -480px -700px; }\n\n.ap-mantelpiece_clock {\n  background-position: -480px -720px; }\n\n.ap-hole {\n  background-position: -480px -740px; }\n\n.ap-man_in_business_suit_levitating {\n  background-position: -480px -760px; }\n\n.ap-sleuth_or_spy {\n  background-position: -480px -780px; }\n\n.ap-dark_sunglasses {\n  background-position: -500px -80px; }\n\n.ap-spider {\n  background-position: -500px -100px; }\n\n.ap-spider_web {\n  background-position: -500px -120px; }\n\n.ap-joystick {\n  background-position: -500px -140px; }\n\n.ap-linked_paperclips {\n  background-position: -500px -160px; }\n\n.ap-lower_left_ballpoint_pen {\n  background-position: -500px -180px; }\n\n.ap-lower_left_fountain_pen {\n  background-position: -500px -200px; }\n\n.ap-lower_left_paintbrush {\n  background-position: -500px -220px; }\n\n.ap-lower_left_crayon {\n  background-position: -500px -240px; }\n\n.ap-raised_hand_with_fingers_splayed {\n  background-position: -500px -260px; }\n\n.ap-middle_finger {\n  background-position: -500px -380px; }\n\n.ap-spock-hand {\n  background-position: -500px -500px; }\n\n.ap-desktop_computer {\n  background-position: -500px -620px; }\n\n.ap-printer {\n  background-position: -500px -640px; }\n\n.ap-three_button_mouse {\n  background-position: -500px -660px; }\n\n.ap-trackball {\n  background-position: -500px -680px; }\n\n.ap-frame_with_picture {\n  background-position: -500px -700px; }\n\n.ap-card_index_dividers {\n  background-position: -500px -720px; }\n\n.ap-card_file_box {\n  background-position: -500px -740px; }\n\n.ap-file_cabinet {\n  background-position: -500px -760px; }\n\n.ap-wastebasket {\n  background-position: -500px -780px; }\n\n.ap-spiral_note_pad {\n  background-position: -500px -800px; }\n\n.ap-spiral_calendar_pad {\n  background-position: -520px -0px; }\n\n.ap-compression {\n  background-position: -520px -20px; }\n\n.ap-old_key {\n  background-position: -520px -40px; }\n\n.ap-rolled_up_newspaper {\n  background-position: -520px -60px; }\n\n.ap-dagger_knife {\n  background-position: -520px -80px; }\n\n.ap-speaking_head_in_silhouette {\n  background-position: -520px -100px; }\n\n.ap-left_speech_bubble {\n  background-position: -520px -120px; }\n\n.ap-right_anger_bubble {\n  background-position: -520px -140px; }\n\n.ap-ballot_box_with_ballot {\n  background-position: -520px -160px; }\n\n.ap-world_map {\n  background-position: -520px -180px; }\n\n.ap-mount_fuji {\n  background-position: -520px -200px; }\n\n.ap-tokyo_tower {\n  background-position: -520px -220px; }\n\n.ap-statue_of_liberty {\n  background-position: -520px -240px; }\n\n.ap-japan {\n  background-position: -520px -260px; }\n\n.ap-moyai {\n  background-position: -520px -280px; }\n\n.ap-grinning {\n  background-position: -520px -300px; }\n\n.ap-grin {\n  background-position: -520px -320px; }\n\n.ap-joy {\n  background-position: -520px -340px; }\n\n.ap-smiley {\n  background-position: -520px -360px; }\n\n.ap-smile {\n  background-position: -520px -380px; }\n\n.ap-sweat_smile {\n  background-position: -520px -400px; }\n\n.ap-laughing {\n  background-position: -520px -420px; }\n\n.ap-innocent {\n  background-position: -520px -440px; }\n\n.ap-smiling_imp {\n  background-position: -520px -460px; }\n\n.ap-wink {\n  background-position: -520px -480px; }\n\n.ap-blush {\n  background-position: -520px -500px; }\n\n.ap-yum {\n  background-position: -520px -520px; }\n\n.ap-relieved {\n  background-position: -520px -540px; }\n\n.ap-heart_eyes {\n  background-position: -520px -560px; }\n\n.ap-sunglasses {\n  background-position: -520px -580px; }\n\n.ap-smirk {\n  background-position: -520px -600px; }\n\n.ap-neutral_face {\n  background-position: -520px -620px; }\n\n.ap-expressionless {\n  background-position: -520px -640px; }\n\n.ap-unamused {\n  background-position: -520px -660px; }\n\n.ap-sweat {\n  background-position: -520px -680px; }\n\n.ap-pensive {\n  background-position: -520px -700px; }\n\n.ap-confused {\n  background-position: -520px -720px; }\n\n.ap-confounded {\n  background-position: -520px -740px; }\n\n.ap-kissing {\n  background-position: -520px -760px; }\n\n.ap-kissing_heart {\n  background-position: -520px -780px; }\n\n.ap-kissing_smiling_eyes {\n  background-position: -520px -800px; }\n\n.ap-kissing_closed_eyes {\n  background-position: -540px -0px; }\n\n.ap-stuck_out_tongue {\n  background-position: -540px -20px; }\n\n.ap-stuck_out_tongue_winking_eye {\n  background-position: -540px -40px; }\n\n.ap-stuck_out_tongue_closed_eyes {\n  background-position: -540px -60px; }\n\n.ap-disappointed {\n  background-position: -540px -80px; }\n\n.ap-worried {\n  background-position: -540px -100px; }\n\n.ap-angry {\n  background-position: -540px -120px; }\n\n.ap-rage {\n  background-position: -540px -140px; }\n\n.ap-cry {\n  background-position: -540px -160px; }\n\n.ap-persevere {\n  background-position: -540px -180px; }\n\n.ap-triumph {\n  background-position: -540px -200px; }\n\n.ap-disappointed_relieved {\n  background-position: -540px -220px; }\n\n.ap-frowning {\n  background-position: -540px -240px; }\n\n.ap-anguished {\n  background-position: -540px -260px; }\n\n.ap-fearful {\n  background-position: -540px -280px; }\n\n.ap-weary {\n  background-position: -540px -300px; }\n\n.ap-sleepy {\n  background-position: -540px -320px; }\n\n.ap-tired_face {\n  background-position: -540px -340px; }\n\n.ap-grimacing {\n  background-position: -540px -360px; }\n\n.ap-sob {\n  background-position: -540px -380px; }\n\n.ap-open_mouth {\n  background-position: -540px -400px; }\n\n.ap-hushed {\n  background-position: -540px -420px; }\n\n.ap-cold_sweat {\n  background-position: -540px -440px; }\n\n.ap-scream {\n  background-position: -540px -460px; }\n\n.ap-astonished {\n  background-position: -540px -480px; }\n\n.ap-flushed {\n  background-position: -540px -500px; }\n\n.ap-sleeping {\n  background-position: -540px -520px; }\n\n.ap-dizzy_face {\n  background-position: -540px -540px; }\n\n.ap-no_mouth {\n  background-position: -540px -560px; }\n\n.ap-mask {\n  background-position: -540px -580px; }\n\n.ap-smile_cat {\n  background-position: -540px -600px; }\n\n.ap-joy_cat {\n  background-position: -540px -620px; }\n\n.ap-smiley_cat {\n  background-position: -540px -640px; }\n\n.ap-heart_eyes_cat {\n  background-position: -540px -660px; }\n\n.ap-smirk_cat {\n  background-position: -540px -680px; }\n\n.ap-kissing_cat {\n  background-position: -540px -700px; }\n\n.ap-pouting_cat {\n  background-position: -540px -720px; }\n\n.ap-crying_cat_face {\n  background-position: -540px -740px; }\n\n.ap-scream_cat {\n  background-position: -540px -760px; }\n\n.ap-slightly_frowning_face {\n  background-position: -540px -780px; }\n\n.ap-slightly_smiling_face {\n  background-position: -540px -800px; }\n\n.ap-upside_down_face {\n  background-position: -560px -0px; }\n\n.ap-face_with_rolling_eyes {\n  background-position: -560px -20px; }\n\n.ap-no_good {\n  background-position: -560px -40px; }\n\n.ap-ok_woman {\n  background-position: -560px -160px; }\n\n.ap-bow {\n  background-position: -560px -280px; }\n\n.ap-see_no_evil {\n  background-position: -560px -400px; }\n\n.ap-hear_no_evil {\n  background-position: -560px -420px; }\n\n.ap-speak_no_evil {\n  background-position: -560px -440px; }\n\n.ap-raising_hand {\n  background-position: -560px -460px; }\n\n.ap-raised_hands {\n  background-position: -560px -580px; }\n\n.ap-person_frowning {\n  background-position: -560px -700px; }\n\n.ap-person_with_pouting_face {\n  background-position: -580px -0px; }\n\n.ap-pray {\n  background-position: -580px -120px; }\n\n.ap-rocket {\n  background-position: -580px -240px; }\n\n.ap-helicopter {\n  background-position: -580px -260px; }\n\n.ap-steam_locomotive {\n  background-position: -580px -280px; }\n\n.ap-railway_car {\n  background-position: -580px -300px; }\n\n.ap-bullettrain_side {\n  background-position: -580px -320px; }\n\n.ap-bullettrain_front {\n  background-position: -580px -340px; }\n\n.ap-train2 {\n  background-position: -580px -360px; }\n\n.ap-metro {\n  background-position: -580px -380px; }\n\n.ap-light_rail {\n  background-position: -580px -400px; }\n\n.ap-station {\n  background-position: -580px -420px; }\n\n.ap-tram {\n  background-position: -580px -440px; }\n\n.ap-train {\n  background-position: -580px -460px; }\n\n.ap-bus {\n  background-position: -580px -480px; }\n\n.ap-oncoming_bus {\n  background-position: -580px -500px; }\n\n.ap-trolleybus {\n  background-position: -580px -520px; }\n\n.ap-busstop {\n  background-position: -580px -540px; }\n\n.ap-minibus {\n  background-position: -580px -560px; }\n\n.ap-ambulance {\n  background-position: -580px -580px; }\n\n.ap-fire_engine {\n  background-position: -580px -600px; }\n\n.ap-police_car {\n  background-position: -580px -620px; }\n\n.ap-oncoming_police_car {\n  background-position: -580px -640px; }\n\n.ap-taxi {\n  background-position: -580px -660px; }\n\n.ap-oncoming_taxi {\n  background-position: -580px -680px; }\n\n.ap-car {\n  background-position: -580px -700px; }\n\n.ap-oncoming_automobile {\n  background-position: -580px -720px; }\n\n.ap-blue_car {\n  background-position: -580px -740px; }\n\n.ap-truck {\n  background-position: -580px -760px; }\n\n.ap-articulated_lorry {\n  background-position: -580px -780px; }\n\n.ap-tractor {\n  background-position: -580px -800px; }\n\n.ap-monorail {\n  background-position: -600px -0px; }\n\n.ap-mountain_railway {\n  background-position: -600px -20px; }\n\n.ap-suspension_railway {\n  background-position: -600px -40px; }\n\n.ap-mountain_cableway {\n  background-position: -600px -60px; }\n\n.ap-aerial_tramway {\n  background-position: -600px -80px; }\n\n.ap-ship {\n  background-position: -600px -100px; }\n\n.ap-rowboat {\n  background-position: -600px -120px; }\n\n.ap-speedboat {\n  background-position: -600px -240px; }\n\n.ap-traffic_light {\n  background-position: -600px -260px; }\n\n.ap-vertical_traffic_light {\n  background-position: -600px -280px; }\n\n.ap-construction {\n  background-position: -600px -300px; }\n\n.ap-rotating_light {\n  background-position: -600px -320px; }\n\n.ap-triangular_flag_on_post {\n  background-position: -600px -340px; }\n\n.ap-door {\n  background-position: -600px -360px; }\n\n.ap-no_entry_sign {\n  background-position: -600px -380px; }\n\n.ap-smoking {\n  background-position: -600px -400px; }\n\n.ap-no_smoking {\n  background-position: -600px -420px; }\n\n.ap-put_litter_in_its_place {\n  background-position: -600px -440px; }\n\n.ap-do_not_litter {\n  background-position: -600px -460px; }\n\n.ap-potable_water {\n  background-position: -600px -480px; }\n\n.ap-non-potable_water {\n  background-position: -600px -500px; }\n\n.ap-bike {\n  background-position: -600px -520px; }\n\n.ap-no_bicycles {\n  background-position: -600px -540px; }\n\n.ap-bicyclist {\n  background-position: -600px -560px; }\n\n.ap-mountain_bicyclist {\n  background-position: -600px -680px; }\n\n.ap-walking {\n  background-position: -600px -800px; }\n\n.ap-no_pedestrians {\n  background-position: -620px -100px; }\n\n.ap-children_crossing {\n  background-position: -620px -120px; }\n\n.ap-mens {\n  background-position: -620px -140px; }\n\n.ap-womens {\n  background-position: -620px -160px; }\n\n.ap-restroom {\n  background-position: -620px -180px; }\n\n.ap-baby_symbol {\n  background-position: -620px -200px; }\n\n.ap-toilet {\n  background-position: -620px -220px; }\n\n.ap-wc {\n  background-position: -620px -240px; }\n\n.ap-shower {\n  background-position: -620px -260px; }\n\n.ap-bath {\n  background-position: -620px -280px; }\n\n.ap-bathtub {\n  background-position: -620px -400px; }\n\n.ap-passport_control {\n  background-position: -620px -420px; }\n\n.ap-customs {\n  background-position: -620px -440px; }\n\n.ap-baggage_claim {\n  background-position: -620px -460px; }\n\n.ap-left_luggage {\n  background-position: -620px -480px; }\n\n.ap-couch_and_lamp {\n  background-position: -620px -500px; }\n\n.ap-sleeping_accommodation {\n  background-position: -620px -520px; }\n\n.ap-shopping_bags {\n  background-position: -620px -540px; }\n\n.ap-bellhop_bell {\n  background-position: -620px -560px; }\n\n.ap-bed {\n  background-position: -620px -580px; }\n\n.ap-place_of_worship {\n  background-position: -620px -600px; }\n\n.ap-hammer_and_wrench {\n  background-position: -620px -620px; }\n\n.ap-shield {\n  background-position: -620px -640px; }\n\n.ap-oil_drum {\n  background-position: -620px -660px; }\n\n.ap-motorway {\n  background-position: -620px -680px; }\n\n.ap-railway_track {\n  background-position: -620px -700px; }\n\n.ap-motor_boat {\n  background-position: -620px -720px; }\n\n.ap-small_airplane {\n  background-position: -620px -740px; }\n\n.ap-airplane_departure {\n  background-position: -620px -760px; }\n\n.ap-airplane_arriving {\n  background-position: -620px -780px; }\n\n.ap-satellite {\n  background-position: -620px -800px; }\n\n.ap-passenger_ship {\n  background-position: -640px -0px; }\n\n.ap-zipper_mouth_face {\n  background-position: -640px -20px; }\n\n.ap-money_mouth_face {\n  background-position: -640px -40px; }\n\n.ap-face_with_thermometer {\n  background-position: -640px -60px; }\n\n.ap-nerd_face {\n  background-position: -640px -80px; }\n\n.ap-thinking_face {\n  background-position: -640px -100px; }\n\n.ap-face_with_head_bandage {\n  background-position: -640px -120px; }\n\n.ap-robot_face {\n  background-position: -640px -140px; }\n\n.ap-hugging_face {\n  background-position: -640px -160px; }\n\n.ap-the_horns {\n  background-position: -640px -180px; }\n\n.ap-crab {\n  background-position: -640px -300px; }\n\n.ap-lion_face {\n  background-position: -640px -320px; }\n\n.ap-scorpion {\n  background-position: -640px -340px; }\n\n.ap-turkey {\n  background-position: -640px -360px; }\n\n.ap-unicorn_face {\n  background-position: -640px -380px; }\n\n.ap-cheese_wedge {\n  background-position: -640px -400px; }\n\n.ap-hash {\n  background-position: -640px -420px; }\n\n.ap-keycap_star {\n  background-position: -640px -440px; }\n\n.ap-zero {\n  background-position: -640px -460px; }\n\n.ap-one {\n  background-position: -640px -480px; }\n\n.ap-two {\n  background-position: -640px -500px; }\n\n.ap-three {\n  background-position: -640px -520px; }\n\n.ap-four {\n  background-position: -640px -540px; }\n\n.ap-five {\n  background-position: -640px -560px; }\n\n.ap-six {\n  background-position: -640px -580px; }\n\n.ap-seven {\n  background-position: -640px -600px; }\n\n.ap-eight {\n  background-position: -640px -620px; }\n\n.ap-nine {\n  background-position: -640px -640px; }\n\n.ap-flag-ac {\n  background-position: -640px -660px; }\n\n.ap-flag-ad {\n  background-position: -640px -680px; }\n\n.ap-flag-ae {\n  background-position: -640px -700px; }\n\n.ap-flag-af {\n  background-position: -640px -720px; }\n\n.ap-flag-ag {\n  background-position: -640px -740px; }\n\n.ap-flag-ai {\n  background-position: -640px -760px; }\n\n.ap-flag-al {\n  background-position: -640px -780px; }\n\n.ap-flag-am {\n  background-position: -640px -800px; }\n\n.ap-flag-ao {\n  background-position: -660px -0px; }\n\n.ap-flag-aq {\n  background-position: -660px -20px; }\n\n.ap-flag-ar {\n  background-position: -660px -40px; }\n\n.ap-flag-as {\n  background-position: -660px -60px; }\n\n.ap-flag-at {\n  background-position: -660px -80px; }\n\n.ap-flag-au {\n  background-position: -660px -100px; }\n\n.ap-flag-aw {\n  background-position: -660px -120px; }\n\n.ap-flag-ax {\n  background-position: -660px -140px; }\n\n.ap-flag-az {\n  background-position: -660px -160px; }\n\n.ap-flag-ba {\n  background-position: -660px -180px; }\n\n.ap-flag-bb {\n  background-position: -660px -200px; }\n\n.ap-flag-bd {\n  background-position: -660px -220px; }\n\n.ap-flag-be {\n  background-position: -660px -240px; }\n\n.ap-flag-bf {\n  background-position: -660px -260px; }\n\n.ap-flag-bg {\n  background-position: -660px -280px; }\n\n.ap-flag-bh {\n  background-position: -660px -300px; }\n\n.ap-flag-bi {\n  background-position: -660px -320px; }\n\n.ap-flag-bj {\n  background-position: -660px -340px; }\n\n.ap-flag-bl {\n  background-position: -660px -360px; }\n\n.ap-flag-bm {\n  background-position: -660px -380px; }\n\n.ap-flag-bn {\n  background-position: -660px -400px; }\n\n.ap-flag-bo {\n  background-position: -660px -420px; }\n\n.ap-flag-bq {\n  background-position: -660px -440px; }\n\n.ap-flag-br {\n  background-position: -660px -460px; }\n\n.ap-flag-bs {\n  background-position: -660px -480px; }\n\n.ap-flag-bt {\n  background-position: -660px -500px; }\n\n.ap-flag-bv {\n  background-position: -660px -520px; }\n\n.ap-flag-bw {\n  background-position: -660px -540px; }\n\n.ap-flag-by {\n  background-position: -660px -560px; }\n\n.ap-flag-bz {\n  background-position: -660px -580px; }\n\n.ap-flag-ca {\n  background-position: -660px -600px; }\n\n.ap-flag-cc {\n  background-position: -660px -620px; }\n\n.ap-flag-cd {\n  background-position: -660px -640px; }\n\n.ap-flag-cf {\n  background-position: -660px -660px; }\n\n.ap-flag-cg {\n  background-position: -660px -680px; }\n\n.ap-flag-ch {\n  background-position: -660px -700px; }\n\n.ap-flag-ci {\n  background-position: -660px -720px; }\n\n.ap-flag-ck {\n  background-position: -660px -740px; }\n\n.ap-flag-cl {\n  background-position: -660px -760px; }\n\n.ap-flag-cm {\n  background-position: -660px -780px; }\n\n.ap-flag-cn {\n  background-position: -660px -800px; }\n\n.ap-flag-co {\n  background-position: -680px -0px; }\n\n.ap-flag-cp {\n  background-position: -680px -20px; }\n\n.ap-flag-cr {\n  background-position: -680px -40px; }\n\n.ap-flag-cu {\n  background-position: -680px -60px; }\n\n.ap-flag-cv {\n  background-position: -680px -80px; }\n\n.ap-flag-cw {\n  background-position: -680px -100px; }\n\n.ap-flag-cx {\n  background-position: -680px -120px; }\n\n.ap-flag-cy {\n  background-position: -680px -140px; }\n\n.ap-flag-cz {\n  background-position: -680px -160px; }\n\n.ap-flag-de {\n  background-position: -680px -180px; }\n\n.ap-flag-dg {\n  background-position: -680px -200px; }\n\n.ap-flag-dj {\n  background-position: -680px -220px; }\n\n.ap-flag-dk {\n  background-position: -680px -240px; }\n\n.ap-flag-dm {\n  background-position: -680px -260px; }\n\n.ap-flag-do {\n  background-position: -680px -280px; }\n\n.ap-flag-dz {\n  background-position: -680px -300px; }\n\n.ap-flag-ea {\n  background-position: -680px -320px; }\n\n.ap-flag-ec {\n  background-position: -680px -340px; }\n\n.ap-flag-ee {\n  background-position: -680px -360px; }\n\n.ap-flag-eg {\n  background-position: -680px -380px; }\n\n.ap-flag-eh {\n  background-position: -680px -400px; }\n\n.ap-flag-er {\n  background-position: -680px -420px; }\n\n.ap-flag-es {\n  background-position: -680px -440px; }\n\n.ap-flag-et {\n  background-position: -680px -460px; }\n\n.ap-flag-eu {\n  background-position: -680px -480px; }\n\n.ap-flag-fi {\n  background-position: -680px -500px; }\n\n.ap-flag-fj {\n  background-position: -680px -520px; }\n\n.ap-flag-fk {\n  background-position: -680px -540px; }\n\n.ap-flag-fm {\n  background-position: -680px -560px; }\n\n.ap-flag-fo {\n  background-position: -680px -580px; }\n\n.ap-flag-fr {\n  background-position: -680px -600px; }\n\n.ap-flag-ga {\n  background-position: -680px -620px; }\n\n.ap-flag-gb {\n  background-position: -680px -640px; }\n\n.ap-flag-gd {\n  background-position: -680px -660px; }\n\n.ap-flag-ge {\n  background-position: -680px -680px; }\n\n.ap-flag-gf {\n  background-position: -680px -700px; }\n\n.ap-flag-gg {\n  background-position: -680px -720px; }\n\n.ap-flag-gh {\n  background-position: -680px -740px; }\n\n.ap-flag-gi {\n  background-position: -680px -760px; }\n\n.ap-flag-gl {\n  background-position: -680px -780px; }\n\n.ap-flag-gm {\n  background-position: -680px -800px; }\n\n.ap-flag-gn {\n  background-position: -700px -0px; }\n\n.ap-flag-gp {\n  background-position: -700px -20px; }\n\n.ap-flag-gq {\n  background-position: -700px -40px; }\n\n.ap-flag-gr {\n  background-position: -700px -60px; }\n\n.ap-flag-gs {\n  background-position: -700px -80px; }\n\n.ap-flag-gt {\n  background-position: -700px -100px; }\n\n.ap-flag-gu {\n  background-position: -700px -120px; }\n\n.ap-flag-gw {\n  background-position: -700px -140px; }\n\n.ap-flag-gy {\n  background-position: -700px -160px; }\n\n.ap-flag-hk {\n  background-position: -700px -180px; }\n\n.ap-flag-hm {\n  background-position: -700px -200px; }\n\n.ap-flag-hn {\n  background-position: -700px -220px; }\n\n.ap-flag-hr {\n  background-position: -700px -240px; }\n\n.ap-flag-ht {\n  background-position: -700px -260px; }\n\n.ap-flag-hu {\n  background-position: -700px -280px; }\n\n.ap-flag-ic {\n  background-position: -700px -300px; }\n\n.ap-flag-id {\n  background-position: -700px -320px; }\n\n.ap-flag-ie {\n  background-position: -700px -340px; }\n\n.ap-flag-il {\n  background-position: -700px -360px; }\n\n.ap-flag-im {\n  background-position: -700px -380px; }\n\n.ap-flag-in {\n  background-position: -700px -400px; }\n\n.ap-flag-io {\n  background-position: -700px -420px; }\n\n.ap-flag-iq {\n  background-position: -700px -440px; }\n\n.ap-flag-ir {\n  background-position: -700px -460px; }\n\n.ap-flag-is {\n  background-position: -700px -480px; }\n\n.ap-flag-it {\n  background-position: -700px -500px; }\n\n.ap-flag-je {\n  background-position: -700px -520px; }\n\n.ap-flag-jm {\n  background-position: -700px -540px; }\n\n.ap-flag-jo {\n  background-position: -700px -560px; }\n\n.ap-flag-jp {\n  background-position: -700px -580px; }\n\n.ap-flag-ke {\n  background-position: -700px -600px; }\n\n.ap-flag-kg {\n  background-position: -700px -620px; }\n\n.ap-flag-kh {\n  background-position: -700px -640px; }\n\n.ap-flag-ki {\n  background-position: -700px -660px; }\n\n.ap-flag-km {\n  background-position: -700px -680px; }\n\n.ap-flag-kn {\n  background-position: -700px -700px; }\n\n.ap-flag-kp {\n  background-position: -700px -720px; }\n\n.ap-flag-kr {\n  background-position: -700px -740px; }\n\n.ap-flag-kw {\n  background-position: -700px -760px; }\n\n.ap-flag-ky {\n  background-position: -700px -780px; }\n\n.ap-flag-kz {\n  background-position: -700px -800px; }\n\n.ap-flag-la {\n  background-position: -720px -0px; }\n\n.ap-flag-lb {\n  background-position: -720px -20px; }\n\n.ap-flag-lc {\n  background-position: -720px -40px; }\n\n.ap-flag-li {\n  background-position: -720px -60px; }\n\n.ap-flag-lk {\n  background-position: -720px -80px; }\n\n.ap-flag-lr {\n  background-position: -720px -100px; }\n\n.ap-flag-ls {\n  background-position: -720px -120px; }\n\n.ap-flag-lt {\n  background-position: -720px -140px; }\n\n.ap-flag-lu {\n  background-position: -720px -160px; }\n\n.ap-flag-lv {\n  background-position: -720px -180px; }\n\n.ap-flag-ly {\n  background-position: -720px -200px; }\n\n.ap-flag-ma {\n  background-position: -720px -220px; }\n\n.ap-flag-mc {\n  background-position: -720px -240px; }\n\n.ap-flag-md {\n  background-position: -720px -260px; }\n\n.ap-flag-me {\n  background-position: -720px -280px; }\n\n.ap-flag-mf {\n  background-position: -720px -300px; }\n\n.ap-flag-mg {\n  background-position: -720px -320px; }\n\n.ap-flag-mh {\n  background-position: -720px -340px; }\n\n.ap-flag-mk {\n  background-position: -720px -360px; }\n\n.ap-flag-ml {\n  background-position: -720px -380px; }\n\n.ap-flag-mm {\n  background-position: -720px -400px; }\n\n.ap-flag-mn {\n  background-position: -720px -420px; }\n\n.ap-flag-mo {\n  background-position: -720px -440px; }\n\n.ap-flag-mp {\n  background-position: -720px -460px; }\n\n.ap-flag-mq {\n  background-position: -720px -480px; }\n\n.ap-flag-mr {\n  background-position: -720px -500px; }\n\n.ap-flag-ms {\n  background-position: -720px -520px; }\n\n.ap-flag-mt {\n  background-position: -720px -540px; }\n\n.ap-flag-mu {\n  background-position: -720px -560px; }\n\n.ap-flag-mv {\n  background-position: -720px -580px; }\n\n.ap-flag-mw {\n  background-position: -720px -600px; }\n\n.ap-flag-mx {\n  background-position: -720px -620px; }\n\n.ap-flag-my {\n  background-position: -720px -640px; }\n\n.ap-flag-mz {\n  background-position: -720px -660px; }\n\n.ap-flag-na {\n  background-position: -720px -680px; }\n\n.ap-flag-nc {\n  background-position: -720px -700px; }\n\n.ap-flag-ne {\n  background-position: -720px -720px; }\n\n.ap-flag-nf {\n  background-position: -720px -740px; }\n\n.ap-flag-ng {\n  background-position: -720px -760px; }\n\n.ap-flag-ni {\n  background-position: -720px -780px; }\n\n.ap-flag-nl {\n  background-position: -720px -800px; }\n\n.ap-flag-no {\n  background-position: -740px -0px; }\n\n.ap-flag-np {\n  background-position: -740px -20px; }\n\n.ap-flag-nr {\n  background-position: -740px -40px; }\n\n.ap-flag-nu {\n  background-position: -740px -60px; }\n\n.ap-flag-nz {\n  background-position: -740px -80px; }\n\n.ap-flag-om {\n  background-position: -740px -100px; }\n\n.ap-flag-pa {\n  background-position: -740px -120px; }\n\n.ap-flag-pe {\n  background-position: -740px -140px; }\n\n.ap-flag-pf {\n  background-position: -740px -160px; }\n\n.ap-flag-pg {\n  background-position: -740px -180px; }\n\n.ap-flag-ph {\n  background-position: -740px -200px; }\n\n.ap-flag-pk {\n  background-position: -740px -220px; }\n\n.ap-flag-pl {\n  background-position: -740px -240px; }\n\n.ap-flag-pm {\n  background-position: -740px -260px; }\n\n.ap-flag-pn {\n  background-position: -740px -280px; }\n\n.ap-flag-pr {\n  background-position: -740px -300px; }\n\n.ap-flag-ps {\n  background-position: -740px -320px; }\n\n.ap-flag-pt {\n  background-position: -740px -340px; }\n\n.ap-flag-pw {\n  background-position: -740px -360px; }\n\n.ap-flag-py {\n  background-position: -740px -380px; }\n\n.ap-flag-qa {\n  background-position: -740px -400px; }\n\n.ap-flag-re {\n  background-position: -740px -420px; }\n\n.ap-flag-ro {\n  background-position: -740px -440px; }\n\n.ap-flag-rs {\n  background-position: -740px -460px; }\n\n.ap-flag-ru {\n  background-position: -740px -480px; }\n\n.ap-flag-rw {\n  background-position: -740px -500px; }\n\n.ap-flag-sa {\n  background-position: -740px -520px; }\n\n.ap-flag-sb {\n  background-position: -740px -540px; }\n\n.ap-flag-sc {\n  background-position: -740px -560px; }\n\n.ap-flag-sd {\n  background-position: -740px -580px; }\n\n.ap-flag-se {\n  background-position: -740px -600px; }\n\n.ap-flag-sg {\n  background-position: -740px -620px; }\n\n.ap-flag-sh {\n  background-position: -740px -640px; }\n\n.ap-flag-si {\n  background-position: -740px -660px; }\n\n.ap-flag-sj {\n  background-position: -740px -680px; }\n\n.ap-flag-sk {\n  background-position: -740px -700px; }\n\n.ap-flag-sl {\n  background-position: -740px -720px; }\n\n.ap-flag-sm {\n  background-position: -740px -740px; }\n\n.ap-flag-sn {\n  background-position: -740px -760px; }\n\n.ap-flag-so {\n  background-position: -740px -780px; }\n\n.ap-flag-sr {\n  background-position: -740px -800px; }\n\n.ap-flag-ss {\n  background-position: -760px -0px; }\n\n.ap-flag-st {\n  background-position: -760px -20px; }\n\n.ap-flag-sv {\n  background-position: -760px -40px; }\n\n.ap-flag-sx {\n  background-position: -760px -60px; }\n\n.ap-flag-sy {\n  background-position: -760px -80px; }\n\n.ap-flag-sz {\n  background-position: -760px -100px; }\n\n.ap-flag-ta {\n  background-position: -760px -120px; }\n\n.ap-flag-tc {\n  background-position: -760px -140px; }\n\n.ap-flag-td {\n  background-position: -760px -160px; }\n\n.ap-flag-tf {\n  background-position: -760px -180px; }\n\n.ap-flag-tg {\n  background-position: -760px -200px; }\n\n.ap-flag-th {\n  background-position: -760px -220px; }\n\n.ap-flag-tj {\n  background-position: -760px -240px; }\n\n.ap-flag-tk {\n  background-position: -760px -260px; }\n\n.ap-flag-tl {\n  background-position: -760px -280px; }\n\n.ap-flag-tm {\n  background-position: -760px -300px; }\n\n.ap-flag-tn {\n  background-position: -760px -320px; }\n\n.ap-flag-to {\n  background-position: -760px -340px; }\n\n.ap-flag-tr {\n  background-position: -760px -360px; }\n\n.ap-flag-tt {\n  background-position: -760px -380px; }\n\n.ap-flag-tv {\n  background-position: -760px -400px; }\n\n.ap-flag-tw {\n  background-position: -760px -420px; }\n\n.ap-flag-tz {\n  background-position: -760px -440px; }\n\n.ap-flag-ua {\n  background-position: -760px -460px; }\n\n.ap-flag-ug {\n  background-position: -760px -480px; }\n\n.ap-flag-um {\n  background-position: -760px -500px; }\n\n.ap-flag-us {\n  background-position: -760px -520px; }\n\n.ap-flag-uy {\n  background-position: -760px -540px; }\n\n.ap-flag-uz {\n  background-position: -760px -560px; }\n\n.ap-flag-va {\n  background-position: -760px -580px; }\n\n.ap-flag-vc {\n  background-position: -760px -600px; }\n\n.ap-flag-ve {\n  background-position: -760px -620px; }\n\n.ap-flag-vg {\n  background-position: -760px -640px; }\n\n.ap-flag-vi {\n  background-position: -760px -660px; }\n\n.ap-flag-vn {\n  background-position: -760px -680px; }\n\n.ap-flag-vu {\n  background-position: -760px -700px; }\n\n.ap-flag-wf {\n  background-position: -760px -720px; }\n\n.ap-flag-ws {\n  background-position: -760px -740px; }\n\n.ap-flag-xk {\n  background-position: -760px -760px; }\n\n.ap-flag-ye {\n  background-position: -760px -780px; }\n\n.ap-flag-yt {\n  background-position: -760px -800px; }\n\n.ap-flag-za {\n  background-position: -780px -0px; }\n\n.ap-flag-zm {\n  background-position: -780px -20px; }\n\n.ap-flag-zw {\n  background-position: -780px -40px; }\n\n.ap-man-man-boy {\n  background-position: -780px -60px; }\n\n.ap-man-man-boy-boy {\n  background-position: -780px -80px; }\n\n.ap-man-man-girl {\n  background-position: -780px -100px; }\n\n.ap-man-man-girl-boy {\n  background-position: -780px -120px; }\n\n.ap-man-man-girl-girl {\n  background-position: -780px -140px; }\n\n.ap-man-woman-boy-boy {\n  background-position: -780px -160px; }\n\n.ap-man-woman-girl {\n  background-position: -780px -180px; }\n\n.ap-man-woman-girl-boy {\n  background-position: -780px -200px; }\n\n.ap-man-woman-girl-girl {\n  background-position: -780px -220px; }\n\n.ap-man-heart-man {\n  background-position: -780px -240px; }\n\n.ap-man-kiss-man {\n  background-position: -780px -260px; }\n\n.ap-woman-woman-boy {\n  background-position: -780px -280px; }\n\n.ap-woman-woman-boy-boy {\n  background-position: -780px -300px; }\n\n.ap-woman-woman-girl {\n  background-position: -780px -320px; }\n\n.ap-woman-woman-girl-boy {\n  background-position: -780px -340px; }\n\n.ap-woman-woman-girl-girl {\n  background-position: -780px -360px; }\n\n.ap-woman-heart-woman {\n  background-position: -780px -380px; }\n\n.ap-woman-kiss-woman {\n  background-position: -780px -400px; }\n", ""])
    }
    , function(e, o) {
        e.exports=function(e) {
            return"string"!=typeof e?e: (/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g, '\\"').replace(/\n/g, "\\n")+'"': e)
        }
    }
    , function(e, o) {
        e.exports=function(e) {
            var o=[];
            return o.toString=function() {
                return this.map(function(o) {
                    var n=function(e, o) {
                        var n, a=e[1]||"", r=e[3];
                        if(!r)return a;
                        if(o&&"function"==typeof btoa) {
                            var i=(n=r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"), c=r.sources.map(function(e) {
                                return"/*# sourceURL="+r.sourceRoot+e+" */"
                            }
                            );
                            return[a].concat(c).concat([i]).join("\n")
                        }
                        return[a].join("\n")
                    }
                    (o, e);
                    return o[2]?"@media "+o[2]+"{"+n+"}":n
                }
                ).join("")
            }
            , o.i=function(e, n) {
                "string"==typeof e&&(e=[[null, e, ""]]);
                for(var a= {}
                , r=0;
                r<this.length;
                r++) {
                    var i=this[r][0];
                    "number"==typeof i&&(a[i]=!0)
                }
                for(r=0;
                r<e.length;
                r++) {
                    var c=e[r];
                    "number"==typeof c[0]&&a[c[0]]||(n&&!c[2]?c[2]=n: n&&(c[2]="("+c[2]+") and ("+n+")"), o.push(c))
                }
            }
            , o
        }
    }
    , function(e, o, n) {
        e.exports=n.p+"1e7b63404cd2fb8e6525b2fd4ee4d286.png"
    }
    , function(e, o, n) {
        var a, r, i= {}
        , c=(a=function() {
            return window&&document&&document.all&&!window.atob
        }
        , function() {
            return void 0===r&&(r=a.apply(this, arguments)), r
        }
        ), t=function(e) {
            var o= {}
            ;
            return function(e, n) {
                if("function"==typeof e)return e();
                if(void 0===o[e]) {
                    var a=function(e, o) {
                        return o?o.querySelector(e): document.querySelector(e)
                    }
                    .call(this, e, n);
                    if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try {
                        a=a.contentDocument.head
                    }
                    catch(e) {
                        a=null
                    }
                    o[e]=a
                }
                return o[e]
            }
        }
        (), d=null, p=0, m=[], s=n(13);
        function l(e, o) {
            for(var n=0;
            n<e.length;
            n++) {
                var a=e[n], r=i[a.id];
                if(r) {
                    r.refs++;
                    for(var c=0;
                    c<r.parts.length;
                    c++)r.parts[c](a.parts[c]);
                    for(;
                    c<a.parts.length;
                    c++)r.parts.push(h(a.parts[c], o))
                }
                else {
                    var t=[];
                    for(c=0;
                    c<a.parts.length;
                    c++)t.push(h(a.parts[c], o));
                    i[a.id]= {
                        id: a.id, refs: 1, parts: t
                    }
                }
            }
        }
        function g(e, o) {
            for(var n=[], a= {}
            , r=0;
            r<e.length;
            r++) {
                var i=e[r], c=o.base?i[0]+o.base:i[0], t= {
                    css: i[1], media: i[2], sourceMap: i[3]
                }
                ;
                a[c]?a[c].parts.push(t):n.push(a[c]= {
                    id: c, parts: [t]
                }
                )
            }
            return n
        }
        function _(e, o) {
            var n=t(e.insertInto);
            if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var a=m[m.length-1];
            if("top"===e.insertAt)a?a.nextSibling?n.insertBefore(o, a.nextSibling): n.appendChild(o): n.insertBefore(o, n.firstChild), m.push(o);
            else if("bottom"===e.insertAt)n.appendChild(o);
            else {
                if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var r=t(e.insertAt.before, n);
                n.insertBefore(o, r)
            }
        }
        function u(e) {
            if(null===e.parentNode)return!1;
            e.parentNode.removeChild(e);
            var o=m.indexOf(e);
            o>=0&&m.splice(o, 1)
        }
        function f(e) {
            var o=document.createElement("style");
            if(void 0===e.attrs.type&&(e.attrs.type="text/css"), void 0===e.attrs.nonce) {
                var a=n.nc;
                a&&(e.attrs.nonce=a)
            }
            return x(o, e.attrs), _(e, o), o
        }
        function x(e, o) {
            Object.keys(o).forEach(function(n) {
                e.setAttribute(n, o[n])
            }
            )
        }
        function h(e, o) {
            var n, a, r, i;
            if(o.transform&&e.css) {
                if(!(i=o.transform(e.css)))return function() {}
                ;
                e.css=i
            }
            if(o.singleton) {
                var c=p++;
                n=d||(d=f(o)), a=y.bind(null, n, c, !1), r=y.bind(null, n, c, !0)
            }
            else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e) {
                var o=document.createElement("link");
                return void 0===e.attrs.type&&(e.attrs.type="text/css"), e.attrs.rel="stylesheet", x(o, e.attrs), _(e, o), o
            }
            (o), a=function(e, o, n) {
                var a=n.css, r=n.sourceMap, i=void 0===o.convertToAbsoluteUrls&&r;
                (o.convertToAbsoluteUrls||i)&&(a=s(a)), r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");
                var c=new Blob([a], {
                    type: "text/css"
                }
                ), t=e.href;
                e.href=URL.createObjectURL(c), t&&URL.revokeObjectURL(t)
            }
            .bind(null, n, o), r=function() {
                u(n), n.href&&URL.revokeObjectURL(n.href)
            }
            ):(n=f(o), a=function(e, o) {
                var n=o.css, a=o.media;
                if(a&&e.setAttribute("media", a), e.styleSheet)e.styleSheet.cssText=n;
                else {
                    for(;
                    e.firstChild;
                    )e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }
            .bind(null, n), r=function() {
                u(n)
            }
            );
            return a(e), function(o) {
                if(o) {
                    if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;
                    a(e=o)
                }
                else r()
            }
        }
        e.exports=function(e, o) {
            if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");
            (o=o|| {}
            ).attrs="object"==typeof o.attrs?o.attrs: {}
            , o.singleton||"boolean"==typeof o.singleton||(o.singleton=c()), o.insertInto||(o.insertInto="head"), o.insertAt||(o.insertAt="bottom");
            var n=g(e, o);
            return l(n, o), function(e) {
                for(var a=[], r=0;
                r<n.length;
                r++) {
                    var c=n[r];
                    (t=i[c.id]).refs--, a.push(t)
                }
                for(e&&l(g(e, o), o), r=0;
                r<a.length;
                r++) {
                    var t;
                    if(0===(t=a[r]).refs) {
                        for(var d=0;
                        d<t.parts.length;
                        d++)t.parts[d]();
                        delete i[t.id]
                    }
                }
            }
        }
        ;
        var b, k=(b=[], function(e, o) {
            return b[e]=o, b.filter(Boolean).join("\n")
        }
        );
        function y(e, o, n, a) {
            var r=n?"": a.css;
            if(e.styleSheet)e.styleSheet.cssText=k(o, r);
            else {
                var i=document.createTextNode(r), c=e.childNodes;
                c[o]&&e.removeChild(c[o]), c.length?e.insertBefore(i, c[o]): e.appendChild(i)
            }
        }
    }
    , function(e, o) {
        e.exports=function(e) {
            var o="undefined"!=typeof window&&window.location;
            if(!o)throw new Error("fixUrls requires window.location");
            if(!e||"string"!=typeof e)return e;
            var n=o.protocol+"//"+o.host, a=n+o.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?: [^)(]|\((?: [^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, o) {
                var r, i=o.trim().replace(/^"(.*)"$/, function(e, o) {
                    return o
                }
                ).replace(/^'(.*)'$/, function(e, o) {
                    return o
                }
                );
                return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:a+i.replace(/^\.\ //,""),"url("+JSON.stringify(r)+")")})}}])});