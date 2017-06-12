import React, { Component } from "react";
import styled from "styled-components/native";
import { AppRegistry, StyleSheet, Text, View, ScrollView } from "react-native";

import Balance from "../components/balance";
import Transactions from "../components/transactions";

export default class HomeScreen extends Component {
  static navigationOptions = {};
  render() {
    console.log(this.props);
    var { account, node, loading } = this.props.screenProps.state;
    return (
      <Wrapper>
        <Balance
          account={account}
          loading={loading}
          node={node}
          {...this.props}
        />
        {account.transfers[0]
          ? <Transactions account={account} {...this.props} />
          : <ScrollView>
              <PaddedBox>
                <Text>Looks like this is your first time!</Text>
                <Text>
                  You'll need to generate an address and attach it to the tangle.
                </Text>

              </PaddedBox>
            </ScrollView>}
      </Wrapper>
    );
  }
}
const Wrapper = styled.View`
    height: 100%;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`;

const PaddedBox = styled.View`
 height: 300px;
    width:100%;
    padding: 50px;
    display:flex;
    align-items: center;
    justify-content: flex-start;
`;
