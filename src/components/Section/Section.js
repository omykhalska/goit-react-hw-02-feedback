import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, SectionTitle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
