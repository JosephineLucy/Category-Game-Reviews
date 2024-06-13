import HomeButton from "../HomeButton";
import SearchButton from "../SearchButton";
import LoginButton from "../LoginButton";

const AppHeader = () => {
  return (
    <>
      <HomeButton />
      <div className="app-header--right">
        <SearchButton />
        <LoginButton />
      </div>
    </>
  );
};

export default AppHeader;
