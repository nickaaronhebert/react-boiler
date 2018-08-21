import React from 'react';
import { Link } from 'react-router-dom';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <i className={''} />
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">
            <img style={{ 'width': '60%'}} />
          </Link>
        </h3>
      )}
    </div>
  );
};
