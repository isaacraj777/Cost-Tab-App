// import React from 'react';
import { Stack } from '@fluentui/react';
import { BaseDashboard } from "@microsoft/teamsfx-react";
import HeaderTile from "../widgets/HeaderTile";
import ActiveResources from "../widgets/ActiveResources";
import ListWidget from "../widgets/ListWidget";
import ChartWidget from "../widgets/ChartWidget";
import TilesGrid from "../widgets/TilesWidget";
import RightHandTiles from "../widgets/Right";
import FeedbackForm from "../widgets/FeedbackForm";
import CostWidget from '../widgets/CostWidget';
import CostWidgetCit from '../widgets/CostWidgetCit';
import CostWidgetCit1 from '../widgets/CostWidgetCit1';

export default class SampleDashboard extends BaseDashboard<any, any> {
  override layout(): JSX.Element | undefined {
    const containerStyle = { background: "#000235", minWidth: "100vw", minHeight: "100vh", overflow: "auto" }
  
    const contentStyle = {
      height: "100vh",
      width: "100vw",
      padding : "20px"
    };
    const contentStyle1 = {
      padding : "20px"
    };
    return (
      <div style={containerStyle}>
        <div style={contentStyle}>
        <HeaderTile />
        <CostWidget></CostWidget>
        {/* <ChartWidget /> */}

        {/* Stack for horizontal alignment */}
        <div style={contentStyle1}>
        <Stack horizontal tokens={{ childrenGap: 20 }} >

        <CostWidgetCit1/>
        {/* <ListWidget /> */}
          <CostWidgetCit/>

        </Stack>
        </div>

        {/* <TilesGrid />
        <RightHandTiles />
        <FeedbackForm /> */}
      </div>
      </div>
    );
  }
}
