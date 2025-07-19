import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ( { children }) => {

        const navigate = useNavigate();
        
        const [token, setToken] = useState(null);
        const [blog, setBlog] = useState([]);
        const [input, setInput] = useState("");

        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get('/api/blog/all');
                data.success ? setBlog(data.blogs) : toast.error(data.message);
            } catch (error) {
                toast.error(error);
            }
        }

        useEffect(() => {
            fetchBlogs();
            const token = localStorage.getItem('token');
            if (token) {
                setToken(token);
                axios.defaults.headers.common['Authorization'] = `${token}`;
            }
        }, []);



        const value = {
            axios,
            token,
            setToken,
            blog,
            setBlog,
            input,
            setInput
        }

        return (
            <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
}