import React, { useState } from 'react';
import { FirebaseDatabaseProvider, FirebaseDatabaseMutation } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from '../utils/firebase.config'

class MutationExample extends React.Component {
    state = {
      pushedKey: ""
    };
    render() {
      const { state } = this;
      return (
              <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
 <FirebaseDatabaseMutation type="push" path="user_bookmarks">
            {({ runMutation }) => {
              return (
                <div>
                  <button
                    data-testid="test-push"
                    onClick={async () => {
                      const { key } = await runMutation({ TEST: "DATA" });
                      this.setState({ pushedKey: key });
                    }}
                  >
                    Push
                  </button>
                </div>
              );
            }}
          </FirebaseDatabaseMutation>
          {state.pushedKey !== "" && (
            <div>
              <div data-testid="test-push-result">{state.pushedKey}</div>
              <div>
                <FirebaseDatabaseNode path={`${path}/${state.pushedKey}`}>
                  {({ value }) => <pre>{s(value)}</pre>}
                </FirebaseDatabaseNode>
                <FirebaseDatabaseMutation
                  type="set"
                  path={`${path}/${state.pushedKey}`}
                >
                  {({ runMutation }) => (
                    <button
                      onClick={async () => {
                        runMutation(null);
                        this.setState({ pushedKey: "" });
                      }}
                    >
                      Delete
                    </button>
                  )}
                </FirebaseDatabaseMutation>
              </div>
            </div>
          )}

              </FirebaseDatabaseProvider>
      );
    }
  }

  export default MutationExample;