import { TextField } from "@mui/material";
import { ChangeEvent, useRef } from "react";

interface IMovieListSearchBarProps {
  onSearchChange: (value: string) => void;
}

function MovieListSearchBar({ onSearchChange }: IMovieListSearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<any>(null);

  // Debounce
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onSearchChange(event.target.value);
    }, 300);
  };

  return (
    <TextField
      placeholder="Search movie..."
      onChange={handleOnChange}
      ref={inputRef}
    />
  );
}

export default MovieListSearchBar;
