import { i as img } from './index2.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import classnames from 'classnames';
import Ramen from '@team_yumi/ramen-web';
import 'react';
import 'react-router-dom';
import 'axios';
import 'rxjs';
import 'lodash';
import 'swiper/react';
import 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'formik';
import 'jwt-decode';

var styles = {"xcontainer-unauth":"root-module_xcontainer-unauth__SxQdd","xcontainer-unauth_left":"root-module_xcontainer-unauth_left__T--8L","xcontainer-unauth_left_container-border":"root-module_xcontainer-unauth_left_container-border__WWDuH","xcontainer-unauth_left_container-text":"root-module_xcontainer-unauth_left_container-text__SKQeT","xcontainer-unauth_right":"root-module_xcontainer-unauth_right__C8pTZ"};

const ContainerUnauthorized = ({
  children
}) => {
  return jsxs("div", Object.assign({
    className: classnames(styles['xcontainer-unauth'])
  }, {
    children: [jsx("div", Object.assign({
      className: classnames(styles['xcontainer-unauth_left'])
    }, {
      children: jsx(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "center",
        horizontalAlign: "center",
        padding: "xl",
        gap: "xl"
      }, {
        children: jsx("div", Object.assign({
          className: classnames(styles['xcontainer-unauth_left_container-border'])
        }, {
          children: jsx("div", Object.assign({
            className: classnames(styles['xcontainer-unauth_left_container-text'])
          }, {
            children: jsxs(Ramen.XBox, Object.assign({
              orientation: "vertical",
              verticalAlign: "center",
              horizontalAlign: "start",
              padding: "xl",
              gap: "xl"
            }, {
              children: [jsx(Ramen.XImage, {
                height: 1,
                src: img
              }), jsx(Ramen.XText, Object.assign({
                fontSize: 4,
                weight: "bold",
                colorThone: "lightest"
              }, {
                children: "Todo lo que necesitas para tu empresa, en un solo lugar \uD83D\uDE80"
              })), jsx(Ramen.XText, Object.assign({
                fontSize: 9,
                colorThone: "lightest"
              }, {
                children: "Obt\u00E9n precios exclusivos en una amplia gama de productos."
              }))]
            }))
          }))
        }))
      }))
    })), jsx("div", Object.assign({
      className: classnames(styles['xcontainer-unauth_right'])
    }, {
      children: jsx(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: 'center',
        horizontalAlign: "center",
        padding: "xl",
        gap: "xl",
        height: 'full',
        width: 'full'
      }, {
        children: children
      }))
    }))]
  }));
};

export { ContainerUnauthorized as default };
