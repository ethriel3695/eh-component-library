import styled from "@emotion/styled";

/**
 * A Wrapper for ads
 * @returns A Styled div component
 */
const Wrapper = styled.div({
  "&::before": {
    color: "#bcbfc5",
    content: '"ADVERTISEMENT"',
    display: "block",
    fontSize: 9,
    letterSpacing: "1px",
    lineHeight: 1,
    marginBottom: 5,
    marginTop: 10,
    textAlign: "center",
  },
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
});

export default Wrapper;
