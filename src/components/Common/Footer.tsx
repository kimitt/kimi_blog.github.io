import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.footer`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
  font-family: 'KBIZHanmaumGothic';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KBIZHanmaumGothic.woff');

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 🍕🍕
      <br />© 2022 Developer Kimi, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer