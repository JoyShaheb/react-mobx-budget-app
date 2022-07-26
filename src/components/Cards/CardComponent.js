import styles from "./CardComponent.module.scss";

const CardComponent = ({ data }) => {
  let { id, reason, title, date, color, amount } = data;
  return (
    <>
      <div id={`transaction__history__${id}`}>
        <div className="row__1">
          <div className="row__1--title">{title}</div>
          <div className="row__1--date">{date}</div>
        </div>
        <div className="row__2">
          <div className="row__2--transID">trans ID : {id}</div>
          <div className={`row__2--amount ${color}`}>
            $ {amount.toLocaleString("en-US")}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardComponent;
