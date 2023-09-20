export async function useLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await fetch(
    "http://localhost:5230/api/authentication/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  );

  const data = await response.json();

  return {
    token: data.token as string,
    errors: data.errors as [string],
  };
}
