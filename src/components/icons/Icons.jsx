import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandHoldingDollar, faSearch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import '../../style/icons/icons.css';

const Icons = () => {
  return (
    <section className="icon-wrapper">
      <section className="icon-container">
      <section className="icon-box">
          <FontAwesomeIcon className="icon center" icon={faSearch} size="3x" />
          <p>Search</p>
        </section>
        <section className="icon-box">
          <FontAwesomeIcon className="icon right" icon={faHandHoldingDollar} size="3x" />
          <p>Book</p>
        </section>
        <section className="icon-box">
          <FontAwesomeIcon className="icon left" icon={faThumbsUp} size="3x" />
          <p>Enjoy</p>
        </section>
      </section>
    </section>
  );
};

export default Icons;

