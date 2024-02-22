import React, {useEffect, useState} from 'react';
import {Episode} from "./Episode";
import {episodeService} from "../../services";
import css from './episodes.module.css';
import {usePageQuery} from "../../hooks";

const Episodes = () => {
    const [episodes, setEpisodes] = useState({prev:null, next: null, results: []});

    const {page, next, prev} = usePageQuery()

    // const [prevNext, setPrevNext] = useState({prev: null, next: null})

    useEffect(() => {
        episodeService.getAll(page).then(({data}) => setEpisodes(() => {
            const {info: {next, prev}, results} = data;
            return {
                next,
                prev,
                results
            }
        }))
    }, [page]);


    return (
        <div>
            <div className={css.episodes}>
                {episodes.results
                    .map(episode => <Episode key={episode.id} episode={episode}/>)
                }
            </div>
            <div style={{display: "flex", justifyContent: "space-between", margin: "20px"}}>
                <button disabled={!episodes.prev} onClick={prev}>prev</button>
                <button disabled={!episodes.next} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};