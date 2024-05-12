import LayoutStyles from "./layout.module.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}

function Topbar() {
  return (
    <div className={LayoutStyles.TopbarWrapper}>
      <div className={LayoutStyles.LogoArea}>
        <Logo />
        <img
          src={require("../assets/SapLogoCut.png")}
          style={{ height: "var(--topbar-height)" }}
        />
      </div>
      <div className={LayoutStyles.TopbarContent}></div>
    </div>
  );
}

function Logo() {
  return (
    <div className={LayoutStyles.LogoWrapper}>
      <div className={LayoutStyles.LogoTitleText}>URBAN THREADVERSE</div>
      <div className={LayoutStyles.LogoSubTitleText}>
        THE OFFICIAL ONLINE STORE
      </div>
    </div>
  );
}
