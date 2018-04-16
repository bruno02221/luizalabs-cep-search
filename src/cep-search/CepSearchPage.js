import React from "react";
import Container from "../commons/Container";
import CepSearchBox from "./CepSearchBox";
import CepInfoBox from "../cep/CepInfoBox";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "./actions";
import * as selectors from "./selectors";

const CepSearchPage = ({ cep, searchData, updateCep, search, resetSearch }) => {
  const SearchResults = () => {
    if (searchData.results) {
      return (
        <CepInfoBox
          data={searchData.results}
          onRequestClose={() => {
            resetSearch();
            updateCep(null);
          }}
        />
      );
    } else {
      return <NoResultsContainer />;
    }
  };

  return (
    <Root>
      <CepSearchBox
        value={cep || ""}
        onChange={updateCep}
        onRequestSearch={search}
        invalid={!selectors.isCepValid(cep)}
      />
      {searchData.status === "searching" ? <SearchingContainer /> : null}
      {searchData.status === "success" ? <SearchResults /> : null}
      {searchData.status === "failure" ? (
        <FailureContainer error={searchData.results} />
      ) : null}
    </Root>
  );
};

const Root = Container.extend``;

const SearchingContainer = styled.section`
  &::after {
    content: "Searching...";
  }
`;

const NoResultsContainer = styled.div`
  &::after {
    content: "No results";
  }
`;

const FailureContainer = styled.section`
  &::after {
    content: "Failure";
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
