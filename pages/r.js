import React from 'react'; 
import { FirebaseDatabaseProvider,FirebaseDatabaseMutation,
   FirebaseDatabaseNode } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";

import firebaseConfig from '../utils/firebase.config'

const s = (a) => JSON.stringify(a, null, 2);

class App extends React.Component{
    state = {
      limit: 2
    };
    render() {
      return (
        <div>
          <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
            <div>
              <FirebaseDatabaseNode
                path="user_bookmarks/"
                limitToFirst={this.state.limit}
                // orderByKey
                orderByValue={"created_on"}
              >
                {d => {
                  return (
                    <React.Fragment>
                      <pre>Path {d.path}</pre>
                      <pre style={{ height: 300, overflow: "auto" }}>
                        Value {s(d.value)}
                      </pre>
                      <button
                        onClick={() => {
                          this.setState(state => ({ limit: state.limit + 2 }));
                        }}
                      >
                        Load more
                      </button>
                    </React.Fragment>
                  );
                }}
              </FirebaseDatabaseNode>
            </div>
          </FirebaseDatabaseProvider>
        </div>
      );
    }
  }

  export default App