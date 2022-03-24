import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
  return (
    <form method="post" onSubmit={() => signIn("credentials", {
        redirect: false, 
        email: "test",
        password: "test",
      })
      .then((error) => console.log(error))
      .catch((error) => console.log(error))} >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await getCsrfToken(context)
  }
}
*/


// import { providers, signIn, getSession, csrfToken } from "next-auth/client";

// function signin({ providers }) {
//   return (
//     <div>
//       {Object.values(providers).map((provider) => {
//         return (
//           <div key={provider.name}>
//             <button onClick={() => signIn(provider.id)}>
//               Sign in with {provider.name}
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default signin;

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       providers: await providers(context),
//       csrfToken: await csrfToken(context),
//     },
//   };
// }

// export async function getServerSideProps(context) {
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context),
//       },
//     }
//   }