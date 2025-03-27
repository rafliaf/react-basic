import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// validator register
const registerFormSchema = z
  .object({
    username: z.string().min(3, { message: "Minimal 3 karakter" }).max(10, { message: "Maksimal 10 karakter" }),
    password: z
      .string()
      .min(8, { message: "Minimal 8 karakter" })
      .refine((value) => /[A-Z]/.test(value), { message: "Password harus mengandung setidaknya satu huruf kapital" })
      .refine((value) => /[-_=+[\]:'\\/~!@#$%^&*(),.?":{}|<>]/.test(value), { message: "Password harus mengandung setidaknya satu karakter spesial yang sah" }),
    repeatPassword: z.string().min(8, { message: "Minimal 8 karakter" }),
    age: z.coerce.number().min(18),
    dob: z.coerce.date().min(new Date()).optional(),
  })
  // validate repeat password
  .superRefine((data, ctx) => {
    if (data.password !== data.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Password tidak sama",
        path: ["repeatPassword"], // Ensure that this is the correct path
      });
    }
  });

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

const ReactHookFormPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleRegisterUser = (values: RegisterFormSchema) => {
    alert("form submitted");
    console.log(values);
  };

  // handle show password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1>React Hook Form page</h1>

      <form onSubmit={form.handleSubmit(handleRegisterUser)} style={{ display: "flex", flexDirection: "column", gap: "5px", maxWidth: "250px" }}>
        <h1>Form Tes</h1>
        <label>
          Username
          <input type="text" {...form.register("username")} id="username" />
        </label>
        <small style={{ color: "red" }}>{form.formState.errors.username?.message}</small>

        <label>
          Password
          <input type={showPassword ? "text" : "password"} {...form.register("password")} id="password" />
        </label>
        <small style={{ color: "red" }}>{form.formState.errors.password?.message}</small>

        {/* show password */}
        <label>
          Show password
          <input type="checkbox" onChange={(event) => setShowPassword(event.target.checked)} />
        </label>

        {/* repeat password */}
        <label>
          Repeat password
          <input type="password" {...form.register("repeatPassword")} />
        </label>
        <small style={{ color: "red" }}>{form.formState.errors.repeatPassword?.message}</small>

        <label>
          Age
          <input type="number" {...form.register("age")} />
        </label>
        <small style={{ color: "red" }}>{form.formState.errors.age?.message}</small>

        <label>
          Date of birth
          <input type="date" {...form.register("dob")} />
        </label>
        <small style={{ color: "red" }}>{form.formState.errors.dob?.message}</small>

        <button style={{ width: "fit-content" }}>Register user</button>
      </form>
    </div>
  );
};

export default ReactHookFormPage;
