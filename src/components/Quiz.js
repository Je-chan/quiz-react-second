import React from "react";
// > Redux
import { useSelector, useDispatch } from "react-redux";
import { check, next } from "../store/modules/score";

// > 컴포넌트
import { BlueButton } from "./BlueButton";
import Progress from "./Progress";

import styled from "styled-components";

const Img = styled.img`
  width: inherit;
  margin-bottom: 50px;
`;
export function Quiz() {
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.score.quizzes);
  const page = useSelector((state) => state.score.page);

  return (
    <>
      <h1 style={{ margin: "50px 0" }}>{quiz[page - 1].q}</h1>
      {quiz[page - 1].img && <Img src={quiz[page - 1].img}></Img>}
      {quiz[page - 1].a.map((item) => {
        return (
          <BlueButton
            text={item.text}
            key={item.text}
            clickEvent={() => {
              // > 정답 체크 먼저
              dispatch(check({ isCorrect: item.isCorrect }));
              // > 다음 페이지로 이동
              dispatch(next());
            }}
          ></BlueButton>
        );
      })}
      <Progress page={page} maxPage={quiz.length}></Progress>
    </>
  );
}
