import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"



export default NextAuth({
providers: [
    GithubProvider({ 
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  callbacks:{
    async session({session}){
      try {
        return {
          ...session
        }
      } catch (err) {
        return{             
          ...session
        }
      }
    },
    async signIn({user, account, profile}){
      const { email } = user;
      try{
        return true
      }catch(err){
        console.log("Deu erro", err)
        return false;
      }
    }
  }
})

