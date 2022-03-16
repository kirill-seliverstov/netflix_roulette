import React, {FC} from 'react'
import { MovieList } from '../Movies/MovieList'
import { STabs, STabList, STab, STabPanel } from './styles'


export const Tabs: FC = () => {
    return (
        <>
            <STabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <STabList>
                    <STab>All</STab>
                    <STab>Documentary</STab>
                    <STab>Comedy</STab>
                    <STab>Horror</STab>
                    <STab>Crime</STab>
                </STabList>
                <STabPanel><MovieList /></STabPanel>
                <STabPanel>Documentary</STabPanel>
                <STabPanel>Comedy</STabPanel>
                <STabPanel>Horror</STabPanel>
                <STabPanel>Crime</STabPanel>
            </STabs>
        </>
    )
}
