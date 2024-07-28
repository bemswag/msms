import React, { useState, useCallback } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import './App.css';
import minsImage from './mins.jpg';
import minsImage1 from './mins1.jpg';
import minsImage2 from './mins2.jpg';

const App: React.FC = () => {
  const [tip, setTip] = useState('');
  const [imageVisible, setImageVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(minsImage1);

  const friendlyTips = [
    '너 정말 훌륭해, 스스로를 믿어.',
    '오늘도 멋진 하루 보내.',
    '작은 일에도 감사하는 마음을 가져봐.',
    '모든 일에는 이유가 있어, 긍정적으로 생각해.',
    '너는 사랑받기 충분해.',
    '작은 목표를 세우고 하나씩 이루어가.',
    '너의 가능성은 무한해.',
    '오늘도 너는 빛나.',
    '새로운 도전을 두려워하지 마.',
    '너의 노력이 곧 결실을 맺을 거야.',
    '너의 웃음이 세상을 밝게 만들어.',
    '오늘 하루도 최선을 다해.',
    '너는 이 세상에 하나뿐인 존재야.',
    '긍정적인 마음가짐이 성공의 열쇠야.',
    '너의 꿈을 응원해.',
    '오늘도 열심히 노력해.',
    '너의 노력은 결코 헛되지 않아.',
    '자신을 사랑해.',
    '너는 강해, 포기하지 마.',
    '오늘도 최선을 다해봐.',
    '너는 특별한 존재야.',
    '주변 사람들에게 감사의 마음을 전해.',
    '매일 조금씩 더 나아져봐.',
    '너의 가능성을 믿어.',
    '작은 일에도 최선을 다해.',
    '너의 꿈은 이루어질 거야.',
    '자신을 존중해.',
    '오늘도 행복해.',
    '너는 중요한 존재야.',
    '매일매일 더 나아지자.'
  ];

  const harshTips = [
    '정신 좀 차려, 네 인생이 장난인 줄 아냐?',
    '그렇게 살아서 뭐가 되겠냐? 시간 낭비 좀 그만해.',
    '대체 언제 철들래? 이러다가 평생 철 안 들겠다.',
    '네가 뭔데 그렇게 행동하냐? 착각도 정도껏 해라.',
    '한심하다, 노력도 안 하면서 결과를 바란다고?',
    '인생 쉽게 살고 싶어? 그런 건 꿈에서나 꿔라.',
    '무슨 자신감으로 그렇게 나태하게 사냐?',
    '불평 좀 그만해, 네가 뭘 그렇게 잘했냐?',
    '언제까지 변명만 할래? 진짜 한심하다.',
    '무슨 생각으로 그렇게 행동하냐? 이해가 안 간다.',
    '한심하다, 정신 차리고 제대로 살아라.',
    '그렇게 살고 싶어? 부끄러운 줄 알아라.',
    '언제까지 게으름 피울래? 정신 좀 차려라.',
    '무슨 자신감으로 그렇게 행동하냐? 착각도 정도껏 해라.',
    '대충하지 말고 제대로 좀 해라, 한심하다.',
    '그렇게 살고 싶어? 정말 한심하다.',
    '노력도 안 하면서 불평만 하지 마라, 역겹다.',
    '뭐가 그렇게 어려워? 게으름 좀 피지 마.',
    '대체 언제 철들래? 좀 더 성숙해져라.',
    '그렇게 살면 행복할 것 같아? 착각하지 마.',
    '대충하지 말고 제대로 해라, 시간 낭비하지 마.',
    '핑계 대지 말고 노력해라, 한심하다.',
    '정신 차리고 제대로 살아라, 이게 뭐하는 짓이야?',
    '그렇게 살아서 뭐가 되겠어? 생각 좀 해라.',
    '노력도 안 하면서 결과를 바라는 건가? 바보 같네.',
    '언제까지 그렇게 게으를 거야? 정신 좀 차려라.',
    '무슨 생각으로 그렇게 행동해? 이해가 안 간다.',
    '핑계 대지 말고 행동해라, 역겹다.',
    '정말 그렇게 살고 싶어? 부끄러운 줄 알아라.',
    '언제까지 변명만 할래? 정신 차려라.'
  ];

  const getRandomTip = useCallback(() => {
    const isFriendly = Math.random() < 0.5;
    const tip = isFriendly
      ? friendlyTips[Math.floor(Math.random() * friendlyTips.length)]
      : harshTips[Math.floor(Math.random() * harshTips.length)];
    
    setCurrentImage(isFriendly ? minsImage2 : minsImage);
    return tip;
  }, [friendlyTips, harshTips]);

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
        {imageVisible && <img src={currentImage} alt="current" className="image" />}
        <Typography className="tip" variant="h6" component="p" gutterBottom>
          {tip}
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
