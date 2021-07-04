import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { FETCH_NOTEBOOK_QUERY } from "../utils/graphql";
import { Transition } from "semantic-ui-react";

const Notebook = (props) => {
  console.log(props);
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_NOTEBOOK_QUERY, {
    variables: {
      userId: user.id,
      title: props.match.params.notebook,
    },
  });
  return (
    <div className="notes">
      {loading ? (
        <p>Loading notes...</p>
      ) : (
        <Transition.Group>
          {data &&
            data.getNotebook.notes.map((note) => (
              <div className="note" key={note.id}>
                <p>{note.title}</p>
              </div>
            ))}
        </Transition.Group>
      )}
    </div>
  );
};

export default Notebook;
