"use client";

import { ResponsiveLine } from "@nivo/line";

interface ChartPrpos {
  Visitor: Users[] | undefined;
  ReviewCount: Users[] | undefined;
  KeywordCount: Users[] | undefined;
}
const monthMap: { [key: string]: string } = {
  "01": "1월",
  "02": "2월",
  "03": "3월",
  "04": "4월",
  "05": "5월",
  "06": "6월",
  "07": "7월",
  "08": "8월",
  "09": "9월",
  "10": "10월",
  "11": "11월",
  "12": "12월",
};
export function MyResponsiveLine({
  Visitor,
  ReviewCount,
  KeywordCount,
}: ChartPrpos) {
  const chartData = [
    {
      id: "가입 수",
      color: "hsl(280, 70%, 50%)",
      data: Visitor
        ? Visitor.slice()
            .reverse()
            .map(({ date, count }) => ({
              x: monthMap[date.split("-")[1]],
              y: count,
            }))
        : [], // Visitor 데이터가 없을 때 빈 배열 반환
    },
    {
      id: "리뷰 수",
      color: "hsl(280, 70%, 50%)",
      data: ReviewCount
        ? ReviewCount.slice()
            .reverse()
            .map(({ date, count }) => ({
              x: monthMap[date.split("-")[1]],
              y: count,
            }))
        : [],
    },
    {
      id: "키워드 수",
      color: "hsl(280, 70%, 50%)",
      data: KeywordCount
        ? KeywordCount.slice()
            .reverse()
            .map(({ date, count }) => ({
              x: monthMap[date.split("-")[1]],
              y: count,
            }))
        : [],
    },
  ];

  return (
    <div className="h-96 w-[1300px] bg-white">
      <ResponsiveLine
        data={chartData}
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
          legend: "",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={null}
        theme={{
          axis: {
            ticks: {
              text: {
                fontSize: 18,
                fill: "black",
              },
            },
          },
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="명"
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
            itemTextColor: "black",

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
        tooltip={({ point }) => (
          <div
            style={{
              background: "white",
              padding: "9px 12px",
              border: "1px solid #ccc",
            }}
          >
            <strong>{point.serieId}</strong>: {Number(point.data.yFormatted)}명
          </div>
        )}
      />
    </div>
  );
}
