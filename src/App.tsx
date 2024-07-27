import React, { useState, useEffect, useCallback } from 'react';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import './App.css';
import minsImage from './mins.jpg';
import minsImage1 from './mins1.jpg';
import minsImage2 from './mins2.jpg';
import minsImage3 from './mins3.jpg';
import minsImage4 from './mins4.jpg';
import minsImage5 from './mins5.jpg';
import minsImage6 from './mins6.jpg';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tip, setTip] = useState('');

  const images = [
    minsImage,
    minsImage1,
    minsImage2,
    minsImage3,
    minsImage4,
    minsImage5,
    minsImage6
  ];

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setTip(getRandomTip());
  };

  useEffect(() => {
    setTip(getRandomTip());
  }, [selectedTab, getRandomTip]);

  return (
    <Container className="container">
      <Box my={4}>
        <Typography className="title" variant="h3" component="h1" gutterBottom>
          민승이의 일침
        </Typography>
      </Box>
      <div className="tabs-container">
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="월요일" />
          <Tab label="화요일" />
          <Tab label="수요일" />
          <Tab label="목요일" />
          <Tab label="금요일" />
          <Tab label="토요일" />
          <Tab label="일요일" />
        </Tabs>
      </div>
      <Box my={4} textAlign="center">
        <img src={images[selectedTab]} alt={`mins-${selectedTab}`} className="image" />
        <Typography className="tip" variant="h6" component="p" gutterBottom>
          {tip}
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
