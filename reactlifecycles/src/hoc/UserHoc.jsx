import React from 'react';

const UserHoc = (WrapperComponent, content) => {
    return (props) => (
      <div className="UserHoc">
      {console.log(props)}
        {content}
        <WrapperComponent {...props}/>
      </div>
    );
}

export default UserHoc;
