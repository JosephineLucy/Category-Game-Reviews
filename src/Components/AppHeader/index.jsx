import HomeButton from "../HomeButton";
import SearchButton from "../SearchButton";
import SelectUserButton from "../SelectUserButton";

const AppHeader = ({ user }) => {
  return (
    <>
      <HomeButton />
      <div className="app-header--right">
        <SearchButton />
        <SelectUserButton user={user} />
      </div>
    </>
  );
};

export default AppHeader;
