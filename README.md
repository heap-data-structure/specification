:mount_fuji: [@aureooms/js-heap-spec](https://make-github-pseudonymous-again.github.io/js-heap-spec)
==

Heap specification library for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-heap-spec).
Parent is [aureooms/js-heap](https://github.com/make-github-pseudonymous-again/js-heap).

```js
// eslint-disable-next-line ava/use-test
import ava from 'ava' ;
import * as spec from '@aureooms/js-heap-spec' ;

spec.test(
  ava ,
  [
    [
      "DummyHeap" , // Name for the implementation
      compare => new spec.DummyHeap(compare) // Return an empty heap using `compare` to order priorities
    ]
  ] ,
  {
    references : true , // Do the implementations maintain references?
    length : true , // Do the implementations maintain a `length` property?
    lengths : [[0], [1], [16], [17], [31], [32], [33], [63], [64], [65]] ,
    lengths1 : [[0], [1], [16], [17], [31], [32], [33], [63], [64], [65]] , // for merge/meld test
    lengths2 : [[0], [1], [16], [17], [31], [32], [33], [63], [64], [65]] ,  // for merge/meld test
  }
) ;
```

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-heap-spec.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-heap-spec/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-heap-spec.svg)](https://www.npmjs.org/package/@aureooms/js-heap-spec)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-heap-spec/main.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-heap-spec/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-heap-spec.svg)](https://david-dm.org/make-github-pseudonymous-again/js-heap-spec)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-heap-spec.svg)](https://david-dm.org/make-github-pseudonymous-again/js-heap-spec?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-heap-spec.svg)](https://github.com/make-github-pseudonymous-again/js-heap-spec/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-heap-spec.svg)](https://www.npmjs.org/package/@aureooms/js-heap-spec)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-heap-spec.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-heap-spec/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-heap-spec.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-heap-spec/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-heap-spec/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-heap-spec)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-heap-spec.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-heap-spec/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-heap-spec//badge.svg)](https://make-github-pseudonymous-again.github.io/js-heap-spec//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-heap-spec)](https://bundlephobia.com/result?p=@aureooms/js-heap-spec)

## Description

This package contains a specification test suite for heap implementations such
as
[@aureooms/js-d-ary-heap](https://github.com/make-github-pseudonymous-again/js-d-ary-heap),
[@aureooms/js-pairing-heap](https://github.com/make-github-pseudonymous-again/js-pairing-heap),
[@aureooms/js-binomial-heap](https://github.com/make-github-pseudonymous-again/js-binomial-heap),
and
[@aureooms/js-fibonacci-heap](https://github.com/make-github-pseudonymous-again/js-fibonacci-heap).

## :scroll: Binary and binomial heap reference

  - http://www.cs.princeton.edu/~wayne/cs423/lectures/heaps-4up.pdf
  - http://stackoverflow.com/questions/6531543/efficient-implementation-of-binary-heaps
