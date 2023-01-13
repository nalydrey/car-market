import './Pagination.scss'


const Pagination = (props) => {

console.log('pagination');

const { totalCards, showBy, callPage, currentPage } = props

const pages = []

for(let i = 1 ; i <= Math.ceil(totalCards/showBy); i++){
    pages.push(i)
}

return (

    pages.length>1&&
        <>
            <ul className='pagination'>
                <li className="pagination__page" onClick={()=>currentPage-1&&callPage(currentPage-1)} >Prev</li>            
                {pages.map((page)=>{
                    return <li className={`pagination__page ${currentPage===page&&'pagination__page--active'}`} onClick={()=>callPage(page)} key={page}>{page}</li>
                })}
                <li className="pagination__page" onClick={()=>pages.length-1>=currentPage&&callPage(currentPage+1)}>Next</li> 
            </ul>
        </>
)
}

export default Pagination