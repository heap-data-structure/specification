[js-heap-spec](http://aureooms.github.io/js-heap-spec)
==

Heap specification library in JavaScript. Parent is
[aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

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

[![NPM license](http://img.shields.io/npm/l/aureooms-js-heap-spec.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-heap-spec/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-heap-spec.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-heap-spec)
[![Build Status](http://img.shields.io/travis/aureooms/js-heap-spec.svg?style=flat)](https://travis-ci.org/aureooms/js-heap-spec)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-heap-spec.svg?style=flat)](https://coveralls.io/r/aureooms/js-heap-spec)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-heap-spec.svg?style=flat)](https://david-dm.org/aureooms/js-heap-spec#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-heap-spec.svg?style=flat)](https://david-dm.org/aureooms/js-heap-spec#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-heap-spec.svg?style=flat)](https://codeclimate.com/github/aureooms/js-heap-spec)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-heap-spec.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-heap-spec)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-heap-spec.svg?style=flat)](https://github.com/aureooms/js-heap-spec/issues)
[![Documentation](https://aureooms.github.io/js-heap-spec/badge.svg)](https://aureooms.github.io/js-heap-spec/source.html)

## Description

This package contains a specification test suite for heap implementations such
as
[aureooms/js-d-ary-heap](https://github.com/aureooms/js-d-ary-heap),
[aureooms/js-pairing-heap](https://github.com/aureooms/js-pairing-heap),
and
[aureooms/js-binomial-heap](https://github.com/aureooms/js-binomial-heap).

## Binary and binomial heap reference

  - http://www.cs.princeton.edu/~wayne/cs423/lectures/heaps-4up.pdf
  - http://stackoverflow.com/questions/6531543/efficient-implementation-of-binary-heaps
