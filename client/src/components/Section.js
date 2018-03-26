import { Component } from 'react';
import styled from 'styled-components'

const Section = styled.section`
  align-items: ${props => props.alignitems};
  background: ${props => props.background};
  border: ${props => props.border};
  border-radius: ${props => props.borderradius};
  box-sizing: ${props => props.borderbox};
  display: ${props => props.display};
  flex-direction: ${props => props.flexdirection};
  flex-wrap: ${props => props.flexwrap};
  grid-area: ${props => props.gridarea};
  grid-column: ${props => props.gridcolumn};
  grid-row: ${props => props.gridrow};
  grid-template-columns: ${props => props.gridtemplatecolumns};
  height: ${props => props.height};
  li {
    font-size: ${props => props.lifontsize};
  }
  justify-content: ${props => props.justifycontent};
  margin: ${props => props.margin};
  max-height: ${props => props.maxheight};
  min-height: ${props => props.minheight};
  max-width: ${props => props.maxwidth};
  min-width: ${props => props.minwidth};
  opacity: ${props => props.opacity};
  overflow: ${props => props.overflow};
  overflow-x: ${props => props.overflowx};
  overflow-y: ${props => props.overflowy};
  padding: ${props => props.padding};
  position: ${props => props.position};
  width: ${props => props.width};

  @media (min-width: 375px) {
    flex-direction: ${props => props.flexdirection375};
    height: ${props => props.height375};
    width: ${props => props.width375};
    min-width: ${props => props.width375};
  }

  @media (min-width: 768px) {
    flex-direction: ${props => props.flexdirection768};
    height: ${props => props.height768};
    width: ${props => props.width768};
  }

  @media (min-width: 960px) {
    flex-direction: ${props => props.flexdirection960};
    height: ${props => props.height960};
    width: ${props => props.width960};
    max-width: ${props => props.maxwidth960};
  }

  @media (min-width: 1024px) {
    flex-direction: ${props => props.flexdirection1024};
    height: ${props => props.height1024};
    width: ${props => props.width1024};
  }
`
Section.defaultProps = {
  gridtemplatecolumns: '1fr',
  boxsizing: 'border-box',
  color: 'black',
  display: 'grid',
  flexdirection: 'row',
  width: '100%'
}

export default Section
