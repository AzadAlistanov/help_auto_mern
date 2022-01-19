import React from 'react';

type Props = {
  message: string
}

const Alert = ({ message }: Props) => (
  <>
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  </>
);

export default Alert;
