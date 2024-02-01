import { useAuth } from "../../contexts/authentication";
import Navbar from "../../public-components/Navbar";

function OwnerHomePage() {
  const { logout } = useAuth();
  return (
    <>
      <Navbar />
      <div>this is OwnerHomePage</div>
    </>
  );
}
export default OwnerHomePage;
