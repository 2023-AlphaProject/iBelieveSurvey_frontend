import { useEffect, useRef, useState } from 'react';
import { Flex } from 'components/Box';
import styled from 'styled-components';

const Filter = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
`;

const FilterBtn = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.5rem 0;
  color: white;
  cursor: pointer;
`;

const Divider = styled.div`
  width: 6rem;
  height: 0.05rem;
  background: white;
`;

const Filterbar = () => {
  const [text, setText] = useState('최신 순');
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (visible && !modalRef.current?.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [visible]);

  return (
    <Flex
      width="7.25rem"
      flexDirection="column"
      alignItems="center"
      ref={modalRef}
      position="absolute"
      top="0.75rem"
      right="2rem"
    >
      <Filter
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {text}
      </Filter>
      {visible ? (
        <Flex
          width="7.2rem"
          height="9.6rem"
          borderRadius="1rem"
          mt={2}
          p="0.2rem"
          background="#E77853"
          flexDirection="column"
          alignItems="center"
        >
          <FilterBtn
            onClick={() => {
              setText('최신 순');
              setVisible(!visible);
            }}
          >
            최신 순
          </FilterBtn>
          <Divider />
          <FilterBtn
            onClick={() => {
              setText('마감 임박 순');
              setVisible(!visible);
            }}
          >
            마감 임박 순
          </FilterBtn>
          <Divider />
          <FilterBtn
            onClick={() => {
              setText('참여자 많은 순');
              setVisible(!visible);
            }}
          >
            참여자 많은 순
          </FilterBtn>
          <Divider />
          <FilterBtn
            onClick={() => {
              setText('참여자 적은 순');
              setVisible(!visible);
            }}
          >
            참여자 적은 순
          </FilterBtn>
          <Divider />

          <FilterBtn
            onClick={() => {
              setText('당첨 확률 높은 순');
              setVisible(!visible);
            }}
          >
            당첨 확률 높은 순
          </FilterBtn>
        </Flex>
      ) : (
        ''
      )}
    </Flex>
  );
};
export default Filterbar;
