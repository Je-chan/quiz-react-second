import React from "react";

// > 리덕스 관련
// 라우팅 없이 상태에 따라 구조가 바뀌도록 설정함
import { useSelector, useDispatch } from "react-redux";
import { next, reset } from "./store/modules/score";

// > 컴포넌트 관련
import { PinkButton } from "./components/PinkButton";
import { Quiz } from "./components/Quiz";

import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 360px;
  margin: auto;
  text-align: center;
  margin: 50px auto;
`;

const MainImg = styled.img`
  width: inherit;
  margin-bottom: 30px;
  border-radius: 10px;
`;

const Header = styled.h1`
  margin: 0 0 30px 0;
`;
const SubHeader = styled.h2`
  font-size: 1.1em;
  color: #8a8e90;
  font-weight: 400;
  margin-bottom: 30px;
`;

const Score = styled.div`
  font-size: 4em;
  color: #f92b46;
`;
function App() {
  const page = useSelector((state) => state.score.page);
  const score = useSelector((state) => state.score.score);
  const quizzes = useSelector((state) => state.score.quizzes);
  const dispatch = useDispatch();

  return (
    <>
      {page === 0 && (
        <Main>
          <MainImg src="/city/main.jpeg" alt="메인" />
          <Header>나라별 수도 퀴즈</Header>
          <SubHeader></SubHeader>
          <PinkButton
            text="테스트 시작"
            clickEvent={() => {
              dispatch(next());
            }}
          ></PinkButton>
        </Main>
      )}
      {page > 0 && page <= quizzes.length && (
        <Main>
          <Quiz />
        </Main>
      )}
      {quizzes.length < page && (
        <Main>
          <Header>당신의 수도 퀴즈 점수는?</Header>
          <Score>{score}점</Score>
          <SubHeader></SubHeader>
          <PinkButton
            text="다시 테스트하기!"
            clickEvent={() => {
              dispatch(reset());
            }}
          ></PinkButton>
        </Main>
      )}
    </>
  );
}

export default App;
