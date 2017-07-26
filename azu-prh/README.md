# A collection of `prh.yml` [![Build Status](https://travis-ci.org/azu/prh.yml.svg?branch=master)](https://travis-ci.org/azu/prh.yml)

A collection of dictionary for [prh](https://github.com/vvakame/prh "prh").

## Requirement

You should install [prh](https://github.com/vvakame/prh "prh") or [textlint-rule-prh](https://github.com/azu/textlint-rule-prh/releases/tag/2.4.0 "textlint-rule-prh").

[textlint-rule-prh](https://github.com/azu/textlint-rule-prh/releases/tag/2.4.0 "textlint-rule-prh") with [textlint](https://github.com/textlint/textlint "textlint") >= 7.1.2

<!-- Don't edit. "Dictionary" is generated by .meta -->
## Dictionary 

- [css.yml](css.yml) -  CSS Dictionary
- [javascript.yml](javascript.yml) -  JavaScript Dictionary
- [other.yml](other.yml) -  Other
- [software.yml](software.yml) -  Software dictionary
- [ja/jser-info.yml](ja/jser-info.yml) -  JSer.info 特有の表現統一の辞書
- [ja/kanji-open.yml](ja/kanji-open.yml) -  漢字の開きをチェックする辞書
- [ja/spoken.yml](ja/spoken.yml) -  口語表現をチェックする辞書
- [ja/typo.yml](ja/typo.yml) -  明らかなtypoをチェックする辞書
- [ja/web+db.yml](ja/web+db.yml) -  WEB+DB PRESS用語統一ファイルをよりゆるやかにした辞書

## Usage

### Add to your project

    git subtree add --prefix=prh https://github.com/azu/prh.yml.git master --squash

### Update exist rules

    git subtree pull --prefix=prh https://github.com/azu/prh.yml.git master --squash

## Setting of `prh.yml`

You can import these prh dictionary files from main `prh.yml`.

```yml
version: 1
imports:
  - prh/ja/jser-info.yml
  - prh/ja/kanji-open.yml
  - prh/ja/spoken.yml
  - prh/ja/typo.yml
  - prh/javascript.yml
  - prh/css.yml
  - prh/software.yml
rules:
  # project configuration
  - expected: Almin
    patterns: /almin.js/i
```

## Folder structure

The files in the root directory are for `*.yml` file that are project specific, such as programming language or framework specific templates. 
Natural language file should go into the `<lang>/` directory.

e.g.) `ja/typo.yml` define typo for japanese.

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/prh/issues).

1. Edit some.yml file
2. Add `expected` and `patterns`, also add `specs`.
3. Send Pull Request! 

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu