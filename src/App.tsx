import { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';

export const App = () => {
  const [text, setText] = useState<string>('');
  const [memos, setMemos] = useState<string[]>([]);

  console.log('App 렌더링', memos);

  const onClickAdd = () => {
    if (text.trim().length === 0) {
      alert('메모를 입력해주세요.');
      return;
    }
    setMemos([...memos, text]);
    setText('');
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickDelete = (idx: number) => {
    const newMemo = [...memos];
    newMemo.splice(idx, 1);
    setMemos(newMemo);
  };

  return (
    <div>
      <h1>MEMO</h1>
      <input type="text" onChange={onChangeText} value={text} />
      <SButton onClick={onClickAdd}>추가</SButton>
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
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SWrapper = styled.div`
  display: flex;
  align-items: center;
`;
