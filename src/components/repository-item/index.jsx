import React from "react";
import * as S from "../../styles/repository-item";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperTitle>{name}</S.WrapperTitle>
      </S.Content>
      
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
