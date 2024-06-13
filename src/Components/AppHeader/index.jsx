import HomeButton from "../HomeButton";
import LoginButton from "../LoginButton";

const AppHeader = () => {
  return (
    <>
      <HomeButton />
      <div className="app-header__right-content-wrapper">
        <LoginButton />
      </div>
    </>
  );
};

export default AppHeader;
