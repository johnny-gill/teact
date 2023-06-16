import { ChangeEvent, useCallback, useState } from 'react';
import { styled } from 'styled-components';
import { MemoList } from './components/MemoList';
import { useMemoList } from './hooks/useMemoList';

export const App = () => {
  console.log('App 렌더링');
  const { memos, addMemo, deleteMemo } = useMemoList();
  const [text, setText] = useState<string>('');

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    addMemo(text);
    setText('');
  };

  const onClickDelete = useCallback((idx: number) => {
    deleteMemo(idx);
  }, [memos]);


  return (
    <div>
      <h1>MEMO</h1>
      <input type="text" onChange={onChangeText} value={text} />
      <SButton onClick={onClickAdd}>추가</SButton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const SButton = styled.button`
  margin-left: 16px;
`;
