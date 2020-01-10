import React from 'react';

const Modal = () => {
  return (
    <>
      <div className="Modal">
        <div className="Modal-content">
          <div className="Modal-block">
            <h1 className="Heading-2">Modal Title</h1>
            <p className="Heading-5 Color-gray">Qui ut duis velit do cupidatat officia deserunt.</p>
          </div>
          <div className="Modal-block FlexGrow-1">
            <p>
              Nisi cillum cillum exercitation dolor minim elit adipisicing cupidatat irure amet
              velit id. Tempor laboris mollit nisi fugiat duis nulla et mollit commodo. Velit
              consectetur consectetur nisi sunt excepteur magna cillum ea cupidatat eiusmod nisi
              sint. Deserunt aute enim cupidatat mollit duis voluptate Lorem cillum tempor cillum
              occaecat duis enim sunt. Voluptate sint irure est eiusmod. Veniam nisi fugiat esse
              quis non ex adipisicing sint irure dolor.
            </p>
            <p>
              Consectetur incididunt eiusmod cillum officia Lorem dolor quis exercitation cupidatat
              sint ut. Irure anim ut amet proident ullamco fugiat cillum dolor nisi duis mollit est.
              Sint sunt esse enim est exercitation Lorem culpa et reprehenderit.
            </p>
          </div>
          <div className="Modal-block Flex JustifyContent-end">
            <button className="Button Button--light MarginRight">Decline</button>
            <button className="Button Button--primary">Accept</button>
          </div>
        </div>
        <div className="Modal-backdrop"></div>
      </div>
    </>
  );
};

export default Modal;
