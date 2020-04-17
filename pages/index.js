import React, { useState } from 'react';
import { FirebaseDatabaseProvider, FirebaseDatabaseMutation } from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from '../utils/firebase.config'

// After
function App() {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
      <div>
        <FirebaseDatabaseMutation type="push" path="user_bookmarks">
          {({ runMutation }) => (
            <form
              onSubmit={ev => {
                ev.preventDefault();
                runMutation({
                  url,
                  description,
                  created_at: firebase.database.ServerValue.TIMESTAMP,
                  updated_at: firebase.database.ServerValue.TIMESTAMP
                });
              }}
            >
              <input label="New Link URL" value={url} onChange={(ev)=>setUrl(ev.target.value)} />
              <input label="New Link URL 2"  value={description} onChange={(ev)=>setDescription(ev.target.value)} />
              <button type="submit"> + </button>
            </form>
          )}
        </FirebaseDatabaseMutation>
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;