import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ViewData from "./ViewData";
const Data = () => (
  <Query
    query={gql`
      {
        pages {
          pageName
          url
          fullUrl
          typeLayout
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.pages.map((pages,pageName,url,fullUrl,typeLayout) => (
        <div key={pages}>
          <p>{`${pages.pageName} by ${pages.url}`}</p>
        </div>
      ));
    }}
  </Query>
);
export default Data;