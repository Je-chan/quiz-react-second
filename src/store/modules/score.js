// 퀴즈를 풀고 정답을 맞추면 점수 획득
// 오답인 경우에는 점수를 획득하지 못함

/**
 * 액션과 상태가 몇 개로 정해진다
 * > 상태: 사용자의 최종 점수 (score), 현재 페이지
 * > 액션: 정답인지 아닌지를 판별. 정답인 경우 상태(score)++
 * OR
 * > 상태: 사용자가 응답한 정답 목록
 * > 약션: 정답 목록에 하나하나 추가
 *
 * 전자의 경우가 더 효율적인 방식
 */

// * 서브 리듀서 만들기
// > 액션 타입을 문자열 형태로 만든다.
const CHECK_CORRECT = "score/CHECK_CORRECT";
const NEXT_PAGE = "score/NEXT_PAGE";
const RESET = "score/RESET";

// > 액션 생성 함수 작성
export function check({ isCorrect }) {
  return {
    type: CHECK_CORRECT,
    payload: { isCorrect },
  };
}

export function next() {
  return {
    type: NEXT_PAGE,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// > 퀴즈 목록
const quizzes = [
  {
    q: "말레이시아의 수도는?",
    img: "/city/말레이시아.png",
    a: [
      {
        text: "믈라카",
        isCorrect: false,
      },
      {
        text: "쿠알라룸푸르",
        isCorrect: true,
      },
      {
        text: "코타키나발루",
        isCorrect: false,
      },
    ],
  },
  {
    q: "터키의 수도는?",
    img: "/city/터키.png",
    a: [
      {
        text: "앙카라",
        isCorrect: true,
      },
      {
        text: "이스탄불",
        isCorrect: false,
      },
      {
        text: "툰젤리",
        isCorrect: false,
      },
    ],
  },
  {
    q: "인도의 수도는?",
    img: "/city/indo.png",
    a: [
      {
        text: "뉴델리",
        isCorrect: true,
      },
      {
        text: "뭄바이",
        isCorrect: false,
      },
      {
        text: "콜카타",
        isCorrect: false,
      },
    ],
  },
  {
    q: "네덜란드의 수도는?",
    img: "/city/네덜란드.png",
    a: [
      {
        text: "헤이그",
        isCorrect: false,
      },
      {
        text: "암스테르담",
        isCorrect: true,
      },
      {
        text: "위르크",
        isCorrect: false,
      },
    ],
  },

  {
    q: "케냐의 수도는?",
    img: "/city/케냐.png",
    a: [
      {
        text: "가리사",
        isCorrect: false,
      },
      {
        text: "키베라",
        isCorrect: false,
      },
      {
        text: "나이로비",
        isCorrect: true,
      },
    ],
  },
];

// > 초기 상태
const initialState = {
  score: 0,
  page: 0, // 0: 인트로 페이지, 1 ~ quiz.length : 퀴즈 페이지, n+1: 마지막 페이지
  quizzes,
};

// > 리듀서
export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 20 : state.score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
