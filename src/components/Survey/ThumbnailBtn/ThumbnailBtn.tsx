/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { useMediaQuery } from '@mui/material';
import { Flex, Box, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import thumbnailImgs from './thumbnailImgs';

const Img = styled.img`
  cursor: pointer;
  width: 14.5rem;
  height: 14.5rem;
`;

const Image = styled.img`
  width: 13.45rem;
  height: 13.45rem;
  border-radius: 1.75rem;
  object-fit: cover;
`;

interface Props {
  image: any;
  setImage: Dispatch<SetStateAction<any>>;
}

const ThumbnailBtn = ({ image, setImage }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  const isMobile = useMediaQuery('(max-width: 960px)');
  const inputRef = useRef<HTMLInputElement>(null);
  const [num, setNum] = useState(3);
  const [cnt, setCnt] = useState(1);

  useEffect(() => {
    if (isDesktop === true) {
      setNum(3);
    } else if (isMobile === true) {
      setNum(1);
    } else {
      setNum(2);
    }
  });

  const onButtonClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setImage({ file: imageFile, url: imageUrl });
  };

  const cntUp = () => {
    if (cnt < thumbnailImgs.length / num) {
      setCnt(cnt + 1);
    } else {
      setCnt(1);
    }
  };

  const cntDown = () => {
    if (cnt <= 1) {
      setCnt(thumbnailImgs.length / num);
    } else {
      setCnt(cnt - 1);
    }
  };

  const handleClickImg = (e: any) => {
    setImage({ url: e.target.src, basic: e.target.src });
  };

  const insertImg = (cnt: number) => {
    let range = cnt * num;
    if (range > thumbnailImgs.length) {
      range -= num - (thumbnailImgs.length % num);
    }
    const newArr = [];
    for (let i = cnt * num - num; i < range; i += 1) {
      newArr.push(
        <Img
          key={i}
          src={`${process.env.PUBLIC_URL}/assets/images/thumbnails/${thumbnailImgs[i]}`}
          onClick={(e) => handleClickImg(e)}
        />,
      );
    }
    return newArr;
  };

  return (
    <Flex gap="1rem" justifyContent="center">
      <Flex gap="2rem" flexWrap="wrap" justifyContent="center">
        <Flex flexDirection="column" gap="1rem">
          <Label fontFamily="Pr-Bold">이미지 업로드</Label>
          <Box
            width="14.5rem"
            height="14.5rem"
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
          </Flex>
          <Flex gap="1.2rem">
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
    </Flex>
  );
};
export default ThumbnailBtn;
