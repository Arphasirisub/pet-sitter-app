import { useAuth } from "../../contexts/authentication";

function OwnerHomePage() {
  const { logout } = useAuth();
  return (
    <>
      <div>this is OwnerHomePage</div>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}
export default OwnerHomePage;
