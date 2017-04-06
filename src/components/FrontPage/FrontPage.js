import React from 'react';

function FrontPage({ db }) {
  return <p>This is the Front Page! Here are the contents of the database: {JSON.stringify(db)}</p>;
}

export default FrontPage;
