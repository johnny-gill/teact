import { memo, useCallback, useState } from 'react';

export const useMemoList = () => {
  console.log('useMemoList 렌더링');
  const [memos, setMemos] = useState<string[]>([]);

  const addMemo = useCallback(
    (text: string) => {
      setMemos([...memos, text]);
    },
    [memos]
  );

  const deleteMemo = useCallback(
    (idx: number) => {
      const newMemo = [...memos];
      newMemo.splice(idx, 1);
      setMemos(newMemo);
    },
    [memos]
  );

  return { memos, addMemo, deleteMemo };
};
