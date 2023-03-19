import * as yup from "yup"
import { Formik, useFormik } from "formik"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export const SearchForm = () => {
    const initialValues = {
        query: ""
    }
    const validationSchema = yup.object({
        query: yup.string().required("Please entere a valid product")
    })

    const onSubmit = ({ query }) => {
        console.log(query);
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <Box sx={{ my: 3 }} component="form" onSubmit={formik.handleSubmit}>
            <TextField
                name="query"
                id="searchTerm"
                placeholder="Enter product name"
                fullWidth
                value={formik.values.query}
                error={!!formik.errors.query}
                helperText={formik.errors.query}
                onChange={formik.handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};