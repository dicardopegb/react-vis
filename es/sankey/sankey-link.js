var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import { DISCRETE_COLOR_RANGE } from '../theme';
import Animation from '../animation';
import { ANIMATED_SERIES_PROPS } from '../utils/series-utils';

var DEFAULT_LINK_COLOR = DISCRETE_COLOR_RANGE[1];
var DEFAULT_LINK_OPACITY = 0.7;

function SankeyLink(props) {
  var animation = props.animation,
      data = props.data,
      node = props.node,
      opacity = props.opacity,
      color = props.color,
      strokeWidth = props.strokeWidth,
      style = props.style,
      onLinkClick = props.onLinkClick,
      onLinkMouseOver = props.onLinkMouseOver,
      onLinkMouseOut = props.onLinkMouseOut;

  if (animation) {
    return React.createElement(
      Animation,
      _extends({}, props, { animatedProps: ANIMATED_SERIES_PROPS }),
      React.createElement(SankeyLink, _extends({}, props, { animation: null }))
    );
  }
  return React.createElement('path', _extends({
    d: data
  }, style, {
    className: 'rv-sankey__link',
    opacity: Number.isFinite(opacity) ? opacity : DEFAULT_LINK_OPACITY,
    stroke: color || DEFAULT_LINK_COLOR,
    onClick: function onClick(e) {
      return onLinkClick(node, e);
    },
    onMouseOver: function onMouseOver(e) {
      return onLinkMouseOver(node, e);
    },
    onMouseOut: function onMouseOut(e) {
      return onLinkMouseOut(node, e);
    },
    strokeWidth: strokeWidth,
    fill: 'none'
  }));
}

SankeyLink.displayName = 'SankeyLink';
SankeyLink.requiresSVG = true;
export default SankeyLink;