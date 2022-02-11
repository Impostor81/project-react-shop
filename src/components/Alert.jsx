import React, {useEffect} from 'react';

export default function Alert(props) {
  const {
    name = '',
    closeAlert = Function.prototype
  } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    }
  // eslint-disable-next-line
  }, [name]);

  return (
      <div className="alert">{name} <br/> добавлен в корзину</div>
  )
}
