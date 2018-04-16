import React from "react";
import Container from "../commons/Container";
import CepSearchBox from "./CepSearchBox";
import CepInfoBox from "../cep/CepInfoBox";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "./actions";

const CepSearchPage = ({ cep, searchData, updateCep, search }) => {
  return (
    <Root>
      <CepSearchBox
        value={cep || ""}
        onChange={updateCep}
        onRequestSearch={search}
      />
      {searchData.status === "searching" ? <SearchingContainer /> : null}
      {searchData.status === "success" ? (
        <SuccessContainer data={searchData.results} />
      ) : null}
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

const SuccessContainer = ({ data }) => {
  if (data) {
    return <CepInfoBox data={data} />;
  } else {
    return <NoResultsContainer />;
  }
};

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
  search: () => dispatch(actions.search())
});

export default connect(mapStateToProps, mapDispatchToProps)(CepSearchPage);
