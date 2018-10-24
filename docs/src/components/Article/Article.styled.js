import styled from 'styled-components';

const Styled = {
    Article: styled.article`
        position: relative;
        color: ${props.color ? props.color : null};
    `,
}

export default Styled;