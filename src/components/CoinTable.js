import React, { useState, useEffect } from "react";
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

const CoinTable = () => {
  // State Variables
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  const apiURL = process.env.REACT_APP_API_URL;
  const proxyURL = process.env.REACT_APP_PROXY_URL;

  // UseEffect Hook
  useEffect(() => {
    fetchCoinData();
  });

  //Helpers/methods
  const fetchCoinData = async () => {
    const resultsList = [];
    try {
      const responseFromAPI = await fetch(`${proxyURL}${apiURL}`, {
        method: "GET",
        headers: {
          "Content-type": "application-json",
          "x-access-token": process.env.REACT_APP_CRYPTO_API_KEY,
          "Access-Control-Allow-Origin": "*",
        },
      });
      if (responseFromAPI.ok) {
        setLoading(false);
        const jsonData = await responseFromAPI.json();
        resultsList.push(jsonData.data.coins);
      }
    } catch (err) {
      setLoading(true);
      console.log(`Error while fetching data from the API: ${err}`);
    }
    const coinsData = resultsList[0].map((result) => ({
      id: result.uuid,
      price: result.price,
      twentyFourh: result.change,
      marketCap: result.marketCap,
      name: result.name,
      icon: result.iconUrl,
    }));

    setTableData(coinsData);
  };

  return (
    <Container style={{ height: 600, color: "white" }}>
      {!loading && (
        <DataGrid
          rowHeight={70}
          rows={tableData}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          sx={{
            color: "white",
            fontFamily: "inherit",
            boxShadow: 2,
            border: 0,
            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },
            "& .MuiDataGrid-cell:hover": {
              color: "#00DAA7",
            },
            "& .MuiTablePagination-root": {
              color: "#fff",
            },
          }}
        />
      )}
      {loading && <p>💬 Loading Coins...</p>}
    </Container>
  );
};

export default CoinTable;
