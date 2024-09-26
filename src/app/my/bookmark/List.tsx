"use client";

import { useState } from "react";

import { BookmarkMobileButtons } from "@/app/my/_components/buttons";
import Placeholder from "@/app/my/_components/Placeholder";
import BookmarkHeader from "@/app/my/bookmark/Header";
import { BookMarkDefaultItem, BookmarkEditItem } from "@/app/my/bookmark/Item";
import { deleteBookmark } from "@/services/my/actions";

interface BookmarkListProps {
  movies: Bookmark[];
}

export default function BookmarkList({ movies }: BookmarkListProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedMovieIds, setSelectedMovieIds] = useState<number[]>([]);
  const handleBookmarkToggle = () => {
    if (!isEditing) return setIsEditing(true);
    setSelectedMovieIds([]);
    setIsEditing(false);
  };
  const handleBookmarkAdd = (id: number) => {
    if (selectedMovieIds.includes(id)) {
      return setSelectedMovieIds((prev) =>
        prev.filter((movieId) => movieId !== id),
      );
    }
    setSelectedMovieIds((prev) => [...prev, id]);
  };

  const handleBookmarkDelete = async () => {
    setLoading(true);
    const result = await deleteBookmark(selectedMovieIds);
    setLoading(false);
    if (result) {
      setIsEditing(false);
      setSelectedMovieIds([]);
    }
  };

  return (
    <>
      <BookmarkHeader
        loading={loading}
        onBookmarkDelete={handleBookmarkDelete}
        onToggle={handleBookmarkToggle}
        isEditing={isEditing}
        movies={movies}
        selectedMovieIds={selectedMovieIds}
        setSelectedMovieIds={setSelectedMovieIds}
      />
      {movies.length ? (
        <div className="grid grid-cols-2 gap-2 Tablet:grid-cols-3 Tablet:gap-x-5 Tablet:gap-y-4 Laptop:grid-cols-4 Laptop:gap-x-6 Laptop:gap-y-5">
          {movies.map((movie) => {
            return isEditing ? (
              <BookmarkEditItem
                key={movie.id}
                movie={movie}
                onAddBookmark={handleBookmarkAdd}
                isSelected={selectedMovieIds.includes(movie.id)}
              />
            ) : (
              <BookMarkDefaultItem movie={movie} key={movie.id} />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center">
          <Placeholder type="bookmark" />
        </div>
      )}
      {isEditing && (
        <BookmarkMobileButtons
          loading={loading}
          onBookmarkDelete={handleBookmarkDelete}
          selectedMovieIds={selectedMovieIds}
          setSelectedMovieIds={setSelectedMovieIds}
        />
      )}
    </>
  );
}
