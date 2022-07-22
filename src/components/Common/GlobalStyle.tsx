//전역스타일

import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KBIZHanmaumGothic.woff');
 
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'KBIZHanmaumGothic';
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
    //강원현옥샘
    @font-face {
    font-family: 'GangwonEduHyeonokT_OTFMediumA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduHyeonokT_OTFMediumA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    //봉숭아틴트
    @font-face {
      font-family: '777Balsamtint';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/777Balsamtint.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    //KBIZ한마음고딕체
    @font-face {
      font-family: 'KBIZHanmaumGothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KBIZHanmaumGothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle



