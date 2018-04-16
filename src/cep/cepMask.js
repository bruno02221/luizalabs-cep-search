import masked from "../commons/masked";

const cepMask = masked(/(\d{5})(\d{3})/, matches => {
  return matches[1] + "-" + matches[2];
});

export default cepMask;
