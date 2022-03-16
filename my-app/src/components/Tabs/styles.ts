import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const STabs = styled(Tabs)`
    background-color: #232323;

`

export const STabList = styled(TabList)`
  display: flex;
  margin: 0.5rem;
  padding: 0.5rem;
  
  list-style-type: none;

  border-bottom: 0.125rem solid #555555;
  box-shadow: 0 0.5rem 0.375rem -0.375rem #000000;
`;

export const STab = styled(Tab)`
  color: #ffffff;

  margin-right: 1rem;
  padding: 0.5rem;

  cursor: pointer;

  font-size: 1rem;
  text-transform: uppercase;

  &.is-selected {
    border-bottom: 1px solid #F65261;
  }

  &:focus {
    outline: none;
  }
`;

export const STabPanel = styled(TabPanel)`
  display: none;
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 1rem;
  }
`;
