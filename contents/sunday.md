---
date: '2020-08-28'
title: '함수형 자바스크립트'
categories: ['Javascript', 'Study']
summary: '인프런:함수형 프로그래밍과 JavaScript ES6+ / 모던자바스크립트 Deep Dive'
thumbnail: './000030.JPG'
---

### 함수형 자바스크립트 기본기

# 평가 : 코드가 계산 되어 값을 만드는 것
# 일급객체 
  - 무명의 리터럴로 생성할 수 있다(런타임에 생성 가능)
  - 변수나 자료구조(객체, 배열 등)에 저장
  - 함수의 매개변수에 전달(인자)
  - 함수의 반환값으로 사용(결과)

# 자바스크립트에서는 함수가 일급 = 함수를 값으로 다룰 수 있다.(조합성과 추상화의 도구)

# 고차함수 : 함수를 값으로 다루는 함수
  - 함수를 인자로 받아 실행하는 함수 
  <script>
    const apply1 = f => f(1);
    const add2 = a => a + 2;
    log(apply1(add2)); //3 => add2라는 함수를 받아서 apply1 안에서 실행
    log(apply1(a => a-1)); //0 
  </script>

  - 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
  <script>
    const addMaker = a => b => a + b; // b => a + b 함수는 a를 기억하는 클로저 함수
    const add10 = addMaker(10);
    log(add10); // b => a + b
    log(add10(5)); // 15
  </script>
