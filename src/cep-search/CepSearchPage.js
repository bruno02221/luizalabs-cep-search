import React from "react";
import Container from "../commons/Container";
import CepSearchBox from "./CepSearchBox";
import CepInfoBox from "../cep/CepInfoBox";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

const CepSearchPage = ({ cep, searchData, updateCep, search, resetSearch }) => {
  return (
    <Root>
      <CepSearchBox
        value={cep || ""}
        onChange={updateCep}
        onRequestSearch={search}
        invalid={!selectors.isCepValid(cep)}
      />
      <ResponseContainer>
        {searchData.status === "searching" ? <SearchingContainer /> : null}
        {searchData.status === "success" ? (
          <SearchResults
            results={searchData.results}
            resetSearch={resetSearch}
            updateCep={updateCep}
          />
        ) : null}
        {searchData.status === "failure" ? (
          <FailureContainer error={searchData.results} />
        ) : null}
      </ResponseContainer>
    </Root>
  );
};

const Root = Container.extend`
  padding-top: 64px;
`;

const ResponseContainer = styled.section`
  margin-top: 32px;
`;

const SearchingContainer = styled.section`
  &::after {
    content: "Pesquisando...";
  }
`;

const SearchResults = ({ results, resetSearch, updateCep }) => {
  if (results.erro) {
    return <NoResultsContainer />;
  } else {
    return (
      <CepInfoBox
        data={results}
        onRequestClose={() => {
          resetSearch();
          updateCep(null);
        }}
      />
    );
  }
};

const NoResultsContainer = styled.div`
  &::after {
    content: "Nenhum resultado encontrado";
  }
`;

const FailureContainer = styled.section`
  &::after {
    content: "Ocorreu um erro durante a pesquisa. Tente novamente mais tarde.";
  }
`;

const mapStateToProps = state => ({
  cep: state.cepSearch.cep,
  searchData: state.cepSearch.search
});

const mapDispatchToProps = dispatch => ({
  updateCep: cep => dispatch(actions.updateCep(cep)),
  search: () => dispatch(actions.search()),
  resetSearch: () => dispatch(actions.resetSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(CepSearchPage);
