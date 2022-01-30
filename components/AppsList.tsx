import React from "react";
import { AppType } from "../types";
import AppCard from "./AppCard";

const AppsList = ({ apps }: { apps: AppType[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {apps.map((app) => (
        <AppCard app={app} key={app.id} />
      ))}
    </div>
  );
};

export default AppsList;
