import { _ as __awaiter, u as useWindowSize, a as useGlobal, p as productsClient, P as ProductsList } from './index2.js';
import { jsx, Fragment as Fragment$1, jsxs } from 'react/jsx-runtime';
import { useState, useRef, Fragment, useEffect } from 'react';
import 'react-icons/md';
import { useHistory } from 'react-router-dom';
import Ramen from '@team_yumi/ramen-web';
import 'react-icons/bi';
import 'react-icons/gi';
import 'react-icons/fi';
import 'react-icons/ai';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'axios';
import 'rxjs';
import 'swiper/css/pagination';
import 'react-icons/ti';
import 'react-icons/ri';

const SliderComponent = ({
  items,
  slidesPerView: _slidesPerView = 2,
  useNavigation: _useNavigation = true,
  itemRender,
  onItemRenderClick
}) => {
  const [mode, setMode] = useState('PAGE_LOADED');
  const [loadedIndex, setLoadedIndex] = useState(0);
  const mySlides = useRef(null);
  const handleSlideChange = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const activeIndex = yield (_b = (_a = mySlides === null || mySlides === void 0 ? void 0 : mySlides.current) === null || _a === void 0 ? void 0 : _a.swiper) === null || _b === void 0 ? void 0 : _b.activeIndex;
    setLoadedIndex(activeIndex);
  });
  const handleItemRenderClick = item => {
    onItemRenderClick(item);
  };
  const renderPAGE_LOADED = () => {
    return jsx(Fragment$1, {
      children: jsx(Swiper, Object.assign({
        navigation: _useNavigation,
        modules: [Navigation],
        slidesPerView: _slidesPerView,
        initialSlide: loadedIndex,
        centeredSlides: loadedIndex > _slidesPerView - 1,
        ref: mySlides,
        onSlideChange: handleSlideChange
      }, {
        children: items.map((item, index) => {
          return jsx(SwiperSlide, Object.assign({
            className: classnames({
              'last-item': index + 1 === items.length
            }),
            onClick: () => handleItemRenderClick(item)
          }, {
            children: itemRender && itemRender(item, index)
          }), `preview${index}`);
        })
      }))
    });
  };
  const renders = {
    PAGE_LOADED: renderPAGE_LOADED
  };
  const customRender = renders[mode];
  return jsx(Fragment, {
    children: jsx("div", Object.assign({
      className: 'slider-component'
    }, {
      children: !customRender ? jsx("div", {
        children: mode
      }) : customRender()
    }))
  });
};

const useItemRender$1 = (item, index) => {
  return jsx("div", Object.assign({
    className: 'swiper-zoom-container'
  }, {
    children: jsx(Ramen.XCard, Object.assign({
      size: 'l'
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "center",
        horizontalAlign: 'center',
        gap: "m",
        padding: "m",
        width: 'full',
        height: 1
      }, {
        children: [jsx(Ramen.XSymbol, {
          symbol: 'construction-mdh'
        }), jsx(Ramen.XText, Object.assign({
          textAlign: 'center',
          fontSize: 12
        }, {
          children: item.name
        }))]
      }))
    }))
  }), `preview${index}`);
};
const SectionSlider = ({
  title,
  items
}) => {
  useState({});
  const history = useHistory();
  const {
    width
  } = useWindowSize();
  const slidesPerView = width > 1024 ? 8 : width > 768 ? 5 : width > 425 ? 3 : 2;
  const handleItemRenderClick = item => {
    history.push(item.url);
  };
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "vertical",
    height: 'full'
  }, {
    children: [jsx(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between",
      verticalAlign: "center",
      gap: "xxs",
      padding: "l"
    }, {
      children: jsx(Ramen.XText, Object.assign({
        fontSize: 8
      }, {
        children: title
      }))
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(SliderComponent, {
      slidesPerView: slidesPerView,
      itemRender: useItemRender$1,
      items: items,
      onItemRenderClick: handleItemRenderClick
    }), jsx(Ramen.XVSpace, {
      size: "l"
    })]
  }));
};

const useItemRender = (item, index) => {
  return jsx("div", Object.assign({
    className: 'swiper-zoom-container'
  }, {
    children: jsx(Ramen.XCard, Object.assign({
      size: 'l'
    }, {
      children: jsxs(Ramen.XBox, Object.assign({
        orientation: "vertical",
        verticalAlign: "center",
        horizontalAlign: 'center',
        gap: "m",
        padding: "m",
        width: 'full',
        height: 1
      }, {
        children: [jsx(Ramen.XSymbol, {
          symbol: 'construction-mdh'
        }), jsx(Ramen.XText, Object.assign({
          textAlign: 'center',
          fontSize: 12
        }, {
          children: item.name
        }))]
      }))
    }))
  }), `preview${index}`);
};
const CategorySlider = ({
  title,
  items
}) => {
  const history = useHistory();
  const {
    width
  } = useWindowSize();
  const slidesPerView = width > 1024 ? 8 : width > 768 ? 5 : width > 425 ? 3 : 2;
  const handleItemRenderClick = item => {
    history.push(item.url);
  };
  return jsxs(Ramen.XBox, Object.assign({
    orientation: "vertical",
    height: 'full'
  }, {
    children: [jsx(Ramen.XBox, Object.assign({
      orientation: "horizontal",
      horizontalAlign: "between",
      verticalAlign: "center",
      gap: "xxs",
      padding: "l"
    }, {
      children: jsx(Ramen.XText, Object.assign({
        fontSize: 8
      }, {
        children: title
      }))
    })), jsx(Ramen.XVSpace, {
      size: "s"
    }), jsx(SliderComponent, {
      slidesPerView: slidesPerView,
      itemRender: useItemRender,
      items: items,
      onItemRenderClick: handleItemRenderClick
    }), jsx(Ramen.XVSpace, {
      size: "l"
    })]
  }));
};

const HomeLayout = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    categories
  } = useGlobal();
  const filters = {
    limit: 20
  };
  const history = useHistory();
  useEffect(() => {
    // fetch and get product
    getData();
  }, []);
  const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      setLoading(true);
      const {
        data
      } = yield productsClient.getProducts(Object.assign(Object.assign({}, filters), {
        store: 'E518'
      }));
      setProducts(data);
      setLoading(false);
    } catch (error) {
      Ramen.Api.notification.error({
        description: 'Error',
        message: 'We have errors please try again'
      });
      setProducts([]);
      setLoading(false);
    }
  });
  return jsx(Fragment$1, {
    children: jsxs("div", Object.assign({
      className: "new-product"
    }, {
      children: [jsx(CategorySlider, {
        title: 'Categorías destacadas',
        items: categories
      }), jsx(Ramen.XVSpace, {
        size: "l"
      }), jsxs(Ramen.XBox, Object.assign({
        orientation: "horizontal",
        horizontalAlign: "between",
        verticalAlign: "center",
        gap: "xxs",
        padding: "l"
      }, {
        children: [jsx(Ramen.XText, Object.assign({
          fontSize: 8
        }, {
          children: " Productos esenciales para tu negocio"
        })), jsx(Ramen.XButton, {
          type: 'solid',
          text: '+ Ver más productos',
          onClick: () => history.push('/products')
        })]
      })), jsx(ProductsList, {
        loadMoreLoading: false,
        data: products,
        loading: loading,
        filters: filters
      }), jsx(Ramen.XVSpace, {
        size: "l"
      }), jsx(SectionSlider, {
        title: 'Nuestras marcas',
        items: categories
      })]
    }))
  });
};

export { HomeLayout as default };
