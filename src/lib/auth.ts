import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import type {NextAuthOptions} from "next-auth";
import {connectDB} from "@/lib/database";
import {User} from "@/models/user";
import {Task} from "@/models/task";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        await connectDB();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) return null;

        const compare = await user.comparePassword(credentials?.password);
        if (!compare) return null;

        return { id: user._id.toString(), name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await connectDB();

      const existingUser = await User.findOne({ email: user.email });
      if (!existingUser) {
        const newUser = new User({
          name: user.name,
          email: user.email,
          password: null,
          provider: account?.provider,
          tasks: [],
          stats: { total: 0, completed: 0, inProgress: 0, rate: 0 }
        });
        await newUser.save();
      }

      return true;
    },
    async session({ session }) {
      await connectDB();
      const user = await User.findOne({ email: session?.user?.email }).exec();
      const tasks = await Task.find({ _id: { $in: user.tasks } }).exec();

      if(session?.user && tasks && user) {
        session.user.tasks = JSON.parse(JSON.stringify(tasks));
        session.user.stats = JSON.parse(JSON.stringify(user.stats));
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
};
