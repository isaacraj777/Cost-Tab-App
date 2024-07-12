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
import CatalogTile from '../widgets/CatalogTile';
import OptimizationHelp from '../widgets/OptimizationHelp';
import CostWidget from '../widgets/CostWidget';

export default class CatlogDashboard extends BaseDashboard<any, any> {
  override layout(): JSX.Element | undefined {
    return (
      <div className="dashboard-container">

        <OptimizationHelp />
      </div>
    );
  }
}
