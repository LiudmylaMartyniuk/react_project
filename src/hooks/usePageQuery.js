import {useSearchParams} from "react-router-dom";

const usePageQuery = () =>{
    const[query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page')

    return {
        page,
        prev: () => {
            setQuery(prev => {
                prev.set('page', `${+prev.get('page') - 1}`)
                return prev
            })
        },

        next: () => {
            setQuery(prev => {
                prev.set('page', `${+prev.get('page') + 1}`)
                return prev
            })
        }
    }
}

export {usePageQuery}


