import styled from "@emotion/styled";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Fev", salesDefict: 800 },
  { name: "Mar", sales: 700 },
  { name: "Abr", salesDefict: 750 },
  { name: "Mai", sales: 200 },
  { name: "Jun", salesDefict: 300 },
  { name: "Jul", sales: 200 },
  { name: "Ago", salesDefict: 560 },
  { name: "Set", sales: 300 },
  { name: "Out", salesDefict: 400 },
  { name: "Nov", sales: 700 },
  { name: "Dez", salesDefict: 950 }
];

export function Sales() {
  return (
    <>
      <Sales.Title>Vendas</Sales.Title>
      <Sales.BarChart width={800} height={505} data={data}>
        <Bar dataKey="sales" fill="rgba(255, 99, 132, 0.5)" />
        <Bar dataKey="salesDefict" fill="rgba(53, 162, 235, 0.5)" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </Sales.BarChart>
    </>
    
  );
}

Sales.Title = styled.h3`
  text-align: center;
  color: rgba(0, 0, 0, 0.7)
`
Sales.BarChart = styled(BarChart)`
  display:flex;
  justify-content: center;
  margin: auto;
`