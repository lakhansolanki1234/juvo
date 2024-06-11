import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  firstName?: string | null;
  joinDate?: Date | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  username: string;
};
