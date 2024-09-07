"use client";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "키워드 수",
    color: "hsl(280, 70%, 50%)",
    data: [
      { x: "1월", y: 76 },
      { x: "2월", y: 222 },
      { x: "3월", y: 84 },
      { x: "4월", y: 270 },
      { x: "5월", y: 107 },
      { x: "6월", y: 297 },
      { x: "7월", y: 215 },
      { x: "8월", y: 266 },
      { x: "9월", y: 272 },
      { x: "10월", y: 77 },
      { x: "11월", y: 127 },
      { x: "12월", y: 33 },
    ],
  },
  {
    id: "신고 수",
    color: "hsl(210, 70%, 50%)",
    data: [
      { x: "1월", y: 232 },
      { x: "2월", y: 108 },
      { x: "3월", y: 97 },
      { x: "4월", y: 287 },
      { x: "5월", y: 8 },
      { x: "6월", y: 175 },
      { x: "7월", y: 10 },
      { x: "8월", y: 190 },
      { x: "9월", y: 39 },
      { x: "10월", y: 220 },
      { x: "11월", y: 46 },
      { x: "12월", y: 54 },
    ],
  },
  {
    id: "리뷰 수",
    color: "hsl(35, 70%, 50%)",
    data: [
      { x: "1월", y: 220 },
      { x: "2월", y: 260 },
      { x: "3월", y: 280 },
      { x: "4월", y: 61 },
      { x: "5월", y: 147 },
      { x: "6월", y: 253 },
      { x: "7월", y: 161 },
      { x: "8월", y: 189 },
      { x: "9월", y: 25 },
      { x: "10월", y: 249 },
      { x: "11월", y: 172 },
      { x: "12월", y: 127 },
    ],
  },
];

export function MyResponsiveLine() {
  return (
    <div className="h-96 w-[1300px]">
      {/* TailwindCSS로 높이 설정 */}
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 14,
          tickPadding: 5,
          tickRotation: 0,
          legend: "달",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={null}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 18,
                fill: "white",
              },
            },
          },
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,

            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            itemTextColor: "white",

            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                  itemTextColor: "#ff0000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
