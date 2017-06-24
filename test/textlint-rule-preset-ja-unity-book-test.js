"use strict";
const assert = require("assert");
const rules = require("../lib/textlint-rule-preset-ja-unity-book").rules;
const rulesConfig = require("../lib/textlint-rule-preset-ja-unity-book").rulesConfig;
describe("textlint-rule-preset-ja-unity-book", function() {
    it("not missing key", function() {
        const ruleKeys = Object.keys(rules).sort();
        const ruleConfigKeys = Object.keys(rulesConfig).sort();
        assert.deepEqual(ruleKeys, ruleConfigKeys);
    });
});