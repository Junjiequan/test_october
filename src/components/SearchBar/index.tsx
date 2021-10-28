import React, { useState } from "react";
import * as S from "./SearchBarElements";
import { ButtonSearch, ButtonRemove } from "../../utilities/Buttons";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { fetchData } from "../../actions";

const SearchBar = () => {
  const dispatch = useDispatch();
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
    if (!!search) {
      dispatch(fetchData(searchingText));
      setSearch(searchingText);
      setSearch("");
    }
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
