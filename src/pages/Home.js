import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { SearchForm } from "../components/SearchForm";
import { SearchResults } from "../components/SearchResults";
import { useEffect, useState } from "react";
import data from "../mocks/productSearch.json"
import axios from "axios";

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false)
    const [results, searchResults] = useState(true);
    useEffect(() => {
        if (searchTerm) {
            setSearchTerm(true)
            const fetchData = async () => {
                setIsLoading(true);

                try {
                    // const { data } = await axios.get(
                    //     'https://amazon23.p.rapidapi.com/product-search',
                    //     {
                    //         params: { query: searchTerm, country: "GB" },
                    //         headers: {
                    //             "X-RapidAPI-Key": process.env.React_APP_RaPID_API_KEY,
                    //             "X-RapidAPI-Host": process.env.React_APP_RaPID_API_HOST,
                    //         },
                    //     }
                    // );

                    setError(false)
                    searchResults(data?.result || [])
                } catch (error) {
                    console.log(`[ERROR]: Faild to fetch data | ${error.message}`)
                    setError(true)
                    searchResults()
                }
                setIsLoading(false)
            }
            fetchData();
        }
    }, [searchTerm])

    const handleQuery = (query) => {
        setSearchTerm(query)
    }
    return (
        <Container maxWidth="lg">
            <Stack>
                <box>
                    <SearchForm handleQuery={handleQuery} />
                </box>
                <box>
                    {isLoading &&
                        <Backdrop
                            sx={{ color: '#fff', zIndex: 4 }}
                            open={isLoading}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>}
                    {error && <Alert severity="error">Faild to fetch results for {searchTerm}</Alert>}
                    {results && <SearchResults results={results} />}
                </box>
            </Stack>
        </Container >
    )
}