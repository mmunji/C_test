'use client';

import React from 'react';

interface TalkProps {
  title: string;
  movieId: number;
  movieDetailData: any;
}

const fakeTalks = [
  { id: 1, content: '정말 재미있었어요! 연기도 좋고 스토리도 탄탄했어요.', user: 'user1' },
  { id: 2, content: '생각보다 별로였어요. 기대를 너무 했나봐요.', user: 'user2' },
  { id: 3, content: 'OST가 너무 좋아서 계속 들었어요!', user: 'user3' },
];

export default function Talk({ title }: TalkProps) {
  return (
    <section className="p-4 bg-white rounded shadow max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">{title}에 대한 리뷰</h2>
      {fakeTalks.map((talk, index) => (
        <div key={talk.id} className="border-b py-2">
          <p className="text-gray-700">{talk.content}</p>
          <p className="text-sm text-gray-500 mt-1">- {talk.user}</p>
        </div>
      ))}
    </section>
  );
}