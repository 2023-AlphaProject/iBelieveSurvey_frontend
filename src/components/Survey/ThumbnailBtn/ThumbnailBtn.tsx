import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Flex, Box, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import dummyImgs from './dummyImgs';

const Img = styled.img`
  width: 14.5rem;
  height: 14.5rem;
`;

const Image = styled.img`
  width: 13.45rem;
  height: 13.45rem;
  border-radius: 1.75rem;
  object-fit: cover;
`;

const ThumbnailBtn = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [cnt, setCnt] = useState(1);
  const [image, setimage] = useState<{ file: null; url: string }>({ file: null, url: '' });

  const onButtonClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setimage({ file: imageFile, url: imageUrl });
  };

  const cntUp = () => {
    if (cnt < dummyImgs.length / 3) {
      setCnt(cnt + 1);
    } else {
      setCnt(1);
    }
  };

  const cntDown = () => {
    if (cnt <= 1) {
      setCnt(dummyImgs.length / 3);
    } else {
      setCnt(cnt - 1);
    }
  };

  const insertImg = (cnt: number) => {
    let range = cnt * 3;
    if (range > dummyImgs.length) {
      range -= 3 - (dummyImgs.length % 3);
    }
    const newArr = [];
    for (let i = cnt * 3 - 3; i < range; i += 1) {
      newArr.push(<Img key={i} src={`${process.env.PUBLIC_URL}/assets/images/${dummyImgs[i]}`} />);
    }
    return newArr;
  };

  return (
    <Flex gap="2rem" m={5}>
      <Flex flexDirection="column" alignItems="center" gap="1rem">
        <Label fontFamily="Pr-Bold">이미지 업로드</Label>
        <Box
          width="13.8rem"
          height="13.8rem"
          borderRadius="1.75rem"
          border="3px solid"
          borderColor={COLORS.primary}
        >
          <input
            name="imggeUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={inputRef}
            style={{ display: 'none' }}
          />
          {image.url ? (
            <Image alt="article_image" src={image.url} />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/thumbnail-icon.svg`}
              alt="IBELEVESURVEY Logo"
              style={{ width: '2.5rem', margin: '42%', cursor: 'pointer' }}
              onClick={onButtonClick}
              onKeyDown={onButtonClick}
            />
          )}
        </Box>
      </Flex>
      <Flex flexDirection="column" gap="0.75rem">
        <Flex>
          <Label fontFamily="Pr-Bold" ml="2.4rem">
            기본 이미지 선택
          </Label>
          <Label fontFamily="Pr-Regular" ml="1rem">
            IBelieveSurvey는 다양한 썸네일 이미지를 제공합니다.
          </Label>
        </Flex>
        <Flex gap="0.75rem">
          <ArrowBackIosIcon
            sx={{ margin: '6rem 0 0 0', cursor: 'pointer', fontSize: '2rem', color: '#4F4B5C' }}
            onClick={() => {
              cntDown();
            }}
          />
          {insertImg(cnt)}
          <ArrowForwardIosIcon
            sx={{ margin: '6rem 0 0 0', cursor: 'pointer', fontSize: '2rem', color: '#4F4B5C' }}
            onClick={() => {
              cntUp();
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default ThumbnailBtn;
