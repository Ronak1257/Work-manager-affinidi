import { FC, useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { clientLogin } from "../lib/auth/client-login";
import { useAuthentication } from "src/lib/hooks/use-authentication";
import { useLocalContent } from "src/lib/hooks/use-local-content";
import LogoAffinidi from "public/logo-affinidi.svg";
import cartPng from "public/cart.png"

const NavBar: FC = () => {
  const [isSignInPage, setIsSignInPage] = useState(false);
  const [confirmLogOut, setConfirmLogOut] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuthentication();

  const { country } = useLocalContent();
  const logout = async() => {
    await signOut();
  };

  useEffect(() => {
    if (window.location.href.includes("/sign-in")) {
      setIsSignInPage(true);
    } else {
      setIsSignInPage(false);
    }
  }, []);

  useEffect(() => {
    if (confirmLogOut) {
      const timeoutId = setTimeout(() => {
        setConfirmLogOut(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [confirmLogOut]);

  const renderLoginState = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (isAuthenticated && user) {
      return (
        <div className="flex items-center">
          <span className="mr-2.5 text-black text-3xl italic font-bold pl-4">{user.firstName}</span>
          <Link href="/user">
            <img className=" object-cover rounded-3xl h-12 w-12 hover:shadow-sm hover:shadow-green-600" src={user.picture} alt="Profile" />
          </Link>
          <button className="py-1.5 px-6 border-black text-xl  rounded-xl border rounded-l-full bg-sky-400 mx-4 font-bold" onClick={logout}>Logout</button>
        </div>
      );
    }
    return (
      <button className="w-64 rounded-l-full m-2 text-lg font-bold  text-black bg-sky-400 border border-black " onClick={clientLogin}>
        <div className="flex justify-around items-center p-3">
          <Image className="" src={LogoAffinidi} alt="logo affinidi" />
          <p className="text-bold text-xl">Affinidi Login</p>
        </div>
      </button>
    )
  };
  return (
    <div>
      <header className="flex justify-between items-center py-2.5 px-5 bg-blue-600 border rounded-lg mx-8 my-2.5">
        <div>
          <Link href={"/"}>
            <h1 className=" flex m-0 text-2xl text-black pl-5 font-bold items-center">Work Manager</h1>
          </Link>
        </div>
        {isAuthenticated && 
        <div className="flex justify-center space-x-4 py-2">
          <Link className="px-4 py-2 border border-black rounded-lg bg-sky-500 font-bold hover:bg-gray-800 text-black hover:text-white transition-colors duration-300 shadow-md shadow-black" href={"/addtask"}>Add Task</Link>
          <Link className="px-4 py-2 border border-black rounded-lg bg-sky-500 font-bold hover:bg-gray-800 text-black hover:text-white transition-colors duration-300 shadow-md shadow-black" href={"/showtask"}>Show Task</Link>
      </div>}
        <div>
          <nav className="flex items-center">
            {renderLoginState()}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
