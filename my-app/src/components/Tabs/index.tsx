import React, {FC} from 'react'
import { STabs, STabList, STab, STabPanel } from './styles'

export const Tabs: FC = () => {
    return (
        <>
            <STabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <STabList>
                    <STab>Tab 1</STab>
                    <STab>Tab 2</STab>
                    <STab>Tab 3</STab>
                </STabList>
                <STabPanel>Panel 1</STabPanel>
                <STabPanel>Panel 2</STabPanel>
                <STabPanel>Panel 3</STabPanel>
            </STabs>
        </>
    )
}
