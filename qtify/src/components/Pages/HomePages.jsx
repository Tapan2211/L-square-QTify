import React from "react";
import styles from "./HomePages.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../Hero/Hero";
import Section from "../Sections/Section";

function HomePages() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Ablums" data={topAlbums} type={"album"}/>
        <Section title="New Ablums" data={newAlbums} type={"album"}/>
        {/* <Section title="Top Ablums" data={songs} type={"songs"}/> */}
      </div>
    </>
  );
}

export default HomePages;
