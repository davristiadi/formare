import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Styled from './Article.styled';

const Article = props => {
    const {
        tag: Tag = Styled.Article,
        theme,
        className,
        children,
        ...attributes
    } = props;
    
    return <Tag {...attributes} {...props}> {children}</Tag>
};

Article.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.func, PropTypes.string,
    ]),
};

export default Article;