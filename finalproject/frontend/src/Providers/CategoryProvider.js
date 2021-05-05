import { useEffect, useState } from 'react'
import CategoryContext from '../Contexts/CategoryContext'
import axios from 'axios'

const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    } , [])

    const getCategories = async () => {
        try {
            const res = await axios.get('/api/category');
            setCategories(res.data)
        } catch (err) {

        }
    }

    return(
        <CategoryContext.Provider value={categories}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider