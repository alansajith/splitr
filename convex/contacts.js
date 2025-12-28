import { query } from "./_generated/server";
import { internal } from "./_generated/api";

export const getAllContacts = query({
  handler: async (ctx) => {
    const current_user = await ctx.runQuery(internal.users.getCurrentUser);
    if(!current_user){
      throw new Error("not authenticated")
    }
  },
});
