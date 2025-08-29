import "./Subscriptions.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptions } from "../../features/subscriptions/subscriptionsThunk";
import NoNotifications from "../../components/NoNotifications/NoNotifications";
import SubscriptionsTableHeader from "../../components/SubscriptionsTableHeader/SubscriptionsTableHeader";
import SubscriptionRow from "../../components/SubscriptionRow/SubscriptionRow";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import NoResults from "../../components/NoResults/NoResults";

function Subscriptions() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const { loading, error, subscriptions } = useSelector(
    (state) => state.subscriptions
  );

  useEffect(() => {
    dispatch(getSubscriptions(date));
  }, [dispatch, date]);

  useEffect(() => {
    console.log(subscriptions?.Statistics);
  }, [subscriptions]);

  return (
    <div className="subscriptions">
      <h1>Subscriptions</h1>
      <div className="date-field">
        <input
          id="birth_date"
          type="date"
          name="birth_date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage />
      ) : !subscriptions?.Statistics?.length ? (
        <NoResults />
      ) : (
        <div className="subscriptions-table">
          <SubscriptionsTableHeader />
          {subscriptions?.Statistics.map((subscription, index) => (
            <SubscriptionRow
              key={index}
              num={index + 1}
              subscription={subscription}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Subscriptions;
