import React, { useState } from "react";
import * as S from "./SearchBarElements";
import { ButtonSearch, ButtonRemove } from "../../utilities/Button";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <S.Wrapper>
      <S.InputWrapper>
        <S.Input placeholder="Search" onChange={handleChange} />
        <ButtonRemove />
      </S.InputWrapper>
      <ButtonSearch>
        <IoSearchOutline size="22" style={{ opacity: "0.5" }} />
      </ButtonSearch>
    </S.Wrapper>
  );
};

export default SearchBar;
