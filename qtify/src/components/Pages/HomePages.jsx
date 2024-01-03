
import React from "react";
import styles from "./HomePages.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../Hero/Hero";
import Section from "../Sections/Section";
import {fetchFilters} from "../../api/api";


function HomePages() {
    const { data } = useOutletContext();
    const { topAlbums, newAlbums, songs } = data;
    return (
        <>
            <Hero/>
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <Section
                    title="Songs"
                    data={songs}
                    filterSource={fetchFilters}
                    type="song" />
            </div>

        </>
    )


}

export default HomePages;
// import React from "react";
// import styles from "./HomePages.module.css";
// import { useOutletContext } from "react-router-dom";
// import Hero from "../Hero/Hero";
// import Section from "../Sections/Section";
// import {fetchFilter} from '../../api/api';

// function HomePages() {
//   const { data } = useOutletContext();
//   const { topAlbums, newAlbums, songs } = data;
//   return (
//     <>
//       <Hero />
//       <div className={styles.wrapper}>
//         <Section title="Top Ablums" data={topAlbums} type={"album"}/>
//         <Section title="New Ablums" data={newAlbums} type={"album"}/>
//         <Section title="Top Ablums" data={songs} type={"songs"} filterSource={fetchFilter}/>
//       </div>
//     </>
//   );
// }

// export default HomePages;
