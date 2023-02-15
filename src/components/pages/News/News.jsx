import React, {useEffect, useState} from 'react';
import './News.scss'
import NewsPreview from "./NewsPreview/NewsPreview";
import axios from "axios";
import {url} from "../../../App";
import FindString from "../../findString/FindString";
import Tag from "../../UI elements/Tag/Tag";
import {useSelector} from "react-redux";
import LittlePreview from "../../Templates/littlePreview/LittlePreview";
import SearchString from "../../inputComponents/SearchString";

const News = () => {


    const tagList = ['autopilot', 'car', 'picup', 'electric', 'speed', 'premium', 'hatchback']
    const [articles, setArticle] = useState(null)
    const [popular, setPopular] = useState(null)
    const [currentPage, setPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [word, setWord] = useState('')
    const activeTags = useSelector(state => state.pageElements.activeTags)
    // useEffect(()=>{
    //     axios.get(url+`news?_limit=3`).then(resp=>setArticle(resp.data))
    // },[])

    const limit = 3;
    console.log(word)

    useEffect(() => {
        const queryString = activeTags.map(tag =>`tags_like=${tag}`).join('&')
        axios.get(url+`news?_limit=${limit}}&_page=${currentPage}&${queryString}&q=${word}`).then(resp=> {
            const totalPages = Math.ceil(((+resp.headers['x-total-count'])/limit))
            const pagesArr = []
            if(totalPages>1)
            for (let i = 1; i<=totalPages; i++){pagesArr.push(i)}
            setPages(pagesArr)
            setArticle(resp.data)
        })
    }, [activeTags.length, currentPage, word])

    useEffect( () => {
        axios.get(url+`news?_limit=3&_sort=counterView&_order=desc`).then(resp=> setPopular(resp.data))
    },[])

    const addView = (id) => {
        const article = articles.find(art => art.id === id)
        axios.put(url + `news/${id}`, {...article, counterView: (article.counterView + 1)})
    }








    return (
        articles ?
        <div className='larger__container news'>
            <h1>News</h1>
            <h2>Latest news</h2>
            <div className='news__list'>

                {articles.map((article) =>
                <NewsPreview image = {article.image}
                             id = {article.id}
                             date = {article.dateAddition}
                             title={article.title}
                             intro = {article.intro}
                             tags = {article.tags}
                             ava = {article.author.avatar}
                             author = {`${article.author.firstName} ${article.author.lastName}`}
                             comentsCount = {article.comments.length}
                             key={article.id}
                             addView={addView}
                />)}

                <div className={`pages`}>
                    <ul>
                        {pages.map(page => <li className={`page ${currentPage===page ? 'page--active':''}`}
                                               key={page}
                                               onClick={()=> {setPage(page)}}>{page}</li> )}
                    </ul>
                </div>

                <div className='news__control'>
                    <SearchString execute={(val)=>setWord(val) }/>
                    <div className='side-bar'>
                        <h3>Popular news</h3>
                        <div className='side-bar__box popular'>
                            {popular && popular.map((article) => <LittlePreview author={`${article.author.firstName} ${article.author.lastName}`}
                                                                                 date = {article.dateAddition}
                                                                                 title={article.title}
                                                                                 ava = {article.author.avatar}
                                                                                 image = {article.image}
                                                                                 id = {article.id}
                                                                                 addView={addView}



                                                                    />)}
                        </div>
                    </div>

                    <div className='side-bar'>
                        <h3>Tags</h3>
                        <ul className='tags'>
                            {tagList.map((tag)=> <Tag name={tag} key={tag}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        :
        <p></p>
    );
};

export default News;