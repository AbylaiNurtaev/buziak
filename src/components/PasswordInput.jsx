import { useState } from "react";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 mt-[20px]">
      <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center justify-between">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Введите пароль"
          className="bg-transparent outline-none text-[16px] text-gray-700 w-full"
        />
        <img
          src={showPassword ? "/icons/Hide2.svg" : "/icons/Hide.svg"}
          alt="toggle visibility"
          className="w-5 h-5 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    </div>
  );
}
