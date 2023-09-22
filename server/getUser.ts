import { cookies } from "next/headers";

export async function getUser() {
  const cookiesStore = cookies();

  const token = cookiesStore.get("token");

  try {
    const response = await fetch(
      "http://localhost:5230/api/authentication/user-details",
      {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );
    const data = await response.json();

    return {
      user: data,
    };
  } catch (e) {
    return {
      user: null,
    };
  }
}
