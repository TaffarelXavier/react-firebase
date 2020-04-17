import React from 'react'; 
import { FirebaseDatabaseProvider,FirebaseDatabaseMutation,
   FirebaseDatabaseNode } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";

import firebaseConfig from '../utils/firebase.config'

// After
function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
    <FirebaseDatabaseNode
              path="user_bookmarks/"
              orderByValue={"teste"}
            >
              {d => {
                return (
                  <React.Fragment>
                    <pre style={{ height: 300,width:'100%',
                     overflowX: "auto" }}>
                      {JSON.stringify(d)}
                    </pre>
                    <button
                    >
                      Load more
                    </button>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
  </FirebaseDatabaseProvider>
  );
}

 export default App;