import React, { useState } from "react";
import * as S from "./SearchBarElements";
import { ButtonSearch, ButtonRemove } from "../../utilities/Buttons";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleClick = () => {
    setSearch("");
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchingText = e.currentTarget.search.value;
    setSearch(searchingText);
    setSearch("");
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.InputWrapper>
        <S.Input type="text" name="search" value={search} placeholder="Search" onChange={handleChange} />
        <ButtonRemove data-hide={!!search} onClick={handleClick} />
      </S.InputWrapper>
      <ButtonSearch type="submit">
        <IoSearchOutline size="22" style={{ opacity: "0.5" }} />
      </ButtonSearch>
    </S.Form>
  );
};

export default SearchBar;
