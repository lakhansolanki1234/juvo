import { Like } from "../like/Like";
import { User } from "../user/User";

export type Tweet = {
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
