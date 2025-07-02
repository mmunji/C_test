// src/app/detail/_components/keywordAndTalkAndGallery/talk/Talk.tsx

'use client';

import { useEffect, useState } from 'react';

interface TalkProps {
  title?: string;
  movieId?: number;
  movieDetailData?: any;
}

interface Review {
  id: number;
  content: string;
  star: number;
  userNickname: string;
}

export default function Talk({ title, movieId, movieDetailData }: TalkProps) {
  const [reviewList, setReviewList] = useState<Review[]>([]);

  useEffect(() => {
    // API 대신 가짜 데이터 사용
    setReviewList([
      {
        id: 1,
        content: '영화의 색감이 정말 아름다웠어요. 꼭 다시 보고 싶어요.',
        star: 4,
        userNickname: '영화광123',
      },
      {
        id: 2,
        content: '스토리는 평범했지만 배우들의 연기가 빛났어요.',
        star: 3,
        userNickname: '영화애호가',
      },
      {
        id: 3,
        content: '음악과 연출이 완벽하게 어우러졌습니다.',
        star: 5,
        userNickname: '시네마러버',
      },
    ]);
  }, []);

  return (
    <section className="pt-[60px] Tablet:pt-[80px] Laptop:pt-[100px]">
      <div className="font-bold text-xl mb-4">{title || '리뷰 목록'}</div>
      <ul className="space-y-4">
        {reviewList.map((review) => (
          <li
            key={review.id}
            className="p-4 bg-gray-100 rounded shadow-sm text-sm"
          >
            <div className="font-medium">{review.userNickname}</div>
            <div className="text-yellow-500">⭐ {review.star}</div>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
