import Cookies from "js-cookie";

export default async function useUser() {
  const token = Cookies.get("token");

  try {
    const response = await fetch(
      "http://localhost:5230/api/authentication/user-details",
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
