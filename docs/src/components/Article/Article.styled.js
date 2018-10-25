import styled from 'styled-components';

const StyledArticle = styled('article').attrs({
  className: 'article'
})(props => (`
  color: $dark;
  padding: ${props.size ? `spacing(${props.size})` : `spacing(base)` };
`))

// const StyledArticle = styled('article').attrs({
//   className: props => classNames(
//     `article`,
//     props.size ? `article--${props.size}` : ''
//   )
// })``

export default StyledArticle;
