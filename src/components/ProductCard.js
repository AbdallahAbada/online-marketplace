import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { minWidth } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useBasket } from "../context/BasketProvider";

export const ProductCard = ({ result }) => {
    const { items, setItems } = useBasket()

    const handleAddItem = () => {
        const newItem = [...items, result]
        setItems(newItem)
    }
    return (
        <Card sx={{ maxWidth: "18rem", minWidth: "5rem", m: 3 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={result.thumbnail}
                title={result.title}
                sc={{ height: "30rem" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    £{result.price.current_price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {result.title}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton aria-label="delete">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={handleAddItem}>
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};