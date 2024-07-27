import React, { useState, useCallback } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import './App.css';
import minsImage from './mins.jpg';
import minsImage1 from './mins1.jpg';

const App: React.FC = () => {
  const [tip, setTip] = useState('');
  const [imageVisible, setImageVisible] = useState(false);

  const tips = [
    '이어폰 꽂지 말고 앞에 쳐 보면서 걸어',
    '밥 먹을 때 깨작거리지 좀 마',
    '너 뭐 돼? 열심히 살아.',
    '할 일 있으면 미루지 말고 바로 해',
    '피드백을 겸허히 받아들여',
    '계획 세운 대로 실천해',
    '자신을 믿고 도전해봐',
    '포기하지 마',
    '꾸준히 노력해',
    '오늘 할 일을 내일로 미루지 마라',
    '새로운 도전을 두려워하지 마',
    '건강을 최우선으로 생각해',
    '긍정적인 마인드를 가져',
    '시간 관리를 철저히 해',
    '책을 많이 읽어',
    '매일 운동해',
    '주변 사람들에게 친절해',
    '문제에 직면했을 때 피하지 마',
    '목표를 세우고 달성해',
    '실수를 두려워하지 마',
    '자신의 감정을 솔직하게 표현해',
    '매일 조금씩 개선해',
    '다른 사람의 의견을 존중해',
    '스스로를 믿어',
    '끊임없이 배워',
    '자신의 한계를 넘어서라',
    '목표를 이루기 위해 계획을 세워라',
    '불필요한 일을 줄여라',
    '매일 감사의 마음을 가져라',
    '실패를 두려워하지 마라',
    '문제를 해결하기 위해 노력해라',
    '성공을 위해 노력해라',
    '꾸준히 공부해라',
    '자신의 약점을 강점으로 바꿔라',
    '긍정적인 사고를 유지해라',
    '타인의 성공을 축하해라',
    '자신의 실수를 인정해라',
    '자신의 감정을 이해해라',
    '타인에게 친절해라',
    '주변 환경을 깨끗하게 유지해라',
    '정기적으로 운동해라',
    '꾸준히 독서해라',
    '목표를 시각화해라',
    '건강한 식습관을 유지해라',
    '자신의 목표를 기록해라',
    '성공적인 사람들을 본받아라',
    '항상 배우는 자세를 유지해라',
    '긍정적인 변화를 추구해라',
    '타인의 의견을 경청해라',
    '자신의 목표에 집중해라'
  ];

  const getRandomTip = useCallback(() => {
    return tips[Math.floor(Math.random() * tips.length)];
  }, [tips]);

  const handleButtonClick = () => {
    setImageVisible(false);

    // 일정 시간 동안 랜덤 일침을 표시한 후 멈추기
    const intervalId = setInterval(() => {
      setTip(getRandomTip());
    }, 100); // 0.1초마다 일침 변경

    setTimeout(() => {
      clearInterval(intervalId);
      setImageVisible(true); // 일정 시간이 지나면 이미지 표시
    }, 2000); // 2초 후 멈추기
  };

  return (
    <Container className="container">
      <Box my={4}>
        <Typography className="title" variant="h3" component="h2" gutterBottom>
          귀여운 민승이의 하루 일침
        </Typography>
      </Box>
      <Box textAlign="center" my={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleButtonClick}
          style={{
            backgroundColor: 'pink',
            color: '#fff',
            padding: '5px 15px',
            fontSize: '16px'
          }}
        >
          오늘의 일침
        </Button>
      </Box>
      <Box my={4} textAlign="center">
        {!imageVisible && <img src={minsImage1} alt="mins1" className="image" />}
        {imageVisible && <img src={minsImage} alt="mins" className="image" />}
        <Typography className="tip" variant="h6" component="p" gutterBottom>
          {tip}
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
