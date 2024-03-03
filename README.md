:mount_fuji: [@heap-data-structure/specification](https://heap-data-structure.github.io/specification)
==

Heap specification library for JavaScript.
See [docs](https://heap-data-structure.github.io/specification).
Parent is [@heap-data-structure](https://github.com/heap-data-structure/about).

```js
// eslint-disable-next-line ava/use-test
import ava from 'ava' ;
import * as spec from '@heap-data-structure/specification' ;

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

[![License](https://img.shields.io/github/license/heap-data-structure/specification.svg)](https://raw.githubusercontent.com/heap-data-structure/specification/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@heap-data-structure/specification.svg)](https://www.npmjs.org/package/@heap-data-structure/specification)
[![Tests](https://img.shields.io/github/workflow/status/heap-data-structure/specification/ci:test?event=push&label=tests)](https://github.com/heap-data-structure/specification/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/heap-data-structure/specification.svg)](https://github.com/heap-data-structure/specification/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/heap-data-structure/specification.svg)](https://github.com/heap-data-structure/specification/issues)
[![Downloads](https://img.shields.io/npm/dm/@heap-data-structure/specification.svg)](https://www.npmjs.org/package/@heap-data-structure/specification)

[![Code issues](https://img.shields.io/codeclimate/issues/heap-data-structure/specification.svg)](https://codeclimate.com/github/heap-data-structure/specification/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/heap-data-structure/specification.svg)](https://codeclimate.com/github/heap-data-structure/specification/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/heap-data-structure/specification/main.svg)](https://codecov.io/gh/heap-data-structure/specification)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/heap-data-structure/specification.svg)](https://codeclimate.com/github/heap-data-structure/specification/trends/technical_debt)
[![Documentation](https://heap-data-structure.github.io/specification/badge.svg)](https://heap-data-structure.github.io/specification/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@heap-data-structure/specification)](https://bundlephobia.com/result?p=@heap-data-structure/specification)

## :newspaper: Description

This package contains a specification test suite for heap implementations such
as
[@heap-data-structure/d-ary-heap](https://github.com/heap-data-structure/d-ary-heap),
[@heap-data-structure/pairing-heap](https://github.com/heap-data-structure/pairing-heap),
[@heap-data-structure/binomial-heap](https://github.com/heap-data-structure/binomial-heap),
and
[@heap-data-structure/fibonacci-heap](https://github.com/heap-data-structure/fibonacci-heap).

## :scroll: Reference

  - [Binomial heap](https://www.cs.princeton.edu/~wayne/cs423/lectures/heaps-4up.pdf)
  - [Binary heap](https://stackoverflow.com/questions/6531543/efficient-implementation-of-binary-heaps)
