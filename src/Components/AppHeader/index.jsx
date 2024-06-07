import HomeButton from "../HomeButton";
import SearchButton from "../SearchButton";
import SelectUserButton from "../SelectUserButton";

const AppHeader = () => {
  return (
    <>
      <HomeButton />
      <div className="app-header--right">
        <SearchButton />
        <SelectUserButton />
      </div>
    </>
  );
};

export default AppHeader;
