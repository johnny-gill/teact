import { memo } from 'react';
import { styled } from 'styled-components';

type Props = {
  memos: string[];
  onClickDelete: (idx: number) => void;
};

export const MemoList = memo((props: Props) => {
  console.log('MemoList 렌더링');

  const { memos, onClickDelete } = props;

  return (
    <SContainer>
      <p>MEMO LIST</p>
      <ul>
        {memos.map((memo, idx) => (
          <li key={idx}>
            <SWrapper>
              <p>{memo}</p>
              <SButton onClick={() => onClickDelete(idx)}>삭제</SButton>
            </SWrapper>
          </li>
        ))}
      </ul>
    </SContainer>
  );
});

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SButton = styled.button`
  margin-left: 16px;
`;
