import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

import Navigation from "../components/Navigation";

import {
  asyncAddressMidle,
  asyncApplianceMidle,
  asyncBankMidle,
  asyncBeersMidle,
} from "../states/shared/action";

export default function HomePage() {
  const {
    address = [],
    banks = [],
    appliance = [],
    beers = [],
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  const [search, setSearch] = React.useState(keyword || "");

  const onKeywordChangeHandler = (search) => {
    setSearch(search);
    changeSearchParams(search);
  };

  const filterSearch = React.useMemo(
    () =>
      appliance?.filter((poke) => {
        return poke.brand.toLowerCase().includes(search.toLowerCase());
      }),
    [appliance, search]
  );

  const columnAppliance = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "User Id",
      selector: (row) => row.uid,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Equipment",
      selector: (row) => row.equipment,
    },
  ];

  useEffect(() => {
    dispatch(asyncAddressMidle());
    dispatch(asyncBankMidle());
    dispatch(asyncApplianceMidle());
    dispatch(asyncBeersMidle());
  }, [dispatch]);

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="my-3 mx-5">
        <div className="row g-0 border border-1 border-dark rounded justify-content-between align-content-center align-items-center">
          <div className="col-lg-8">
            <ul className="list-unstyled d-flex gap-3 mt-3 ms-4">
              <li className="manrope" style={{ fontSize: "16px" }}>
                Banks
              </li>
              <li className="manrope" style={{ fontSize: "16px" }}>
                Address
              </li>
              <li className="manrope" style={{ fontSize: "16px" }}>
                Appliance
              </li>
              <li className="manrope" style={{ fontSize: "16px" }}>
                Beers
              </li>
            </ul>
          </div>
          <div className="col-lg-3 mt-2 me-2">
            <div className="input-group mb-3 ">
              <input
                type="text"
                value={keyword}
                onChange={(e) => onKeywordChangeHandler(e.target.value)}
                className="form-control"
                aria-label="Text input with dropdown button"
              />
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/">
                    Banks
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Address
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Beers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-0 mt-2">
          <div className="col-lg-12">
            <div className="row g-0">
              <div className="col-lg-6 border border-1 rounded">
                <h3 className="p-4">Banks</h3>
                {banks.map((item) => {
                  return (
                    <div key={item.id} className="p-4">
                      <Link
                        to={`/banks/${item.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <h3>{item.bank_name}</h3>
                      </Link>
                      <p>Account Number : {item.account_number}</p>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-2 border border-1 rounded">
                <h3 className="p-4">Address</h3>
                {address.map((item) => {
                  return (
                    <div key={item.id} className="p-4">
                      <h5>{item.city}</h5>
                      <p>{item.street_address}</p>
                    </div>
                  );
                })}
                <h3 className="p-4">Beers</h3>
                {beers.map((item) => {
                  return (
                    <div key={item.id} className="p-4">
                      <h5>{item.brand}</h5>
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-4 border border-1 rounded text-center">
                <h1 className="text-center mb-4">Filter</h1>
                {filterSearch.map((item) => {
                  return <div key={item.id}>{item.brand}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 mt-2 border border-1">
          <div className="col-lg-12 p-4">
            <h3>Appliance</h3>
            <DataTable
              columns={columnAppliance}
              data={appliance}
              pagination
            ></DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}
