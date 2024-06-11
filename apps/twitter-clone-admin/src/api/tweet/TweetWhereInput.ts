import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
