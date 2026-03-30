import React from "react";

type FeatureCardsProps = {
  title: string;
  des: string;
  data: Record<string, unknown>[];
};

export default function FeatureCards({ title, des, data }: FeatureCardsProps) {
  return <div>FeatureCards</div>;
}
