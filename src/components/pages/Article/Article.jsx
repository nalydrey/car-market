import React, {useEffect, useState} from 'react'
import './Article.scss'
import axios from "axios";
import {url} from "../../../App";
import Seller from "../../Templates/Seller/Seller";

import Comments from "../../comments/Comments";
import {useParams} from "react-router-dom";
import Tag from "../../UI elements/Tag/Tag";



const Article = () => {
    // const id = 0;
    const {id} = useParams()
    const [article, setArticle] = useState(null)


    useEffect(()=>{
        axios.get(url+`news/${id}`).then(resp => setArticle(resp.data))
    },[])

    const addComment = (val) => {
        console.log(val)
        axios.put(url + `news/${id}`, {...article, comments: [...article.comments, val]})
            .then(resp => setArticle(resp.data))
    }

    const newComments = (val) => {
        axios.put(url + `news/${id}`, {...article, comments: val})
            .then(resp => setArticle(resp.data))
    }

  return (
      article &&
    <section className='article'>
        <div className='larger__container'>
            <h1>{article.title}</h1>
            {article.image &&
            <div className='article__title-foto'>
                <img src={article.image} alt=""/>
                <div className='date__adittion'>{article.dateAddition}</div>
            </div>}
        </div>
        <div className='article__container '>
            <div className='articles'>

                {article.text.map((paragr, i) => <p key={i}>{paragr}</p>)}

                {article.subArt.map((art)=>{
                    return(
                        <div className='sub-article' key={art.title}>
                            {art.image &&
                            <div className='sub-article__foto'>
                                <img src={art.image} alt="foto"/>
                            </div>}
                            <h2>{art.title}</h2>
                            <p>{art.text}</p>
                            <ul className='list__art'>
                                {art.list.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    )
                })}

                <ul className='tags'>
                    {article.tags.map((tag)=><Tag name={tag} key={tag}/>)}
                </ul>
            </div>

            <Seller firstName={article.author.firstName}
                    lastName={article.author.lastName}
                    organization={article.author.special}
                    tel={article.author.contacts.tel}
                    email={article.author.contacts.email}
                    foto={article.author.avatar}
                    titleOn={false}
            />

            <Comments commentsList={article.comments} sendComment={addComment} newComments={newComments}/>
        </div>


        

    </section>
  )
}

export default Article