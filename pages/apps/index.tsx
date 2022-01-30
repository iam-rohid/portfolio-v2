import React, { Fragment, useEffect, useState } from "react";
import AppsList from "../../components/AppsList";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import SectionWithTitle from "../../components/SectionWithTitle";
import apps from "../../data/apps";
import { AppType } from "../../types";

const AppsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchedApps, setSearchedApps] = useState<AppType[]>([]);

  useEffect(() => {
    let _apps: AppType[] = [];
    let searchKeywords = searchValue.split(" ");
    _apps = apps.filter((b) => {
      let matched = false;
      searchKeywords.forEach((key) => {
        if (b.title.toLowerCase().match(key.toLowerCase())) {
          matched = true;
          return;
        } else if (b.description.toLowerCase().match(key.toLowerCase())) {
          matched = true;
          return;
        }
      });
      return matched;
    });
    setSearchedApps(_apps);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Fragment>
      <PageHeader
        title="Apps"
        searchValue={searchValue}
        onSearchValueChange={setSearchValue}
      />
      <main className="flex flex-col gap-16 py-16">
        {searchValue ? (
          <SectionWithTitle title="Results">
            <AppsList apps={searchedApps} />
          </SectionWithTitle>
        ) : (
          <Container>
            <AppsList apps={apps} />
          </Container>
        )}
      </main>
    </Fragment>
  );
};

export default AppsPage;
