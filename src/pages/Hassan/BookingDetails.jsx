import { Card } from "react-bootstrap";

const BookingDetails = () => {
  return (
    <div>
      <Card.Body>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#24457b",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          Booking Details
        </h2>

        <ul className="booking-details-listm">
          <li>
            Application needs to be filled for obtaining Membership and Site
            booking along with 5 passport size photographs, address proof, and
            ID proof.
          </li>

          <li>
            Payment has to be made through RTGS / NEFT / Cheque / Demand Draft
            (D.D) in favour of "Defence Habitat Housing Co-Operative Society
            Ltd."
          </li>

          <li>
            Buyers need to obtain Membership of the society by paying
            ₹2,500/-.
          </li>

          <li>
            Booking of plots will be confirmed on 30% down payment of the
            total sale value.
          </li>

          <li>
            The remaining balance amount must be paid in two installments as
            per the payment schedule.
          </li>

          <li>
            Plot allotment will be done on a <strong>First Come – First Serve</strong> basis.
          </li>
        </ul>
      </Card.Body>
    </div>
  );
};

export default BookingDetails;