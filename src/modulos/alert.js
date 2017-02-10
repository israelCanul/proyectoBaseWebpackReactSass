import React from 'react';

const HeaderImage = (props) => {
  return(
    <div id="headerComponent" className="row  without-margin-bottom imagenPaso" >
      <div className="wrap">
          <div className="row without-margin-botstom">
            <div className="col s12 padding" id="pasos" style={{textAlign:'center'}}>
                <img className="responsive-img hide-on-med-and-down paso1" src={props.imgStep}  />
            </div>
          </div>
      </div>
     </div>
  );
}
export default HeaderImage;
