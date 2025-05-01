// ini login component

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../assets/input";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const { login } = useContext(UserContext);

  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  // function buat nge handle login
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/user/login?email=${email}&password=${password}`
      );
      if (response.status !== 200) throw new Error("Login failed");
      console.log(response.data);
      login(response.data.payload);
      navigate("/", { state: { userData: response.data } });
      toast({
        title: "Logged in successfully!",
        description: "Have a great day!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response.data.message,
      });
      console.error(error);
    }
  };

  return (
    <div className=" bg-background h-screen w-screen overflow-hidden">
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <Card className="md:w-96 w-80 max-w-sm">
          <CardHeader>
            <CardTitle className="text-3xl">Login</CardTitle>
            <CardDescription>
              Enter your Email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2 pb-4">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2 pb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                onKeyDown={handleKeyDown}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="block text-center">
            <Button onClick={handleLogin} className="w-full mb-2">
              Sign in
            </Button>
            Dont have an account?{" "}
            <a href="/register" className="underline">
              Sign up
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
