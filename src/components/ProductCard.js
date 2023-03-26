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
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const ProductCard = ({ result }) => {
    const { items, setItems } = useBasket()

    const handleAddToCart = () => {
        const newItem = [...items, result]
        localStorage.setItem("items", JSON.stringify(newItem))
        setItems(newItem)
    }

    const handleAddToWishlist = () => {
        const wishListDromLS = getFromLocalStorage("wishList", []);
        wishListDromLS.push(result)
        localStorage.setItem("wishList", JSON.stringify(wishListDromLS))
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
                <IconButton aria-label="delete" onClick={handleAddToWishlist}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={handleAddToCart}>
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};