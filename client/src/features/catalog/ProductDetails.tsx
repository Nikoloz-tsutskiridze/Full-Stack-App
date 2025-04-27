import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/Product";
import styled from "styled-components";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5148/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const productDetails = [
    { label: "Name", value: product.name },
    { label: "Description", value: product.description },
    { label: "Type", value: product.type },
    { label: "Brand", value: product.brand },
    { label: "Quantity in stock", value: product.quantityInStock },
  ];

  return (
    <div className="max-w-6xl mx-auto ">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={product.pictureUrl}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <Typography variant="h3">{product.name}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h4" color="green">
            ${(product.price / 100).toFixed(2)}
          </Typography>

          <TableContainer className="my-4">
            <Table
              sx={{
                "& td": { fontSize: "0.95rem" },
              }}
            >
              <TableBody>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {detail.label}
                    </TableCell>
                    <TableCell>{detail.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="flex flex-col md:flex-row mt-6">
            <div className="w-full md:w-1/2">
              <TextField
                variant="outlined"
                type="number"
                label="Quantity in basket"
                fullWidth
                defaultValue={1}
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <StyledWrapper>
                <button>Add To Basket</button>
              </StyledWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  button {
    width: 16em;
    height: 3.5em;
    font-size: 15px;
    font-family: inherit;
    border: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    box-shadow: 0.5px 0.5px 1px #969696, -0.5px -0.5px 1px #a0a0a0;
    cursor: pointer;
  }

  button::before {
    content: "";
    width: 0;
    height: 3.5em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #25c558 25%, #00dd58 75%);
    transition: 0.6s ease;
    display: block;
    z-index: -1;
  }

  button:hover::before {
    width: 16em;
    height: 3.5em;
  }
`;
