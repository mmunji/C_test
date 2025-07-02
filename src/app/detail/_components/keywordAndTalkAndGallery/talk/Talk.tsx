/* eslint-disable simple-import-sort/imports */

'use client';
import { useState } from 'react';

interface TalkItem {
  id: number;
  userNickname: string;
  content: string;
  star: number;
}

const talks: TalkItem[] = [
  {
    id: 1,
    userNickname: '무비러버',
    content: '영화 너무 재밌게 봤어요! 배우들 연기 최고!',
    star: 5
  },
  {
    id: 2,
    userNickname: '씨네광',
    content: '스토리가 탄탄해서 몰입감 있게 봤습니다.',
    star: 4
  },
  {
    id: 3,
    userNickname: '영화쟁이',
    content: '음악이 인상적이었어요. 또 보고 싶네요.',
    star: 4
  }
];

export default function Talk() {
  const [open, setOpen] = useState(false);
  const [talkId, setTalkId] = useState<number | null>(null);

  return (
    <div className="space-y-4 mt-4">
      {talks.map((talk) => (
        <div key={talk.id} className="border border-gray-300 p-4 rounded-md shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold">{talk.userNickname}</div>
            <div className="text-yellow-500">{'★'.repeat(talk.star)}</div>
          </div>
          <div className="text-sm text-gray-700">{talk.content}</div>
        </div>
      ))}
    </div>
  );
}
