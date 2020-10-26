:mount_fuji: [@aureooms/js-heap-spec](https://aureooms.github.io/js-heap-spec)
==

Heap specification library for JavaScript.
See [docs](https://aureooms.github.io/js-heap-spec).
Parent is [aureooms/js-heap](https://github.com/aureooms/js-heap).

```js
import ava from 'ava' ;
spec.test(
  ava ,
  [ [ "DummyHeap" , compare => new spec.DummyHeap(compare) ] ] ,
  {
    references : true ,
    length : true ,
  }
) ;
```

[![License](https://img.shields.io/github/license/aureooms/js-heap-spec.svg)](https://raw.githubusercontent.com/aureooms/js-heap-spec/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-heap-spec.svg)](https://www.npmjs.org/package/@aureooms/js-heap-spec)
[![Build](https://img.shields.io/travis/aureooms/js-heap-spec/main.svg)](https://travis-ci.org/aureooms/js-heap-spec/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-heap-spec.svg)](https://david-dm.org/aureooms/js-heap-spec)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-heap-spec.svg)](https://david-dm.org/aureooms/js-heap-spec?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-heap-spec.svg)](https://github.com/aureooms/js-heap-spec/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-heap-spec.svg)](https://www.npmjs.org/package/@aureooms/js-heap-spec)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-heap-spec.svg)](https://codeclimate.com/github/aureooms/js-heap-spec/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-heap-spec.svg)](https://codeclimate.com/github/aureooms/js-heap-spec/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-heap-spec/main.svg)](https://codecov.io/gh/aureooms/js-heap-spec)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-heap-spec.svg)](https://codeclimate.com/github/aureooms/js-heap-spec/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-heap-spec//badge.svg)](https://aureooms.github.io/js-heap-spec//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-heap-spec)](https://bundlephobia.com/result?p=@aureooms/js-heap-spec)

## Description

This package contains a specification test suite for heap implementations such
as
[@aureooms/js-d-ary-heap](https://github.com/aureooms/js-d-ary-heap),
[@aureooms/js-pairing-heap](https://github.com/aureooms/js-pairing-heap),
[@aureooms/js-binomial-heap](https://github.com/aureooms/js-binomial-heap),
and
[@aureooms/js-fibonacci-heap](https://github.com/aureooms/js-fibonacci-heap).

## :scroll: Binary and binomial heap reference

  - http://www.cs.princeton.edu/~wayne/cs423/lectures/heaps-4up.pdf
  - http://stackoverflow.com/questions/6531543/efficient-implementation-of-binary-heaps
