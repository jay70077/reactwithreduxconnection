import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import PeopleList from "../components/PeopleList";
import mainAction from '../../app/redux/Action/mainAction';
import { connect } from 'react-redux';
import Prop_type from 'prop-types'
 class AppContainer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     people: [],
  //     errorMessage: "",
  //     isFetching: true
  //   };
  // }
  //
  // async fetchRandomPeopleAPI() {
  //   try {
  //     let response = await fetch("https://randomuser.me/api/?results=15");
  //     let json = await response.json();
  //     this.setState({ people: json.results, isFetching: false });
  //   } catch (error) {
  //     this.setState({ errorMessage: error });
  //   }
  // }

  componentDidMount() {
    this.props.peopleDataFetch();
  }

  render() {
    let content = <PeopleList people={this.props.peopleData.people} />;
    if (this.props.peopleData.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>{content}</View>;
  }
}
const mapStateToProps =(state)=>{
   return{
         peopleData:state
     }
};

AppContainer.propType={
    peopleDataFetch:Prop_type.func,
    people:Prop_type.array
};
export default connect(mapStateToProps,{mainAction})(AppContainer);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});
