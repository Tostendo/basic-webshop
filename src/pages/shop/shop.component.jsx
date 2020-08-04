import React from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

import { connect } from "react-redux";
import { setShopData } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionsToMap,
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const data = convertCollectionsToMap(snapshot);
        this.props.setShopData(data);
        this.setState({
          loading: false,
        });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              {...props}
              isLoading={this.state.loading}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              {...props}
              isLoading={this.state.loading}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setShopData: (data) => dispatch(setShopData(data)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
