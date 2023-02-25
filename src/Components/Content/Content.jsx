import React from "react";
import "./Content.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

import Chart1 from "../Charts/Chart1";
import Tables from "../Tables";
import Chart from "../Chart";

export default function Content() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "June",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data1 = [
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  const data2 = [
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  const bar = [
    {
      name: "Page A",
      uv: 4000,

      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,

      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,

      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,

      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,

      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,

      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,

      amt: 2100,
    },
  ];
  const data5 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="row-itms">
            <div className="money">
              <div className="money-itms">
                <div className="text">
                  <div className="text-itm">
                    <h3 className="cnt-hdr">Balance</h3>
                    <h1 className="cnt-amt">$1400.587</h1>
                    <p className="cnt-sub">6 ,April 4 PM</p>
                  </div>
                  <div className="chart-it">
                    <ResponsiveContainer width="110%" height="70%">
                      <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                 
                </div>
                <div className="text2">
                  <span><img src="images/up.png"  className="imgup" alt="" /><h3>43.12%</h3></span>
                  <p>+$555.25</p>
                </div>
              </div>
              <div className="money-itms">
                <div className="text">
                  <div className="text-itm">
                    <h3 className="cnt-hdr">Saved Money</h3>
                    <h1 className="cnt-amt">$1400.587</h1>
                    <p className="cnt-sub">6 ,April 4 PM</p>
                  </div>
                  <div className="chart-it">
                    <ResponsiveContainer width="110%" height="70%">
                      <AreaChart
                        width={500}
                        height={400}
                        data={data2}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="text2">
                  <span><img src="images/dwn.png"  className="imgup" alt="" /><h3>3.12%</h3></span>
                  <p>+$555.25</p>
                </div>
              </div>
              <div className="money-itms">
                <div className="text">
                  <div className="text-itm">
                    <h3 className="cnt-hdr">Arrearages</h3>
                    <h1 className="cnt-amt">$1400.587</h1>
                    <p className="cnt-sub">6 ,April 4 PM</p>
                  </div>
                  <div className="chart-it">
                    <ResponsiveContainer width="110%" height="70%">
                      <AreaChart
                        width={500}
                        height={400}
                        data={data1}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="text2">
                  <span><img src="images/up.png"  className="imgup" alt="" /><h3>25.12%</h3></span>
                  <p>+$555.25</p>
                </div>
              </div>
            </div>
            <div className="charts">
              <div className="chart-itms1">
                <h3 className="cnt-hdr">
                  Transactions &nbsp;<i class="fa fa-chevron-down"></i>
                </h3>
                <div className="subhdr">
                  <div className="sub-row">
                    <h3>
                      Visa <i class="fa fa-chevron-down"></i>{" "}
                    </h3>{" "}
                    <h4>Day </h4> <h4>Week</h4> <h4>Month</h4> <h4>All</h4>
                  </div>
                  <div className="char">
                    <div className="org-char">
                      <Chart />
                    </div>
                    <div className="org-charCont">
                      <h4>53.2%</h4>
                      <p>Spent From the Total Balance</p>
                      <h4>73.4%</h4>
                      <p>Spent Compared to last Month</p>
                    </div>
                  </div>
                  <div className="dotnt">
                    <div className="dots1">
                      <p>
                        <img src="images/cir1.png" className="dots" alt="" />
                        Entertainment
                      </p>
                      <p>
                        <img src="images/cir2.png" className="dots" alt="" />
                        Food Products
                      </p>
                    </div>
                    <div className="dots1">
                      <p>
                        <img src="images/cir3.png" className="dots" alt="" />
                       Subscriptions
                      </p>
                      <p>
                        <img src="images/cir4.png" className="dots" alt="" />
                       Other
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-itms2">
                <div className="char2Cont">
                  <h3 className="cnt-hdr" id="lef-chart">
                    Revenue{" "}
                  </h3>

                  <h3 className="cnt-hdr" id="right-chrt">
                    Transactions &nbsp;<i class="fa fa-chevron-down"></i>
                  </h3>
                </div>
                <div className="chart-line">
                  <ResponsiveContainer width="100%" height="80%">
                    <AreaChart
                      width={300}
                      height={100}
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis dataKey="name" stroke="grey" />
                      <YAxis stroke="grey" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical-cont">
            <div className="prof-icn">
              <div className="dot">
                <h3>
                  <i class="fa-solid fa-ellipsis-vertical"></i>
                </h3>
              </div>
              <div className="img">
                <img src="images/img2.png" alt="" />
              </div>
              <h3 className="cnt-hdr">Brayan Donald</h3>
              <p className="cnt-sub">6 ,April 4 PM</p>
            </div>
            <div className="cards-hold">
              <div className="credit-card">
                <div className="txt-itms">
                  <h4>Balance</h4>
                  <h1>$83,000.85</h1>
                  <h2>4444 5555 6666 7777</h2>
                  <h4>
                    VALID THRU <br />
                    <span>12/25</span>
                  </h4>
                </div>
                <div className="fig-itm">
                  <img src="images/signal.png" alt="" className="signal" />
                  <img src="images/visa.png" alt="" className="visa" />
                </div>
              </div>
              <div className="add-card">
                <h3 className="cnt-hdr">Add Card +</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="trans-items">
          <div className="trans1">
            <div className="char2Cont">
              <h3 className="cnt-hdr" id="lef-chart">
                Transaction History{" "}
              </h3>

              <h3 className="cnt-hdr" id="right-chrt">
                FEB &nbsp;<i class="fa fa-chevron-down"></i>
              </h3>
            </div>
            <div className="tableCont">
              <Tables />
            </div>
          </div>
          <div className="trans2">
            <div className="char2Cont">
              <h3 className="cnt-hdr" id="lef-chart">
                Expences{" "}
              </h3>

              <h3 className="cnt-hdr" id="right-chrt">
                Last Days &nbsp;<i class="fa fa-chevron-down"></i>
              </h3>
            </div>
            <div className="content-bar">
              <ResponsiveContainer width="100%" height="90%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* <Legend /> */}
                  <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="trans3">
          <div className="char2Cont">
              <h3 className="cnt-hdr" id="lef-chart">
                Goals {" "}
              </h3>

              <h3 className="cnt-hdr" id="right-chrt">
                Add Goal &nbsp;+
              </h3>
            </div>
            <div className="percont">

            <div className="skill-bar">
              <div className="bar">
                <div className="info">
                  <span>Trip</span>
                  <p className="dot-cntLeft"><span>$1152</span>/$2500</p>
                  <i class="fa-solid fa-ellipsis-vertical" id="dot-lft"></i>
                </div>
                <div className="progress-line"><span></span></div>
              </div>



              <div className="bar">
                <div className="info">
                  <span>Food</span>
                  <p className="dot-cntLeft"><span>$2152</span>/$2800</p>
                  <i class="fa-solid fa-ellipsis-vertical" id="dot-lft"></i>
                </div>
                <div className="progress-line"><span></span></div>
              </div>

              <div className="bar">
                <div className="info">
                  <span>Food</span>
                  <p className="dot-cntLeft"><span>$12022</span>/$25500</p>
                  <i class="fa-solid fa-ellipsis-vertical" id="dot-lft"></i>
                </div>
                <div className="progress-line"><span></span></div>
              </div>


              
            </div>
           


          




            </div>
          </div>
        </div>
      </div>
    </>
  );
}
