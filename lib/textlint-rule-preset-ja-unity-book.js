// LICENSE : MIT
"use strict";
var technicalRules = require("textlint-rule-preset-ja-technical-writing").rules;
module.exports = {
    rules: Object.assign(technicalRules, {

    }),
    rulesConfig: {
        // # 1文の長さは90文字以下とする
        // https://github.com/azu/textlint-rule-sentence-length
        "sentence-length": {
            max: 90
        },
        // # コンマは1文中に3つまで
        // https://github.com/azu/textlint-rule-max-comma
        "max-comma": {
            max: 3
        },
        // # 読点は1文中に3つまで
        // https://github.com/azu/textlint-rule-max-ten
        "max-ten": {
            max: 3
        },
        // # 連続できる最大の漢字長は5文字まで
        // 漢字が連続していると読みにくさにつながります。
        // https://github.com/azu/textlint-rule-max-kanji-continuous-len
        "max-kanji-continuous-len": {
            max: 5
        },
        // # 漢数字と算用数字を使い分けます
        // 数量を表現し、数を数えられるものは算用数字を使用します。
        // 任意の数に置き換えても通用する語句がこれに該当します。
        // 序数詞（「第～回」「～番目」「～回目」）も算用数字を使います。
        // 慣用的表現、熟語、概数、固有名詞、副詞など、漢数字を使用することが一般的な語句では漢数字を使います。
        // https://github.com/azu/textlint-rule-preset-JTF-style
        // https://www.jtf.jp/jp/style_guide/styleguide_top.html
        "arabic-kanji-numbers": true,
        // # 「ですます調」、「である調」を統一します
        // 見出しは自動
        // 本文はですます調
        // 箇条書きはである調
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        "no-mix-dearu-desumasu": {
            "preferInHeader": "",
            "preferInBody": "ですます",
            "preferInList": "である",
            "strict": false
        },
        // # 文末の句点記号として「。」を使います
        // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
        "ja-no-mixed-period": {
            "periodMark": "。"
        },
        // # 二重否定は使用しない
        // https://github.com/azu/textlint-rule-no-double-negative-ja
        "no-double-negative-ja": true,
        // # ら抜き言葉を使用しない
        // https://github.com/azu/textlint-rule-no-dropping-the-ra
        "no-dropping-the-ra": true,
        // # 逆接の接続助詞「が」を連続して使用しない
        // 逆接の接続助詞「が」は、特に否定の意味ではなくても安易に使われてしまいがちです。
        // 同一文中に複数回出現していないかどうかをチェックします。
        // https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
        "no-doubled-conjunctive-particle-ga": true,
        // # 同じ接続詞を連続して使用しない
        // https://github.com/takahashim/textlint-rule-no-doubled-conjunction
        "no-doubled-conjunction": true,
        // # 同じ助詞を連続して使用しない
        "no-doubled-joshi": {
            "min_interval": 1
        },
        // # UTF8-MAC 濁点を使用しない
        // 文章中にUTF8-MAC 濁点は不要です。
        // https://github.com/azu/textlint-rule-no-nfd
        "no-nfd": true,
        // # 感嘆符!！、疑問符?？を使用しない
        // https://github.com/azu/textlint-rule-no-exclamation-question-mark
        "no-exclamation-question-mark": true,
        // # 半角カナを使用しない
        // https://github.com/azu/textlint-rule-no-hankaku-kana
        "no-hankaku-kana": true,
        // # 弱い日本語表現の利用を使用しない
        // 〜かもしれない 等の弱い表現を使用しない
        // https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase
        "ja-no-weak-phrase": true,
        // # 同一の単語を間違えて連続しているのをチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
        "ja-no-successive-word": true,
        // # よくある日本語の誤用をチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
        "ja-no-abusage": true,

        "no-start-duplicated-conjunction": true
    }
};