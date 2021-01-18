import { noteName, Pitch } from "pitch/notes";
import React from "react";
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ReferenceLine,
  YAxis,
  Text,
  ResponsiveContainer,
} from "recharts";

type ChartProps = {
  data: object[];
  reference: Pitch;
  domainStart: number;
  domainEnd: number;
  result: number;
};

export default ({
  data,
  reference,
  domainStart,
  domainEnd,
  result,
}: ChartProps) => {
  return (
    <ResponsiveContainer height={400}>
      <LineChart height={100} width={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine
          y={reference.midiNote}
          stroke="red"
          strokeDasharray="3 3"
        >
          <Label position="top">reference</Label>
        </ReferenceLine>

        <YAxis
          interval={0}
          minTickGap={1}
          allowDecimals={false}
          domain={[domainStart, domainEnd]}
          ticks={Array(domainEnd - domainStart)
            .fill(0)
            .map((_, i) => i + domainStart)}
          tick={(props: any) => {
            return (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Text {...props}>{`${noteName(props.payload.value)}`}</Text>
            );
          }}
        />
        <Line
          type="monotone"
          dataKey="midiNote"
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
        <ReferenceLine
          y={Math.floor((domainStart + domainEnd) / 2 - result)}
          stroke="none"
        >
          <Label position="top">you</Label>
        </ReferenceLine>
      </LineChart>
    </ResponsiveContainer>
  );
};
