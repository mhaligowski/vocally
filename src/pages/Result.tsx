import Summary, { SummaryProps } from "components/Summary";
import React from "react";
import { useLocation } from "react-router-dom";

export default () => {
  const { state } = useLocation<SummaryProps>();

  return <Summary recording={state.recording} reference={state.reference} />;
};
