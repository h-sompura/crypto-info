import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Container from "./Container";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 40,
    headerClassName: "table--header",
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    headerClassName: "table--header",
  },
  {
    field: "price",
    headerName: "Price",
    width: 250,
    headerClassName: "table--header",
  },
  {
    field: "twentyFourh",
    headerName: "24h %",
    type: "number",
    width: 100,
    headerClassName: "table--header",
  },
  {
    field: "marketCap",
    headerName: "Market Cap",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    headerClassName: "table--header",
    //     valueGetter: (params) =>
    //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  {
    id: 1,
    name: "Bitcoin",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 2,
    name: "Ethereum",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 3,
    name: "Tether USD",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 4,
    name: "USDC",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 5,
    name: "BNB",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 6,
    name: "XRP",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 7,
    name: "Binance USD",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 8,
    name: "Dogecoin",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
  {
    id: 9,
    name: "Cardano",
    price: "$17471.709299369093",
    twentyFourh: "-1.36%",
    marketCap: "335859750454",
  },
];

const CoinTable = () => {
  return (
    <Container style={{ height: 600 }} backgroundColor="white">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        sx={{
          fontFamily: "inherit",
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </Container>
  );
};

export default CoinTable;
