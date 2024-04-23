import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";


const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
};

export default Login;
