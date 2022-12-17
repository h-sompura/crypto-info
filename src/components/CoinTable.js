import React from "react";
import Icon from "@mui/material/Icon";
import { DataGrid } from "@mui/x-data-grid";
import Container from "./Container";

const columns = [
  {
    field: "icon",
    headerName: "",
    width: 100,
    headerClassName: "table--header",
    renderCell: (params) => (
      <Icon
        style={{
          height: "2.5em",
          width: "2.5em",
          textAlign: "center",
          margin: ".8em 0",
        }}
      >
        <img style={{ height: 50, width: 50 }} alt="" src={params.value} />
      </Icon>
    ),
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
    renderCell: (params) => <p>${params.value}</p>,
  },
  {
    field: "twentyFourh",
    headerName: "24h %",
    type: "number",
    width: 100,
    headerClassName: "table--header",
    renderCell: (params) => <p>{params.value}%</p>,
  },
  {
    field: "marketCap",
    headerName: "Market Cap",
    width: 200,
    headerClassName: "table--header",
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
