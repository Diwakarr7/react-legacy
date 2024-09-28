import React, { Component } from 'react';
import TopLevel from "./TopLevel";

/*
 create a context
 - provide the context
//  >> export both consumer and provider
 - consume the context in other components
 -- default value is used when there no provider above the consumer
*/
const UserName =  React.createContext("default_value");
export const UserProvider = UserName.Provider
export const UserConsumer  =  UserName.Consumer

 class UserContext extends Component {
  render() {
    return (
         <>
         <UserProvider value="user">
           <TopLevel/>
         </UserProvider>
         </>

    )
  }
}

export default UserContext
