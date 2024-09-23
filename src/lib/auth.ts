import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

export const requireAuthentication = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "auth/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};