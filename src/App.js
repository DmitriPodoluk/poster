import RootLayout from "./components/layout";

import AppStyles from "./App.module.css";
import LayoutStyles from "./components/layout.module.css";
import SlideStyles from "./components/Side.module.css";

import Slide from "./components/Slide";
import MoreOnHover from "./components/MoreOnHover";

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
                <MoreOnHover usual_jsx={"booming online appeal market"} />,
                where a colossal market share awaits—with{" "}
                <MoreOnHover
                  usual_jsx={
                    "projections hinting at a potential twofold surge in just seven years!"
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
                />
              </p>
              <h3>Start Your Journey</h3>
              <p>
                Join us to embark on a rewarding journey towards success in this
                electrifying market. We provide{" "}
                <MoreOnHover
                  usual_jsx={"the tools and support your need to excel."}
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
                <MoreOnHover usual_jsx={"without breaking the bank"} />. Our
                solution offers excellence that exceeds expectations, at a
                fraction of the usual cost.
              </p>
              <h3>Endless Customizability</h3>
              <p>
                Experience the ultimate in customization with
                <MoreOnHover usual_jsx={"tailored solutions"} />
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
