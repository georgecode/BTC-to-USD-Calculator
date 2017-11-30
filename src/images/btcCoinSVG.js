//How to SVG in react
//https://css-tricks.com/creating-svg-icon-system-react/
import React, { Component } from 'react';


class BtcCoinSVG extends Component {

  render() {
    return (
    	<svg className={this.props.svgClass} xmlns="http://www.w3.org/2000/svg" width={this.props.width} viewBox="0 0 54 54">
                <path fill={this.props.fill} fill-opacity={this.props.opasity} data-name="Bitcoin" d="M595,686a27,27,0,1,1,27-27A27,27,0,0,1,595,686Zm11.828-33.083a5.521,5.521,0,0,0-2.338-3.265,14.1,14.1,0,0,0-3.392-1.736,0.245,0.245,0,0,1-.181-0.364c0.415-1.5.81-3,1.223-4.5,0.057-.207.039-0.288-0.187-0.346q-1.27-.322-2.527-0.692a0.593,0.593,0,0,0-.156-0.028c-0.121,0-.172.077-0.217,0.248-0.386,1.468-.791,2.932-1.18,4.4-0.033.123-.066,0.178-0.154,0.178a0.41,0.41,0,0,1-.107-0.018c-0.663-.182-1.33-0.35-2-0.513-0.193-.047-0.212-0.131-0.161-0.314,0.4-1.474.794-2.952,1.2-4.426,0.055-.2.022-0.277-0.18-0.329-0.845-.219-1.689-0.444-2.528-0.687a0.663,0.663,0,0,0-.17-0.031c-0.11,0-.168.064-0.213,0.238-0.389,1.487-.8,2.968-1.19,4.455-0.046.175-.1,0.248-0.217,0.248a0.615,0.615,0,0,1-.155-0.027c-1.862-.515-3.73-1.013-5.592-1.529a0.581,0.581,0,0,0-.151-0.026c-0.112,0-.162.068-0.2,0.236-0.234.92-.486,1.836-0.745,2.75-0.061.216-.006,0.281,0.206,0.335a20.725,20.725,0,0,1,2.278.646,1.561,1.561,0,0,1,1.007,1.928q-1.8,6.693-3.61,13.385a1.09,1.09,0,0,1-1.071.9,1.5,1.5,0,0,1-.348-0.044c-0.668-.162-1.334-0.339-1.992-0.537a0.531,0.531,0,0,0-.152-0.027,0.267,0.267,0,0,0-.242.214c-0.44.986-.893,1.966-1.341,2.949-0.139.306-.138,0.3,0.185,0.394q2.783,0.764,5.566,1.525a0.225,0.225,0,0,1,.2.342c-0.42,1.516-.815,3.04-1.237,4.556-0.067.242,0,.3,0.213,0.353,0.837,0.217,1.673.437,2.5,0.683a0.56,0.56,0,0,0,.157.028c0.124,0,.171-0.08.215-0.249,0.4-1.5.808-3,1.2-4.509a0.193,0.193,0,0,1,.179-0.195,0.471,0.471,0,0,1,.124.022c0.614,0.185,1.228.369,1.849,0.528,0.253,0.064.333,0.132,0.252,0.418-0.418,1.479-.8,2.966-1.213,4.447-0.052.19-.02,0.259,0.174,0.31,0.864,0.224,1.725.456,2.581,0.706a0.481,0.481,0,0,0,.135.023c0.118,0,.162-0.079.2-0.227,0.381-1.44.77-2.879,1.156-4.318,0.092-.343.119-0.448,0.293-0.448a2.159,2.159,0,0,1,.355.054,19.743,19.743,0,0,0,3.7.424,10.762,10.762,0,0,0,1.645-.122,5.8,5.8,0,0,0,3.59-1.857A8.37,8.37,0,0,0,606,665.235a4.84,4.84,0,0,0-1.735-4.828,10.263,10.263,0,0,0-1.368-.935c0.132-.039.218-0.066,0.3-0.089a5.489,5.489,0,0,0,1.455-.622C606.642,657.535,607.216,654.653,606.828,652.917Zm-7.577,3.668a4.973,4.973,0,0,1-1.83.282c-0.116,0-.236,0-0.361-0.006a16.871,16.871,0,0,1-3.549-.72c-0.673-.188-0.672-0.193-0.493-0.858,0.462-1.717.928-3.434,1.386-5.153,0.041-.158.088-0.236,0.212-0.236a0.6,0.6,0,0,1,.14.022,21.349,21.349,0,0,1,3.687,1.168,5.129,5.129,0,0,1,1.93,1.435A2.7,2.7,0,0,1,599.251,656.585Zm-0.155,5.576a2.831,2.831,0,0,1-1.2,4.461,6.225,6.225,0,0,1-2.04.29l-0.249,0a19.461,19.461,0,0,1-4.2-.793c-0.34-.093-0.679-0.194-1.021-0.28a0.171,0.171,0,0,1-.144-0.255q0.861-3.165,1.714-6.334c0.024-.089.035-0.168,0.136-0.168a0.323,0.323,0,0,1,.078.012,28.287,28.287,0,0,1,4.57,1.422A6.564,6.564,0,0,1,599.1,662.161Z" transform="translate(-568 -632)"></path>
                </svg>

    );
  }
}//BtcCoinSVG END

BtcCoinSVG.defaultProps = {
  width: '500',
  fill: '#02ffff',
  opasity: '1',
  svgClass: 'btcCoin',
  
};


export default BtcCoinSVG;










