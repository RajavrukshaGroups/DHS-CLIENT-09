import { Container, Table } from "react-bootstrap";

const PriceChart = () => {

  const priceChartTableHeading = [
    "Dimension",
    "Rate per Sq Ft",
    "Total Amount",
    "Down Payment (30%)",
    "1st Installment (20%)",
    "2nd Installment (50%)",
  ];

  const hassanPriceChartData = [
    {
      dimension: "30 x 40",
      price: "₹1,671/-",
      total_amount: "₹20,05,200",
      down_payment: "₹6,01,560",
      first_installment: "₹4,01,040",
      second_installment: "₹10,02,600",
    },
    {
      dimension: "30 x 50",
      price: "₹1,671/-",
      total_amount: "₹25,06,500",
      down_payment: "₹7,51,950",
      first_installment: "₹5,01,300",
      second_installment: "₹12,53,250",
    },
    {
      dimension: "40 x 50",
      price: "₹1,671/-",
      total_amount: "₹33,42,000",
      down_payment: "₹10,02,600",
      first_installment: "₹6,68,400",
      second_installment: "₹16,71,000",
    },
  ];

  return (
    <div>
      <Container style={{ position: "relative" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#24457b",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
        Price Chart
        </h2>

        <Table className="price-table mt-5" hover responsive>
          <thead>
            <tr>
              {priceChartTableHeading.map((ele, i) => (
                <th key={i}>{ele}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {hassanPriceChartData.map((row, index) => (
              <tr key={index}>
                <td style={{ fontWeight: "bold" }}>{row.dimension}</td>
                <td>{row.price}</td>
                <td>{row.total_amount}</td>
                <td>{row.down_payment}</td>
                <td>{row.first_installment}</td>
                <td>{row.second_installment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default PriceChart;