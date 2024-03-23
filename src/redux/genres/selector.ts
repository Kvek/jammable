import type { ReduxStateType } from "@redux/store";

export const selectGenresListState = ({
  genres: { list },
}: ReduxStateType): Array<{ key: string; title: string }> => list;
