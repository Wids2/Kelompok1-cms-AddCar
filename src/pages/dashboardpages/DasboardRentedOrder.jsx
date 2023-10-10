import BurroComponent from "../../component/Burro";
import BarChartComponent from "../../component/Charts/barChart";
import TableOrder from "../../component/Table-List-Order/myTable";

const RentedCarOrder = () => {
  return (
    <>
      <div style={{ background: "#F4F5F7" }}>
        {" "}
        <BarChartComponent />
        <TableOrder />
      </div>
    </>
  );
};

export default RentedCarOrder;
