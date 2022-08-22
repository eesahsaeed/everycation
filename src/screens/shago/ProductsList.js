
import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTh, faBars} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "./components/Breadcrumb";
import FilterCategory from "./components/filter/Category";
import FilterPrice from "./components/filter/Price";
import FilterSize from "./components/filter/Size";
import FilterStar from "./components/filter/Star";
import FilterColor from "./components/filter/Color";
import FilterClear from "./components/filter/Clear";
import FilterTag from "./components/filter/Tag";
import CardServices from "./components/card/CardServices";
import CardProductGrid from "./components/card/CardProductGrid";
import CardProductList from "./components/card/CardProductList";
import Paging from "./components/Paging";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {data} from "./data";

export default function ProductLists(){
  const [state, setState] = useState({
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    totalItems: 0,
    view: "list",
  });

  function onPageChanged(page){
    let products = getProducts();
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = products.slice(offset, offset + pageLimit);
    setState({...state, currentPage: currentPage, currentProducts: currentProducts, totalPages: totalPages});
  };
 
  function onChangeView(view){
    setState({...state, view: view});
  };

  function getProducts(){
    let products = data.products;
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    return products;
  };

  useEffect(() => {
    const totalItems = getProducts().length;
    setState({...state, totalItems: totalItems, currentProducts: getProducts()});   
  }, [state.totalItems]);

  return (
    <>
      <Header/>
      <div style={{marginTop: 90}}></div>
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <FilterCategory />
            <FilterPrice />
            <FilterSize />
            <FilterStar />
            <FilterColor />
            <FilterClear />
            <FilterTag />
            <CardServices />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-8">
                <span className="align-middle fw-bold">
                  {state.totalItems} results for{" "}
                  <span className="text-warning">"t-shirts"</span>
                </span>
              </div>
              <div className="col-md-4">
                <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                >
                  <option value={1}>Most Popular</option>
                  <option value={2}>Latest items</option>
                  <option value={3}>Trending</option>
                  <option value={4}>Price low to high</option>
                  <option value={4}>Price high to low</option>
                </select>
                {/**<div className="btn-group ms-3" role="group">
                  <button
                    aria-label="Grid"
                    type="button"
                    onClick={() => onChangeView("grid")}
                    className={`btn ${
                      state.view === "grid"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    <FontAwesomeIcon icon={faTh} />
                  </button>
                  <button
                    aria-label="List"
                    type="button"
                    onClick={() => onChangeView("list")}
                    className={`btn ${
                      state.view === "list"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div> */}
              </div>  
            </div>
            <hr />
            <div className="row g-3">
              {state.currentProducts.map((product, idx) => (
                <div key={idx} className="col-md-12">
                  <CardProductList data={product} />
                </div> 
              ))}
            </div>  
            <hr />
            <Paging
              totalRecords={state.totalItems}
              pageLimit={9}
              pageNeighbours={3}
              onPageChanged={onPageChanged}
              sizing=""
              alignment="justify-content-center"
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
