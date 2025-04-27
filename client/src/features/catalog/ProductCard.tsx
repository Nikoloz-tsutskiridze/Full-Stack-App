import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/Product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{ textTransform: "uppercase" }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "green" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <button className="relative inline-flex items-center gap-3 border-none cursor-pointer bg-[#7808d0] text-white rounded-full font-semibold py-2 px-2 whitespace-nowrap overflow-hidden text-ellipsis transition-colors hover:bg-[#71518e] ">
          <span className="flex-shrink-0 w-6 h-6 relative text-[#6400b1] bg-white  rounded-full grid place-items-center overflow-hidde">
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 h-2.5 first-icon transition-transform ease-in-out "
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              />
            </svg>
          </span>
          Add Product
        </button>
        <Button
          component={Link}
          to={`/catalog/${product.id}`}
          sx={{ color: "orangered" }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
