"use strict";
const Q = require("q");
const conventionalChangelog = require("./conventional-changelog");
const parserOpts = require("./parser-opts");
const recommendedBumpOpts = require("./conventional-recommended-bump");
const writerOpts = require("./writer-opts");
// 格式化 git log 信息
const gitRawCommitsOpts = require("./git-raw-commit");

let context = {
  // gitlab提交链接为/commit/xxx, github提交链接为/commits/xxx 
  commit: 'commit',
  // jira的bug的前缀地址
  // jiraUrlPrefix: 'http://jira.intra.gomeplus.com/browse'
  // http://chandao.gome.inc/bug-view-3926.html
  chandaoUrlPrefix: 'http://chandao.gome.inc/bug-view'
};

module.exports = Q.all([
  conventionalChangelog,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
  gitRawCommitsOpts
]).spread(
  (
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
    gitRawCommitsOpts
  ) => {
    return {
      context,
      conventionalChangelog,
      parserOpts,
      recommendedBumpOpts,
      writerOpts,
      gitRawCommitsOpts
    }
  }
);
