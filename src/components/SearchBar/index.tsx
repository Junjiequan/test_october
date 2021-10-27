import React, { useState } from "react";
import * as S from "./SearchBarElements";
import { ButtonSearch, ButtonRemove } from "../../utilities/Button";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  const handleClick = () => {
    setSearch("");
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input value={search} placeholder="Search" onChange={handleChange} />
        <ButtonRemove data-hide={!!search} onClick={handleClick} />
      </S.InputWrapper>
      <ButtonSearch>
        <IoSearchOutline size="22" style={{ opacity: "0.5" }} />
      </ButtonSearch>
    </S.Wrapper>
  );
};

export default SearchBar;
