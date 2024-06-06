import RootLayout from "./components/layout";

import AppStyles from "./App.module.css";
import LayoutStyles from "./components/layout.module.css";
import SlideStyles from "./components/Side.module.css";

import Slide from "./components/Slide";
import MoreOnHover from "./components/MoreOnHover";
import { Fragment } from "react";

export default function App() {
  return (
    <RootLayout>
      <div className={AppStyles.page_container}>
        <div>
          <div className={AppStyles.content_card_centered}>
            <Logo />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "36px",
              }}
            >
              {"Online Ecommarance Store Project"}
            </div>
            <hr />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ margin: 0 }}>Developed By:</h2>
                <p style={{ margin: "10px", marginLeft: "50px" }}>
                  Dima Podoliok, Daniel Popov
                </p>
              </div>
              <div>
                <h2 style={{ margin: 0 }}>Overseen By:</h2>
                <p style={{ margin: "10px", marginLeft: "50px" }}>
                  Aviram Dayan
                </p>
              </div>
              <div>
                <h2 style={{ margin: 0 }}>Developed In:</h2>
                <p style={{ margin: "10px", marginLeft: "50px" }}>
                  {"המחלקה למדעי המחשב במכללה האקדמית ספיר"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Slide
          SegmentTitle={"21st Century Shopping"}
          JsxContent={
            <>
              <h3> Unleashing a Storm of Opportunity</h3>
              <p>
                Harness the potential of the{" "}
                <MoreOnHover
                  usual_jsx={"booming online appeal market"}
                  jsx_on_hover={
                    "The online apparel market is experiencing unprecedented growth, driven by evolving consumer behaviors and technological advancements. This sector is projected to double its market size within the next seven years, offering a substantial opportunity for investors and businesses ready to capitalize on the digital transformation in retail. Stay ahead of the curve by tapping into this lucrative market that promises extensive reach and robust returns."
                  }
                />
                , where a colossal market share awaits—with{" "}
                <MoreOnHover
                  usual_jsx={
                    "projections hinting at a potential twofold surge in just seven years!"
                  }
                  jsx_on_hover={
                    "Expert analysis and market research indicate a potential twofold increase in the online apparel market within the next seven years. This surge is attributed to several factors including increased online shopping adoption, enhancements in e-commerce technology, and greater consumer preference for digital purchasing options. Understanding these projections can guide strategic planning and investment decisions, positioning your business to leverage upcoming trends for maximum viability"
                  }
                />
                {/* Show graph! */}
              </p>
              <h3>Empowerment of the Underdog</h3>
              <p>
                <MoreOnHover
                  usual_jsx={
                    "Even the smallest players are reaping monumental profits"
                  }
                  jsx_on_hover={
                    "Our platform is dedicated to empowering even the smallest players in the market, enabling them to break free from traditional constraints that typically hinder growth. By leveraging our innovative tools and supportive network, small businesses are not only competing but excelling, setting new benchmarks in their respective fields. This approach is reshaping the landscape, demonstrating that with the right resources, any entity can achieve extraordinary success."
                  }
                />
                in thisdynamic landscape—defying conventional limitations and
                paving the way for unprecedented success.
              </p>
            </>
          }
          IlustrationImageAssetName={"slides/p1.webp"}
          isReversed={false}
        />

        <Slide
          SegmentTitle={"Our Vision"}
          JsxContent={
            <>
              <h3>Empowering Small Businesses</h3>
              <p>
                Our platform empowers small businesses to thrive in the
                competitive costume market. Seamlessly integrate into this
                exciting industry and unlock unprecedented growth opportunities.
                <MoreOnHover
                  usual_jsx={
                    "Unlike most platforms, there are no exorbitant transaction fees."
                  }
                  jsx_on_hover={
                    "Our platform stands out by offering a low-cost transaction model that encourages growth without the burden of high fees. Unlike many competitors, we prioritize your profit by minimizing overhead costs associated with sales. This approach ensures that small businesses can maximize their earnings and reinvest in expanding their operations, making it easier to scale up and succeed in the competitive costume market."
                  }
                />
              </p>
              <h3>Start Your Journey</h3>
              <p>
                Join us to embark on a rewarding journey towards success in this
                electrifying market. We provide{" "}
                <MoreOnHover
                  usual_jsx={"the tools and support your need to excel."}
                  jsx_on_hover={
                    "Our platform is designed to provide you with all the essential tools and robust support necessary to thrive in the electrifying costume market. From advanced analytics and marketing resources to personalized consultation and technical assistance, we ensure that every aspect of your business is fortified to meet industry demands and overcome challenges. Join us and leverage our comprehensive suite of resources tailored to foster your success."
                  }
                />
              </p>
            </>
          }
          IlustrationImageAssetName={"slides/p2.webp"}
          isReversed={true} // Adjust as needed
        />

        <Slide
          SegmentTitle="Our Solution"
          JsxContent={
            <>
              <h3>Your Profit Hunter</h3>
              <p>
                Unleash boundless potential{" "}
                <MoreOnHover
                  usual_jsx={"without breaking the bank"}
                  jsx_on_hover={
                    "Our solutions are crafted to deliver exceptional results without imposing a heavy financial burden on your business. We understand the importance of cost-efficiency, especially for startups and small businesses striving to maximize their profits. By choosing our platform, you benefit from high-quality services and features at a cost-effective price point, ensuring you can invest more in growth and less in operational expenses."
                  }
                />
                . Our solution offers excellence that exceeds expectations, at a
                fraction of the usual cost.
              </p>
              <h3>Endless Customizability</h3>
              <p>
                Experience the ultimate in customization with
                <MoreOnHover
                  usual_jsx={"tailored solutions"}
                  jsx_on_hover={
                    "Our platform is built on the principle of flexibility and customization. We recognize that each business has unique challenges and requirements. That’s why we offer solutions that are specifically designed to meet your individual needs. Whether it’s adapting to specific market demands, integrating with existing systems, or developing new functionalities, our goal is to provide you with the precise tools and resources you need to excel in your industry."
                  }
                />
                designed specifically for your unique needs.
              </p>
            </>
          }
          IlustrationImageAssetName={"slides/p3.webp"}
          isReversed={false} // Adjust as needed
        />

        <Slide
          SegmentTitle="Cutting Edge Technologies"
          JsxContent={
            <>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <MoreOnHover
                  usual_jsx={
                    <div className={AppStyles.TechStack}>
                      <h3>React</h3>
                      <img
                        src={require("./assets/tech-logos/React.webp")}
                        style={{ width: "10vw" }}
                      />
                    </div>
                  }
                  jsx_on_hover={
                    <Fragment>
                      {" "}
                      <p>
                        {" "}
                        {
                          "React 19 with its new compiler is a JavaScript library for building user interfaces, specifically optimized for large applications with data that changes over time."
                        }{" "}
                      </p>{" "}
                      <p>
                        {
                          "The introduction of the new compiler in React 19 enhances performance by optimizing the way components render, significantly improving the responsiveness and user experience of applications."
                        }
                      </p>{" "}
                    </Fragment>
                  }
                />

                <MoreOnHover
                  usual_jsx={
                    <div className={AppStyles.TechStack}>
                      <h3>NextJS</h3>
                      <img
                        src={require("./assets/tech-logos/Next.png")}
                        style={{ width: "10vw" }}
                      />
                    </div>
                  }
                  jsx_on_hover={
                    <Fragment>
                      <p>
                        {
                          "Next.js 15 Canary is an edge version of a popular React-based framework designed for building optimized web applications with server-side rendering and static site generation capabilities."
                        }
                      </p>
                      <p>
                        {
                          "This cutting-edge release includes experimental features that improve build performance, enhance image optimization, and streamline developer experience, making maintenance and updates more efficient."
                        }
                      </p>
                    </Fragment>
                  }
                />

                <MoreOnHover
                  usual_jsx={
                    <div className={AppStyles.TechStack}>
                      <h3>PocketBase</h3>
                      <img
                        src={require("./assets/tech-logos/PB.png")}
                        style={{ width: "10vw" }}
                      />
                    </div>
                  }
                  jsx_on_hover={
                    <Fragment>
                      <p>
                        {
                          "PocketBase is an all-in-one backend solution providing real-time database management, user authentication, and file storage, all from a single self-hosted package"
                        }
                      </p>
                      <p>
                        {
                          "Its simplicity and flexibility make it an excellent choice for rapid development, reducing the complexity of backend maintenance and improving scalability and control"
                        }
                      </p>
                    </Fragment>
                  }
                />

                <MoreOnHover
                  usual_jsx={
                    <div className={AppStyles.TechStack}>
                      <h3>NodeJS</h3>
                      <img
                        src={require("./assets/tech-logos/node.png")}
                        style={{ width: "10vw" }}
                      />
                    </div>
                  }
                  jsx_on_hover={
                    <Fragment>
                      <p>
                        {
                          "Node.js 22 is the latest version of an asynchronous event-driven JavaScript runtime designed to build scalable network applications"
                        }
                      </p>
                      <p>
                        {
                          "This version includes updated features that enhance performance, improve security, and offer better support for modern JavaScript syntax, contributing to robust back-end services that are easier to maintain and upgrade."
                        }
                      </p>
                    </Fragment>
                  }
                />
              </div>
            </>
          }
          IlustrationImageAssetName={null}
          isReversed={false} // Adjust as needed
        />

        <div className={AppStyles.page_container}></div>
      </div>
    </RootLayout>
  );
}

function Logo() {
  return (
    <div
      className={`${LayoutStyles.LogoWrapper}`}
      style={{
        display: "flex",
        border: "3px solid white",
        paddingInline: "40px",
        marginTop: "20px",
        marginBottom: "40px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content",
        height: "fit-content",
        background: "none",
        color: "white",
        textShadow: "0 0 50px rgb(0, 25, 25, 0.85)",
        boxShadow: "0 0 50px rgb(0, 25, 25, 0.85)",
      }}
    >
      <div
        className={LayoutStyles.LogoTitleText}
        style={{
          fontSize: "82px",
        }}
      >
        URBAN THREADVERSE
      </div>
      <div
        className={LayoutStyles.LogoSubTitleText}
        style={{ fontSize: "24px", paddingBottom: "10px", color: "white" }}
      >
        THE OFFICIAL ONLINE STORE
      </div>
    </div>
  );
}
